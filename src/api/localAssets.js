import { getLocalJson } from './fetchers'

export const getConfig = function(){
    return getLocalJson('config.json');
}