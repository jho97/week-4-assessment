const complimentContainer = document.querySelector('#compliment-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/compliment/`

const complimentCb = ({data: compliments}) =>displayCompliments(compliments)
const errCb = err => console.log(err.response.data)

// get compliments
const getCompliments = () => axios.get(baseURL).then(complimentCb).catch(errCb)
//create compliments
const createCompliments = body => axios.post(baseURL, body).then(complimentCb).catch(errCb)
//delet compliments
const deleteCompliments = id => axios.delete(`${baseURL}/id`, {type}).then(complimentCb).catch(errCb)