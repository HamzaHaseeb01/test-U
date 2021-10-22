
const sqlite3 = require('sqlite3').verbose();

const SetUpDatabase = () => {

    return new Promise((resolve, reject) => {
        let db = new sqlite3.Database('./Test_U+.db', err => {

            if (err) {
                reject(err)
            }

            console.log('Connected to the database.');

            const sql = `
    CREATE TABLE IF NOT EXISTS Employee (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      position TEXT)`
            db.run(sql);

            resolve(db);
        });
    });
    //   db.run(`INSERT INTO Emplyee(name,email,position) VALUES(?,?,?)`, ['hamza','hamza@gmail.com','developer'], function(err) {
    //     if (err) {
    //       return console.log(err.message);
    //     }
    //     // get the last insert id
    //     console.log(`A row has been inserted with rowid ${this.lastID}`);
    //   });
    //   return db;
}
export default SetUpDatabase;