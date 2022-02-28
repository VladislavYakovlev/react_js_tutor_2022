import { Button, Checkbox, List, Col, Input, Spin } from 'antd';
import React, {Component, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useMyHookTest } from '../../hooks/useMyHookTest';
import { store } from '../../store';
import { fetchTodos } from '../../store/actions/todo';

import classes from './Todo.module.css'
export const Todo = () =>  {


    const [todoList,setTodoList] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [perPage,setPerPage] = useState(10)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodos)
    },[dispatch])

    
    const handelerTodoChecked = (todoID) =>{
        let todo = JSON.parse(JSON.stringify(this.state.todoList))

        todo = todo.filter((item)=>{
            if(item.id == todoID){
                item.completed = !item.completed
            }
            return item;
        })
        setTodoList(todo)
    }

    const handlerDeleteTodo = (todoID) => {
        let todo = JSON.parse(JSON.stringify(this.state.todoList))

        todo = todo.filter((item)=>{
            if(item.id != todoID) return item;
            
        })
        setTodoList(todo)
    }

    const handlerAddToTodo =(e) => {
        console.log(e)
        let defVariable = [{id: Math.random(), title:e.target.value, completed: false}]
        const data = [...todoList, ...defVariable]
        setTodoList(data)
    }
        const customStyle = {
            buttonBack: {
                background: 'red',
                backgroundColor: 'red'
            },

        }
        
        const todos = useSelector(state => state.todos)
        console.log('todos',todos)
        if(todos?.loading){
            // dispatch(fetchTodos)
            return <Spin>12</Spin>
        }else{
            return(
            <>
                {/* <Home /> */}
                <Col span={8} style={{margin: '0 auto'}}>
                    <h3>My todo list</h3>
                    <List>
                        <Input placeholder='Добавить todo в список' onPressEnter={(e) => this.handlerAddToTodo(e)}/>
                        {todos.todo.map((item,index)=>{
                            return(
                                    
                                    <List.Item key={index} style={{listStyle: 'decimal', textDecoration : item.completed ? 'line-through' : 'none'}} >
                                        <Checkbox onChange={() => handelerTodoChecked(item.id) } checked={item.completed ? true : false }/>
                                        {item.title}
                                        <Button className={classes.button} onClick={()=> handlerDeleteTodo(item.id) } >Удалить</Button>
                                    </List.Item>
                            )
                        })}
                    </List>
                </Col>
            </>
        )
    }
}


const Home = () =>{

    const [count,setCount] = useState(0)

    const text = useMyHookTest(123)
    useEffect(()=>{
        console.log('did mount ')

        return;
    },[])

    // useContext();
    // useMemo()
    const inputRef = useRef()

    const handeIncrementCount = ()=>{
        setCount(count+1);
    }
    return(
        <>
            <p>Home component {text}</p>
            <input type="text" placeholder='enter value' ref={inputRef} onKeyUp={()=>console.log(inputRef.current.value)}/>
            <input type="button" value={'++'} onClick={()=>handeIncrementCount()}/>
        </>
    )
}