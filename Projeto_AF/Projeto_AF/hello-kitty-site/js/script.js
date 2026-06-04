// <!-- AF - Avaliação final. 
//  Tema: Sanrio.
//  Laryssa Cristina Dias | 251613
//  Marcos Paulo Hessel dos Santos |251630 -->



const btnTopo = document.createElement('button');
btnTopo.innerHTML = '↑';
btnTopo.id = 'btnTopo';
btnTopo.className = 'btn-topo';
document.body.appendChild(btnTopo);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

btnTopo.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios! ');
        } else {
            alert('Mensagem enviada com sucesso! Obrigada pelo contato! ');
            formulario.reset();
        }
    });
}

const cards = document.querySelectorAll('.card-personalizado');

cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.style.borderColor = '#ff6b9d';
        card.style.borderWidth = '2px';
        card.style.borderStyle = 'solid';
    });

    card.addEventListener('mouseleave', function() {
        card.style.borderColor = 'transparent';
    });
});