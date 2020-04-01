import React, { useState } from 'react';

function User(props){
    const [clicked, setClicked] = useState(false);

    let date = props.info.data_nasc;
    date = date.split('-')
    date = `${date[2]}/${date[1]}/${date[0]}`;

    function handleClick() {
        setClicked(!clicked);
    }
    return(
        <div>
            {clicked === false ?
                <div className="jumbotron" onClick={handleClick}> 
                    <h3>{props.info.nome}</h3>
                    <h4>{props.info.cpf}</h4>
                </div> :
                <div className="jumbotron" onClick={handleClick}> 
                    <h3>{props.info.nome}</h3>
                    <h4>{props.info.cpf}</h4>
                    <h5>{date}</h5>
                    <h5>{props.info.profissao}</h5>
                </div>
            }
            
        </div>    
        
    );
}

export default User;