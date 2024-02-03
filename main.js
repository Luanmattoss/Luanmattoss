const characters = [
    { id: 2, name: 'Shanks', category: 'UR', abilities: ['Double Slash', 'Gryphon', 'Heaven Splitter', 'Haoshoku Haki'], effects: [] },
    // Adicione mais personagens conforme necessário
];

let team = [];

function displayCharacters() {
    const characterListDiv = document.getElementById('characterList');
    characterListDiv.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
            <img src="https://i.imgur.com/ex4pLpA.png" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Categoria: ${character.category}</p>
            <ul class="ability-list">
                ${character.abilities.map((ability, index) => `
                    <li class="ability-list-item">
                        <img src="path/to/ability_icons/${index + 1}.png" alt="${ability}">
                        <p><strong>${ability}</strong></p>
                        <p>Efeito: ${character.effects[index]}</p>
                    </li>
                `).join('')}
            </ul>
        `;
        characterListDiv.appendChild(card);
    });
}

function displayTeam() {
    const teamDiv = document.getElementById('team');
    teamDiv.innerHTML = '';

    team.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
            <img src="https://i.imgur.com/ex4pLpA.png" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Categoria: ${character.category}</p>
            <ul class="ability-list">
                ${character.abilities.map((ability, index) => `
                    <li class
