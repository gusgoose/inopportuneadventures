import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <p className="bottom-logo is-size-0">IA</p>
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container footer-bottom has-text-white-ter">
            <div className="columns">
              <div className="column is-12">
                <p>© Copyright Inopportune Adventures, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
