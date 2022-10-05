const calendar = document.getElementById('calendar')

console.log(calendar)

for(let i = 0; i < 54; i++){
    let div = document.createElement('div')
    div.style.backgroundColor = "#fdfaee"
    calendar.appendChild(div)
}
