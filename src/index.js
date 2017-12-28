import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { isAuth } from './api'
import { dataFetch } from './utils'

render(<App />, document.getElementById('root'))
console.log('Index loaded')

isAuth().then(console.log)

dataFetch('/api/blogs', { msg: 'hello' }, { response: 'nothing' }).then(
  console.log
)
