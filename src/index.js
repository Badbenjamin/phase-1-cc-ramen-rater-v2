// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
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
    })
  })
  
};

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
 // Invoke displayRamens here
    displayRamens();
  // Invoke addSubmitListener here 
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
