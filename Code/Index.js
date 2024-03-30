const respuestas = document.querySelectorAll("#respuesta");
const preguntas = document.getElementsByTagName("h2");
const boton = document.querySelectorAll('.btn');
let isClick = false;

const updateUI = () => {
    boton.forEach(button => {
        let isClick = false;
        button.addEventListener('click', (event) => {
            event.preventDefault();
            isClick = !isClick;
            if (isClick) {
                displayAnswerBtn(button.value, true);
            }
            else {
                displayAnswerBtn(button.value, false);
            }
        });
    }
    );

    Array.from(respuestas).forEach(respuesta => {
        let isClick = false;
        respuesta.addEventListener('click', (event) => {
            event.preventDefault();
            isClick = !isClick;
            if (isClick) {
                displayAnswerBtn(respuesta.id, true);
            }
            else {
                displayAnswerBtn(respuesta.id, false);
            }
        })
    })

}

const displayAnswerBtn = (index, isClick) => {
    if (isClick) {
        respuestas[index].classList.remove('hidden');
        boton[index].style.backgroundImage = "url('images/icon-minus.svg')";
    }
    else {
        respuestas[index].classList.add('hidden');
        boton[index].style.backgroundImage = "url('images/icon-plus.svg')"
    }
};

updateUI();