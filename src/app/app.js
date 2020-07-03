const alertService = new AlertService();
const componentService = new ComponentService();

const run = (alertService, componentService) => {
    alertService.hideErrors();

    componentService.onClick(() => {
        alertService.hideErrors();
            
        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);
        
        if (validInputs(...parsedInputs)) {
            alertService.hideErrors();
            const [a, b] = parsedInputs;
            componentService.setResult(a + b);
        } else {
            componentService.setResult('');
            alertService.handleAdditionalErrors(inputs, parsedInputs);
        }
    });
}

run(alertService, componentService);