document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel
    $('#demo').carousel({
        interval: 5000 // Set the interval to 5 seconds
    });

    // Custom styling for carousel controls
    $('.carousel-control-prev-icon').html('<span>&#9665;</span>');

    function toggleMenu() {
        var nav = document.querySelector('nav');
        nav.classList.toggle('active');

        var links = document.querySelectorAll('nav a');
        links.forEach(function (link) {
            link.style.display = (link.style.display === 'none' || link.style.display === '') ? 'block' : 'none';
        });
    }

    // Uppdaterad funktion för att skrolla och justera höjden
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        var offsetMobile = 280; // Justera avståndet i mobilläge efter behov
        var offsetDesktop = 170; // Justera avståndet i övriga lägen efter behov
        var offset = window.innerWidth <= 768 ? offsetMobile : offsetDesktop;
        var sectionTop = section.offsetTop - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }

    // Uppdaterad klickhanterare för länkar
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSectionId = this.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
        });
    });

    toggleMenu();
});
