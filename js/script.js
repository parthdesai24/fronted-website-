// function animateValue(element,start,end,duration){
//     let current = start;
//     const range = end - start;
//     const increment = end > start ? 1 : -1;
//     const stepTime = Math.abs(Math.floor(duration / range));
//     const timer = setInterval(() => {
//        current += increment;
//        element.textContent = current;
//        if(current ===end){
//         clearInterval(timer);
//        }
//     },stepTime);

// }

// function startCounter(){
//     const counterElements = document.querySelectorAll('.counter-value');
//     counterElements.forEach((element)=>{
//         const target = parseInt (element.getAttribute('data-target'));
//         animateValue(element, 0, target, 1500)
//     });
// }
// window.addEventListener('scroll',() => {
//     const counterSection = document.querySelector('.counter');
//     const counterSectionTop = counterSection.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if(counterSectionTop < windowHeight){
//         startCounter();
//         window.removeEventListener('scroll',startCounter())
//     }
// });

//Filter Gallery

const filterbuttons = document.querySelectorAll(".filter-option");
const gallery = document.querySelectorAll(".gallery .gallery-sides");

filterbuttons.forEach((option) => {
  option.addEventListener("click", () => {
    filterbuttons.forEach((o) => o.classList.remove("active"));
    option.classList.add("active");
    const filterCategory = option.getAttribute("data-name");
    gallery.forEach((item) => {
      if (
        filterCategory === "all" ||
        filterCategory === item.getAttribute("data-name")
      ) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});
