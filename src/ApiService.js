class ApiService {

  constructor(root, locationShow) {
    this.root = root
    this.locationShow = locationShow
  }

  locationFetch = () => {
    return fetch(`${this.root}${this.locationShow}`)
       .then(response => response.json() )
       .then(result => result)
       .catch(error => alert(error))
  }

  createUserFetch = (userName, emailValue, passwordValue, passwordConfirmation) => {
    return fetch(`${this.root}/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {username: userName, email: emailValue, password: passwordValue, password_confirmation: passwordConfirmation}})
    }).then( response => response.json() )
      .then(result => result)
  }

  signInUserFetch = (userName, passwordValue) => {
    return fetch(`${this.root}/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {username: userName, password: passwordValue}})
    }).then(response => response.json())
      .then(result => result)
  }

  endGameFetch = (userId, score, locationId, userName) => {
    return fetch(`${this.root}/users/${userId}/scores`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({score: {user_id: userId, points: score, location_id: locationId, username: userName}})
    }).then(response => response.json())
      .then(result => result)
  }
      
}