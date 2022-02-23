import axios from 'axios'

const getPhoneData = (url)=>{
    return axios.get(url)
}

const addNewPhone = (url, data)=>{
    return axios.post(url, data)
}

const deletePhone = (url, id) => {
    return axios.delete(`${url}/${id}`)
}

export default { getPhoneData, addNewPhone, deletePhone }