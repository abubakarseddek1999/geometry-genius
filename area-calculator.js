function calculatorTriangleArea(){
    const baseField =document.getElementById('triangle-base');
    const baseFieldString =baseField.value;
    const baseNumber =parseFloat(baseFieldString);
    console.log(baseNumber)

    const heightField =document.getElementById('triangle-height');
    const heightFieldString =heightField.value;
    const heightNumber =parseFloat(heightFieldString);
    console.log(heightNumber)

    const area = 0.5 * baseNumber * heightNumber;
    const areaSpan =document.getElementById('triangle-area');
    areaSpan.innerText = area;


}

function calculatorRectangleArea(){
    const widthField =document.getElementById('rectangle-width');
    const widthFieldString =widthField.value;
    const widthNumber =parseFloat(widthFieldString);
    console.log(widthNumber)

    const lengthField =document.getElementById('rectangle-length');
    const lengthFieldString =lengthField.value;
    const lengthNumber =parseFloat(lengthFieldString);
    console.log(lengthNumber)

    const area =widthNumber * lengthNumber ;
    const rectangleArea =document.getElementById('rectangle-area')
    rectangleArea.innerText = area



}