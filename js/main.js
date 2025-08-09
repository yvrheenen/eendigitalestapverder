const posts = [
  { title: 'Hoe maak ik een e-mailadres aan?', url: 'blog/hoe-maak-ik-een-emailadres-aan.html' },
  { title: 'Wat is een QR-code?', url: 'blog/wat-is-een-qr-code.html' },
  { title: 'Hoe gebruik ik WhatsApp op mijn telefoon?', url: 'blog/hoe-gebruik-ik-whatsapp-op-mijn-telefoon.html' },
  { title: 'Inloggen met DigiD stap voor stap', url: 'blog/inloggen-met-digid-stap-voor-stap.html' }
];

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const query = searchInput.value.toLowerCase();
  const results = posts.filter(p => p.title.toLowerCase().includes(query));

  if (!query) {
    searchResults.innerHTML = '';
    return;
  }

  if (results.length === 0) {
    searchResults.innerHTML = '<p>Geen resultaten gevonden.</p>';
    return;
  }

  const list = document.createElement('ul');
  results.forEach(r => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = r.url;
    link.textContent = r.title;
    li.appendChild(link);
    list.appendChild(li);
  });
  searchResults.innerHTML = '';
  searchResults.appendChild(list);
});

const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Bedankt voor je aanmelding!');
    newsletterForm.reset();
  });
}
