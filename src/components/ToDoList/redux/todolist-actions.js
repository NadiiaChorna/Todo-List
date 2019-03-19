export const types = {
	CHANGE_FILTER : 'CHANGE_FILTER',
	TASKS_FROM_SERVER: 'TASKS_FROM_SERVER',
	PUT_TASKS: 'PUT_TASKS',
	CLEAR_COMPLETED: 'CLEAR_COMPLETED',
	DELETE_TASK: 'DELETE_TASK',
	TASK_STATUS: 'TASK_STATUS',
	CHANGE_TITLE: 'CHANGE_TITLE'
}

export const putTasksActionCreater = (tasks) => {
	return {
		type: types.TASKS_FROM_SERVER,
		tasks: tasks
	}
}

export const clearComplitedCreator = () => {
	return {
		type: types.CLEAR_COMPLETED
	}
}

export const changeFilterCreater = (filter) => {
	return {
		type: types.CHANGE_FILTER,
		filter: filter
	}
}


export const putTasksCreater = (task) => {
	return {
		type: types.PUT_TASKS,
		task: task
	}
}

export const deleteTaskCreator = (taskId) => {
	return {
		type: types.DELETE_TASK,
		id: taskId
	}
}

export const togleTaskStatusCreator = ({id, isDone}) => {
	return {
		type: types.TASK_STATUS,
		id: id,
		isDone: isDone
	}
}

export const changeTitleCreator = ({id, title}) => {
	return {
		type: types.CHANGE_TITLE,
		id: id,
		title: title
	}
}

