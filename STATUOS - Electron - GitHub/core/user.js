const pool = require('./pool');
const bcrypt = require('bcryptjs');
var hash = 0;

function User() {};

User.prototype = {
    // Find the user data by id or username.
    find : function(user = null, callback)
    {
        // if the user variable is defind
        if(user) {
            // if user = number return field = id, if user = string return field = username.
            var field = Number.isInteger(user) ? 'id' : 'username';
        }
        // prepare the sql query
        let sql = `SELECT * FROM users WHERE ${field} = ?`;


        pool.query(sql, user, function(err, result) {
            if(err) throw err

            if(result.length) {
                callback(result[0]);
            }else {
                callback(null);
            }
        });
    },

    // This function will insert data into the database. (create a new user)
    // body is an object 
    create : function(body, callback) 
    {
        var bind = [];
        // loop in the attributes of the object and push the values into the bind array.
        for(prop in body){
            bind.push(body[prop]);
        }
        console.log(body);
        // prepare the sql query
        let sql = `INSERT INTO users(username, fullname, password, role) VALUES (?, ?, ?, ?)`;
        let hmsql = 'INSERT INTO heatmaps(user, hm_number, heatmap, clicks) VALUES (?,?,?,?)';
        var generic1 = [body.username, 1, 0, 0];
        var generic2 = [body.username, 2, 0, 0];
        var generic3 = [body.username, 3, 0, 0];
        var generic4 = [body.username, 4, 0, 0];
        var generic5 = [body.username, 5, 0, 0];

        pool.query(hmsql,generic1);
        pool.query(hmsql,generic2);
        pool.query(hmsql,generic3);
        pool.query(hmsql,generic4);
        pool.query(hmsql,generic5);
        // call the query give it the sql string and the values (bind array)
        pool.query(sql, bind, function(err, result) {
            if(err) throw err;
            // return the last inserted id. if there is no error
            callback(result.insertId);
        });
    },

    login : async function(username, password, callback)
    {
        const test = await pool.query("SELECT password FROM users WHERE username = '" + username + "'");
        if(test[0]==undefined){
            callback(null);
        }
        const oot = test[0].password;
        const test2 = await pool.query("SELECT * FROM users WHERE username ='"+ username +"'");
        const eet = test2[0].username;
        console.log("pass "+oot);
        // find the user data by his username.
        this.find(username, function(user) {
            // if there is a user by this username.
            if(user) {
                // now we check his password.
                if(password == oot && username == eet) {
                    // return his data.
                    console.log("yaay");
                    callback(user);
                    return;
                }  
            }
            // if the username/password is wrong then return null.
            callback(null);
        });
        
    }

}

module.exports = User;