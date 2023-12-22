const myBetForm = document.querySelectorAll(".pred-btn");
const myBetFormBody = document.querySelector(".predict-form");
const myBetFormclose = document.querySelector(".closed");

myBetForm.forEach(btn  => {
  btn.addEventListener("click", ()=>{
    myBetFormBody.style.display="flex";

    myBetFormclose.addEventListener("click", ()=>{
        myBetFormBody.style.display="none";
    });
  });
});







const searchClicked = document.querySelector(".search-container");

searchClicked.addEventListener('click', () =>{
    const searchbody = document.querySelector(".search");
    const searchclose = searchbody.querySelector(".fa-times");
    searchbody.classList.add("scale");
    searchclose.addEventListener('click', () =>{
        searchbody.classList.remove("scale");
    });
});


const winbtnlist = document.querySelector(".winners");
const winbody = document.querySelector(".col-3");
const winbodyClosed = document.querySelector(".close");
const itemOne = document.querySelector(".item-1");


winbtnlist.addEventListener('click', ()=>{
    winbody.style.display="flex";
    winbodyClosed.addEventListener('click', ()=>{
        const itemTwo = document.querySelector(".item-3");
        winbody.style.display="none";
        itemOne.classList.add("active");
        itemTwo.classList.remove("active");
    });
});



const listItems = document.querySelectorAll('.bottom-list-items');
listItems.forEach(item => {
    item.addEventListener('click', handleClick);
});

function handleClick(event) {
    const previousActiveItem = document.querySelector('.bottom-list-items.active');
    if (previousActiveItem) {
        previousActiveItem.classList.remove('active');
    }

    event.currentTarget.classList.add('active'); // Use event.currentTarget
}





function countdown(minutes) {
    let targetTime = Date.now() + minutes * 60 * 1000;

    let countdownInterval = setInterval(() => {
      let remainingTime = Math.floor((targetTime - Date.now()) / 1000);
      let remainingMinutes = Math.floor(remainingTime / 60);
      let remainingSeconds = remainingTime % 60;

      // Format the countdown with minutes and seconds
      const countdownDisplay = `${remainingMinutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

      // Display the countdown in the HTML element
      const countdownElement = document.querySelector(".countdown");
      countdownElement.textContent = `${countdownDisplay}`;

      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Time's up!";
      }
    }, 1000);
  }

  // Start the countdown
  countdown(1);



 // Get the current date
 const currentDate = new Date();

 // Extract the day and month
 const day = currentDate.getDate();
 const month = currentDate.getMonth() + 1; // Months are 0-indexed, add 1 for human-readable format

 // Construct the date display
 const dateDisplay = `${day}/${month}`; // Use a slash for separation

 // Update the HTML element with the date
 const dateElement = document.querySelector(".Date");
 dateElement.textContent = dateDisplay;