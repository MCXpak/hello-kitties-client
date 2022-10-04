gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const next = document.getElementById('next')
const previous = document.getElementById('previous')
const container = document.getElementById('container')

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

let index = 0;
let questionIndex = 0;

let currentScrollPosition = window.scrollY

let sections = gsap.utils.toArray(".question-div");

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
    const val = document.querySelector('input[name="action1"]:checked').value
    console.log(val)
})

container.addEventListener('scroll', () => {
    console.log(container.scrollTop)
    //This needs to change to view height maybe
    index = Math.floor(container.scrollTop/900)
    console.log(index)
})

const createQuizDiv = () => {

}






