// Инициализация particles.js для контейнера #particles-js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 60, // Количество частиц
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Цвет частиц (светлый, чтобы было видно на темном фоне)
        },
        "shape": {
            "type": "circle", // Форма частиц (circle, edge, triangle, polygon, star, image)
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false, // Отключить линии между частицами
        },
        "move": {
            "enable": true,
            "speed": 1, // Скорость движения. Чем меньше, тем аккуратнее
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        // Отключить интерактив, чтобы футер был статичным
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false, 
            },
            "onclick": {
                "enable": false,
            },
            "resize": true
        }
    },
    "retina_detect": true
});
