const calendar = document.getElementById('calendar')
const classes = document.querySelectorAll('.inner-class-div')
const outerClasses = document.querySelectorAll('.outer-class-div')
const desc = document.querySelectorAll('.desc')
const calBookBtn = document.querySelectorAll('.book')
const bookingBtn = document.querySelectorAll('.booking-button')
const bookingDiv = document.querySelector('#booking-container')


console.log(bookingDiv)
console.log(calBookBtn[1])
console.log(bookingBtn[0])

console.log(calendar)
console.log(classes[0])




//Fill the remaining amount of cells
for(let i = 0; i < 54; i++){
    let div = document.createElement('div')
    div.classList.add("time")
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
    classDiv.style.fontSize = "9px"
    classDiv.style.justifyContent = "left"
    classDiv.lastChild.previousElementSibling.style.display = "flex"
    classDiv.lastChild.previousElementSibling.style.flexDirection = "column"
    classDiv.lastChild.previousElementSibling.style.alignItems = "center"
    classDiv.lastChild.previousElementSibling.style.justifyContent = "center"
    classDiv.lastChild.previousElementSibling.style.marginLeft = ""
    
    console.log("hovering")
}

const offHover = (e, classDiv) => {
    classDiv.style.transform = ""
    classDiv.style.textAlign = ""
    classDiv.style.fontSize = ""
    classDiv.style.justifyContent = "center"
    classDiv.lastChild.previousElementSibling.style.display = "none"
    classDiv.lastChild.previousElementSibling.style.flexDirection = ""
    classDiv.lastChild.previousElementSibling.style.alignItems = ""
    classDiv.lastChild.previousElementSibling.style.justifyContent = ""
    classDiv.lastChild.previousElementSibling.style.marginLeft = ""
}

calBookBtn.forEach( val => {
    val.addEventListener('click', e => onCalBook(e))
})

const onCalBook = (e, btn) => {
    bookingDiv.style.display = "flex"
    bookingDiv.style.pointerEvents = "auto"
}

bookingBtn[0].addEventListener('click', e => {
    alert('Booking successful! An email confirming the booking has been sent.')
})

bookingDiv.addEventListener('click', e => {
    //If not the parent div (empty space around form) then don't exit
    if(e.target !== e.currentTarget) return;
    bookingDiv.style.display = "none"
    bookingDiv.style.pointerEvents = "none"
})


/** 
flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px; 
**/

