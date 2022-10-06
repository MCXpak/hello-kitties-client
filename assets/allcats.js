async function getCatsData() {

    const response = await fetch('http://localhost:3000/cats');
    const cats = await response.json();
    return cats;
    
};

async function displayCatsData() {

    const cats = await getCatsData();
    console.log(cats)
    const catNames = document.getElementsByClassName('cat-name');
    const catImg = document.getElementsByClassName('cat-img');
    const catGender = document.getElementsByClassName('gender');
    const catAge = document.getElementsByClassName('age');
    const catColor = document.getElementsByClassName('color');
    const catFavFood = document.getElementsByClassName('favFood');
    const catBreed = document.getElementsByClassName('cat-breed');
    //console.log("catName", catName)

    for (let i = 0; i < 9; i++) {
        //console.log(cat["name"])
        //console.log("hi", catNames[i])
        //console.log("hey", cats[i])
        catNames[i].innerHTML = cats[i]['name'];
        //document.appendChild(catName)
        //console.log(catImg);
        catImg[i].src = cats[i]['url'];
        catGender[i].innerHTML = 'Gender: ' + cats[i]['gender'];
        catAge[i].innerHTML = 'Age: ' + cats[i]['age'];
        catColor[i].innerHTML = 'Color: ' + cats[i]['color'];
        catFavFood[i].innerHTML = 'Favourite food: ' + cats[i]['favFood']; 
        // console.log(catBreed[i]);
        // console.log(cats[i]['breed'])
        catBreed[i].innerHTML = 'Breed: ' + cats[i]['breed'];        
    }
}

displayCatsData();

let pawButton = document.getElementById('button'); 

function randomNumbers(catsLength) {
    let arrOfNine = [];
    while (arrOfNine.length < 9) {
        randIndex = Math.floor(Math.random() * catsLength)
        if(arrOfNine.indexOf(randIndex) === -1) arrOfNine.push(randIndex)
    }
    return arrOfNine;
}

async function randomCats() {
    const cats = await getCatsData();
    const newCats = [];
    let arrOfNineIndexList = randomNumbers(cats.length);
    
    for (let i = 0; i < arrOfNineIndexList.length; i++) {
        arrOfNineIndex = arrOfNineIndexList[i];
        newCats.push(cats[arrOfNineIndex]);
    }
    return newCats;
}

// console.log(randomCats());
randomCats().then((newCats) => {
    console.log("newCats: ", newCats);
})

async function displayNineRandomCats() {
    
    const newCats = await randomCats();
    console.log("in the function", newCats)
    const catNames = document.getElementsByClassName('cat-name');
    const catImg = document.getElementsByClassName('cat-img');
    const catGender = document.getElementsByClassName('gender');
    const catAge = document.getElementsByClassName('age');
    const catColor = document.getElementsByClassName('color');
    const catFavFood = document.getElementsByClassName('favFood');
    const catBreed = document.getElementsByClassName('cat-breed');

    for (let i = 0; i < newCats.length; i ++) {
        catNames[i].innerHTML = newCats[i]['name'];
        catImg[i].src = newCats[i]['url'];
        catGender[i].innerHTML = 'Gender: ' + newCats[i]['gender'];
        catAge[i].innerHTML = 'Age: ' + newCats[i]['age'];
        catColor[i].innerHTML = 'Color: ' + newCats[i]['color'];
        catFavFood[i].innerHTML = 'Favourite food: ' + newCats[i]['favFood'];
        catBreed[i].innerHTML = 'Breed: ' + newCats[i]['breed'];
    }
}

pawButton.addEventListener('click', displayNineRandomCats);

// Animation
gsap.from(".cat-box", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
  });

 