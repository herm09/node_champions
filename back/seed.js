// seed.js

import mysql from 'mysql';
import fs from 'fs';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_champions',
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        throw err;  // Assurez-vous que l'erreur est traitée ou enregistrée de manière appropriée
    } else {
        console.log('Connecté à la base de données MySQL');
        insertChampions();
    }
});

const jsonData = fs.readFileSync('./champions.json', 'utf8');
const championsData = JSON.parse(jsonData);

const insertChampions = () => {
    const query = 'INSERT INTO champion (name, type) VALUES ?';
    const values = championsData.map(champion => [champion.name, champion.type]);

    connection.query(query, [values], (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'insertion des champions :', err);
        } else {
            console.log('Champions insérés avec succès !');
        }

        connection.end();
    });
};

insertChampions();