let zusatzinfos = [];

fetch('infos.json')
  .then(res => res.json())
  .then(data => {
    zusatzinfos = data;
  });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.info-button').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const gericht = zusatzinfos.find(g => g.id === id);
      if (!gericht) return alert("Keine Zusatzinfos gefunden.");

      document.getElementById('gerichtName').textContent = gericht.name;
      document.getElementById('gerichtZutaten').textContent = gericht.zutaten.join(', ');

      // Dynamisch alle Nährwerte anzeigen
      let html = '';
      for (let [key, value] of Object.entries(gericht.naehrwerte)) {
        html += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value} g<br>`;
      }
      document.getElementById('gerichtNaehrwerte').innerHTML = html;

      toggleOverlay(true);
    });
  });
});

function toggleOverlay(show) {
  document.getElementById('infoOverlay').style.display = show ? 'flex' : 'none';
}
