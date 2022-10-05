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

//Button to move to
next.addEventListener('click', () => {
    if(index < sections.length-1){
        index++;
        console.log(index)
        gsap.to(container, { duration: 1, scrollTo: { y: sections[index], offsetY: window.innerHeight/2 - 210 } })
    }
})

previous.addEventListener('click', () => {
    if(index > 0){
        index--;
        console.log(index)
        gsap.to(container, { duration: 1, scrollTo: { y: sections[index], offsetY: window.innerHeight/2 - 210 } })
    }
})

const onFormSubmit = () => {
    const valArr = []
    for(let i = 1; i <= sections.length; i++){
        valArr.push(document.querySelector(`input[name="action${i}"]:checked`).value)
    }
    return valArr
}

submitButton.addEventListener('click', (e) => {

})

const sendData = async (e) => {
    e.preventDefault()
    formAnswerArray = onFormSubmit()
    console.log(formAnswerArray)
    let testArr = ['3', '4', '2', '4', '5', '1', '3', '5', '2', '4', '5', '4']
    let obj = createDataObject(formAnswerArray)
    console.log(obj)

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    }

    const res = await fetch("http://localhost:3000/matching", options)
    console.log(res.json())
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
    if(index == sections.length-1){
        submitButton.style.opacity = 1;
    }
})

const createDataObject = (arr) => {
    const obj = {}
    arr.forEach((val, index) => {
        obj[`${characteristics[index]}`] = Number(val)
    })
    return obj
}


//localhost:3000/matching





