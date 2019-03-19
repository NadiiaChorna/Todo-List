import React, {Component} from 'react';

class TodoListFooter extends Component {

	changeFilter = (e) => {
		this.props.changeFilter(e.currentTarget.dataset.value);
		console.log(e.currentTarget.dataset.value);
	};

	render() {
		var {tasks, filter, changeFilter} = this.props;
		return (
			<div className="todolist-footer">
				<div>
					<span>{tasks.filter((t)=>{
						return !t.isDone;
					}).length} items left</span>
				</div>
				<div className="buttons">
					<button 
					className={filter==='all'?'selected':''}
					data-value="all" 
					onClick={this.changeFilter}
					>All</button>
					<button 
					className={filter==='active'?'selected':''}
					data-value="active" 
					onClick={this.changeFilter}
					>Active</button>
					<button
					className={filter==='completed'?'selected':''} 
					data-value="completed" 
					onClick={this.changeFilter}
					>Complited</button>
				</div>
				<div 
				onClick={this.props.clearComplited}
				>Clear completed</div>
			</div>
			)
	}
}

export default TodoListFooter