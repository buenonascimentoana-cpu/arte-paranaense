const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir. forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    fuction curtir(){
        const contador = botaoCurtir.queryselector("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;  }
        else{
        contador.textContent--;
        curtiu = false;
        }
    }
});

const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}
