export const ADD_TEXT = 'ADD_TEXT';
export const UPDATE_CURRENT_TEXT = 'UPDATE_CURRENT_TEXT';

export function addText() {
    return { type: ADD_TEXT}
}
export function updateCurrentText(text) {
    return { type: UPDATE_CURRENT_TEXT, text }
}