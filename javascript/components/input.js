const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const sendBtn = document.querySelector('#sendBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const inputs = document.querySelectorAll('input[type=text]');

export default function toggleFormBtnStatus (){
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

    cancelBtn.addEventListener('click', () => {
        sendBtn.classList.remove('activeBtn');
        sendBtn.classList.add('disabledBtn');
    })
}
