# CyberScouts Website

Die offizielle Website der CyberScouts mit Netlify CMS Integration.

## Struktur

Die Website verwendet Netlify CMS als Git-basiertes Content Management System. 

### Verzeichnisstruktur

```
.
├── admin/              # Netlify CMS Admin-Bereich
│   ├── index.html      # Admin UI
│   └── config.yml      # CMS Konfiguration
├── assets/             # Bilder und andere Assets
│   ├── logo.png        # Logo
│   ├── hero-image.jpg  # Hintergrundbild
│   └── uploads/        # Für CMS-Uploads
├── content/            # Content-Dateien (vom CMS verwaltet)
│   ├── landing/        # Landing Page Inhalte
│   ├── modules/        # Module/Kurse
│   ├── pages/          # Statische Seiten
│   └── config/         # Konfigurationsdateien
├── index.html          # Hauptseite
├── styles.css          # CSS-Styles
├── main.js             # JavaScript
└── netlify.toml        # Netlify-Konfiguration
```

## Netlify CMS Einrichtung

1. **GitHub-Repo verbinden**: Verbinde dein GitHub-Repository mit Netlify.

2. **Netlify Identity aktivieren**:
   - Gehe zu deinem Netlify Dashboard
   - Wähle deine Site aus
   - Navigiere zu "Site Settings" > "Identity"
   - Klicke auf "Enable Identity"
   - Unter "Registration Preferences" wähle "Invite only"
   - Unter "Services" > "Git Gateway", klicke auf "Enable Git Gateway"

3. **Zugriff einrichten**:
   - Gehe zu "Identity" > "Invite Users"
   - Gib die E-Mail-Adressen der Admins ein und klicke auf "Send"
   - Die Eingeladenen erhalten einen Link, um sich zu registrieren

4. **CMS Zugriff**:
   - Nach der Anmeldung ist der CMS-Bereich unter `/admin/` verfügbar

## Lokale Entwicklung

Du kannst die Website lokal entwickeln:

1. Klone das Repository:
   ```
   git clone https://github.com/3Blin/CyberScouts-Website.git
   ```

2. Öffne `index.html` in deinem Browser oder verwende einen lokalen Server:
   ```
   npx serve
   ```

3. Bearbeite die Dateien nach Bedarf.

## Inhalte bearbeiten

1. Logge dich im Admin-Bereich ein: `https://deine-website.netlify.app/admin/`
2. Bearbeite die Inhalte über das CMS
3. Publiziere die Änderungen, um sie live zu stellen

## Kontakt

Bei Fragen oder Problemen, kontaktiere uns unter:
[kontakt@cyberscouts.it](mailto:kontakt@cyberscouts.it)
