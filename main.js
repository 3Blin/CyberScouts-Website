// CyberScouts Main JS Controller

// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
  console.log('CyberScouts Website wurde geladen');
  
  // Überprüfen auf Netlify CMS Identity
  setupIdentity();
  
  // Smooth Scrolling für Anker-Links
  setupSmoothScrolling();
});

/**
 * Netlify Identity Setup
 */
function setupIdentity() {
  if (window.netlifyIdentity) {
    console.log('Netlify Identity Widget gefunden');
    
    // "Login" Button im Menü anzeigen (falls vorhanden)
    const loginButton = document.querySelector('.login-button');
    if (loginButton) {
      loginButton.style.display = 'inline-block';
    }
    
    // Admin-Button anzeigen, wenn der Nutzer eingeloggt ist
    window.netlifyIdentity.on('init', user => {
      if (user) {
        console.log('Nutzer ist eingeloggt');
        showAdminControls();
      }
    });
    
    // Nach dem Login zur Admin-Oberfläche weiterleiten
    window.netlifyIdentity.on('login', () => {
      document.location.href = '/admin/';
    });
  } else {
    console.log('Netlify Identity Widget nicht gefunden');
  }
}

/**
 * Admin-Controls anzeigen für eingeloggte Nutzer
 */
function showAdminControls() {
  // Admin-Button zum Footer hinzufügen
  const footer = document.querySelector('.footer');
  if (footer) {
    const adminLink = document.createElement('div');
    adminLink.classList.add('admin-link');
    adminLink.innerHTML = '<a href="/admin/" class="admin-button">CMS öffnen</a>';
    footer.appendChild(adminLink);
    
    // Styles für den Admin-Button
    const style = document.createElement('style');
    style.textContent = `
      .admin-link { margin-top: 15px; }
      .admin-button {
        display: inline-block;
        background: #333;
        color: white;
        padding: 5px 15px;
        border-radius: 4px;
        text-decoration: none;
        font-size: 14px;
      }
      .admin-button:hover {
        background: #555;
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Smooth Scrolling für Anker-Links einrichten
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
