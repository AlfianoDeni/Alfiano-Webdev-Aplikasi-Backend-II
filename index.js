const express = require('express')
const app = express()
const bp = require('body-parser')
const routes = require ('./routes')
const {databaseConfig} = require('./database')

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

databaseConfig.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`Connected to database ${databaseConfig.database}`)
})

app.use(express.Router());
app.use('/', routes)

app.listen(1003,()=>{
    console.log(`Server running on port 1003`)
})