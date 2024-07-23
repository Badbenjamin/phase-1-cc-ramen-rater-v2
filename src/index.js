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

    // create new div element with form submit
    const ramenMenu = document.getElementById('ramen-menu')
    const imageElement = document.createElement('img');
    ramenMenu.appendChild(imageElement)

    // add image to restaraunt menu div
    const imageInput = document.getElementById('new-image')
    imageElement.src = imageInput.value;
    // get name form input, change name Element
    const nameInput = document.getElementById('new-name');

    handleClick()
    
   
    // // get restaraunt form input, change restaraunt element
    // const restarauntInput = document.getElementById('new-restaurant')
    // const restarauntName = document.getElementsByClassName("restaurant")[0];
    // restarauntName.textContent = restarauntInput.value;
    // // get image url, update image 
    // const imageInput = document.getElementById('new-image')
    // const detailImage = document.getElementsByClassName("detail-image")[0];
    // detailImage.src = imageInput.value;
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
