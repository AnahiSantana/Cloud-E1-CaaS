const express = require('express')
const cors = require('cors')

require('dotenv').config();

const path = require('path');

const { json, urlencoded } = express
const app = express()

const host = process.env.IP  || '0.0.0.0'
const port = process.env.PORT || 4500

const corsOptions = { origin: '*', optionsSuccessStatus: 200 }


app.use(json())
app.use(urlencoded({ extended: false }))


app.use(cors(corsOptions))
app.use('/', express.static(path.join(__dirname, 'front')));

app.listen(port,host, () => { console.log(`Server listening on port ${port} in the host ${host}`); })

