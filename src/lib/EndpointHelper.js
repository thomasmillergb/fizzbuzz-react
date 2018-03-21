export const HOST = 'http://localhost:8080';

export function address(url) {
    return HOST + '/api/v1' + url;
}

export function suffixAddress(url) {
    return '/api/v1' + url;
}

export const ENDPOINT = {
    STANDARD_FIZZ_BUZZ: '/fizzbuzz/standard/print/{input}'
};

export const defaultHeaders = {
    headers: {
        'Content-Type'               : 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
};