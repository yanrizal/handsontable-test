import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, Link } from 'react-router-dom'
import ActiveLink from './ui/ActiveLink';

@inject("store") @observer
export default class TopNav extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store
	}

	authenticate(e) {
		if (e) e.preventDefault();
		this.props.store.authenticate()
	}

	render() {
		const { authenticated, authenticating } = this.store
		return (
			<ul className="site-menu" data-plugin="menu">
      	<li className="dropdown site-menu-item has-sub">
          <a className="animsition-link" href="layouts/aside-right-fixed.html">
            <ActiveLink activeOnlyWhenExact={true} to="/contact">Contact</ActiveLink>
          </a>
        </li>
        <li className="dropdown site-menu-item has-sub">
          <a className="animsition-link" href="layouts/aside-right-fixed.html">
            <ActiveLink activeOnlyWhenExact={true} to="/activity">Activity</ActiveLink>
          </a>
        </li>
    	</ul>
		)
	}

}