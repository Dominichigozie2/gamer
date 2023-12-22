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
    const searchclose = document.querySelector(".fa-times");
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