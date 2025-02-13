// Start the game
function startGame() {
    document.getElementById('startSection').classList.add('hidden');
    document.getElementById('letterScramble').classList.remove('hidden');
    startLetterScramble();  // Initialize the scramble puzzle
}

// Love Letter Scramble (Advanced)
let scrambledWords = ['L', 'i', 'l', 'o', 'u', 't', 'a', 'always', 'makes', 'me', 'feel', 'so', 'happy'];
let correctLetter = 'Lilouta always makes me feel so happy';

function startLetterScramble() {
    let scrambled = scrambledWords.sort(() => Math.random() - 0.5).join(' ');
    document.getElementById('scrambledWords').innerText = scrambled;
}

function checkLetterScramble() {
    const userAnswer = document.getElementById('scrambledAnswer').value.trim().toLowerCase();
    if (userAnswer === correctLetter.toLowerCase()) {
        alert('Correct, Lilouta! Moving on to the next puzzle.');
        document.getElementById('letterScramble').classList.add('hidden');
        document.getElementById('emojiPuzzle').classList.remove('hidden');
    } else {
        alert('Oops! Try again.');
    }
}

// Emoji Puzzle (Advanced)
function checkEmojiPuzzle() {
    const userAnswer = document.getElementById('emojiAnswer').value.trim().toLowerCase();
    if (userAnswer === "our first date") {
        alert('Correct, Lilouta! Moving on to the next puzzle.');
        document.getElementById('emojiPuzzle').classList.add('hidden');
        document.getElementById('memoryJigsaw').classList.remove('hidden');
    } else {
        alert('Oops! Try again.');
    }
}

// Memory Jigsaw (Advanced)
function revealJigsawPuzzle() {
    alert('i trust uuu!');
    document.getElementById('memoryJigsaw').classList.add('hidden');
    document.getElementById('secretCode').classList.remove('hidden');
}

// Secret Love Code (Advanced)
function checkSecretCode() {
    const userAnswer = document.getElementById('secretCodeAnswer').value.trim().toLowerCase();
    if (userAnswer === 'bea0501ch') {
        alert('Correct! Moving on to the final proposal!');
        document.getElementById('secretCode').classList.add('hidden');
        document.getElementById('finalProposal').classList.remove('hidden');
    } else {
        alert('Oops! Try again.');
    }
}

// Reveal the final proposal with music
function revealProposal() {
    const question1Answer = document.getElementById('question1').value.trim().toLowerCase();
    const question2Answer = document.getElementById('question2').value.trim().toLowerCase();

    // Check if answers are correct
    if (question1Answer === "13/01" && question2Answer === "lilouti") {
        alert('Will be my valentine , Lilouta? You are mine love you ❤️');
        
     

        // Display a custom message
        document.getElementById('finalProposal').innerHTML = "<h2>Yes! I'm yours forever, Lilouta! 💖🎉</h2>";

    } else {
        alert('Oops! Something’s not right. Try again.');
    }
}
