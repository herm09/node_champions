//locahost:3000
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router.js';

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.use(router) // Utilise le router

// app.get('/', (req, res) => {
//     res.send('Hello There !') // Quand tu vas sur localhost:3000 tu vas voir Hello World
//     // console.log('je suis a la racine')
// })

app.listen(3000, () => { // Quand tu fais tourner un serveur tu as un port associé, ici le port 3000
    console.log('Server is running on port 3000 :)') //npm run dev = mettre le serveur à jour
})