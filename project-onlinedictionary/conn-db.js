var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port:3306,
    
    database: 'entries'
});
connection.connect()
exports.searchTerm = function(term, res) {
    connection.query("SELECT * FROM entries WHERE word = " + connection.escape(term), function(err, rows, fields) {
        if (err) throw err
        res.json(rows)
    })
}