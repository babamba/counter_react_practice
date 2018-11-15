/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
    scope 이슈와 관계 없이 편의상 사용되었습니다.

    액션들이 만들어졌습니다!
*/

import * as types from './ActionTypes';

// increment 와 decrement는 어짜피 1씩 더하고 빼는거니까, 
// 따로 필요한 값이 없어서 type 만 지정이 된 객체를 만들어줍니다.

export const create = (color) => ({
     type: types.CREATE,
     color
 });
 
 export const remove = () => ({
     type: types.REMOVE
 });

export const increment = (index) => ({
     type : types.INCREMENT,
     index
})

export const decrement = (index) => ({
     type: types.DECREMENT,
     index
 });
 
 // 다른 액션 생성자들과 달리, 파라미터를 갖고있습니다
 export const setColor = ({index, color}) => ({
     type: types.SET_COLOR,
     index,
     color
 });