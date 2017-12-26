import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { isAuth } from './api'

render(<App />, document.getElementById('root'))
console.log('Index loaded')

isAuth().then(console.log)
