import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const getChampions = (req, res) => {
    // res.send([
    //     'Kalista',
    //     'Viego',
    //     'Lee Sin',
    //     'Alistar',
    // ])
    prisma.champion.findMany() // agent = dans quel modèle on veut aller chercher les données
    .then((champions) => {
        res.json(champions) // soit ça renvoie les données
    })
    .catch((error) => { // soit ça renvoie une erreur
        res.json(error)
    })
}

const getChampion = (req, res) => { // on veut récupérer un agent en particulier
    let id = Number(req.params.id) // on récupère l'id de l'agent

    prisma.champion.findUnique({ // findUnique = on veut trouver un élément unique
        where: {
            id: id // id correspond à l'id de l'agent
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

const createChampion = (req, res) => {
    let champion = req.body
    
    prisma.champion.create({
        data: {
            name: champion.name,
            type: champion.type
        },
    })
    .then((champion) => {
        res.json(champion) //soit ça renvoie les données
    })
    .catch((error) => {
        res.json(error) //soit ça renvoie une erreur
    })
}

const updateChampion = (req, res) => {
    let id = Number(req.params.id) // Number = transformer l'id en nombre
    let champion = req.body

    prisma.champion.update({
        where: {
            id: id
        },
        data: {
            name: champion.name,
            type: champion.type
        }
    })

    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

const deleteChampion = (req, res) => {
    let id = Number(req.params.id)

    prisma.champion.delete({
        where: {
            id: id
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

export { getChampions, getChampion, createChampion, updateChampion, deleteChampion}