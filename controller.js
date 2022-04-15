const compliments = require('./database.json')
let globalId = 5

module.exports = {
    getCompliments: (req, res) => {res.status(200).send(compliments)},
    createCompliments: (req, res) => {
        let {title} =req.body
        let newCompliment = {
            id:globalId,
            title
        }
        compliments.push(newCompliment)
        res.status(200).send(compliments)
        globalId++
    },
    deleteCompliments:(req, res) => {
        let index = compliments.findIndex(elem => elem.id === +reqparams.id)
        compliments.splice(index, 1)
        res.status(200).send(compliments)
    },
    updateCompliments:{}
}