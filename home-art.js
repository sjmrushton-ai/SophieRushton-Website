(function () {
    const section = document.querySelector('.home-hero-art');
    const frame = document.getElementById('homeHeroArtFrame');
    const strip = document.querySelector('.home-hero-art__strip');
    const about = document.querySelector('.home-about');

    if (!section || !frame || !strip || !about) {
        return;
    }

    const NATIVE_WIDTH = 1024;
    const NATIVE_HEIGHT = 441;
    const ZOOM_OUT = 0.72;
    const TILE_SRC = 'assets/hero-artwork-landscape.png';
    const MIN_TILES = 2;

    let ticking = false;
    let templateTile = strip.querySelector('.home-hero-art__tile');

    function createTile() {
        const tile = document.createElement('img');
        tile.className = 'home-hero-art__tile';
        tile.src = TILE_SRC;
        tile.alt = '';
        tile.width = NATIVE_WIDTH;
        tile.height = NATIVE_HEIGHT;
        tile.decoding = 'async';
        tile.setAttribute('aria-hidden', 'true');
        return tile;
    }

    function getTileDimensions(frameWidth, bannerHeight) {
        let tileHeight = bannerHeight * ZOOM_OUT;
        let tileWidth = tileHeight * (NATIVE_WIDTH / NATIVE_HEIGHT);

        if (tileWidth > NATIVE_WIDTH) {
            tileWidth = NATIVE_WIDTH;
            tileHeight = NATIVE_HEIGHT;
        }

        if (tileHeight > bannerHeight) {
            tileHeight = bannerHeight;
            tileWidth = tileHeight * (NATIVE_WIDTH / NATIVE_HEIGHT);
        }

        return {
            tileWidth: Math.max(1, Math.round(tileWidth)),
            tileHeight: Math.max(1, Math.round(tileHeight)),
        };
    }

    function getRequiredTileCount(frameWidth, tileWidth) {
        return Math.max(MIN_TILES, Math.ceil(frameWidth / tileWidth) + 1);
    }

    function syncTiles(tileCount) {
        if (!templateTile) {
            templateTile = createTile();
            templateTile.removeAttribute('aria-hidden');
            strip.appendChild(templateTile);
        }

        while (strip.children.length < tileCount) {
            strip.appendChild(createTile());
        }

        while (strip.children.length > tileCount) {
            strip.removeChild(strip.lastChild);
        }
    }

    function updateHeroArtMarquee() {
        const frameWidth = frame.clientWidth;
        const bannerHeight = frame.clientHeight;
        const dimensions = getTileDimensions(frameWidth, bannerHeight);
        const tileCount = getRequiredTileCount(frameWidth, dimensions.tileWidth);

        syncTiles(tileCount);

        strip.style.setProperty('--hero-art-tile-width', dimensions.tileWidth + 'px');

        Array.prototype.forEach.call(strip.children, function (tile) {
            tile.style.width = dimensions.tileWidth + 'px';
            tile.style.height = dimensions.tileHeight + 'px';
        });
    }

    function updateHeroArtFade() {
        ticking = false;

        const artTop = section.offsetTop;
        const aboutTop = about.offsetTop;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const fadeStart = artTop - viewportHeight * 0.2;
        const fadeEnd = aboutTop - viewportHeight * 0.08;
        const fadeRange = fadeEnd - fadeStart;
        const progress = fadeRange > 0
            ? Math.min(1, Math.max(0, (scrollY - fadeStart) / fadeRange))
            : 0;

        frame.style.opacity = String(1 - progress);
    }

    function onScrollOrResize() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(function () {
                updateHeroArtMarquee();
                updateHeroArtFade();
            });
        }
    }

    function initHeroArt() {
        updateHeroArtMarquee();
        updateHeroArtFade();
    }

    if (strip.querySelector('.home-hero-art__tile')) {
        templateTile = strip.querySelector('.home-hero-art__tile');
        if (templateTile.complete) {
            initHeroArt();
        } else {
            templateTile.addEventListener('load', initHeroArt, { once: true });
        }
    } else {
        initHeroArt();
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
})();
