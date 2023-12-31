const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const encryptCardData = require('../src/encrypt');



app.get('/', async (req, res) => {
    //res.send('Hello World!')
    const cc = req.query.cc
    const mes = req.query.mes
    const ano = req.query.ano
    const cvv = req.query.cvv
    const context = req.query.context
    const x = await encryptCardData(
        card, month, year, cvc, adyenKey
    )
    console.log(x)
    res.send(x)
})

const card = cc;
const month = mes;
const year = ano;
const cvc = cvv;

const adyenKey = context;