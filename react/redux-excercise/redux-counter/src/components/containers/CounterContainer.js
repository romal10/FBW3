import React, { Component } from 'react';
import {connect } from 'react-redux';
import Counter from '../Counter';
import CounterOutput from '../CounterOutput'

export class CounterContainer extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <Counter label = "Increment" clicked = {this.props.onIncrement}/>
                <Counter label = "Decrement" clicked = {this.props.onDecrement}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
return {
    ctr: state.counter.Counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => { dispatch ({ type: 'CTR_INCREMENT' }) },
        onDecrement: () => { dispatch ({ type: 'CTR_DECREMENT' }) }
    }

}

export default connect (mapStateToProps, mapDispatchToProps)(CounterContainer)