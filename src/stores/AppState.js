import { observable, action, computed } from 'mobx'
import axios from 'axios'
import Config from '../../config'

class AppState {
  @observable items 
  

  constructor() {
    this.authenticated = false
    this.authenticating = false
    this.user = {}
    this.contactItems = [],
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

  @action authenticate(data) {
    this.authenticating = true
    axios.post(Config.baseUrl+'/api/v1/login', data)
    .then((response) => {
      if (response.data.status == 'OK') {
        this.authenticating = false
        this.authenticated = true
        this.user = response.data.message
        localStorage.setItem("backbonelabpropsadmintoken", this.user.token);
      } else {
        this.authenticating = false
        this.authenticated = false
      }
    })
    .catch((response) => {
      this.authenticating = false
      this.authenticated = false
    })
  }

  @action setContactItems() {
    console.log(localStorage.backbonelabpropsadmintoken)
    var instance = axios.create({
      headers: {'X-backbonelabs-key': localStorage.backbonelabpropsadmintoken}
    });

    instance.get(Config.baseUrl+'/api/v1/contact')
    .then((response) => {
      if (response.status == 200) {
        this.contactItems = response.data.message.map((contact) => {
          var birthday = new Date(contact.birthdayDate).toLocaleDateString("en-US");
          return [
            contact._id, 
            contact.name, 
            contact.address, 
            contact.email, 
            contact.religion, 
            birthday
          ]
        });
        console.log(this.contactItems)
      } else {
        console.log(response)
      }
    })
    .catch((response) => {
      console.log(response)
    })
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