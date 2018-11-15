import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => {
     return (
          <div
               className="Counter"
               onClick={ () => onIncrement(index)}
               onContextMenu={
                    // 우클릭을 하여 메뉴가 열리는 이벤트를 의미
                    (e) => {
                         e.preventDefault();
                         onDecrement(index);
                    }
               }
               onDoubleClick={() => onSetColor(index)}
               style ={{backgroundColor : color}}
          >
               {number}     
          </div>
     );
};

Counter.propTypes = {
     number: PropTypes.number,
     color: PropTypes.string,
     index : PropTypes.number,
     onIncrement: PropTypes.func,
     onDecrement: PropTypes.func,
     onSetColor: PropTypes.func
 };
 
 Counter.defaultProps = {
     number: 0,
     color: 'black',
     index: 0,
     onIncrement: () => console.warn('onIncrement not defined'),
     onDecrement: () => console.warn('onDecrement not defined'),
     onSetColor: () => console.warn('onSetColor not defined')
 };

export default Counter;