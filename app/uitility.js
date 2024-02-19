function hide(elementId){
    document.getElementById(elementId).classList.add('hidden');
}
function show(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}
// add background color
//  function setBackgroundColor (elementId){
//      document.getElementsByClassName(elementId).style.backgroundColor ='#1DD100';
//  }
//get innertext
function getInnerText(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
function setInnerText(elementId,value){
    const element = document.getElementById(elementId);
     element.innerText = value;
}


// //
// function setBackgroundColor(elementId) {
//     // Get all elements with the specified class name
//     const elements = document.getElementById(elementId);
//    //const element = elements.innerText;
//    console.log(elements);
// }

