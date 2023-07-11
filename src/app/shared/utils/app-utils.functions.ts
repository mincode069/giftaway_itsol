import * as moment from 'moment';
import {Moment} from 'moment';

export function convertMo2DateStr(momentV: Moment) {
    return momentV ? momentV.format('DD/MM/YYYY') : '';
}

export function encodeBase64(str) {
    if (window
        && 'btoa' in window
        && 'encodeURIComponent' in window) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode(('0x' + p1) as any);
        }));
    } else {
        console.warn('b64EncodeUnicode requirements: window.btoa and window.encodeURIComponent functions');
        return null;
    }
}
