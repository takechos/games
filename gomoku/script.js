let board = [];
let currentPlayer = 'white';
const colors = ['white', 'black'];

function initializeBoard() {
  board = Array.from({ length: 15 }, () => Array(15).fill(null));
  renderBoard();
  updateCurrentColor();
}

function renderBoard() {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell ' + (board[i][j] || 'empty');
      cell.onclick = () => placePiece(i, j);
      boardElement.appendChild(cell);
    }
  }
}

function placePiece(row, col) {
  if (!board[row][col]) {
    board[row][col] = currentPlayer;
    renderBoard();
  }
}

function undoMove() {
  const lastMove = board.flat().lastIndexOf(currentPlayer);
  if (lastMove !== -1) {
    const row = Math.floor(lastMove / 15);
    const col = lastMove % 15;
    board[row][col] = null;
    renderBoard();
  }
}

function switchTurn() {
  currentPlayer = getNextColor();
  updateCurrentColor();
  updateSwitchButtonColor(); // 新しく追加
}

function updateSwitchButtonColor() {
  const switchButton = document.getElementById('switchButton');
  switchButton.style.backgroundColor = currentPlayer === 'white' ? '#ff69b4' : '#1e90ff';
}

function getNextColor() {
  const currentIndex = colors.indexOf(currentPlayer);
  const nextIndex = (currentIndex + 1) % colors.length;
  return colors[nextIndex];
}

function observe() {
  const probability = prompt('確率はどうしますか？（0から100までの数値を入力）');
  if (probability !== null) {
    const parsedProbability = parseFloat(probability);
    if (!isNaN(parsedProbability) && parsedProbability >= 0 && parsedProbability <= 100) {
      applyProbability(parsedProbability);
    } else {
      alert('正しい数値を入力してください（0から100までの数値）');
    }
  }
}

function applyProbability(probability) {
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (board[i][j] !== null) {
        const randomValue = Math.random() * 100;
        if (randomValue > probability) {
          board[i][j] = getNextColor();
        }
      }
    });
  });
  renderBoard();
}

function resetBoard() {
  initializeBoard();
}

function updateCurrentColor() {
  const currentColorElement = document.getElementById('currentColor');
  const displayColor = currentPlayer === 'white' ? 'pink' : 'blue';
  currentColorElement.innerText = `現在の色: ${displayColor}`;
}

// Initialize the board on page load
initializeBoard();
