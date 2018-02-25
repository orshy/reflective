import React from 'react'
import Link from 'gatsby-link'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>


        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Invest</h2>
          <p>We incubate, invest in, and actively design strategic financing and token capitalization events for innovative <a href="https://www.blockchain.com/">blockchain</a> specific <a href="https://www.stateofthedapps.com">dApps</a> and complementary technologies and tools that have strong growth potential and will provide a meaningful contribution to the RChain blockchain ecosystem in the form of appreciable utility value and increased market adoption.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Incubate</h2>

          <p>We have over [75] years of collective experience in executive management roles specializing in the ongoing development, support and oversight of technology start-ups and emerging growth companies.</p>

          <p>Our work with <a href="https://www.rchain.coop/">RChain Cooperative</a> provides a unique opportunity to develop and deploy next gen <a href="https://www.blockchain.com/">blockchain</a> solutions and distributed applications.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Innovate</h2>
          <p>Reflective Venture Partners originates from an ongoing strategic partnership with <a href="https://www.rchain.coop/">RChain Cooperative</a>, a third-generation blockchain applications platform that is currently in development.</p>

          <p>We focus on supporting RChain in its efforts to advance an open-source, decentralized, proof of stake platform that addresses the deficiencies of existing blockchain architecture through speed, scale and versatility.</p>
          {close}
        </article> *\

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
