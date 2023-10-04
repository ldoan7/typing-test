const arrTypingTests = document.getElementsByClassName('typing-test');
const input = document.getElementById('input');

// On click of Typing Test, focus input field
arrTypingTests[0].addEventListener('click', (event) => {
    console.log('Focus');

    input.focus();
});

input.addEventListener('input', (event) => {
    console.log(event);
});
