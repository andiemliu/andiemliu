// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {  
    
  
    // add class navbarDark on navbar scroll
    const menu = document.querySelector('.menu-container');

    window.onscroll = function() {
        var top = window.scrollY;
        if(top >=40) {
            menu.classList.add('menu-container-dark');
        }
        else {
            menu.classList.remove('menu-container-dark');
        }
    }
  
    const projLink = document.querySelector('.proj-link');
    projLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (e.g., navigating to a different page)
        event.preventDefault();

        // Get the target section element
        const targetSection = document.getElementById("projects");

        // Calculate the desired scroll position (adjust the value as needed)
        const offset = 20; // You can change this value to control how far past the section the scroll goes
        const scrollPosition = targetSection.offsetTop - offset;

        // Scroll to the target section with the desired position
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });

    const expLink = document.querySelector('.exp-link');
    expLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (e.g., navigating to a different page)
        event.preventDefault();
        // Get the target section element
        const targetSection = document.getElementById("experience");

        // Calculate the desired scroll position (adjust the value as needed)
        const offset = 20; // You can change this value to control how far past the section the scroll goes
        const scrollPosition = targetSection.offsetTop - offset;

        // Scroll to the target section with the desired position
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
  });
  