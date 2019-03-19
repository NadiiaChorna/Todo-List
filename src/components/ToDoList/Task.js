import React, {Component} from 'react';
// import {updateTask} from './Services.js'

class Task extends Component {
	constructor(props){
		super(props);
		this.state ={
			changeTitle: false,
			value: this.props.task.title
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
		const {isDone, id} = this.props.task;

		if(e.key === "Enter"){
			const changedTask = {
			title: this.state.value, 
			isDone: isDone, 
			id: id
			}
			console.log(changedTask);
			this.props.addChangedTitle(changedTask);
		};
		this.setState({
			changeTitle: !this.state.changeTitle
		})			
	};

	deleteTask = (e) => {
		this.props.deleteTask(this.props.task.id);
	};

	toggleTaskStatus = (e) => {
		var task = {...this.props.task};
		task.isDone = !task.isDone;
		this.props.toggleTaskStatus(task);
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
				<input type="checkbox" className="checkbox" onClick={this.toggleTaskStatus} />
				{titleOnChange}
				<span className="delete" onClick={this.deleteTask}>x</span>
			</div>
		);
	}
}

export default Task