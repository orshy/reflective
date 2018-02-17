import React from 'react'
import rvLogo from '../images/rv.jpg'
;

const Header = (props) => ( <
    header id = "header"
    style = { props.timeout ? { display: 'none' } : {} } >
    <div class="icon">
    <div>
      <img src={rvLogo} className="logo"/>
    </div>
    </div>
    <div className="content" >
      <div className="inner" >
        <h1>REFLECTIVE VENTURE PARTNERS</h1>
        <h2>A privately owned and managed cryptocurrency fund in partnership with <a href="https://www.rchain.coop/"> RChain Cooperative</a></h2>
      </div>
    </div>
    <p>More information coming soon. Contact us at <a href = "mailto:info@reflectiveventures.io" target ="_top"> here</a></p>
  </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
