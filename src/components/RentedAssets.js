import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

@inject("store") @observer
export default class RentedAssets extends Component {

  constructor(props) {
    super(props);
    this.params = this.props.params
    this.store = this.props.store
  }
  componentDidMount() {

    var container = document.getElementById('rented-asset-table');
    var baseUrl = "http://handsontable.com/static/";
    var dataAssets = toJS(this.store.getAssetItemsById(this.props.match.params.id))

    var hot = new Handsontable(container, {
      data: dataAssets,
      colHeaders: ["No", "Name", "Lokasi Asset", "Outcome", "Expected Income", "Kemungkinan deal", "Income", "Nama Pemilik"],
      rowHeaders: false,
      columnSorting: true,
      contextMenu: true,
      autoWrapRow: true,
      columns: [
        {data: 0, type: 'text'},
        {data: 1, type: 'text'},
        {data: 2, type: 'text'},
        {data: 3, type: 'numeric', format: '$0,0.00'},
        {data: 4, type: 'numeric', format: '$0,0.00'},
        {data: 5, type: 'numeric', format: '0,0.00%'},
        {data: 6, type: 'numeric', format: '$0,0.00'},
        {data: 7, type: 'text'},
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
      <div>
          <div id="rented-asset-table" className='pt-table'>
          </div>
      </div>
    )
  }

}