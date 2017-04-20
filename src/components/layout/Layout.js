/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import TopBar from '../TopBar'
import TopBarToolbar from '../TopBarToolbar'

export default class Layout extends React.Component {

  componentDidMount() {
   
  }

  render() {
    return (
      <div>
        <header>
        <TopBar />
        </header>
        <main>
          {this.props.children}
        </main>
        <footer className="site-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

