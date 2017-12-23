import React, {Component} from 'react'

const exampleBlogs = [
  {name: 'lion-byte', title: 'Rest Easy, Buddy', url: 'jtdoggzone.co.vu', description: `Mark | 21 | INTJ<br />He/They Pronouns<br /><br />I mostly love Adventure Time, Steven Universe, and We Bare Bears. There's also a bunch of other things, but I tag everything (sometimes) if that's not your taste.<br /><br />Twitter: <a href="http://www.twitter.com/that_ssomark">@that_ssomark</a>`}
]

export class UserBlogs extends Component {
  render () {
    return (
      <section>
        {exampleBlogs.map((b, index) => <Blog key={index} {...b} />)}
      </section>
    )
  }
}

export class Blog extends Component {
  render () {
    const {name, title, url, description} = this.props

    return (
      <section>
        <h4>
          {name}
          <small>{title}</small>
          <small>{url}</small>
        </h4>
        <p>{description}</p>
      </section>
    )
  }
}
