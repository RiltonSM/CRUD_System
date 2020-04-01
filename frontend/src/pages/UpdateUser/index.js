import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import api from '../../api/axios';

function UpdateUser(props){
    const user =JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    const [nome, setNome] = useState(user.nome);
    const [cpf, setCpf] = useState(user.cpf);
    const [dataNasc, setDataNasc] = useState(user.data_nasc);
    const [profissao, setProfissao] = useState(user.profissao);
    const [genero, setGenero] = useState(user.genero);

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            nome,
            cpf,
            dataNasc,
            profissao,
            genero
        }

        await api.put('/update', data);
        localStorage.removeItem('user');
        history.push('/');
    }

    return(
        <div>
            <div>
                <h1 style={props.visibility ? {color: "#ffffff"} : {color: "#404040"}}>Edição de dados cadastrais</h1>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input name="nome" className="form-control" type="text" value={nome} onChange = {e => setNome(e.target.value)}/>
                        <label htmlFor="CPF">CPF:</label>
                        <input name="CPF" className="form-control" type="text" value={cpf} disabled/>
                        <label htmlFor="data_nasc">Data de nascimento:</label>
                        <input name="data_nasc" className="form-control" type="date" value={dataNasc} disabled/>
                        <label htmlFor="profissao">Profissão:</label>
                        <input name="profissao" className="form-control" type="text" value={profissao} onChange = {e => setProfissao(e.target.value)}/>
                        <label htmlFor="genero">Gênero</label>
                        <select name="genero" className="form-control" value={genero} onChange={e => setGenero(e.target.value)}>
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
    );
}

export default UpdateUser;