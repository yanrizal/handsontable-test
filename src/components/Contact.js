import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

@inject("store") @observer
export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store
  }
  componentDidMount() {

    var container = document.getElementById('contact-table');
    var baseUrl = "http://handsontable.com/static/";
    var dataSport = toJS(this.store.getContactItems())

    var hot = new Handsontable(container, {
      data: dataSport,
      colHeaders: ["No", "Nama", "Alamat", "Email", "Agama", "Tanggal Lahir"],
      rowHeaders: false,
      columnSorting: true,
      contextMenu: true,
      autoWrapRow: true,
      columns: [
        {data: 0, type: 'text'},
        {data: 1, type: 'text'},
        {data: 2, type: 'text'},
        {data: 3, type: 'text'},
        {data: 4, type: 'text'},
        {data:5,
        type: 'date',
        dateFormat: 'MM/DD/YYYY',
        correctFormat: true,
        defaultDate: '01/01/1900',
        allowEmpty: false,
        datePickerConfig: {
          firstDay: 0,
          showWeekNumber: true,
          numberOfMonths: 3,
          disableDayFn: function(date) {
            return date.getDay() === 0 || date.getDay() === 6;
          }
        }
      }],
      cells: function (row, col, prop) {
        var cellProperties = {};
        cellProperties.className = 'htMiddle htCenter';
        return cellProperties;
        },
        afterChange: (changes, source) => {
          if (changes != undefined) {
            changes.map((value) => {
              this.store.setSingleContactItem(value[0], value[1], value[3])
            })  
          }
        }
      });
  }

  render() {
    const store = this.store
    return (
      <div>
          <div id="contact-table" className='pt-table' />
      </div>
    )
  }

}