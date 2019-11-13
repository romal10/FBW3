
// Redux has see below, they have to be used somehow in your app
//  - store 
//  - reducer 
//  -  action
function counter (state=1, action){
    switch(action.type) {
        case 'INCREMENT':
        return state + 2;
        case 'DECREMENT':
        return state -2;
        default:
        return state;
    }

}

// store
// store API, in Store your can use three functions, i)Subscribe, ii)dispatch, iii)getState

let store = Redux.createStore (counter); //Expose store with registered counter 

// Subscribe
function printState(){
    console.log(store.getState());
}

store.subscribe(printState);

// actions
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})

store.dispatch({type:'DECREMENT'})
store.dispatch({type:'DECREMENT'})