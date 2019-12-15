const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:Gilisinai1@localhost/sql_intro')

router.get('/', async function  (req, res) {
    await sequelize
    .query("SELECT * FROM clientsDb")
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.post('/client',async function (req, res) {
    let client = req.body
    console.log(client)
    let query = `INSERT INTO clientsDb VALUES (null, '${client.name}', '${client.email}','${client.country}','${client.owner}','${client.emailType}','${client.sold ? "1": "0"}','${client.firstContact}')`
         await sequelize.query(query)

})

router.put('/owner',async function (req, res) {
    console.log(req.body)
    let owner = req.body.clientToUpdate.owner
    let name= req.body.clientToUpdate.name
    await sequelize
    .query(`UPDATE clientsDb
    SET owner = "${owner}"
    where name = "${name}"`)
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.put('/email',async function (req, res) {
    console.log(req.body)
    let emailType = req.body.clientToUpdate.emailType
    let name= req.body.clientToUpdate.name
    await sequelize
    .query(`UPDATE clientsDb
    SET emailType = "${emailType}"
    where name = "${name}"`)
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.put('/sell',async function (req, res) {
    console.log(req.body)
    let name= req.body.clientToUpdate.name
    await sequelize
    .query(`UPDATE clientsDb
    SET sold = "1"
    where name = "${name}"`)
    .spread(function (results, metadata) {
        res.send(results)
    })
})

router.delete('/',async function (req, res) {
   
    
})



module.exports = router