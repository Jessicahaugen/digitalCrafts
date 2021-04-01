const form = document.querySelector("form")

const validateName = (name) => {
    console.log(`your name is ${name}`)
    myRegex = /[A-Za-Z] +/
    return myRegex.test(name);

}
form.addEventListener("submit", (event) => {
    const inputField = document.querySelector("#name");
    event.preventDefault()  
    if (!validateName(name.value)){
    event.preventDefault()
   }
})

form.addEventListener("submit", (event) => {
    const textInput = document.querySelector("#bill");
    if (!validateName(textInput.value)) {
      event.preventDefault();
      alert("Please enter in a valid name that doesn't contain letters");
    }
  });