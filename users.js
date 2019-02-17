const mysql = require('mysql');

const db = mysql.createConnection({
    host   :    'localhost',
    user    : 'chinwe',
    password: "chinwe",
    database: 'user'
})

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('connected to database');
    }
});

exports.getUser = function(id, callback){
    let sql = `Select * from dogs where id = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.insertUser = function(data, callback){
    let sql ='insert into dogs set ?';
    db.query(sql, [data], function (err, data) {
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.updateUser = function (id, data, callback) {
    let sql = 'update dogs set ? where id =?';
    db.query(sql,[data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.deleteUser = function (id, data, callback) {
    let sql= 'delete from dogs where id = ?';
    db.query(sql,[id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}