class ApiService {

  constructor(root, locationShow) {
    this.root = root
    this.locationShow = locationShow
  }

  async locationFetch() {
    let response = await fetch(`${this.root}${this.locationShow}`)
                          .then(response => response.json() )
                          //.catch(window.alert("The server is down.  Please try again later."))
    return response
  }

}