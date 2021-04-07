const accessMain = document.querySelector(".main");
const buttonPPL = document.querySelector("#btnPeople");
const buttonPLC = document.querySelector("#btnPlaces");
accessCardDiv = document.querySelector(".card-container");
let intro = document.querySelector(".home");
let dog = document.querySelector(".dog")

const getPeople = async () => {
    let retrievePPL = await fetch("https://fakerapi.it/api/v1/persons?_quantity=31&_gender=male_female");
    let convertPPL = await retrievePPL.json();
    console.log(convertPPL);
   
 
    for (let person of convertPPL.data) { 
        let container = document.createElement("div");
        container.id = "card";
        let userName = document.createElement("h2");
        userName.innerHTML = person.firstname + " " + person.lastname;
        let phone = document.createElement("h4");
        phone.innerHTML="Phone: " + person.phone;
        let email = document.createElement("h4");
        email.innerHTML="Email: " + person.email;
        let personImage = document.createElement("img");
        personImage.height = "170";
        personImage.width ="190";
        personImage.src = "http://placeimg.com/640/480/people";
       container.append(userName, personImage,phone,email);
       accessMain.append(container);
    }
}
const getPlaces = async () => {
    let retrievePLC = await fetch("https://fakerapi.it/api/v1/images?_quantity=31_type=people");
    let convertPLC = await retrievePLC.json();
    console.log(convertPLC);
   
   
    for(let place of convertPLC.data) {
        let container = document.createElement("div");
        container.id = "card";
        let newPlace = document.createElement("h2");
        newPlace.innerHTML=place.title;
        let description = document.createElement("p");
        description.innerHTML = place.description;
        let archImage = document.createElement("img");
        archImage.height = "170";
        archImage.width = "190";
        archImage.src = place.url;
        container.append(archImage,newPlace,description);
        accessMain.append(container);

    }
}



buttonPPL.addEventListener('click', function() {
    getPeople();
    intro.innerText = "People";
    dog.innerHTML ="";
    

});

buttonPLC.addEventListener('click', function() {
    getPlaces();
    intro.innerHTML = "Places";
    dog.innerHTML ="";
});


