// index.js



// Callbacks
const handleClick = (ramen) => {
  // add bindings to DOM elements
  const detailImage = document.getElementsByClassName("detail-image")[0];
  detailImage.src = ramen.image;

  const name = document.getElementsByClassName('name')[0];
  name.textContent = ramen.name;

  const restarauntName = document.getElementsByClassName("restaurant")[0];
  restarauntName.textContent = ramen.restaurant;

  const ratingDisplay = document.getElementById('rating-display')
  ratingDisplay.textContent = ramen.rating;

  const commentDisplay = document.getElementById('comment-display')
  commentDisplay.textContent = ramen.comment;

};

const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen');
  
  // add event listener
  newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // get image form input
    const imageInput = document.getElementById('new-image')
    // get name form input
    const nameInput = document.getElementById('new-name');
    // get comment name form input
    const commentInput = document.getElementById('new-comment')
    // restaraunt info
    const restarauntInput = document.getElementById('new-restaurant')
    // rating
    const ratingInput = document.getElementById('new-rating');

    
    
    // store form info in object?
    const newRamenObject = {
      comment: commentInput.value,
      id: "",
      image: imageInput.value,
      name: nameInput.value,
      rating: ratingInput.value,
      restaurant: restarauntInput.value
    }

    console.log(newRamenObject)
    

    // create new div element with form submit
    const ramenMenu = document.getElementById('ramen-menu')
    const imageElement = document.createElement('img');
    imageElement.src = imageInput.value;
    ramenMenu.appendChild(imageElement)

    // add click event to new image
    imageElement.addEventListener("click", () => {
      handleClick(newRamenObject);
    })
  })
}

const displayRamens = () => {
  const ramenMenu = document.getElementById('ramen-menu');
  
  // fetch data, parse, send to function
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then(ramens => {
    ramens.forEach(ramen => {
    // add images to ramenMenu
      const imageElement = document.createElement('img');
      imageElement.src = ramen.image;
      ramenMenu.appendChild(imageElement)

      // add event listener to each image
      imageElement.addEventListener("click", () => {
          handleClick(ramen)
      })

    })
  })
  
};

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
 // Invoke displayRamens here
    displayRamens();
  // Invoke addSubmitListener here 
    addSubmitListener()
  })
 
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
