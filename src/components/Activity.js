import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import Layout from './layout/Layout'

@inject("store") @observer
export default class Activity extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store
  }
  componentDidMount() {

    var container = document.getElementById('activity-table');
    var baseUrl = "http://handsontable.com/static/";
    var dataActivity = toJS(this.store.getActivityItems())

    var hot = new Handsontable(container, {
      data: dataActivity,
      colHeaders: ["No", "Nama", "Asset dijual/disewa", "Beli/Sewa Asset"],
      rowHeaders: false,
      columnSorting: true,
      contextMenu: true,
      autoWrapRow: true,
      columns: [
        {data: 0, type: 'text'},
        {data: 1, type: 'text'},
        {data: 2, renderer: "html"},
        {data: 3, renderer: "html"}
      ],
      cells: function (row, col, prop) {
        var cellProperties = {};
        cellProperties.className = 'htMiddle htCenter';
        return cellProperties;
        },
        afterChange: (changes, source) => {
          if (changes != undefined) {
            changes.map((value) => {
              this.store.setSingleAssetItem(value[0], value[1], value[3])
            })  
          }
        }
      });
  }

  render() {
    const store = this.store
    return (
      <Layout>
          <div id="activity-table" className='pt-table' />
      </Layout>
    )
  }

}