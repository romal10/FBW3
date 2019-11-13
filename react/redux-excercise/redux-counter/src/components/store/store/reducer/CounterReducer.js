const initialState = {
    counter :0

}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CTR_INCREMENT':
        return {
            ...state, 
            counter: state.counter + 1
        }
        case 'CTR_DECREMENT':
        return {
            ...state, 
            counter: state.counter - 1
        }
    }

}

export default CounterReducer 