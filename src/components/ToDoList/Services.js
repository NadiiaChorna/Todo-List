const headers = {
	'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
	'accept': 'application/json' 
};

const url = "https://repetitora.net/api/JS/Tasks";
const corseMode = 'cors';

function requestData(url, type, body) {
	return fetch(url, 
		{
			method: type,
			body: body,
			headers: headers,
			mode: corseMode
		})
	.then(result => result.json());
}


export function createTask(title, widgetId) {
	const data = new URLSearchParams();
	data.append('widgetId', widgetId);
	data.append('title', title);
	

	return requestData(url, 'POST', data);
};

export function getTask(widgetId){
	return requestData(`${url}?widgetId=${widgetId}`, 'GET', null);
}

export function updateTask(widgetId, taskId, title, isDone) {
	const data = new URLSearchParams();
	data.append('widgetId', widgetId);
	data.append('taskId', taskId);
	data.append('title', title);
	data.append('done', isDone);

	return requestData(url, 'PUT', data);
}