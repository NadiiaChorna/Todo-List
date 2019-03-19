import {types} from './todolist-actions'

const initialState = {
	tasks: [],
	filter: 'all'
}

export function todolistReduser(oldState = initialState, action) {
	switch (action.type) {
		case types.TASKS_FROM_SERVER:
			return {
				...oldState,
				tasks: [...oldState.tasks, {
					id: action.id,
					title: action.title,
					isDone: action.isDone
				}]
			}

		case types.CLEAR_COMPLETED:
		{
			var newState = {...oldState};
				newState.tasks = newState.tasks.filter(t=>!t.isDone);
			return newState;
		}

		case types.CHANGE_FILTER:
			return {
				...oldState,
				filter: action.filter
			}

		case types.PUT_TASKS:
			return {
				...oldState,
				tasks: [...oldState.tasks, action.task]
			}

		case types.DELETE_TASK:
		{
			var newState = {...oldState};
			newState.tasks = newState.tasks.filter(t=>t.id !== action.id);
			return newState;
		}

		case types.TASK_STATUS:
		{
			var newState = {...oldState};
			newState.tasks = {...newState.tasks};
			newState.tasks.forEach((task, i)=>{
				if(task.id === action.id){
					newState.tasks[i] = {
						...task,
						isDone: action.isDone

					}
					task.isDone = action.isDone;
					}
				});
			return newState;
		}
		case types.CHANGE_TITLE:
		{
			var newState = {...oldState};
			newState.tasks = {...newState.tasks};

			newState.tasks.forEach((task,i)=>{
				if(task.id === action.id){
					newState.tasks[i] = {
						...task,
						title: action.title
					}
					}
				});
			return newState;
		}
		default: 
			if(!!oldState){return oldState}
			else{return {
				tasks: [],
				filter: 'active'
			}}
				
	}
}