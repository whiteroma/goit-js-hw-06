// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя 
// свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inp = document.querySelector('input#font-size-control')
const inpSt = document.querySelector('span#text')

inp.addEventListener('input', event => {
    inpSt.style.fontSize = `${event.currentTarget.value}px`

    console.log(`${event.currentTarget.value}px`)
})
