


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

// add to calculation entry function
/* 
    1. get the element where you want to add the dynamic HTML
    2. create an element you want to add
    3. if needed add some class
    4. set innerHTML it could be dynamic Template String
    5. append the created element as a child of the parent
*/
function addToCalculationEntry(areaType, area){
    console.log(areaType + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p')
    p.classList.add('m-4')
    p.innerHTML = `${count + 1}.  ${areaType}  ${area}  cm<sup>2</sup>  <button class="btn btn-success btn-sm">Convert</button> `;

    calculationEntry.appendChild(p);

}
