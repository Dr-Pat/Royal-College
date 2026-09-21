window.history.scrollRestoration = "manual";

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

const navLinks = document.querySelectorAll('.nav-link');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navLinks.forEach(link => {

            link.addEventListener('click', () => {

                if(navbarCollapse.classList.contains('show')){

                    new bootstrap.Collapse(navbarCollapse).hide();

                }

            });

        });

const programmes = document.querySelectorAll('.programme');
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                        entry.target.classList.remove('show');
                    }

        });

    }, {
    threshold: 0.2
  });

  programmes.forEach((programme) => {
    observer.observe(programme);
  });

