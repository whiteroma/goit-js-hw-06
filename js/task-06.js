// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const inp = document.querySelector('#validation-input')

inp.addEventListener('blur', event => {
    
    if (event.currentTarget.value.length <= inp.getAttribute('data-length')) {
        inp.classList.add('valid');
        if (inp.classList.contains('invalid')) {
            inp.classList.remove('invalid')
        }
    }
    else {
        if (inp.classList.contains('valid')) {
            inp.classList.remove('valid')
        }
        inp.classList.add('invalid')
    }
})