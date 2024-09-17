
function toggleMenu2() {
    var menu = document.getElementById('mobile-menu');
    var menuButton = document.querySelector('.menu-button');
    var closeButton = document.querySelector('.close-button');
    var currentLeft = parseInt(window.getComputedStyle(menu).left);
    
    if (currentLeft === 0) {
        menu.style.left = '-100%';
        closeButton.style.display = 'none';
        menuButton.style.display = 'block';
    } else {
        menu.style.left = '0';
        closeButton.style.display = 'block';
        menuButton.style.display = 'none';
    }
}

function showTable(teamId) {
    // Skryjeme všechny tabulky
    var allTables = document.querySelectorAll('.fotbalista');
    for (var i = 0; i < allTables.length; i++) {
        allTables[i].style.display = 'none';
    }
    
    // Zobrazíme pouze tabulku týmu, který byl vybrán
    var selectedTable = document.getElementById('table-' + teamId);
    if (selectedTable) {
        selectedTable.style.display = 'table'; // Nastavíme zobrazení na table
    }

    // Zvýrazníme vybraný odkaz
    var links = document.querySelectorAll('.team-link');
    for (var j = 0; j < links.length; j++) {
        links[j].classList.remove('active'); // Odstraníme třídu active ze všech odkazů
    }
    var currentLink = document.querySelector('.team-link[data-team="' + teamId + '"]');
    if (currentLink) {
        currentLink.classList.add('active'); // Přidáme třídu active vybranému odkazu
    }
}

// Zobrazíme tabulku pro Tým A při načtení stránky
window.onload = function() {
    showTable('team-a');
};

function toggleMenu() {
            var menu = document.getElementById("mobile-menu");
            menu.classList.toggle("active");
        }

        // Nastavení aktivního odkazu
        var currentPage = window.location.pathname.split('/').pop();
        var links = document.querySelectorAll("nav ul li a");

        links.forEach(function(link) {
            var linkPage = link.getAttribute("href").split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });

    document.addEventListener("DOMContentLoaded", function() {
        // Nastavení aktivního odkazu
        var currentPage = window.location.href;
        var links = document.querySelectorAll("nav ul li a");

        links.forEach(function(link) {
            var linkPage = link.href;
            if (currentPage === linkPage) {
                link.classList.add("active");
            }
        });

        // Pokud žádný odkaz není aktivní, nastavíme "Domů" jako výchozí aktivní
        var activeLinks = document.querySelectorAll("nav ul li a.active");
        if (activeLinks.length === 0) {
            document.getElementById("home").classList.add("active");
        }
    });

const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
    body.classList.toggle("menu-open");
});

document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('.content');
    contents.forEach((content, index) => {
        setTimeout(() => {
            content.classList.add('show');
        }, index * 300); 
    });
});

let slideIndex = 0;
const slides2 = document.querySelector('.slides2');

function showSlides() {
    slideIndex++;

    if (slideIndex === slides2.children.length) {
        slideIndex = 0;
    }

    const translateValue = -slideIndex * 100 + '%';
    slides2.style.transform = 'translateX(' + translateValue + ')';
    
    setTimeout(showSlides, 5000);
}

showSlides();





