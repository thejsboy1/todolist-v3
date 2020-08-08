const mainReducer = (state=[],action) =>{ 
    if(action.type==='ADD_INPUT' && action.value.inputValue!==""){ 
        return state=[...state,action.value]
    }
    if(action.type==='REMOVE_INPUT'){ 
        return state.filter(el=>!action.value.includes(el.id)) 
    }
    return state;
}

export default mainReducer;