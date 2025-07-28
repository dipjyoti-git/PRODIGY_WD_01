document.querySelector('.navi').addEventListener('click', function(e) {
    e.preventDefault();

    const href = e.target.getAttribute('href');

    if (href === '#home') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#leagues') {
        document.getElementById('leagues').scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#news') {
        document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#highlights') {
        document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#about') {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }
});
