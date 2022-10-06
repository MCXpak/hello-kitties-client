const calendar = document.getElementById('calendar')
const classes = document.querySelectorAll('.inner-class-div')

console.log(calendar)
console.log(classes[0])

//Fill the remaining amount of cells
for(let i = 0; i < 54; i++){
    let div = document.createElement('div')
    div.classList.add("outer-class-div")
    div.style.backgroundColor = "#fdfaee"
    calendar.appendChild(div)
}

classes.forEach(val => {
    console.log(val)
    val.addEventListener('mouseover', e => onHover(e,val))
    val.addEventListener('mouseout', e => {offHover(e, val)})
    
})

const onHover = (e,classDiv) => {
    classDiv.style.transform = "scale(2)"
    classDiv.style.textAlign = "left"
    console.log("hovering")
}

const offHover = (e, classDiv) => {
    classDiv.style.transform = ""
    classDiv.style.textAlign = ""
}
