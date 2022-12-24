const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const Route = require('./routes/routes')
mongoose.set('strictQuery', false);

//Lets-Shop - password,
//Lets-Shop - name

//mongodb+srv://Lets-Shop:Lets-Shop@details.0jpz6rz.mongodb.net/Details?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://Lets-Shop:Lets-Shop@details.0jpz6rz.mongodb.net/Details?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('Connected To Database');
    }
)

app.use(express.json())

app.use('/apidata',Route)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))