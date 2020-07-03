class AlertService {
    constructor() {
        this.errorBox = document.getElementById('error');
    }

    handleAdditionalErrors(inputs, numbers) {
        const fullMessage = inputs.reduce((message, str, index) => {
            if (validInputs(numbers[index])) {
                return message;
            } else {
                return `${message}\n${str} is not a number.`;
            }
        }, 'Please enter two valid numbers!');
        this.errorBox.classList.remove('invisible');
        this.errorBox.innerText = fullMessage;
    }

    hideErrors() {
        this.errorBox.classList.add('invisible');
    }
}