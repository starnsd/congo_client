class ApiService {

  static root = "http://localhost:3000/"

  static locationUrl = "locations/1"

  static locationFetch = () => {
    let result = []
    fetch(`${this.root}${this.locationUrl}`)
      .then(response =>  response.json())
      .then(data => console.log(`this is my data: ${Object(data)}`))
      .catch(error => console.log(`this error: ${error}`))
      console.log(`the result is ${response}`)
  }




}