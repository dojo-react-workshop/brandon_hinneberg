const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const port = 8000;
const axios = require('axios');

app.use(bp.urlencoded({extended: true}));


app.get('/repo/:username', (req,res)=>{
    axios.get(`http://api.github.com/users/${req.paramsusername}/repos`)
        .then((response)=>{
        res(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.listen(port,()=>{
    consloe.log(`Running on ${port}`);
});
