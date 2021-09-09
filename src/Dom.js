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
  }

  static populateSignInForm() {
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
    form.innerHtml += formFields
    this.form.appendChild(form);
  }

  static removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  
}