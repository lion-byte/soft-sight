import React, {Component} from 'react'

export class LoadingData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetching: true,
      data: []
    }
  }

  componentDidMount () {
    const addData = data => {
      this.setState(prevState => ({
        data: [...prevState.data, ...data]
      }))
    }

    totalFakeFetch(Math.min(1000, 3678), addData)
      .then(() => {
        this.setState({isFetching: false})
      })
  }

  render () {
    const {isFetching, data} = this.state
    return (
      <section>
        {isFetching && <section className='spinner-donut' />}

        <section>
          {data.map((d, index) => (<span key={index}>{d} </span>))}
        </section>
      </section>
    )
  }
}

export const totalFakeFetch = async (total, cb) => {
  const it = fakeFetchGenerator(total)
  let stillFetching = true

  while (stillFetching) {
    let {value, done} = it.next()
    let data = await value

    cb(data)
    stillFetching = !done
  }
}

export function * fakeFetchGenerator (total) {
  for (let i = 0; i < total; i += 40) {
    yield fakeFetchChunk(i)
  }
  return []
}

export const sleep = ms => new Promise(resolve => { setTimeout(resolve, ms) })

export const randomRange = (min, max) => Math.round(Math.random() * Math.abs(max - min)) + min

export const fakeFetchChunk = async (offset, chunkSize = 40) => {
  const wait = randomRange(100, 750)
  console.log(`[${offset}, ${offset + chunkSize - 1}] Waiting ${wait}ms`)

  await sleep(wait)

  const found = randomRange(0, 10)
  console.log(`[${offset}, ${offset + chunkSize - 1}] Found ${found} results`)

  return 'a'.repeat(found).split('')
}
