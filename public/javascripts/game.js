var buttonsPushed = [];

document.addEventListener('buttonPushed', (b) => { 
    buttonsPushed.push(b);
    console.log(buttonsPushed);
 }, false);