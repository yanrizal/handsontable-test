import { observable, action, computed } from 'mobx'
import axios from 'axios'

class AppState {
  @observable items 
  

  constructor() {
    this.baseUrl = "http://handsontable.com/static/";
    this.items = [
      [1,"Los Angeles Lakers","<img src='"+ this.baseUrl+ "images/logos/nba-teams/lakers.gif'>","2600","0.93","0.02","293","104.1"],
      [2,"New York Knicks","<img src='"+ this.baseUrl+ "images/logos/nba-teams/knicks.gif'>","2500","0.79","0.00","278","53.4"],
      [3,"Chicago Bulls","<img src='"+ this.baseUrl+ "images/logos/nba-teams/bulls.gif'>","2000","0.100","0.03","201","65.3"],
      [4,"Boston Celtics","<img src='"+ this.baseUrl+ "images/logos/nba-teams/celtic.gif'>","1700","0.94","0.09","173","54.9"],
      [5,"Los Angeles Clippers","<img src='"+ this.baseUrl+ "images/logos/nba-teams/clippers.gif'>","1600","0.178","0.00","146","20.1"],
      [6,"Brooklyn Nets","<img src='"+ this.baseUrl+ "images/logos/nba-teams/nets.gif'>","1500","0.92","0.019","212","-99.4"],
      [7,"Golden State Warriors","<img src='"+ this.baseUrl+ "images/logos/nba-teams/warriors.gif'>","1300","0.73","0.012","168","44.9"],
      [8,"Houston Rockets","<img src='"+ this.baseUrl+ "images/logos/nba-teams/rockets.gif'>","1250","0.61","0.08","175","38"],
      [9,"Miami Heat","<img src='"+ this.baseUrl+ "images/logos/nba-teams/heat.gif'>","1175","0.53","0.08","188","12.6"],
      [10,"Dallas Mavericks","<img src='"+ this.baseUrl+ "images/logos/nba-teams/mavericks.gif'>","1150","0.50","0.017","168","30.4"],
      [11,"San Antonio Spurs","<img src='"+ this.baseUrl+ "images/logos/nba-teams/spurs.gif'>","1000","0.52","0.08","172","40.9"],
      [12,"Portland Trail Blazers","<img src='"+ this.baseUrl+ "images/logos/nba-teams/blazers.gif'>","940","0.60","0.011","153","11.7"],
      [13,"Oklahoma City Thunder","<img src='"+ this.baseUrl+ "images/logos/nba-teams/thunder.gif'>","930","0.58","0.015","152","30.8"],
      [14,"Toronto Raptors","<img src='"+ this.baseUrl+ "images/logos/nba-teams/raptors.gif'>","920","0.77","0.016","151","17.9"],
      [15,"Cleveland Cavaliers","<img src='"+ this.baseUrl+ "images/logos/nba-teams/cavaliers.gif'>","915","0.78","0.022","149","20.6"],
      [16,"Phoenix Suns","<img src='"+ this.baseUrl+ "images/logos/nba-teams/suns.gif'>","910","0.61","0.020","145","28.2"],
      [17,"Washington Wizards","<img src='"+ this.baseUrl+ "images/logos/nba-teams/wizards.gif'>","900","0.86","0.014","143","10.1"],
      [18,"Orlando Magic","<img src='"+ this.baseUrl+ "images/logos/nba-teams/magic.gif'>","875","0.56","0.017","143","20.9"],
      [19,"Denver Nuggets","<img src='"+ this.baseUrl+ "images/logos/nba-teams/nuggets.gif'>","855","0.73","0.01","136","14"],
      [20,"Utah Jazz","<img src='"+ this.baseUrl+ "images/logos/nba-teams/jazz.gif'>","850","0.62","0.06","142","32.7"],
      [21,"Indiana Pacers","<img src='"+ this.baseUrl+ "images/logos/nba-teams/pacers.gif'>","830","0.75","0.018","139","25"],
      [22,"Atlanta Hawks","<img src='"+ this.baseUrl+ "images/logos/nba-teams/hawks.gif'>","825","0.94","0.021","133","14.8"],
      [23,"Detroit Pistons","<img src='"+ this.baseUrl+ "images/logos/nba-teams/pistons.gif'>","810","0.80","0.023","144","17.6"],
      [24,"Sacramento Kings","<img src='"+ this.baseUrl+ "images/logos/nba-teams/kings.gif'>","800","0.45","0.029","125","8.9"],
      [25,"Memphis Grizzlies","<img src='"+ this.baseUrl+ "images/logos/nba-teams/memphis.gif'>","750","0.66","0.023","135","10.5"],
      [26,"Charlotte Hornets","<img src='"+ this.baseUrl+ "images/logos/nba-teams/hornets.gif'>","725","0.77","0.021","130","1.2"],
      [27,"Philadelphia 76ers","<img src='"+ this.baseUrl+ "images/logos/nba-teams/76ers.gif'>","700","0.49","0.021","125","24.4"],
      [28,"New Orleans Pelicans","<img src='"+ this.baseUrl+ "images/logos/nba-teams/orleans.gif'>","650","0.55","0.019","131","19"],
      [29,"Minnesota Timberwolves","<img src='"+ this.baseUrl+ "images/logos/nba-teams/timberwolves.gif'>","625","0.45","0.016","128","6.9"],
      [30,"Milwaukee Bucks","<img src='"+ this.baseUrl+ "images/logos/nba-teams/bucks.gif'>","600","0.48","0.029","110","11.5"]
    ]
  }

  @action getItems() {
    return this.items
  }

  @action setSingle(x, y, data) {
    console.log('apeng')
    this.items[x][y] = data
  }
}
export default AppState;