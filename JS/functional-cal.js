


// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

// reusable set Element text value
function setElementTextValue(elementId, showingValue){
    const element = document.getElementById(elementId);
    element.innerText = showingValue;
}
