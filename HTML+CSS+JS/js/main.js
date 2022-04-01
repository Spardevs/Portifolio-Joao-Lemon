<<<<<<< HEAD
var btnContact = document.querySelector('.jl-btn-contact');

=======
<<<<<<< Updated upstream
=======
//Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact');

//Page Preloader
window.addEventListener('load', function() {
    var pagePreLoader = document.querySelector('.jl-preloader');
        pagePreLoader.classList.add('jl-fade-out');

    setTimeout(function(){
        pagePreLoader.style.display = 'none';
    }, 2000);
}) 

//Abrindo e Fechando Informações de Contato
>>>>>>> master
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    
    this.classList.toggle('jl-change-icon');
});

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> master
