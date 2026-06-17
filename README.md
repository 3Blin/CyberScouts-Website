# CyberScouts Website

Offizielle CyberScouts-Website mit Landingpage, zentralen Rechtseiten, Netlify CMS und Teilnehmer-Portfolios per Subdomain.

## Struktur

```text
.
├── admin/                       # Netlify CMS Admin-Bereich
├── content/                     # CMS-Inhalte
├── landingpage/                 # Hauptseite + Rechtseiten
│   ├── index.html
│   ├── impressum.html
│   ├── datenschutz.html
│   └── cookies.html
├── portfolio-artem/
├── portfolio-max/
├── portfolio-adrian/
├── portfolio-bero/
├── portfolio-cornelius/
├── portfolio-ferdinand/
├── portfolio-angelina/
├── portfolio-damyen/
├── portfolio-paul/
├── portfolio-jonas/
├── portfolio-ian/
├── portfolio-lukas/
├── portfolio-noah/
├── shared/                      # Gemeinsame CSS/JS/Assets
│   ├── css/styles.css
│   ├── js/main.js
│   └── assets/
└── netlify.toml                 # Netlify-Routing/Subdomains
```

## Routing

Landingpage:

```text
cyberscouts.it     -> /landingpage/index.html
www.cyberscouts.it -> /landingpage/index.html
```

Teilnehmer-Portfolios:

```text
artem.cyberscouts.it      -> /portfolio-artem/index.html
max.cyberscouts.it        -> /portfolio-max/index.html
adrian.cyberscouts.it     -> /portfolio-adrian/index.html
bero.cyberscouts.it       -> /portfolio-bero/index.html
cornelius.cyberscouts.it  -> /portfolio-cornelius/index.html
ferdinand.cyberscouts.it  -> /portfolio-ferdinand/index.html
angelina.cyberscouts.it   -> /portfolio-angelina/index.html
damyen.cyberscouts.it     -> /portfolio-damyen/index.html
paul.cyberscouts.it       -> /portfolio-paul/index.html
jonas.cyberscouts.it      -> /portfolio-jonas/index.html
ian.cyberscouts.it        -> /portfolio-ian/index.html
lukas.cyberscouts.it      -> /portfolio-lukas/index.html
noah.cyberscouts.it       -> /portfolio-noah/index.html
```

Zentrale Rechtseiten:

```text
cyberscouts.it/impressum
cyberscouts.it/datenschutz
cyberscouts.it/cookies
```

## Lokale Entwicklung

```bash
python3 -m http.server 18089
```

Dann direkt öffnen:

```text
http://127.0.0.1:18089/landingpage/index.html
http://127.0.0.1:18089/portfolio-artem/index.html
```

Netlify-Rewrites werden lokal vom einfachen Python-Server nicht simuliert.

## Netlify CMS Einrichtung

1. GitHub-Repo mit Netlify verbinden.
2. Netlify Identity aktivieren.
3. Git Gateway aktivieren.
4. Admin unter `/admin/` öffnen.

CMS-Medien werden nach `shared/assets/uploads` geschrieben und öffentlich unter `/shared/assets/uploads` ausgeliefert.

## Kontakt

[mail@cyberscouts.it](mailto:mail@cyberscouts.it)
