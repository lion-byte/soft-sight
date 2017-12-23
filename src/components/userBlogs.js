import React, {Component} from 'react'

const exampleBlogs = [
  {name: 'lion-byte', title: 'Rest Easy, Buddy', url: 'jtdoggzone.co.vu', description: `Mark | 21 | INTJ<br />He/They Pronouns<br /><br />I mostly love Adventure Time, Steven Universe, and We Bare Bears. There's also a bunch of other things, but I tag everything (sometimes) if that's not your taste.<br /><br />Twitter: <a href="http://www.twitter.com/that_ssomark">@that_ssomark</a>`},
  {name: 'fluffybastards', title: 'A Bunch of Animals Really', url: 'fluffybastards.tumblr.com', description: `Fluffy and non-fluffy animals`},
  {name: 'lionloaf', title: ':3c', url: 'lionloaf.tumblr.com', description: `Sketches of my lion character`}
]

export class UserBlogs extends Component {
  render () {
    return (
      <section className='user-blogs'>
        {exampleBlogs.map((b, index) => <Blog key={index} {...b} />)}
      </section>
    )
  }
}

export class Blog extends Component {
  render () {
    const {name, title, url, description} = this.props

    return (
      <section className='card fluid'>
        <section className='section'>
          <h4>
            {name}
            <small>{url}</small>
            <small>{title}</small>
          </h4>
          <p className='description'>{description}</p>
        </section>
      </section>
    )
  }
}
