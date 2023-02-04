// Js detect the all error in code
'use strict';

const getElement = document.querySelector(".btn");

getElement.addEventListener('click', () => {
    // Toggle to modidfied body class
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    
    // Update button at theme
    const getClassName = document.body.getClassName;
    if (getClassName == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    // Give the current class in console
    console.log('current class name: ' + getClassName);
});

/** By Ange Tia */