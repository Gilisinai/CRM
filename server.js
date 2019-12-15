const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require("body-parser")
const data = require("./src/store/data.json")
const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:Gilisinai1@localhost/sql_intro')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use('/', api)

const addToDb = async function (data) {
    for (let i = 0; i < data.length; i++) {
        let query = `INSERT INTO clientsDb VALUES (null, '${data[i].name}', '${data[i].email}','${data[i].country}','${data[i].owner}','${data[i].emailType}','${data[i].sold ? "1": "0"}','${data[i].firstContact}')`
         await sequelize.query(query)
        
    }

}

// addToDb(data)



const port = process.env.PORT || 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})