export default function reducer(store = {
    counter: 0,
    posts: []
}, action) {

    switch (action.type) {
        
        case 'ADD':
            return {
                ...store, counter: store.counter + 1, posts: [...store.posts, {
                    id: action.id,
                    text: action.value,
                    date: action.date
                }]
            };
        
        case 'DEL':
            console.log("REDUCER : ", action.id);
            return {
                ...store, counter: store.counter - 1, posts: store.posts.filter(p => p.id !== action.id)
            };
        default:
            return store;
    }
}