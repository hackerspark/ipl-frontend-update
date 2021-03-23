import {teamKeyLabelMapping} from '../lookups/teamMapping';

export function keyToLabel(key) {
    return teamKeyLabelMapping[key];
}