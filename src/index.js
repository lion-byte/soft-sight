import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { isAuth, getUserInfo } from './api'

render(<App />, document.getElementById('root'))
console.log('Index loaded')

const blogMapping = b => {
  console.log(b.name, b.title)
}

const sleep = ms => new Promise((resolve, reject) => {
  setTimeout(resolve, ms)
})

const main = async () => {
  const isLogged = await isAuth()

  if (!isLogged) {
    console.log('User is not logged in')
    return
  }

  const {name, blogs} = await getUserInfo()
  console.log(`Welcome ${name}!`)
  console.log('Here are your blogs:')
  for (const blog of blogs) {
    await sleep(750)
    blogMapping(blog)
  }
}

main()
