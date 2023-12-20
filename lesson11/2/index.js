const button = document.getElementById('downloadButton');
button.addEventListener('click', (event) => downloadAuthors(event));

async function downloadAuthors(event) {
    const response = await fetch('http://localhost:8000/download');
    const data = await response.json();
    await addList(data);
}

async function addList(data) {
    let ul = document.createElement('ul');

    for (let author of data.authors) { 
        let li = document.createElement('li', author);
        li.innerHTML = author;
        ul.appendChild(li);
    };
    button.replaceWith(ul)
}