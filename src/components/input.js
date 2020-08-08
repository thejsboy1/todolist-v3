import React, { Component } from 'react'
import {connect} from 'react-redux';

class input extends Component {
    render() {
        return (
            <div className="searchbar">
                <input 
                    type="text" 
                    value = {this.props.input} 
                    onChange={(e)=>{this.props.handleChange(e.target)}}
                    placeholder="Add todo"
                />
                <button 
                    onClick={()=>{this.props.add(this.props.input)}}
                >Add</button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleChange:(target)=>{
            dispatch({type:'SET_INPUT',value:target.value})
        },
        add:(input)=>{
            let object={}
            let inputValue=input
            let id=Math.floor(Math.random()*1000)
            object={inputValue,id}
            dispatch({type:'ADD_INPUT',value:object})
            dispatch({type:'SET_INPUT',value:''})
        } 
    }
}
const mapStateToProps=(state)=>{
    return{
        input:state.input
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(input);