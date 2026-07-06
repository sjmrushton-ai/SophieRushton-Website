const homeArtworks = [
    {
        title: 'Nut',
        category: 'Mixed Media + Canvas',
        excerpt:
            'A mixed media work in deep green and gold tones, exploring organic repetition through small geometric motifs.',
        image: 'assets/artwork.png',
        alt: 'Mixed media artwork in deep green and gold tones',
    },
    {
        title: 'Segmented Motif',
        category: 'Ink + Print',
        excerpt:
            'An abstract composition built from repeated segmented forms that echo cellular structures and branching patterns.',
        image: 'assets/about-lower-artwork.png',
        alt: 'Abstract dark green segmented motif artwork',
    },
    {
        title: 'Organic Line Study',
        category: 'Ink on Paper',
        excerpt:
            'A fluid exploration of teal organic lines, drawn from observations of natural systems and textile cosmologies.',
        image: 'assets/about-side-image.png',
        alt: 'Abstract teal organic line painting',
    },
    {
        title: 'Benin',
        category: 'Textile + Pattern',
        excerpt:
            'Inspired by West African textile traditions, translating symbolic pattern into a contemporary visual system.',
        image: 'assets/inspiration-benin-artwork.png',
        alt: 'Geometric textile-inspired artwork',
    },
];

function createHomeArtworkCard(artwork) {
    const article = document.createElement('article');
    article.className = 'home-grid__item';

    article.innerHTML = `
        <figure class="home-grid__image">
            <img src="${artwork.image}" alt="${artwork.alt}" loading="lazy">
        </figure>
        <div class="home-grid__text">
            <p class="home-grid__category">${artwork.category}</p>
            <h2 class="home-grid__title">${artwork.title}</h2>
            <p class="home-grid__excerpt">${artwork.excerpt}</p>
        </div>
    `;

    return article;
}

function renderHomeArtworks(container) {
    const fragment = document.createDocumentFragment();

    homeArtworks.forEach((artwork) => {
        fragment.appendChild(createHomeArtworkCard(artwork));
    });

    container.appendChild(fragment);
}

const homeArtworksGrid = document.getElementById('home-artworks-grid');

if (homeArtworksGrid) {
    renderHomeArtworks(homeArtworksGrid);
}
