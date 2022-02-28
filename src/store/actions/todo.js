
export const fetchTodos = async(dispatch) => {
    try {
        dispatch({type: 'todos_fetch',success:false,loading:true})
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => res)
        if(data && data.length > 0){
            dispatch({type: 'fetch_todo_success',payload: data, success:true,loading:false})
        }
    } catch (error) {
        
    }
}