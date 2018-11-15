// import * as types from '../actions/ActionTypes';
// import { Map, List } from 'immutable';


// // const initialState = {
// //     counters: [
// //         {
// //             color: 'black',
// //             number: 0
// //         }
// //     ]
// // }

// // { } 은 Map 으로, [ ] 은 List 로 
// // 초기 상태를 정의합니다.
// // const initialState = Map({
// //      counters: List([
// //          Map({
// //              color: 'black',
// //              number: 0
// //          })
// //      ])
// //  })

// // 리듀서 함수를 정의합니다. 
// function counter(state = initialState, action) {
//     // 레퍼런스 생성
//     //const { counters } = state;
//     const counters = state.get('counters');

//     switch(action.type) {
//         // 카운터를 새로 추가합니다
//         case types.CREATE:
//         return state.set('counters', counters.push(Map({
//                color: action.color,
//                number: 0
//           })))
//           //   return {
//           //       counters: [
//           //           ...counters,
//           //           {
//           //               color: action.color,
//           //               number: 0
//           //           }
//           //       ]
//           //   };
//         // slice 를 이용하여 맨 마지막 카운터를 제외시킵니다
//         case types.REMOVE:
//           //   return {
//           //       counters: counters.slice(0, counters.length - 1)
//           //   };
//           return state.set('counters', counters.pop());
//           // action.index 번째 카운터의 number 에 1 을 더합니다.
//           case types.INCREMENT:
//                return state.set('counters', counters.update(
//                     action.index, (counters) => counters.set('number', counters.get('number') + 1)
//                ));
//           // return {
//           //     counters: [
//           //          // 0 ~ action.index 사이의 아이템들을 잘라와서 이 자리에 넣는다
//           //         ...counters.slice(0, action.index), 
//           //         {
//           //             ...counters[action.index], // 기존 값은 유지하면서
//           //             number: counters[action.index].number + 1 // number 값을 덮어쓴다 
//           //         },
//           //         ...counters.slice(action.index + 1, counters.length) // action.index + 1 ~ 마지막까지 잘라온
//           //     ]
//           // };

//     // action.index 번째 카운터의 number 에 1 을 뺍니다
//     case types.DECREMENT:
//                return state.set('counters', 
//                     counters.update(action.index, (counters) => 
//                          counters.set('number', counters.get('number') + 1 ) 
//                                    )
//                               )
//      //    return {
//      //        counters: [
//      //            ...counters.slice(0, action.index),
//      //            {
//      //                ...counters[action.index],
//      //                number: counters[action.index].number - 1
//      //            },
//      //            ...counters.slice(action.index + 1, counters.length)
//      //        ]
//      //    };

//     // action.index 번째 카운터의 색상을 변경합니다
//     case types.SET_COLOR:
//           return state.set('counters', counters.update(
//                action.index, 
//                (counter) => counter.set('color', action.color))
//           );
//      //    return {
//      //        counters: [
//      //            ...counters.slice(0, action.index),
//      //            {
//      //                ...counters[action.index],
//      //                color: action.color
//      //            },
//      //            ...counters.slice(action.index + 1, counters.length)
//      //        ]
//      //    };
//         default:
//             return state;
//     }
// };

// export default counter


// // import number from './number'
// // import color from './color'

// // import { combineReducers } from 'redux';

// // /*
// //     서브 리듀서들을 하나로 합칩니다.
// //     combineReducers 를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다.
// //     지금의 경우:
// //     {
// //         numberData: {
// //             number: 0
// //         },
// //         colorData: {
// //             color: 'black'
// //         }
// //     }
// //     로 만들어집니다.
// // */

// // const reducers = combineReducers({
// //      numberData: number,
// //      colorData: color
// //  });
 
// //  export default reducers;