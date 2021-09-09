class ApiService {

  constructor(root, locationShow) {
    this.root = root
    this.locationShow = locationShow
  }

  async locationFetch() {
    let response = await fetch(`${this.root}${this.locationShow}`)
                          .then(response => response.json() )
                          .catch(window.alert("The server is down.  Please try again later."))
    return response
  }

  createUserFetch(userName, emailValue, passwordValue, passwordConfirmation) {
    fetch(`${this.root}/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {username: userName, email: emailValue, password: passwordValue, password_confirmation: passwordConfirmation}})
    }).then(result => console.log(result.json()))
      .catch(error => window.alert(error.json()))
  }

  signInUserFetch(userName, passwordValue) {
    fetch(`${this.root}/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {username: userName, password: passwordValue}})
    }).then(result => result.json())
      .catch(error => window.alert(error.json()))
  }
      
}