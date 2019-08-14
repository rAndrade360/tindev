import React, {useEffect, useState} from 'react';
import api from '../services/api'
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import logo from '../assets/logo.svg'
import './Main.css'

export default function Main({ match}){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadUsers(){
                const response = await api.get('/devs', {
                    headers: {
                    user: match.params.id,
                }
                })
                setUsers(response.data);
        };

        loadUsers();
    }, [match.params.id]);//Toda vez que o id da url for alterdo, executa a função

    return (
        

        <div className="main-container">
            <img src={logo} alt="Logo" />
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                    <img src={user.avatar} alt={user.name}/>

                    <footer>
                        <strong>{user.name}</strong>
                        <p>{user.bio}</p>
                    </footer>

                    <div className="figures">
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                    </div>
                </li>

                ))}                
               
            </ul>
        </div>
    )
}