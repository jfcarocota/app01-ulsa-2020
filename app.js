const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const categories = {
    dogs: {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },
    cats: document.getElementById('cats'),
    mices: document.getElementById('mices')
}

let dogList = [
    {
        name: "chihuahua",
        region: "mexico",
        description: "A tiny noise dog"
    },
    {
        name: "beagle",
        region: "england",
        description: "A medium hunting dog"
    },
    {
        name: "german shepherd",
        region: "germany",
        description: "Big dog for farm work"
    },
    {
        name: "huskey",
        region: "siberia",
        description: "Big dog for recue work in gelid wather"
    }
];

let catList = [
    "ocicat cat breed",
    "siberian cat breed",
    "bengal cat",
    "chartreux cat breed"
];

categories.dogs.button.onclick = ()=> {
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        
        return;
    }
    dogList.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>description: ${dog.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}

