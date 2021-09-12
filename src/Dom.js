class Dom {
  
  static game = document.getElementById("game")
  static form = document.getElementById("form");
  //static canvas = document.getElementById("canvas");
  //static ctx = canvas.getContext("2d");
  //static stats = document.getElementById("stats");
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
        window.orderedFunction(api.createUserFetch(username, email, password, passwordConfirmation), "user", "creating user")
        new Location(api.location)
      } else {
        window.orderedFunction(api.signInUserFetch(username, password), "user", "signing in user")
        new Location(api.location)
      }
    })
  }

  static removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  
}