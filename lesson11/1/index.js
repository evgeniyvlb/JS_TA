
const button = document.getElementById('vote');
button.addEventListener('click', (event) => clickVote(event));

async function clickVote(event) {
    const url = 'http://127.0.0.1/:8000/vote';
    const response = await fetch(url);
    const data = await response.json();

    event.target.innerHTML = 'Your vote is accepted:' + data.date;
}