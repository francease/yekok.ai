const noButton = document.querySelector('.noButton');

noButton.addEventListener('mouseover', () => {
    const containerWidth = noButton.parentElement.clientWidth - noButton.clientWidth;
    const containerHeight = noButton.parentElement.clientHeight - noButton.clientHeight;

    const maxX = window.innerWidth - containerWidth;
    const maxY = window.innerHeight - containerHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

const yesButton = document.querySelector('.yesButton'); //'yesButton'
yesButton.addEventListener('click', () => {
    window.location.href = 'home6.html'; // Replace with your desired URL
});
