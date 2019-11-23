export const ADD_TEST = 'ADD_TEST';
export const REMOVE_TEST = 'REMOVE_TEST';

export function addTest(value){
    return {type: ADD_TEST, value: 'test add value'};
}

export function removeTest(value){
    return {type: REMOVE_TEST, value: 'test remove value'};
}