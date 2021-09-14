class Dom {
  
  static game = document.getElementById("game")
  static form = document.getElementById("form");
  static canvas = document.getElementById("canvas");
  static ctx = canvas.getContext("2d");
  static stats = document.getElementById("stats");
  static populateNewForm() {
    this.removeAllChildNodes(this.form)
    let form = document.createElement("form")
    form.method = "post";
    form.id = "formpop";
    let formFields = `
    <label for="username">Enter Desired Username:</label><br>
    <input type="text" name="username" id="username"><br>
    <label for="email">Please Enter Your Email:</label><br>
    <input type="text" name="email" id="email"><br>
    <label for="password">Please Enter New Password:</label><br>
    <input type="password" name="password" id="password"><br>
    <label for="password_confirmation">Confirm New Password:</label><br>
    <input type="password" name="password_confirmation" id="password_confirmation"><br>
    <input type="submit" value="Submit">
    `
    form.innerHTML += formFields
    this.form.appendChild(form)
    this.formEventListen();
  }

  static populateSignInForm = () => {
    this.removeAllChildNodes(this.form)
    let form = document.createElement("form");
    form.method = "post";
    form.id = "formpop";
    let formFields = `
    <label for="username">Username:</label><br>
    <input type="text" name="username" id="username"><br>
    <label for="password">Password:</label><br>
    <input type="password" name="password" id="password"><br>
    <input type="submit" value="Submit">
    `
    form.innerHTML += formFields
    this.form.appendChild(form);
    this.formEventListen();
  }

  static populateNav = () => {
    this.removeAllChildNodes(this.form)
    let nav = document.createElement("nav")
    nav.innerHTML += `<a href="www.google.com" id="login">Log In!</a> OR <a href="www.google.com" id="signup">Sign Up!</a>`
    this.form.appendChild(nav);
    document.getElementById("login").addEventListener("click", (e) => {e.preventDefault(); Dom.populateSignInForm()})
    document.getElementById("signup").addEventListener("click", (e) => {e.preventDefault(); Dom.populateNewForm()})
  }

  static formEventListen = () => {
    let theForm = document.getElementById("formpop")
    theForm.addEventListener("submit", (e) => {
      e.preventDefault()
      let username = document.getElementById("username").value
      let password = document.getElementById("password").value
      if (!!document.getElementById("email")) {
        let email = document.getElementById("email").value
        let passwordConfirmation = document.getElementById("password_confirmation").value
        orderedFunction(api.createUserFetch, "user", "creating user", username, email, password, passwordConfirmation)
        if (Location.all.length < 1) {
          new Location(api.location)
        }
        this.populateGame()
      } else {
        orderedFunction(api.signInUserFetch, "user", "signing in user", username, password)
        if (Location.all.length < 1) {
          new Location(api.location)
        }
        this.populateGame()
      }
    })
  }

  static removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  static movement() {
      document.body.addEventListener("keydown", function(e) {
        let player = (van.isDriving ? van : Driver.all[0] )
        if (!game.paused) {
          player.move(e.keyCode);
        }
        if (!van.isDriving && player instanceof Driver) {
          van.buckleUp(player);
          House.all.forEach(house => house.makeDelivery(player))
        }
        Location.all[0].stateChange = true
        Location.all[0].paint()
      })
  }

  static populateGame() {
    this.removeAllChildNodes(this.form);
    let startButton = document.createElement("button")
    game.paused = true
    startButton.innerText = "start";
    startButton.id = "startButton";
    this.form.appendChild(startButton);
    document.getElementById("startButton").addEventListener("mouseup", (e) => {
      this.removeAllChildNodes(this.stats)
      if (api.user.id) {
        game.paused = !game.paused;
        e.target.innerText = (!!game.paused ? "start" : "pause")
        let user = document.createElement("p")
        let userName = `Logged in as: <strong id="user">${api.user.username}</strong> | `
        let timeRemain = `Time Remaining: <strong id="counter">${Location.all[0].timer}</strong> | `
        let currentScore = `Current Score: <strong id="score">${game.score}</strong> | `
        let deliveries = `Deliveries Remaining: <strong id="deliveries">${Location.all[0].deliveries()}<strong>`
        user.innerHTML = userName + timeRemain + currentScore + deliveries;
        Dom.stats.appendChild(user);
      } else {
        alert("Invalid Username/Password")
        Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
        this.populateNav();
      }
    })
  }

  static refresh() {
    if (Location.all.length > 0) {
      let location = Location.all[0];
      if (!(game.paused || location.gameOver)) {
        location.timer --;
        document.getElementById("counter").innerText = `${Location.all[0].timer}`;
        document.getElementById("score").innerText = `${game.score}`;
        document.getElementById("deliveries").innerText = `${Location.all[0].deliveries()}`
        location.isGameOver();
      }
    }
  }
  
}