# Shop Page Frontend - E-commerce Canapés

## Description

Ce projet est un site e-commerce développé côté client pour la vente de canapés, réalisé dans le cadre de ma formation en développement web à Simplon. En utilisant un backend déjà fourni, mon objectif était d'implémenter une interface dynamique avec **JavaScript**, permettant à l'utilisateur d'interagir avec les produits, de gérer son panier et de finaliser une commande. Ce projet met en œuvre des concepts d'interactivité tels que l'utilisation du **localStorage**, la gestion des événements avec **addEventListener**, et l'intégration d'une API pour récupérer les informations des produits.

## Fonctionnalités

### 1. **Affichage dynamique des produits**
   - Les produits sont récupérés via une **API** et affichés sur la page d'accueil du site.
   - Chaque canapé est présenté avec une image, une description et un prix.
   
### 2. **Page Produit**
   - Lorsqu'un utilisateur sélectionne un produit, une page détaillée du canapé est affichée avec plus d'informations.
   - L'utilisateur peut choisir la couleur du canapé.

### 3. **Gestion du Panier**
   - Le panier est géré côté client à l'aide du **localStorage**. Cela permet à l'utilisateur de :
     - Ajouter des canapés au panier.
     - Sélectionner la quantité de canapés.
     - Choisir la couleur et voir sa sélection mise à jour en temps réel.
   - Le panier affiche un récapitulatif avec le nombre d'articles, la quantité de chaque produit et le total.

### 4. **Page de Confirmation**
   - À la fin de l'achat, un **formulaire de commande** permet à l'utilisateur de saisir ses informations (nom, adresse, etc.).
   - Un numéro de commande est généré et envoyé à l'utilisateur via l'API.
   - Le récapitulatif de la commande est affiché sur la page de confirmation, y compris les produits et le numéro de commande.

### 5. **Utilisation des Méthodes de Tableau et des Événements**
   - Des **méthodes de tableau** (comme `.map()`, `.filter()`, `.reduce()`) ont été utilisées pour manipuler les données des produits et calculer le total du panier.
   - L'interaction avec les éléments de la page est gérée par des **addEventListener**, notamment pour ajouter des articles au panier, modifier la quantité ou sélectionner des options de couleur.

## Technologies utilisées

- **HTML5** : Structuration des pages du site e-commerce.
- **CSS3** : Mise en forme et design du site, en suivant une approche mobile-first.
- **JavaScript** : Interaction dynamique avec l'API, gestion du panier, manipulation du DOM, gestion des événements, stockage des données avec `localStorage`.
- **API externe** : Récupération des produits et gestion des commandes via un backend fourni.

## Objectifs du Projet

- Mettre en pratique les concepts de développement frontend en JavaScript, tels que la manipulation du DOM, la gestion des événements et l'utilisation du `localStorage`.
- Travailler avec une API pour récupérer et afficher des données dynamiquement.
- Créer un panier interactif permettant à l'utilisateur de sélectionner des produits, de choisir des options et de calculer un total en temps réel.
- Générer un numéro de commande et envoyer les informations à l'utilisateur via l'API.


## Installation

1. Clonez le repository sur votre machine locale :

   ```bash
   git clone https://github.com/wawa35/Shop-Page-FrontEnd.git

