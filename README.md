# ECF | Front-End

## Contexte : 
Vous arrivez dans votre nouvelle boite, et pour les besoins de celle-ci, on vous demande de maquetter puis de coder un site permettant de pouvoir proposer des idées de repas à une famille sur une semaine. En somme, un "Suggestionneur de Repas", en utilisant l'API suivante : [](https://www.themealdb.com/)

## Les fonctionnalités du Site
- un header avec au minimum le logo de votre app
- un footer avec au minimum votre nom et prénom
- des cartes de repas pour chaque jour de la semaine
- dans chaques cartes, descriptions des aliments qui composent le repas
- un DISCLAIMER sur 5 fruits et légumes par jour
- Les utilisateurs doivent pouvoir 
- Prendre en compte le référencement

## Les contraintes techniques
- Produire un maquette mobile et desktop
- L'intégration doit se faire en HTML5 & CSS3 & JS, avec ou sans framework
- [Le code devra utiliser les balises sémantiques et ne doit contenir aucune erreur ni alerte au validateur W3C HTML et CSS.](https://validator.w3.org/)
- Le HTML, le CSS et le JS doivent être séparés et le dossier doit être organisé
- Le code doit être versionné avec git et doit avoir un repo distant sur Github ou Gitlab
- Si besoin d'îcones, utilisez [FontAwesome](https://fontawesome.com/icons) ou [GoogleFont](https://fonts.google.com/icons)
- Votre site ne doit pas faire style "nineties"

## L'évaluation
L'évaluation portera sur :
  - La conception moderne d'une maquette mobile et desktop
  - l'utilisation d'un HTML sémantique et adapté au référencement
  - bonnes pratiques CSS et JS
  - la lisibilité de votre code 

API : https://www.themealdb.com/

Fonctionnalités JS : 
- Détecter automatiquement le jour de la semaine pour afiicher en priorité la recette du jour

## Taille des polices :
- Texte de courant : 14px -> 16px
- Barre de nav : 16px -> 20px
- Gros titre : 35px -> 100px
- Sous titre : 20px -> 35px

## Taille standards des écrans : 
Les tailles standards des écrans à prendre en compte sont :
- De 480 à 720 px pour les téléphones mobiles.
- De 768 à 900 px pour les tablettes en mode portrait.
- De 900 à 1024 px pour les tablettes en mode paysage.
- De 1024 à 1200 px pour un ordinateur fixe ou portable.

## Couleurs 
- background : rgba(252, 236, 210, 0.7),

## SEO 

 ### FR
  <h1>Qu'est ce qu'on mange cette semaine ?</h1>
  <p>Venez découvrir nos délicieuses recettes pour des repas équilibrés et diversifiés. Ce site permettra d’éveiller vos papilles avec de nouvelles recettes chaque semaine, pour préparer de délicieux plats avec les recommandations de nos chefs dans des recettes accessibles à préparer et satisfaisantes à déguster. </p>

 ### EN
 <h1>What do we eat this week ?</h1>
 <p>Come and discover our delicious recipes for balanced and diversified meals. This site will awaken your taste buds with new recipes every week, to prepare delicious dishes with the recommendations of our chefs in recipes that are accessible to prepare and satisfying to taste.</p>

## Fonctionnalités 
  ### Bandeau menu du jour
  - Utilisation du constructeur Date()
  - Choix du repas par jour avec switch
