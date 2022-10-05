function getCatId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id;
}


async function getMonsterbyID(id) {

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

async function displayMonsterData(id){
    const cat = await getMonsterbyID(id);

    const ul = document.querySelector('ul');

    for (let key in cat){
        const li = document.createElement('li');
        li.textContent = `${key}: ${cat[key]}`;
        ul.appendChild(li);
    }

}

const catId = getCatId();
displayMonsterData(catId)

