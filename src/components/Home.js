import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

@inject("store") @observer
export default class Home extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store
	}
	componentDidMount() {

		var container = document.getElementById('example');
		var baseUrl = "http://handsontable.com/static/";
		var dataSport = toJS(this.store.getItems())

		var hot = new Handsontable(container, {
		  data: dataSport,
		  colHeaders: ["Rank", "Team", "Logo", "Current Value ($M)", "1-Yr Change (%)", "Debt/Value (%)", "Revenue ($M)", "Income ($M)"],
		  rowHeaders: false,
		  columnSorting: true,
		  contextMenu: true,
		  autoWrapRow: true,
		  columns: [
		    {data: 0, type: 'numeric'},
		    {data: 1, type: 'text'},
		    {data: 2, renderer: 'html', width: 200},
		    {data: 3, type: 'numeric', format: '$0,0.00'},
		    {data: 4, type: 'numeric', format: '0.00%'},
		    {data: 5, type: 'numeric', format: '0.00%'},
		    {data: 6, type: 'numeric', format: '$0,0.00'},
		    {data: 7, type: 'numeric', format: '$0,0.00'}
		  ],
		  cells: function (row, col, prop) {
		    var cellProperties = {};
		    cellProperties.className = 'htMiddle htCenter';
		    return cellProperties;
			  },
			  afterChange: (changes, source) => {
			  	console.log(this.store.getItems())
			  	if (changes != undefined) {
			  		changes.map((value) => {
							this.store.setSingle(value[0], value[1], value[3])
						})	
			  	}
			  }
			});
	}

	render() {
		const store = this.store
		return (
			<div className="page home">
				<header>
					<div className="hero-unit">
						<div className="react-logo"></div>
						<h1>React MobX React-Router 4 Boilerplate</h1>
					</div>
					<div className="hero-subunit">
						<h4>A simple starting point for React with routing, data-fetching and state management!</h4>
					</div>
					<div className="github-buttons">
						<a href="https://github.com/mhaagens/react-mobx-react-router4-boilerplate" target="_blank">Download from GitHub</a>
					</div>
				</header>
				<main>
					<div id="example">
					</div>
				</main>
			</div>
		)
	}

}