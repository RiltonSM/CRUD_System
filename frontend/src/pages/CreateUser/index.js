import React, { useState } from 'react';

import api from '../../api/axios';

import './styles.css';


function CreateUser(props){
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [profissao, setProfissao] = useState('');
    const [genero, setGenero] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            nome, 
            cpf,
            'data_nasc': dataNasc, 
            profissao, 
            genero
        }
        console.log(data);
        api.post('/create', data);

    }
    return(
        <div className="div-center">
            <div style={{display: 'block'}}>
                <h1 style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}}>Cadastro de Usuários</h1>

                <div>
                    <form>
                        <div className="form-group">
                            <label style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}} htmlFor="nome">Nome:</label>
                            <input style={props.visibility ? {borderColor: '#ffffff', backgroundColor: '#404040', color: "#ffffff"} : {color: "#404040"}} name="nome" className="form-control" type="text" value={nome} onChange = {e => setNome(e.target.value)}/>
                            <label style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}} htmlFor="CPF">CPF:</label>
                            <input style={props.visibility ? {borderColor: '#ffffff', backgroundColor: '#404040', color: "#ffffff"} : {color: "#404040"}} name="CPF" className="form-control" type="text" value={cpf} onChange = {e => setCpf(e.target.value)}/>
                            <label style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}} htmlFor="data_nasc">Data de nascimento:</label>
                            <input style={props.visibility ? {borderColor: '#ffffff', backgroundColor: '#404040', color: "#ffffff"} : {color: "#404040"}} name="data_nasc" className="form-control" type="date" value={dataNasc} onChange = {e => setDataNasc(e.target.value)}/>
                            <label style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}} htmlFor="profissao">Profissão:</label>
                            <input style={props.visibility ? {borderColor: '#ffffff', backgroundColor: '#404040', color: "#ffffff"} : {color: "#404040"}} name="profissao" className="form-control" type="text" value={profissao} onChange = {e => setProfissao(e.target.value)}/>
                            <label style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}} htmlFor="genero">Gênero</label>
                            <select style={props.visibility ? {borderColor: '#ffffff', backgroundColor: '#404040', color: "#ffffff"} : {color: "#404040"}} name="genero" className="form-control" value={genero} onChange={e => setGenero(e.target.value)}>
                                <option>Selecione uma opção</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </select>
                        </div>
                        
                        <div className="btn-center">
                        <button className="btn btn-primary" type='submit' onClick={e => handleSubmit(e)}>Confirmar</button>
                        </div>    
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;