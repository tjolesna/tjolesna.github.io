
    document.addEventListener('DOMContentLoaded', () => {
        const carousel = document.querySelector('.carousel');
        let position = 0;
        let shiftAmount = 100 / 5; // Posun o jeden obdélník

        const slide = () => {
            if (position <= -shiftAmount * 2) {
                // Reset na začátek, pokud prošlo všech 5 obdélníků
                position = 0;
            } else {
                // Posun na další obdélník
                position -= shiftAmount;
            }
            carousel.style.transform = `translateX(${position}%)`;
        };

        // Spuštění animace každých 5 sekund
        setInterval(slide, 5000);
    });
