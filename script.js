document.getElementById('checkKey').addEventListener('click', function() {
    const keyInput = document.getElementById('keyInput').value;
    const correctKey = '1234-4321-8765-5678';

    if (keyInput === correctKey) {
        showPopup('Ключ введен правильно!');
    } else {
        showPopup('Неправильный ключ');
    }
});

function showPopup(message) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<p>${message}</p><button id="closePopup">Закрыть</button>`;
    document.body.appendChild(popup);

    popup.classList.add('show');

    document.getElementById('closePopup').addEventListener('click', function() {
        popup.remove();
    });

    setTimeout(function() {
        popup.remove();
    }, 3000); // Закрывает всплывающее окно через 3 секунды
}
