
function loadFunc(){
    console.log('the page is ready');
    document.getElementById("buttonId").addEventListener('click',btnClick);

}

function btnClick(){
    console.log('You clicked the button');
}



window.addEventListener('load',loadFunc);


