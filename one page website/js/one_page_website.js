// This is the JavaScript file for the Hanna's Candles website

// Handle the click event of the navigation links
document.addEventListener("DOMContentLoaded", function() {
	var links = document.querySelectorAll("a[href^='#']");
	for (var i = 0; i < links.length; i++) {
	  links[i].addEventListener("click", scrollToSection);
	}
  });
  
  // Scroll to the section when a navigation link is clicked
  function scrollToSection(event) {
	event.preventDefault();
	var target = document.querySelector(this.getAttribute("href"));
	window.scrollTo({
	  top: target.offsetTop,
	  behavior: "smooth"
	});
  }
  
  // Handle the click event of the "Click to Enlarge" text
  document.addEventListener("DOMContentLoaded", function() {
	var enlargeTexts = document.querySelectorAll("h3");
	for (var i = 0; i < enlargeTexts.length; i++) {
	  enlargeTexts[i].addEventListener("click", enlargeImage);
	}
  });
  
  // Enlarge the image when the "Click to Enlarge" text is clicked
  function enlargeImage(event) {
	var imageContainer = this.parentNode.parentNode;
	var image = imageContainer.querySelector("img");
	image.style.width = "600px";
	image.style.height = "700px";
  }
  
  // Handle the form submission
  document.addEventListener("DOMContentLoaded", function() {
	var form = document.querySelector("form");
	form.addEventListener("submit", submitForm);
  });
  
  // Submit the form and display a confirmation message
  function submitForm(event) {
	event.preventDefault();
	var firstName = document.querySelector("input[value='First Name']").value;
	var lastName = document.querySelector("input[value='Last Name']").value;
	var emailAddress = document.querySelector("input[value='Email Address']").value;
	var phoneNumber = document.querySelector("input[value='Phone Number']").value;
	
	// You can perform further validation and processing of the form data here
	
	// Display a confirmation message
	alert("Thank you for your order, " + firstName + "! We will contact you at " + emailAddress + " or " + phoneNumber + " shortly.");
  }