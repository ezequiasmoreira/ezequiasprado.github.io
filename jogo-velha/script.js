// Variáveis globais
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  let currentPlayer = 'A'; // Começa com o jogador A
  let gameOver = false;
  
  // Função para verificar o vencedor
  function checkWinner() {
    // Verifica linhas
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0];
      }
    }
  
    // Verifica colunas
    for (let j = 0; j < 3; j++) {
      if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
        return board[0][j];
      }
    }
  
    // Verifica diagonais
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }
  
    // Verifica se há empate (todas as células preenchidas)
    let isDraw = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          isDraw = false;
        }
      }
    }
    if (isDraw) {
      return 'draw';
    }
  
    return null; // Retorna null se não houver vencedor nem empate
  }
  
  // Função para atualizar a mensagem de vitória/empate
  function updateMessage(message) {
    let messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }
  
  // Função para processar a jogada do jogador
  function makeMove(row, col) {
    if (gameOver || board[row][col] !== '') {
      return;
    }
  
    board[row][col] = currentPlayer;
    document.getElementById('board').children[row * 3 + col].textContent = currentPlayer;
  
    let winner = checkWinner();
    if (winner) {
      gameOver = true;
      if (winner === 'draw') {
        updateMessage('Empate!');
      } else {
        updateMessage(`Jogador ${winner} venceu!`);
      }
    } else {
      currentPlayer = currentPlayer === 'A' ? 'B' : 'A';
      updateMessage(`É a vez do jogador ${currentPlayer}`);
    }
  }
  
  // Função para reiniciar o jogo
  function resetGame() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'A';
    gameOver = false;
    updateMessage(`É a vez do jogador ${currentPlayer}`);
  
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
      cell.textContent = '';
    }
  }
  