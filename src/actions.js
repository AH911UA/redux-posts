export const addPost = (text, id, date) => ({ type: 'ADD', id: id, value: text, date: date });
export const delPost = (id) => ({ type: 'DEL', id: id });