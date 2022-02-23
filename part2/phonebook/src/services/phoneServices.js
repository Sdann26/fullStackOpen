import axios from 'axios'

const getPhoneData = (url)=>{
    return axios
        .get(url)
}

const addNewPhone = (url, data)=>{
    return axios
        .post(url, data)
}

export default { getPhoneData, addNewPhone }