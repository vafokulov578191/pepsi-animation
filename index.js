import {cars} from './modules/db.js'
let places = {
    one: document.querySelector('.one'),
    two: document.querySelector('.two'),
    three: document.querySelector('.three')
}
let showMoreBtns = document.querySelectorAll('a[data-slice]')

let arrays = {
    one: [],
    two: [],
    three: []
}


cars.map(item => {
    let year = 2022 - item.year
    if(year < 15) {
        arrays.one.push(item)
    } else if(year > 15 && year < 25) {
        arrays.two.push(item)
    }  else {
        arrays.three.push(item)
    }
})




let reload = (arr, place) => {
    place.innerHTML = ''

    for(let item of arr) {
        place.innerHTML +=  `
            <div class="box">
                <div class="info">
                    <p class="name">${item.manufacturer}</p>
                    <span class="model">${item.model}</span><br>
                </div>
                <div class="kuzof">
                    <p class="Vin">VIN:</p>
                    <p class="nomer">${item.vin}</p>
                </div>
                <div class="god">
                    <p class="Year">YEAR:</p>
                    <p class="chislo">${item.year}</p>
                </div>
                <button class="btn">Подробнее</button>
            </div>
        `
    }
}

showMoreBtns.forEach(item => {
    item.onclick = () => {
        let key = item.getAttribute('data-slice')

        let sliced = arrays[key].slice(0,16)

        reload(sliced, places[key])
    }
})

reload(arrays.one.slice(0,5), places.one)
reload(arrays.two.slice(0,5), places.two)
reload(arrays.three.slice(0,5), places.three)