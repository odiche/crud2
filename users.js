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