const express = require('express');
const mysql = require('mysql');
const parser = require('body-parser');

const app = express();
const user = require('./model/users')


app.listen(9876);
app.use(parser.urlencoded({msExtendedCode: false}));

app.get('/api/user/:id', function(req, res){
    try {
        user.getUser(req.params.id, function (err, data) {
            if(err){
                throw err
            }else{
                res.status(200).send(data)
            }
        })
    }catch (error) {
        res.status(500).send(err);
    }
})

app.post('/api/user', function(req, res){
    try {
        user.insertUser(req.body, function (err, data) {
            if(err){
                throw(err);
            }else{
                // res.status(200).send(data);
                user.getUser(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.status(200).send(data);
                    }
                })
            }
        })
    }catch (err) {
        res.status(500).send(error);
    }
})

app.put('/api/user/:id', function(req, res){
    try {
        user.updateUser(req.params.id, req.body, function (err, data) {
            if(err){
                throw err;
            }else{
                //
                user.getUser(req.params.id, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.status(200).send(data);
                    }
                })
            }
        })
    }catch (err) {
        res.status(500).send(error);
    }
})

app.delete('/api/user/:id', function(req, res){
    try{
        user.deleteUser(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    }catch (err) {
        res.status(500).send(error);
    }
})