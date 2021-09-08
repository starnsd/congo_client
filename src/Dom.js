class Dom {
  
  static game = document.getElementById("game")
  static form = document.getElementById("form");
  //static canvas = document.getElementById("canvas");
  //static ctx = canvas.getContext("2d");
  //static stats = document.getElementById("stats");
  static populateNewForm() {
    let form = document.createElement("form")
    form.method = "post";
    form.id = "formpop";

    let formFields = `
    <label for="username">Enter Desired Username:</label><br>
    <input type="text" name="username"><br>
    <label for="email">Please Enter Your Email:</label><br>
    <input type="text" name="email"><br>
    <label for="password">Please Enter New Password:</label><br>
    <input type="password" name="password"><br>
    <label for="password_confirmation">Confirm New Password:</label><br>
    <input type="password" name="password_confirmation"><br>
    <input type="submit" value="Submit">
    `
    form.innerHTML += formFields
    this.form.appendChild(form)
    console.log(form)
  }
  
}