function getCatId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id;
}


async function getCatbyID(id) {

    try {
        // reach out to the API
        const res = await fetch(`http://localhost:3000/cats/${id}`)
        // Extract the beast data from the response
        const data = await res.json();
        //Return the data
        return data;
        
    } catch (error) {
        console.log(error);
    }

}

// async function displayCatData(id){
//     const cat = await getCatbyID(id);
//     const img = document.querySelector('#cat')
//     img.src = `${cat.url}`;
//     const div = document.querySelector('#cat-info');
//     const ul = document.createElement('ul')
//     ul.classList.add('cat-data')
//     document.querySelector('#cat-name').textContent = cat.name;
    

//     for (let key in cat){
//         const li = document.createElement('li');
//         li.textContent = `${key}: ${cat[key]}`;
//         ul.appendChild(li);
//     }
//     div.appendChild(ul)

// }


async function displayData(id){
    const cat = await getCatbyID(id);
    const catImg = document.querySelector('#cat');
    catImg.src = `${cat.url}`;

    const catInfoDiv = document.querySelector('#cat-info');
    const ul = document.createElement('ul');
    ul.classList.add('cat-data')

    const catName = document.querySelector('#cat-name');
    catName.textContent = cat.name;

    for (let key in cat){
        console.log(key);
        if(key !== "name" && key !== "id" && key !== "url"){
            const li = document.createElement('li');
            li.classList.add('cat-stat')
            //key = capitalise(key);
            console.log(key[0])
            li.textContent = `${key}: ${cat[key]}`
            ul.appendChild(li);
        }
    }
    catInfoDiv.appendChild(ul);
}



function capitalise(key){
    
    let fletter = key.charAt(0);
    fletter = fletter.toUpperCase();
    const rest = key.slice(1);
    return fletter + rest

}

const catId = getCatId();
displayData(catId)

