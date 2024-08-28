const quotes = [
    {"quote": "I'll be back", "answer": "Terminator"},
    {"quote": "May the Force be with you", "answer": "Star Wars"},
    {"quote": "There's no place like home", "answer": "The Wizard Of Oz"},
    {"quote": "Who is that pokemon", "answer": "Pokemon"},
    {"quote": "I'm the king of the world", "answer": "Titanic"},
    {"quote": "Yippee ki yay motherf*****r", "answer": "Die Hard"},
    {"quote": "Just keep swimming", "answer": "Finding Nemo"},
    {"quote": "I feel the need, the need for speed", "answer": "Top Gun"},
    {"quote": "English, motherf****r! Do you speak it", "answer": "Pulp Fiction"},
    {"quote": "YOU. SHALL. NOT. PASS", "answer": "Lord Of The Rings"},
    {"quote": "Son of a b***h stole my line", "answer": "Good Will Hunting"},
    {"quote": "Elementary, my dear Watson", "answer": "The Adventures Of Sherlock Holmes"},
    {"quote": "My mama always said life was like a box of chocolates. You never know what you're gonna get", "answer": "Forrest Gump"},
    {"quote": "E.T. phone home", "answer": "E.T."},
    {"quote": "Hasta la vista, baby", "answer": "Terminator"},
    {"quote": "To infinity and beyond", "answer": "Toy Story"},
    {"quote": "Roads? Where we're going we don't need roads", "answer": "Back To The Future"},
];

let currentQuote = {};
let score = 0;

document.getElementById('startButton').onclick = startGame;
document.getElementById('submitGuess').onclick = submitGuess;
document.getElementById('nextQuote').onclick = loadQuote;

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadQuote();
}

function loadQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = `"${currentQuote.quote}"`;
    document.getElementById('guess').value = '';
    document.getElementById('feedback').innerText = '';
}

function submitGuess() {
    const userGuess = document.getElementById('guess').value.trim().toLowerCase();
    if (userGuess === currentQuote.answer.toLowerCase()) {
        document.getElementById('feedback').innerText = 'Correct!';
        score++;
    } else {
        document.getElementById('feedback').innerText = 'Try Again!';
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}
