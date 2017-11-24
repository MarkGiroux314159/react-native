import IPConfig from './IPConfig';

export default {
    postFetch: (info) => fetch(`${IPConfig.url}/api/RNform`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    }).then((response) => {
        console.log(response);
    }),

    getFetch: (name) => fetch(`${IPConfig.url}/api/findRNform`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    }).then((response) => {
        return response.json();
    }).then((result) => {
        return result;
    })

}
