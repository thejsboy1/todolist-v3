const finishTaskReducer = (state=[],action) =>{ 
    if(action.type==='ADD_FINISHTASK'){ 
        if(state.includes(action.id)){ 
            return state.filter(el=>el!==action.id) 
           
        }else{ 
             return state=[...state,action.id]; 
        } 
    }
    if(action.type==='DELETE_FINISHTASK'){  
        return state=[] 
    }  
    return state;
} 
export default finishTaskReducer;