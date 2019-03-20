import React, {Component} from 'react';
import {createTask} from './Services';


class TodoListTaskCreater extends Component {
	constructor(props){
		super(props);
		this.newId = 3;
	}

	createNewTask = (e) => {	
		if(e.key === "Enter") {
			const newTaskInput = e.currentTarget;	
			
			createTask(newTaskInput.value, 77777)
				.then(data => {
					var newTask = {
						id: data.task.id,
						title: data.task.title,
						isDone: data.task.done
					};
					this.props.createNewTask(newTask);
					newTaskInput.value = '';
				});
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