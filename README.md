# Yarro's African Braiding

Landing page premium et responsive pour un salon de tresses africaines situe a Spring, Texas.

## Apercu

- Stack : React + Vite
- Objectif : convertir les visiteurs en reservations WhatsApp et appels
- Design : premium, feminin, moderne, optimise mobile / tablette / ordinateur
- URL de production : `https://yarros-african-braiding.vercel.app`

## Fonctionnalites

- Hero immersif avec photo reelle du salon
- CTA WhatsApp et appel direct
- Cartes services avec tarifs
- Galerie avec vraies photos du salon
- Section "How to book"
- Carte Google Maps integree
- Sticky CTA mobile
- SEO local pour Houston / Spring TX
- Donnees structurees `schema.org`

## Images du projet

Les images utilisees dans cette version proviennent du dossier :

`This PC > Pictures > yarro 's braids`

Elles sont copiees dans :

`public/yarros-braids/`

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site sera disponible sur :

`http://localhost:5173`

## Build de production

```bash
npm run build
npm run preview
```

## Structure utile

- `src/App.jsx` : contenu principal de la landing page
- `src/App.css` : design, responsive, hero, sections, CTA
- `src/index.css` : base globale
- `index.html` : SEO, meta tags, Open Graph, JSON-LD
- `public/yarros-braids/` : images du salon

## Personnalisation rapide

Si tu veux adapter ce projet pour un autre salon, modifie surtout :

- le nom de la marque dans `src/App.jsx` et `index.html`
- le numero WhatsApp / telephone
- l'adresse
- les tarifs et descriptions
- les images dans `public/yarros-braids/`

## Deploiement

Le projet est deployee sur Vercel.

Alias public actuel :

`https://yarros-african-braiding.vercel.app`

## Sauvegarde GitHub

Le projet est versionne dans le depot GitHub lie a ce dossier. Les fichiers du site peuvent etre commits et pushes directement depuis cette copie locale.
