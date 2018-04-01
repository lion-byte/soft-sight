import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export class Fetch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: null,
      hasError: false,
      isLoading: true
    }
  }

  componentDidMount () {
    this.props
      .request()
      .then(data => {
        console.log(data)

        this.setState({
          data,
          isLoading: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          hasError: true,
          isLoading: false
        })
      })
  }

  render () {
    const { data, hasError, isLoading } = this.state
    const { child: Child, onError: Error, onLoading: Loading } = this.props

    if (isLoading) {
      return <Loading />
    } else if (hasError || (data && data.error)) {
      return <Error />
    } else {
      return (
        <Fragment>
          <Child data={data} />
        </Fragment>
      )
    }
  }
}

Fetch.propTypes = {
  child: PropTypes.func.isRequired,
  onError: PropTypes.func,
  onLoading: PropTypes.func,
  request: PropTypes.func.isRequired
}

Fetch.defaultProps = {
  onError: () => <span>Error! Please report this issue.</span>,
  onLoading: () => <span>Loading...</span>
}
