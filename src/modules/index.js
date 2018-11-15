import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable'
// action 은 하나의 객체
// 모든 액션 객체는 type 이라는 값을 지니고 있어야함

// Ducks 구조에는 Reducer 파일 안에 
// 액션타입과 액션생성자 함수를 함께 넣어서 관리하고 
// 이를 ‘모듈’ 이라고 부릅니다.

// 현재파일이 DUCK 구조의 redux
/* 
 Action 의 종류들을 선언합니다.
 앞에 export 를 붙임으로서, 나중에 이것들을 불러올 때, 
 import * as types from './ActionTypes' 를 할 수 있어요.
*/
// 액션 타입 
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

//액션생성자 
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE); 
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // { index, color }

// { } 은 Map 으로, [ ] 은 List 로 
// 초기 상태를 정의합니다.
const initialState = Map({
     counters: List([
         Map({
             color: 'black',
             number: 0
         })
     ])
 })

 //그리고, handleActions 를 통하여 리듀서의 틀을 만들어주겠습니다.
 export default handleActions({
     [CREATE]: (state, action) => {
         const counters = state.get('counters');
 
         return state.set('counters', counters.push(
             Map({
                 color: action.payload,
                 number: 0
             })
         ))
     },
 
     [REMOVE]: (state, action) => {
         const counters = state.get('counters');
 
         return state.set('counters', counters.pop())
     },
 
     [INCREMENT]: (state, action) => {
         const counters = state.get('counters');
 
         return state.set('counters', counters.update(
             action.payload, 
             (counter) => counter.set('number', counter.get('number') + 1))
         );
     },
 
     [DECREMENT]: (state, action) => {
         const counters = state.get('counters');
 
         return state.set('counters', counters.update(
             action.payload, 
             (counter) => counter.set('number', counter.get('number') - 1))
         );
     },
 
     [SET_COLOR]: (state, action) => {
         const counters = state.get('counters');
 
         return state.set('counters', counters.update(
             action.payload.index, 
             (counter) => counter.set('color', action.payload.color))
         );
     },
 }, initialState);