// Create an array of objects that represents famous people (see structure below).
var famousPeeps = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	}
];






// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
var counter = 0;
var outputEl = document.getElementById("container");
var output = ""
var getInput = document.getElementById("text");


for (; counter < 5; counter++) {
  // Give each person element a unique identifier
  output += `<div class="person__container" id="person--${counter}">`;
  output += `<person>`;
  output += `<header> ${famousPeeps[counter].name}: ${famousPeeps[counter].title} </header>`;
  output += `<section class="imageContainer"><img class="image" src="${famousPeeps[counter].image}"</section>`;
  output += `<section class="bio"> ${famousPeeps[counter].bio}</section>`;
  output += `<footer>Birth: ${famousPeeps[counter].lifespan.birth}</footer>`;
  output += `<footer>Death: ${famousPeeps[counter].lifespan.death}</footer>`;
  output += `<person>`;
	output += `</div>`;
}
 	outputEl.innerHTML = output;
// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");
// coloring background dynamically
for (var i = 0; i < containerEl.length; i++) {
		// For every even numbered element, have a light yellow background.
		if (i%2 == 0) {
			containerEl[i].setAttribute('num', "even")
		}	
		// For every odd numbered element, have a light blue background.
		else {
			containerEl[i].setAttribute('num', "odd")		
		}
		
	
}

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
    // Logic to execute when the element is clicked
  containerEl[i].addEventListener("click", function (event) { 
		var clickedPerson =  event.target.closest(".bio");
		// When you click on one of the person elements, a dotted border should appear around it.
  	event.target.classList.toggle("clickBorder");
		// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
  	getInput.focus();
		// When you press the enter/return key when typing in the input field, then the content of the input field should  immediately be blank.
		getInput.addEventListener("keydown", function (event) {
			if (event.keyCode === 13) {
				getInput.value = " ";
				return false;
	    }
		// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
	    else {
				clickedPerson.innerHTML = getInput.value;
	    }
		});

  });
}
