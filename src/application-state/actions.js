export const ADD_TEXT = 'ADD_TEXT';
export const ADD_TEXT_TO_LIST = 'ADD_TEXT_TO_LIST';
export const SET_CONFIG = 'SET_CONFIG';

export function addText(values, resolve, reject) {
    return { type: ADD_TEXT, values, resolve, reject}
}
export function addTextToList(text) {
    return { type: ADD_TEXT_TO_LIST, text}
}
export function setConfig(config) {
    return { type: SET_CONFIG, config }
}