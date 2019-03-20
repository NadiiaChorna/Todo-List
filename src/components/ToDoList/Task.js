import React, {Component} from 'react';
import {updateTask} from './Services.js'

class Task extends Component {
	constructor(props){
		super(props);
		this.state ={
			changeTitle: false,
			value: props.task.title
		}
	}

	changeTaskTitle = (e) => {
		this.setState({
			changeTitle: !this.state.changeTitle
		})
	};

	createNewTaskTitle = (e) => {
		this.setState({
			value: e.currentTarget.value
		})
	};
	
	addChangedTitle = (e) => {
		const newTitle = this.state.value;
		var task = {...this.props.task};
		task.title = newTitle;

		if(e.key === "Enter"){
			updateTask(77777, task.id, newTitle, null)
			.then(data => {
				this.setState({
				changeTitle: !this.state.changeTitle
				});
				this.props.addChangedTitle(task);
			});				
			console.log(task.title);	
		};			
	};

	deleteTask = (e) => {
		this.props.deleteTask(this.props.task.id);
	};

	toggleTaskStatus = (e) => {
		var task = {...this.props.task};
		task.isDone = !task.isDone;
		updateTask(77777, task.id, null, task.isDone)
			.then(data => {
				this.props.toggleTaskStatus(task);
		});	
	};

	render() {
		var {title, isDone} = this.props.task;

		var titleOnChange = this.state.changeTitle?<input  
		onKeyPress={this.addChangedTitle}
		onChange={this.createNewTaskTitle} 
		value={this.state.value}/>:<span 
		onClick={this.changeTaskTitle}>{title}</span>;
		return (
			<div className={isDone?'task done':'task'}>
				<input type="checkbox" checked={isDone} className="checkbox" onClick={this.toggleTaskStatus} />
				{titleOnChange}
				<span className="delete" onClick={this.deleteTask}>x</span>
			</div>
		);
	}
}

export default Task