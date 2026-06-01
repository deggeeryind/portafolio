const boton = document.getElementById("modoOscuro");
        const icono = boton.querySelector("i");

        boton.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){
                icono.classList.remove("fa-moon");
                icono.classList.add("fa-sun");
            }else{
                icono.classList.remove("fa-sun");
                icono.classList.add("fa-moon");
            }

        });