export class ComponentService {
    constructor() {
        this.first = document.getElementById('numberOne');
        this.second = document.getElementById('numberTwo');
        this.operatorbutton = document.getElementById('addValues');
        this.result = document.getElementById('result')
    }

    getInputs() {
        return [this.first.value, this.second.value];
    }

    setResult(str) {
        this.result.innerText = str;
    }

    onClick(callBack) {
        this.operatorbutton.addEventListener('click', callBack);
    }
}