let trekData = []; 
let currentPage = 1;
const itemsPerPage = 10;

function loadTreks() {
    for (let i = 0; i < 100; i++) {
        trekData.push({
            title: `Trek to Fort ${i+1}`,
            date: `2023-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(Math.random() * 28 + 1)}`,
            description: `This trek was an exciting journey to Fort ${i+1}, with breathtaking views and thrilling adventures. It was a memorable event with a difficulty level of ${i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'moderate' : 'hard'}.`
        });
    }
}

function displayTreks(page) {
    const trekContainer = document.getElementById('trek-container');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    let trekCards = trekData.slice(startIndex, endIndex).map(trek => `
        <div class="trek-card">
            <h2>${trek.title}</h2>
            <p class="date">Date: ${trek.date}</p>
            <p>${trek.description.substring(0, 100)}...</p>
        </div>
    `).join('');

    trekContainer.innerHTML += trekCards;
}

function loadMoreTreks() {
    currentPage++;
    displayTreks(currentPage);
}

function filterTreks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const trekCards = document.querySelectorAll('.trek-card');

    trekCards.forEach(card => {
        const title = card.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchTerm) || !searchTerm) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

loadTreks();
displayTreks(currentPage);
