import React, { Component } from 'react'
import {connect} from 'react-redux';

class Main extends Component {
    state = { }
    render() {
        return (
            <div>
                {this.props.todo.filter((e)=>!this.props.checkboxvalue.includes(e.id)).map(el=>
                    <div  key={el.id} className="result">
                        <input 
                            type="checkbox"
                            onClick={()=>{this.props.checkbox(el.id)}} 
                            checked={false}
                        ></input>
                        {el.inputValue}
                    </div>
                )}
                {this.props.checkboxvalue.length>0?<div className="searchbar">Completed List</div>:null} 

                {this.props.todo.filter((e)=>this.props.checkboxvalue.includes(e.id)).map(els=>
                    <div  key={els.id}  className="result"> 
                        <input 
                            type="checkbox"
                            onClick={()=>{this.props.checkbox(els.id)}} 
                            checked={true}
                        ></input> 
                    {els.inputValue}</div>) 
                }



                {this.props.checkboxvalue.length>0?
                    <div className="searchbar"><button 
                    onClick={()=>{this.props.remove(this.props.checkboxvalue)}}
                    >Delete Completed List</button></div>
                :null}  
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{

    return{
       remove:(value)=>{
           dispatch({type:'REMOVE_INPUT',value:value})
           dispatch({type:'DELETE_FINISHTASK'})
       },
       checkbox:(id)=>{ 
            dispatch({type:'ADD_FINISHTASK',id:id})
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        todo:state.main,
       
        checkboxvalue:state.finishTask
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Main);