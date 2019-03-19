import React, {Component} from 'react';
import TodoListTaskCreater from './TodoListTaskCreater';
import TasksList from './TasksList';
import TodoListFooter from './TodoListFooter';

// import {getTask} from './Services'


class ToDoList extends Component {
	constructor() {
		super();

		this.state = {
			tasks: [
			{
				
				title: 'learn js',
				isDone: false,
				id: 1
			},
			{
				
				title: 'learn react',
				isDone: false,
				id: 2
			}
			],
			filter: 'all'
		};


	}

	createNewTask = (newTask) => {
		this.setState ({
			tasks: [...this.state.tasks, newTask]
		});
	};

	addChangedTitle = (changedTask) => {
		const newTaskList = [...this.state.tasks];
		newTaskList.forEach((task)=>{
				if (task.id === changedTask.id){
					task.title = changedTask.title;
					return
				}
			});
		this.setState ({
			tasks: newTaskList
		});

		console.log(this.state.tasks);
	};

	deleteTask = (taskId) => {
		this.setState ({
			tasks: this.state.tasks.filter((t)=>{
				return t.id !== taskId;
			})
		});
	};

	toggleTaskStatus = (task) => {
		const newTaskList = [...this.state.tasks];
		newTaskList.forEach((t)=>{
				if (t.id === task.id){
					t.isDone = task.isDone;
					return
				}
			});
		this.setState ({
			tasks: newTaskList
		});
	};

	changeFilter = (filterValue) => {
		this.setState({
			filter: filterValue
		})
		console.log(this.state.filter);
	};

	clearComplited = () => {
		this.setState({
			tasks: this.state.tasks.filter((t)=>{return !t.isDone})
		})
	};

	render() {
		const {tasks, filter} = this.state;
		var filterTasks = [];
		if(filter==='all')filterTasks = tasks;
		if(filter==='active')filterTasks = tasks.filter((task)=>{return !task.isDone});
		if(filter==='completed')filterTasks = tasks.filter((task)=>{return task.isDone});
		
		return (
			<div className='todolist'>
				<TodoListTaskCreater tasks={tasks} createNewTask={this.createNewTask}/>
				<TasksList 
				tasks={filterTasks} 
				addChangedTitle={this.addChangedTitle}
				deleteTask={this.deleteTask}
				toggleTaskStatus={this.toggleTaskStatus}/>
				<TodoListFooter tasks={tasks}
				changeFilter={this.changeFilter}
				clearComplited={this.clearComplited} />
			</div>
		);
	}
}

export default ToDoList
