const titles__title= document.querySelectorAll(".titles__title")
const titles__button= document.querySelectorAll(".titles__cta")
const menu__button = document.querySelector('.menu__button')
/* name it better:
intersection observer listens to changes/intersections of a target elemtn either in viewport or ancestor element
so entries is all intersections of a box ele
*/

const observer= new IntersectionObserver(
    entries => {
        entries.forEach(entry =>{
            entry.target.classList.toggle("reveal", entry.isIntersecting)
            if(entry.isIntersecting) {observer.unobserve(entry.target)}
        })
    }, {
        rootMargin:"150px",
    }
)

titles__title.forEach(title => {
    observer.observe(title)
})

titles__button.forEach(
    btn=>{
        observer.observe(btn)
    }
)

hideNavbarAsScrolling()
//showTitlesAsScrolling()

function hideNavbarAsScrolling (){
    let previousScrollTopDistance=0;
    const navbar= document.getElementsByClassName('header')[0];

window.addEventListener('scroll', ()=>{
    // both pageYOffset and documentElement.scrollTop are ways to acess browser scroll
    let currScrollTopDistance=window.pageYOffset || document.documentElement.scrollTop;
    if(currScrollTopDistance > previousScrollTopDistance && menu__button.checked===false){
        navbar.classList.add('disappear')
        navbar.classList.remove('fade')
        
    }
    if (currScrollTopDistance < previousScrollTopDistance && menu__button.checked===false) {
        navbar.classList.remove('disappear')
        navbar.classList.add('fade')
    }
    previousScrollTopDistance = currScrollTopDistance;
})
}

