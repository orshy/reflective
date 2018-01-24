import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-btc"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Reflective Ventures</h1>
                <p>A venture fund focused on the <a href="https://www.blockchain.com/">Blockchain</a> and crypto-technology start-up landscape. Partnering with <a href="https://www.rchain.coop/">RChain Cooperative</a>, our mission is to provide an impactful utility value to <a href="https://www.blockchain.com/">Blockchain</a> and <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Cryptocurrency</a> start-ups.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Info</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
