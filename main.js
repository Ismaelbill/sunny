let line_bar = document.querySelector(".f-section .container nav .line-bar");

    line_bar.addEventListener("click", function barFunc() {
            if(this.nextElementSibling.style.display === "flex") {
                this.nextElementSibling.style.display = "none";
            }
            else if (this.nextElementSibling.style.display === "none"){
                this.nextElementSibling.style.display = "flex";
            } else {
                this.nextElementSibling.style.display = "flex";
            }
        });
    

let elements = document.querySelectorAll(".s-section .exp");

const elementObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("same",entry.isIntersecting);
        if(entry.isIntersecting) elementObserver.unobserve(entry.target);
    });
},{
    threshold: .5,
});

elements.forEach(element => {
    elementObserver.observe(element);
})