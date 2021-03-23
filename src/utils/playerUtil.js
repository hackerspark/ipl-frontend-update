import {playerKeyLabelMapping} from '../lookups/playerMapping';

export function keyToLabel(key) {
    return playerKeyLabelMapping[key];
}