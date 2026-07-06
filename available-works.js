const artworks = [
    {
        title: 'Nut',
        description:
            'A mixed media work in deep green and gold tones, exploring organic repetition through small geometric motifs. Created with ink, embroidery, and goldwork on canvas, the piece balances structure with the subtle unpredictability of natural growth.',
        dimensions: '70 × 100 cm',
        price: '£1,400',
        image: 'assets/artwork.png',
    },
    {
        title: 'Segmented Motif',
        description:
            'An abstract composition in dark green, built from repeated segmented forms that echo cellular structures and branching patterns. The work develops slowly through accumulation, allowing rhythm and transformation to emerge across the surface.',
        dimensions: '60 × 80 cm',
        price: '£1,200',
        image: 'assets/about-lower-artwork.png',
    },
    {
        title: 'Organic Line Study',
        description:
            'A fluid exploration of teal organic lines, drawn from observations of natural systems and Indigenous textile cosmologies. Delicate marks trace pathways of growth and connection, creating a personal visual language shaped by memory and intuition.',
        dimensions: '50 × 70 cm',
        price: '£950',
        image: 'assets/about-side-image.png',
    },
    {
        title: 'Benin',
        description:
            'Inspired by the geometric languages of West African textile traditions, this work translates symbolic pattern into a contemporary visual system. Repetition stretches time as forms emerge through careful accumulation rather than intention.',
        dimensions: '70 × 100 cm',
        price: '£1,200',
        image: 'assets/inspiration-benin-artwork.png',
    },
];

function createArtworkSection(artwork, index) {
    const section = document.createElement('article');
    section.className = 'available-works-artwork';
    if (index % 2 === 1) {
        section.classList.add('available-works-artwork--reverse');
    }

    section.innerHTML = `
        <figure class="available-works-artwork__image">
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
        </figure>
        <div class="available-works-artwork__content">
            <h2 class="available-works-artwork__title">${artwork.title}</h2>
            <p class="available-works-artwork__description">${artwork.description}</p>
            <dl class="available-works-artwork__meta">
                <div class="available-works-artwork__meta-item">
                    <dt>Dimensions</dt>
                    <dd>${artwork.dimensions}</dd>
                </div>
                <div class="available-works-artwork__meta-item">
                    <dt>Price</dt>
                    <dd>${artwork.price}</dd>
                </div>
            </dl>
        </div>
    `;

    return section;
}

function renderArtworks(container) {
    const fragment = document.createDocumentFragment();

    artworks.forEach((artwork, index) => {
        fragment.appendChild(createArtworkSection(artwork, index));
    });

    container.appendChild(fragment);
}

const artworksList = document.getElementById('artworks-list');

if (artworksList) {
    renderArtworks(artworksList);
}
