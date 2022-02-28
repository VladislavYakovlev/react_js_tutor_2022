import { Button, Menu, Space, Typography } from 'antd'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import React, {Component, useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { authGoogle } from '../../store/actions/user';
import { signInWithPopup } from 'firebase/auth'
import Avatar from 'antd/lib/avatar/avatar';

export const Navbar = ({children}) => {
    // state = {
    //     nav:[
    //         {name:'Главная',path:'/'},
    //         {name:'Todo List',path:'/todo'},
    //         {name:'Пользователи',path:'/users'},
    //         {name:'Аккаунт',path:'/account'},
    //     ]
    // }
    const [nav,setNav] = useState([
            {name:'Главная',path:'/'},
            {name:'Todo List',path:'/todo'},
            {name:'Пользователи',path:'/users'},
            {name:'Аккаунт',path:'/account'},
    ])
    const {user} = useSelector(state=> state.user)
    const dispatch = useDispatch()

    console.log('user',user)
    const loginGoogle = () => {
        dispatch(authGoogle);
    }
    // LoginGoogle()
        return(
            <>
                <Menu mode='horizontal'>
                    {nav.map(({name,path},index)=>{
                        return (
                            <Menu.Item key={index}>
                                <Link to={path}>{name}</Link>
                            </Menu.Item>
                        )
                    })}
                    <Menu.Item>
                        <Space align='end' size={20}>
                            {user?.displayName ? 
                                <>
                                    <Avatar src={user.photoURL}></Avatar>
                                    <Typography.Text>{user.displayName}</Typography.Text>
                                </>
                                : <Button onClick={()=> loginGoogle()}>Loggin</Button>
                            }
                            
                        </Space>
                        </Menu.Item>
                    
                </Menu>
                
                {children}
            </>
        )
}