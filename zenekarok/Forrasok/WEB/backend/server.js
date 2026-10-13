import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,

});

app.get('/', (req, res) => {
    return res.status(200).send('áron')
});

app.get('/zenekar', (req, res) => {
    con.connect(function (err) {
        if (err) return res.status(500).send(err);

        let sql= 'SELECT * FROM zenekarok';
        con.query(sql, function(err, result){
            if (err) return res.status(500).send(err);

            return res.status(200).json(result);
        })

    })
})

app.post('/ujzenekar', (req, res) => {

    const {id, nev, stilus_id, orszag, varos, aktiv_evek, tagok, legsikeresebb_album, kep_url} = req.body;

    if (
        !id || 
        !nev ||
        !stilus_id ||
        !orszag ||
        !varos ||
        !aktiv_evek ||
        !tagok ||
        !legsikeresebb_album ||
        !kep_url
    )

    return res.status(400).send('Hiányos adatok') ;

    con.connect(function (err) {
        if (err) return res.status(500).send(err);

        let sql = "INSERT INTO zenekarok VALUES {?,?,?,?,?,?,?,?,?}"

        con.query[
            id, nev, stilus_id, orszag, varos, aktiv_evek, tagok, legsikeresebb_album, kep_url
        ],

        function (err, result) {
            if (err) return res.status(500).send(err);

            return res.status(2001).json({id : id});
        };
    });
});

app.get('/s tilusok', (req, res) => {
    con.connect(function (err){
        if (err) return res.status(500).send(err);

        let sql = 'SELECT stilus_nev FROM stilusok';
        con.query(function (err){
            if (err) res.status(500).send(err);

            return res.status(200).json(result);
        })

    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
        console.log(`A szerver fut: http://localhost:${PORT}`)
})