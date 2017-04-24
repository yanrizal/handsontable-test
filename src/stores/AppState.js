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
      [1, "rumahku", "Los Angeles Lakers", "2600", "2600", "0.93", "293", "wakabayashi"],
      [2, "rumahku","New York Knicks", "2600", "2600", "0.93", "293", "wakabayashi"],
      [3, "rumahku","Chicago Bulls", "2600", "2600", "0.93", "293", "wakabayashi"],
      [4, "rumahmu","Boston Celtics", "2600", "2600", "0.93", "293", "wakabayashi"],
      [5, "rumahmu","Los Angeles Clippers", "2600", "2600", "0.93", "293", "wakabayashi"],
      [6, "rumahmu","Los Angeles Clippers", "2600", "2600", "0.93", "293", "wakabayashi"],
      [1, "rumahku", "Los Angeles Lakers", "2600", "2600", "0.93", "293", "wakabayashi"],
      [2, "rumahku","New York Knicks", "2600", "2600", "0.93", "293", "wakabayashi"],
      [3, "rumahku","Chicago Bulls", "2600", "2600", "0.93", "293", "wakabayashi"],
      [4, "rumahmu","Boston Celtics", "2600", "2600", "0.93", "293", "wakabayashi"],
      [5, "rumahmu","Los Angeles Clippers", "2600", "2600", "0.93", "293", "wakabayashi"],
      [6, "rumahmu","Los Angeles Clippers", "2600", "2600", "0.93", "293", "wakabayashi"],
    ],
    this.activityItems = [
      [1, 'rumahku', "<a href='/assets/rumahku'>Rumah</a>", "<a href='/rented-assets/rumahku'>Rumah</a>"],
      [2, 'rumahmu', "<a href='/assets/rumahmu'>Rumah</a>", "<a href='/rented-assets/rumahmu'>Rumah</a>"],
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

  @action getAssetItemsById(assetId) {
    return this.assetItems.filter((assetItem) => {
      return assetItem[1] == assetId
    })
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