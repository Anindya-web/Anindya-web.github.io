function scrollToElement(elementSelector, instance = 0){
    //Select all the elements that match the given selector
     const elements = document.querySelectorAll(elementSelector);
     //check if there are elemnents matching the selector and if the requested instance exists.
     if(elements.length > instance){
        //Scroll to the specific instance of the element
        elements[instance].scrollIntoView({behaviour: "smooth"});
        }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToElement(".header");
});
link2.addEventListener('click', () =>{
    //Scroll to the 2nd element with "header" class
    scrollToElement(".header" , 1);
});
link3.addEventListener('click', () =>{
    scrollToElement(".column");
});