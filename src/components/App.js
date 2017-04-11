import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider, observer } from 'mobx-react'
import LazyRoute from 'lazy-route'
import DevTools from 'mobx-react-devtools'

@observer
export default class App extends Component {
	constructor(props) {
		super(props)
		this.store = this.props.store
	}
	
	componentDidMount() {
		this.authenticate()
		
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.props.store.authenticate()
	}
	render() {
		const { authenticated, authenticating, timeToRefresh, refreshToken } = this.store
		return (
			<Router>
				<Provider store={this.store}>
					<div className="wrapper">
						<Route 
						  exact
						  path="/"
						  render={(props) => <LazyRoute {...props} component={import('./Home')} />}
						/>
					</div>
				</Provider>
			</Router>
		)
	}
}