gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const next = document.getElementById('next')
const previous = document.getElementById('previous')
const container = document.getElementById('container')

let index = 0;
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
})

// gsap.to('#container', {
//     ease: 'none',
//     scrollTrigger: {
//         onUpdate: self => {
//             console.log(self.direction)
//         }
//     }
// })


container.addEventListener('scroll', () => {
    console.log(container.scrollTop)
    index = Math.floor(container.scrollTop/820)
    console.log(index)
})

// gsap.to(sections[1], {
//     scrollTrigger: {
//         trigger: sections[1],
//     }
// })







