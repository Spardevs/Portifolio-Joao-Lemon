//Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal')
//Page Preloader
window.addEventListener('load', function() {
    var pagePreLoader = document.querySelector('.jl-preloader');
        pagePreLoader.classList.add('jl-fade-out');

    setTimeout(function(){
        pagePreLoader.style.display = 'none';
    }, 2000);
}) 

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    
    this.classList.toggle('jl-change-icon');
});

// Abrindo e fechando o Modal de orçamento

for(var i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener('click', function(){
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');
    })
}