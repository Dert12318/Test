import mysql from 'mysql';

export const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwertyui",
  database: "wedding"
});

//check koneksi ke DB

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to DB!");
});

