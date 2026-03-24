# Eleva Home Theme

Ce dossier est deja relie a GitHub et Shopify CLI.

## Config en place

- Repo GitHub: `https://github.com/kapo666/eleva-home-theme.git`
- Boutique Shopify: `hzztt2-21.myshopify.com`
- Theme live: `196279632220` (`ELEVA HOME`)
- Fichier d'environnement CLI: `shopify.theme.toml`

## Workflow local

Lancer un theme de dev Shopify:

```bash
shopify theme dev -e dev
```

Pousser les changements sur le theme live:

```bash
shopify theme push -e live --allow-live
```

Recuperer l'etat actuel du theme live avant de bosser:

```bash
shopify theme pull -e live
```

Voir les themes de la boutique:

```bash
shopify theme list --store hzztt2-21.myshopify.com
```

## Git

Verifier les changements:

```bash
git status
```

Commit:

```bash
git add .
git commit -m "ton message"
```

Push GitHub:

```bash
git push origin main
```

## Conseil

Pour eviter d'ecraser le theme live par erreur, travaille d'abord avec:

```bash
shopify theme dev -e dev
```

Puis pousse sur le live seulement quand c'est valide:

```bash
shopify theme push -e live --allow-live
```
