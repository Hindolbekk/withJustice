import React, { useEffect, useState } from 'react'
import "./Users.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/joy';
import { Button } from '@mui/material';
function Users() {
    let navigate = useNavigate();
    let url = 'https://589a-86-62-2-178.ngrok-free.app/account/api/allusers/';
    const [data, setData] = useState([]);
    const helpsData = data.Helps;
    // const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((result) => {
                setData(result.data);
                console.log(result.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="bgUser">
            <div className='input_button_cover'>
                <input className='bg_user_input' type="text" />
                <Button>Search</Button>
            </div>
            <div className='Users'>
                {
                    Array.isArray(data) && data.map(item => {
                        return (
                            <div className='Hero' key={item.id}>
                                <div className="heroInfo">
                                    <h1>Full Name: {item.name} {item.surname}</h1>
                                    <h2>BirthDay: {item.birth}</h2>
                                    <h3>Yordamlari</h3>
                                    <h4>
                                        {item.helps && item.helps.map(help => (
                                            <>
                                                <span key={help.id}>{help.title}</span>
                                                <span key={help.id}>{help.description}</span>
                                            </>
                                        ))}
                                    </h4>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Users