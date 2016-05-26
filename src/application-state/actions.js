export const ADD_TEXT = 'ADD_TEXT';
export const UPDATE_CURRENT_TEXT = 'UPDATE_CURRENT_TEXT';
export const SET_CONFIG = 'SET_CONFIG';

export function addText() {
    return { type: ADD_TEXT}
}
export function updateCurrentText(text) {
    return { type: UPDATE_CURRENT_TEXT, text }
}
export function setConfig(config) {
    return { type: SET_CONFIG, config }
}