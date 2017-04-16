import { observable, action, computed } from 'mobx'
import axios from 'axios'

class AppState {
  @observable items 
  

  constructor() {
    this.contactItems = [
      [1, "Komai", "Los Angeles Lakers", "Komai@gmail.com", "bebas", "04/12/2017"],
      [2, "Komai","New York Knicks", "Komai@gmail.com", "bebas", "04/12/2017"],
      [3, "Komai","Chicago Bulls", "Komai@gmail.com", "bebas", "04/12/2017"],
      [4, "Komai","Boston Celtics", "Komai@gmail.com", "bebas", "04/12/2017"],
      [5, "Komai","Los Angeles Clippers", "Komai@gmail.com", "bebas", "04/12/2017"],    
    ],
    this.assetItems = [
      [1,"Los Angeles Lakers", "2600", "2600", "0.93", "293", "wakabayashi"],
      [2,"New York Knicks", "2600", "2600", "0.93", "293", "wakabayashi"],
      [3,"Chicago Bulls", "2600", "2600", "0.93", "293", "wakabayashi"],
      [4,"Boston Celtics", "2600", "2600", "0.93", "293", "wakabayashi"],
      [5,"Los Angeles Clippers", "2600", "2600", "0.93", "293", "wakabayashi"],
    ],
    this.activityItems = [
      [1, 'Apeng', "<a href='/assets'>Rumah</a>", "<a href='/rented-assets'>Rumah</a>"],
      [2, 'Apeng', "<a href='/assets'>Rumah</a>", "<a href='/rented-assets'>Rumah</a>"],
      [3, 'Apeng', "<a href='/assets'>Rumah</a>", "<a href='/rented-assets'>Rumah</a>"],
      [4, 'Apeng', "<a href='/assets'>Rumah</a>", "<a href='/rented-assets'>Rumah</a>"],
    ]
  }

  @action getContactItems() {
    return this.contactItems
  }

  @action getActivityItems() {
    return this.activityItems
  }

  @action getAssetItems() {
    return this.assetItems
  }

  @action setSingleContactItem(x, y, data) {
    this.contactItems[x][y] = data
  }

  @action setSingleActivityItem(x, y, data) {
    this.activityItems[x][y] = data
  }

  @action setSingleAssetItem(x, y, data) {
    this.assetItems[x][y] = data
  }
}
export default AppState;