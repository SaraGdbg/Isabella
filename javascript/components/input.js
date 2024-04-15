const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const sendBtn = document.querySelector('#sendBtn');
const inputs = document.querySelectorAll('input[type=text]');

export function toggleFormBtnStatus (){
    inputs.forEach((field) => {
        field.addEventListener('keydown',() => {
            if (nameInput.value && emailInput.value) {
                sendBtn.classList.remove('disabledBtn');
                sendBtn.classList.add('activeBtn');
            } else {
                sendBtn.classList.remove('activeBtn');
                sendBtn.classList.add('disabledBtn');
            }
        });
    })
}

export function resetFormValues () {
    const buttons = document.querySelectorAll('.formBtn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            sendBtn.classList.remove('activeBtn');
            sendBtn.classList.add('disabledBtn');
            inputs.forEach((field) => {field.value = ''})
        })
    })
}