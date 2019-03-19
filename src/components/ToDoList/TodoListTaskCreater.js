import React, {Component} from 'react';
//import {createTask} from './Services';


class TodoListTaskCreater extends Component {
	constructor(props){
		super(props);
		this.newId = 3;
	}
	createNewTask = (e) => {	
		if(e.key === "Enter") {
			const newTask = {
			title: e.currentTarget.value, 
			isDone: false, 
			id: this.newId++
		};	
			this.props.createNewTask(newTask);	
			e.currentTarget.value = '';
		};
		
		
	};

	render() {
		return (
			<div className="header">
				<input className="input" type="text" onKeyPress={this.createNewTask} /> 
			</div>
			)
	}

}

export default TodoListTaskCreater