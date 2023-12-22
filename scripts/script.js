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

