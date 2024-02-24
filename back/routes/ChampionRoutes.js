import express from 'express'
import { getChampions, getChampion, createChampion, updateChampion, deleteChampion } from '../controllers/ChampionControllers.js'

const router = express.Router()

router.get('/', getChampions)
router.get('/:id', getChampion)
router.post('/', createChampion)
router.put('/:id', updateChampion)
router.delete('/:id', deleteChampion)

export default router