import React, { PureComponent } from 'react'

export class Fetch extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      data: null,
      error: null,
      isLoading: true
    }
  }

  componentDidMount () {
    this.runRequest()
  }

  runRequest () {
    const { request, requestArgs } = this.props

    request(...requestArgs)
      .then(data => {
        this.setState({
          data,
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          error: err.message,
          isLoading: false
        })
      })
  }

  retry () {
    this.setState(
      {
        data: null,
        error: null,
        isLoading: true
      },
      () => this.runRequest()
    )
  }

  render () {
    const { data, error, isLoading } = this.state
    const {
      child: Child,
      onError: Error,
      onLoading: Loading,
      requestArgs
    } = this.props

    if (isLoading) {
      return <Loading />
    } else if (error) {
      return (
        <Error
          requestArgs={requestArgs}
          error={error}
          retry={() => this.retry()}
        />
      )
    } else {
      return <Child data={data} />
    }
  }
}

export default Fetch

Fetch.defaultProps = {
  onError: () => <span>Error! Please report this issue.</span>,
  onLoading: () => <span>Loading...</span>
}
