import React, {useState} from 'react';
import './Login.css';

import api from '../services/api';
import logo from '../asserts/logo.svg'



export default function Login({ history }){

   // const [username, setUsername] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        // const response = await api.post('/devs',{username})
        // const {id} = response.data;

        // history.push( `/dev/${id}`);
        history.push('/main')
    }

    return(
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" id="logo"/>
                <input 
                    id="inputUsuario"
                    placeholder="Digite seu usuário do GitHub"  
                  //  value={username}
                   // onChange={e=> setUserName(e.target.value)}  
                />
                <button type="submit" class="botao" id="botaoEntrar">Enviar</button>
            </form>
           
        </div>
    );
}

