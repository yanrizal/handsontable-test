import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Tabs2, Tab2 } from "@blueprintjs/core";
import { toJS } from 'mobx'
import Layout from './layout/Layout'

@inject("store") @observer

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store
	}
	componentDidMount() {
		
	}

	render() {
		const store = this.store
		return (
			<Layout>
				
			</Layout>
		)
	}

}