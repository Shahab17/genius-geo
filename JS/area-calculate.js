function triangleCalculate(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText);
    
    // height field 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);
   
    // show area
    const area = 0.5 * baseValue * heightValue;
     
    const areaShow = document.getElementById('area-show');
    areaShow.innerText = area;   
}

function rectangleCalculate(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const widthValue = parseFloat(widthValueText);
    
    // length value 
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value ;
    const lengthValue = parseFloat(lengthValueText);
    console.log(widthValue, lengthValue)

    // show area
    const area = widthValue * lengthValue;

    const areaShow = document.getElementById('rec-area-show');
    areaShow.innerText = area;
     
}


// parallelogram calculate
function parallelCalculate(){
    const base = getInputValue('parallel-base')
    const height = getInputValue('parallel-height')
    const area = base * height;
    setElementTextValue('para-area-show', area)
}

// Ellipse calculate
function ellipseCalculate(){
    const majorRadius = getInputValue('ellipse-major')
    const minorRadius = getInputValue('ellipse-minor')
    const area = 3.14 * majorRadius * minorRadius;
    setElementTextValue('ellipse-area-show', area)
}