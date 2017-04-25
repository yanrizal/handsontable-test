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
        <li className="site-menu-category">General</li>
        <li className="dropdown site-menu-item has-sub">
          <ActiveLink activeOnlyWhenExact={true} to="/contact">
          	<i className="site-menu-icon md-view-compact" aria-hidden="true">
          	</i>Contact
          </ActiveLink>
        </li>
        <li className="dropdown site-menu-item has-sub">      
          <ActiveLink activeOnlyWhenExact={true} to="/activity">
          	<i className="site-menu-icon md-view-compact" aria-hidden="true"></i>
          	Activity
          </ActiveLink>
        </li>
        <li className="dropdown site-menu-item has-sub">      
          <ActiveLink activeOnlyWhenExact={true} to="/login">
          	<i className="site-menu-icon md-view-compact" aria-hidden="true"></i>
          	{authenticated ? 'Log out' : 'Sign in'}
          </ActiveLink>
        </li>
      </ul>
		)
	}

}