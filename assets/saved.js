async function getCatsData() {

    const response = await fetch('http://localhost:3000/saved');
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

// displayCatsData();

// Animation
// gsap.from(".cat-box", {
//     duration: 2,
//     scale: 0.5, 
//     opacity: 0, 
//     delay: 0.5, 
//     stagger: 0.2,
//     ease: "elastic", 
//     force3D: true
//   });

 