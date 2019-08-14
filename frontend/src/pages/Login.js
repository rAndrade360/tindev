import React, {useState} from 'react';
import logo from '../assets/logo.svg'
import api from '../services/api';
import './Login.css';


export default function Login({history}){
    const [username, setUsername] = useState('');

   async function handeSubmit(e){
        e.preventDefault();//Impede que a página redirecione

       // console.log(username);
        const response = await api.post('/devs', {
            username,
        });
        const {_id} = response.data;
        console.log(response);
        history.push(`/dev/${_id}`); //Faz o redirecionamento
    }

    return (
        <div className="login-container">
             <form onSubmit={handeSubmit}>
                <img src={logo} alt='Logo Tindev'/>
                <input placeholder="Digite seu usuário no GitHub"
                value={username}
                 onChange = {e => setUsername(e.target.value)}/>
                <button type="submit">Enviar</button>
             </form>
        </div>  
    );
}