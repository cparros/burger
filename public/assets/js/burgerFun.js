document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }



  const createBurgerBtn = document.getElementById('create-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('clicked')
      
      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        burger_name: document.getElementById('bu').value.trim(),
        // sleepy: document.getElementById('devoured').checked,
      };
      
      // Send POST request to create a new quote
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
        
      }).then(() => {
        // Empty the form
        document.getElementById('bu').value = '';
        console.log(newBurger)
        // Reload the page so the user can see the new quote
        console.log('Created a new Burger!');
        location.reload();
      });
    });
  }


  const devourBurgerBtns = document.querySelectorAll('.change-devoured');
  // Set up the event listeners for each delete button
  devourBurgerBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      const devouredBurger = {
        devoured: true
      }

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: 'PUT',
        headers: {
          Accept: "appliction/json",
          'content-type': 'application/json'
        },

        body: JSON.stringify(devouredBurger),
      }).then((res) => {
        console.log(res);
        console.log(`changed id: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});


