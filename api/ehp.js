import http from 'k6/http';

export function ehp() {
    const url = "https://loadcis.ehp.co.th/ehp/";
    const res = http.get(url);
    console.log(res.body);
    return res
}
