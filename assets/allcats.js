async function getCatsData() {

    const response = await fetch('http://localhost:3000/cats');
    const cats = await response.json();
    return cats;
    
};


async function displayCatsData() {

    const cats = await getCatsData();
    console.log(cats)
    const catName = document.getElementById('cat-name');
    
    for (let cat of cats) {
        console.log(cat["name"])
        catName.innerHTML = cat['name'];
    }
    
        
    
        

}

displayCatsData();






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

 