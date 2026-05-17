//Java Script

//Close signin pop up 
function closePopup() {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signin_pass').value;
    const msg = document.getElementById('popupmsg');

    // Checking if any fields empty
    if (email === '' || password === '') {
        msg.style.color = 'red'; //Turns red if the users left it blank
        msg.textContent = 'Please enter your email.'; //Gives the user the msg to fill it.
    } else {
    // Only closes if both fields are filled in
    document.getElementById('signinpop').style.display = 'none'; //hides the popup after its done
    }
}

// For the guest button so that it works 
function closeasguest() {
    document.getElementById('signinpop').style.display = 'none';    
}

//Handles the Join our community email form part 
function subscribe() {
    const input = document.getElementById('emailInput');  //Grabs the email box
    const msg = document.getElementById('subscribeMsg');   //Grab where the msg is shown

    if (input.value === '') {
        msg.style.color = 'red'; //Turns red if the users left it blank
        msg.textContent = 'Please enter your email.'; //Gives the user the msg to fill it.
    }
    else {
        msg.style.color = 'gold'; //Turns gold when they have correctly entered the mail
        msg.textContent = 'Thank you for Subscribing!'; //A Thank you message
        input.value = ''; //Removes their mail id from the box
    }
}

//Filters the cards live as you type them in the search bar
function filterPackages() {
    //Words being typed are turned into lowercase
    const input = document.getElementById('searchInput').value.toLowerCase();
    //Grabs all the package cards
    const cards = document.querySelectorAll('.showcase'); 


    cards.forEach(function (card) {
        //Makes the card text lowercase too
        const text = card.innerText.toLowerCase();
        //Shows results that match the words and hide the ones that dont
        card.style.display = text.includes(input) ? 'block' : 'none'; 
    });

}

//This is like the first one the only difference is it has 3 fields
function subEnquiry() {
    const msg = document.getElementById('enquiryMsg'); //Place where the message shows up

    //If any of the 3 are left empty they show an errors
    if (document.getElementById('enquiryName').value === '' ||
        document.getElementById('enquiryPhone').value === '' ||
        document.getElementById('enquiryEmail').value === '') {
        msg.style.color = 'red'; //Turns red if the user left it empty
        msg.textContent = 'Please fill in all fields.'; //Tells the user to fill all the forms
    }
    //When its correctly filled out
    else {
        //Turns gold when done corretly
        msg.style.color = 'gold';
        //Thanks them and tells them that we will be in contact
        msg.textContent = 'Thank You! We will be in touch within 24 hours.'
    }
}

//Scrolling back to the top funcation
window.onscroll = function () {
    const btn = document.getElementById('scrollTop'); //Button to the top
    if (btn) {
        btn.style.display =
            //This makes it so that only after going a bit down does the button show up
            document.documentElement.scrollTop > 50 ? 'block' : 'none';
    }
};

//Smooth scroll back up 
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //Gives it a smooth scroll back up 
}