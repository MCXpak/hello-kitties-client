gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const next = document.getElementById('next')
const previous = document.getElementById('previous')
const container = document.getElementById('container')
const submitButton = document.getElementById('quiz-submit')

let questions = [
    "I often go out to socialise",
    "I seek affection from others",
    "I have/want to have kids",
    "I would enjoy having different pets at home",
    "I am an energetic person",
    "I look after my self image often",
    "I often take pride in looking after others",
    "I consider myself intelligent",
    "I cannot stand mess in my home",
    "I'd rather stay at home than go out",
    "I often like having guests at home",
    "I like my home more loud than quiet"
]

let characteristics = [
    "adaptability", "affection_level", "child_friendly", "dog_friendly", "energy_level", "grooming", "health_issues", "intelligence", "shedding_level", "social_needs", "stranger_friendly", "vocalisation"
]

let index = 0;
let questionIndex = 0;

let currentScrollPosition = window.scrollY

let sections = gsap.utils.toArray(".question-div");

let formAnswerArray = []

//Button to move to next question
next.addEventListener('click', () => {
    if(index < sections.length-1){
        index++;
        console.log(index)
        gsap.to(container, { duration: 1, scrollTo: { y: sections[index], offsetY: container.getBoundingClientRect().height/2 - sections[index].getBoundingClientRect().height/2}})
        console.log(container.getBoundingClientRect().height/2 - sections[index].getBoundingClientRect().height/2)
    }
})

//Button to move to previous question
previous.addEventListener('click', () => {
    if(index > 0){
        index--;
        console.log(index)
        gsap.to(container, { duration: 1, scrollTo: { y: sections[index], offsetY: container.getBoundingClientRect().height/2 - sections[index].getBoundingClientRect().height/2} })
    }
})

const onFormSubmit = () => {
    const valArr = []
    for(let i = 1; i <= sections.length; i++){
        try {
            valArr.push(document.querySelector(`input[name="action${i}"]:checked`).value)
        } catch {
            alert(`Not all quiz questions have been completed, check questions starting from question ${i}`)
            return false
        }
    }
    return valArr
}

submitButton.addEventListener('click', (e) => {
    sendData(e)
})

const sendData = async (e) => {
    e.preventDefault()
    formAnswerArray = onFormSubmit()
    if(!formAnswerArray){
        console.log("Cannot send data, incomplete quiz...")
    } else {
        console.log(formAnswerArray)
        //let testArr = ['3', '4', '2', '4', '5', '1', '3', '5', '2', '4', '5', '4']
        let obj = createDataObject(formAnswerArray)
        console.log(obj)

        const options = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }

        const res = await fetch("http://localhost:3000/matching", options)
        console.log(res)
        window.location.href = ("http://localhost:5500/matching.html")
    }
}

container.addEventListener('scroll', () => {
    let boundary = sections[index].getBoundingClientRect()
    if(boundary.top < 0) {
        index++
        console.log(index)
    } else if (index-1 >= 0) {
        if (sections[index-1].getBoundingClientRect().top > 0 ){
            index--
            console.log(index)
       }
    }
    //Check if next and previous should be shown based on question
    if (index == 0){
        previous.style.opacity = 0;
        previous.style.pointerEvents = "none";
    } else {
        previous.style.opacity = 1;
        previous.style.pointerEvents = "auto";
    }
    if(index == sections.length-1){
        submitButton.style.opacity = 1;
        submitButton.style.pointerEvents = "auto";  
        next.style.opacity = 0;
        next.style.pointerEvents = "none"; 
    } else {
        next.style.opacity = 1;
        next.style.pointerEvents = "auto"; 
    }

})

const createDataObject = (arr) => {
    const obj = {}
    arr.forEach((val, index) => {
        obj[`${characteristics[index]}`] = Number(val)
    })
    return obj
}





