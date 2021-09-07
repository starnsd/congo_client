class ApiService {

  static root = "http://localhost:3000/"
  static level = []
  static locationUrl = "locations/1"

  static locationFetch = () => {
    fetch(`${this.root}${this.locationUrl}`)
      .then(response => response.json() )
      .then(result => this.level.push(result))
    return locationArray;
  }




}