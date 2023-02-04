// Js detect the all error in code
'use strict';

const switcher = document.querySelector(".btn");

switcher.addEventListener('click', () => {
    // Toggle to modidfied body class
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    
    // Update button at theme
    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    // Give the current class in console
    console.log('current class name: ' + className);
});