import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map(
         (counters, i ) => (
              <Counter 
                    key={i}
                    index={i}
                    {...counters.toJS()}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onSetColor={onSetColor}
              />
         )
    )

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
//     counters: PropTypes.arrayOf(PropTypes.shape({
//         color: PropTypes.string,
//         number: PropTypes.number
//     })),
     counters : PropTypes.instanceOf(List),
     onIncrement: PropTypes.func,
     onDecrement: PropTypes.func,
     onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;