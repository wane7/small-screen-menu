
// Get the button that opens the modal
let button = document.getElementById("btn").addEventListener('click', openNav);

// When the user clicks the button, open the modal 
//function for button
 function openNav () {
    
    let navBar = document.getElementById('nav_bar');
    if(navBar.style.display==='none') 
    {navBar.style.display = "block";
    }else {
        navBar.style.display='none';
    }
};



 


