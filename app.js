const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const categories = {
    dogs: {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },
    cats: {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')
    },
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
    {
        name: "ocicat cat breed",
        region: "EE UU",
        description: ""
    },
    {
        name: "siberian cat breed",
        region: "Rusia",
        description: ""
    },
    {
        name: "bengal cat",
        region: "EE UU",
        description: ""
    },
    {
        name: "chartreux cat breed",
        region: "France, Siria",
        description: ""
    }
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

categories.cats.button.onclick = ()=> {
    if(categories.cats.content.innerHTML){
        categories.cats.content.innerHTML = '';
        
        return;
    }
    catList.forEach(cat =>{
        categories.cats.content.innerHTML += `<li>
            <span>${cat.name}</span>
            <div>region: ${cat.region}</div>
            <div>description: ${cat.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}

