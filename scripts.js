document.addEventListener('DOMContentLoaded', () => {
    const projetos = [
        {
            nome: 'Jogo da cobrinha',
            descricao: 'Jogo classico da cobrinha.',
            link: 'jogo-cobrinha/index.html'
        },
        {
            nome: 'jogo da velha',
            descricao: 'Jogo classico da velha',
            link: 'jogo-velha/index.html'
        },
        {
            nome: 'site de produtos',
            descricao: 'loja online.',
            link: 'site-produtos/index.html'
        }
        // Adicione mais projetos conforme necessário
    ];

    const container = document.querySelector('.projetos-container');

    projetos.forEach(projeto => {
        const projetoDiv = document.createElement('div');
        projetoDiv.classList.add('projeto');
        
        const projetoNome = document.createElement('h3');
        projetoNome.textContent = projeto.nome;

        const projetoDescricao = document.createElement('p');
        projetoDescricao.textContent = projeto.descricao;

        const projetoLink = document.createElement('a');
        projetoLink.href = projeto.link;
        projetoLink.textContent = 'Veja mais';
        projetoLink.target = '_blank';

        projetoDiv.appendChild(projetoNome);
        projetoDiv.appendChild(projetoDescricao);
        projetoDiv.appendChild(projetoLink);

        container.appendChild(projetoDiv);
    });
});
