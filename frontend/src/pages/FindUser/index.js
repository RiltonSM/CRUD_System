import React, {useState, useEffect } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import User from '../../components/User';

import api from '../../api/axios';

import './styles.css';

function FindUser(props){
    const [resp, setResp] = useState([]);
    const history = useHistory();
    let remove = false;

    useEffect(() => {
        api.get('/find').then(response => {
            setResp(response.data)
        });

    }, [remove]);
    
    function handleEdit(user){
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/update');
    }

    async function handleRemove(id){
        console.log(id);
        try{
            const response = await api.delete(`/delete/${id}`)
            
            setResp(resp.filter(user => user.id !== id))
        } catch (err) {
            console.log(err)
        }
        

    }

    return(
        <div>
            <div className="div-center">
                <h1 style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}}>Usuários</h1>
            </div>

            <div className="div-center">
                <div className="container">
                {
                    resp.map(element => {
                        return (
                            <div className="users" key={element.id}>
                                <User info={element}/>
                                <div style={{display: 'block'}}>
                                    <div className="icons"><FiEdit onClick={() => handleEdit(element)} size={20} color="green"/></div>
                                    <div className="icons"><FiTrash2 onClick={() => handleRemove(element.id)} size={20} color="red"/></div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>

        </div>
    );
}

export default FindUser;