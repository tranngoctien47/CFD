export default {
    login: (data) => {
        return fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    updateInfo: (data) => {

        let token = JSON.parse(localStorage.getItem('token'))

        return fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.accessToken}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    course() {
        let token = JSON.parse(localStorage.getItem('token'))
        return fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/profile/course', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.accessToken}`
            }
        }).then(res => res.json())
    },
    payment() {
        let token = JSON.parse(localStorage.getItem('token'))
        return fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/profile/payment', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.accessToken}`
            }
        }).then(res => res.json())

    }


}