import {Router} from 'express'

const api = Router()

api.get('/', (req, res, next) => {
  res.send('Hewwo')
})

api.get('/:username', (req, res, next) => {
  res.json({
    name: req.params.name
  })
})

export {api}
