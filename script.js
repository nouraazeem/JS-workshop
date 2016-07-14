var imageArray = ['images/dog1.jpeg', 'images/dog2.jpeg', 'images/dog3.jpeg', 'images/dog4.jpeg', 'images/dog5.jpeg' ]

var index = 0; 
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var dogImage = document.getElementById('dog-image');

prevButton.addEventListener('click', function(){

// prevButton clicked and at first image 
if (index === 0) {
	// this is index of last value in the array. there is a length of 5 so the index would be 4.
	index = imageArray.length - 1;
} else {
	index = index - 1;
}

	var prevImagePath = imageArray[index]; 
//set image element's src attribute (how it knows what image to load) to the new imageArray
// value based off change in index
	
	dogImage.src = imageArray[index];
})

nextButton.addEventListener('click', function (){

// nextButton clicked and at last image 
	if (index === imageArray.length - 1) {
	// this is index of last value in the array. there is a length of 5 so the index would be 4.
	index = 0
	} else {
		index = index + 1;
}
	dogImage.src = imageArray[index];
})





