import React, {Component} from 'react';
import Task from './Task'

class TasksList extends Component {

	render() {
		return (
			<div className="tasks">
				{this.props.tasks.map((task,i)=> { 
					return <Task task={task} 
					deleteTask={this.props.deleteTask} 
					toggleTaskStatus={this.props.toggleTaskStatus}
					addChangedTitle={this.props.addChangedTitle}
					key={task.id}/> 
					})
			}
			</div>
		)
	}
}

export default TasksList

