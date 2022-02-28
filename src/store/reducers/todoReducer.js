
const initialState = {
    todos: [],
    loading: true,
    success: false
}

export const todoReducer = (state = initialState,action) => {
    console.log(action)

    if(action?.type == 'fetch_todo_success'){
        return {todo: action.payload,loading:action.loading,success:action.success, message: ''}
    }else if(action?.type == 'todos_fetch'){
        return {todo:[], loading:action.loading, success:action.success, message:'Идет обработка тодо листа'}
    }else if(action?.type == 'fetch_todo_error'){
        return {message: action.payload,loading:false,success:false}
    }else {
        return state;
    }
    // return 'todo reducer'
}