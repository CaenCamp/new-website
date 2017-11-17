# Contribuer à la refonte du site des CaenCamp.s

### Sommaire

* [Code de conduite](#code-de-conduite)
* [Qu'est ce que je peux faire ?](#quest-ce-que-je-peux-faire)
    * [Contribuer au contenu](#contribuer-au-contenu)
    * [Contribuer au design](#contribuer-au-design)
    * [Contribuer au code](#contribuer-au-code)
    * [Rapporter des bugs](#rapporter-des-bugs)
    * [Suggérer des améliorations ou de nouvelles fonctionnalités](#suggestions)
* [Installer le projet](#installer-le-projet)
    * [Les prérequis](#installer-le-projet)
    * [Sans Docker](#sans-docker)
    * [Avec Docker](#avec-docker)
    * [L'organisation du code](#lorganisation-du-code)
* [Faire une Pull Request](#faire-une-pull-request)
    * [Le git flow](#le-git-flow)
    * [Les tests](#les-tests)
    * [Les bonnes pratiques](#les-bonnes-pratiques)
* [Trouver de l'aide](#trouver-de-laide)
    * [Dans une issue](#dans-une-issue)
    * [Au cours d'une pull request](#au-cours-dun-pull-request)
    * [Sur Slack](#sur-slack)
    * [Le wiki](#le-wiki)
    * [Aux meetups, dans les bars](#aux-meetups-dans-les-bars)
    * [Par email](#par-email)
* [Notes additionnelles](#notes-additionnelles)
    * [La roadmap](#la-roadmap)
    * [L'hébergement final du site](#lhebergement-final-du-site)

## Code de conduite
En participant, vous devez respecter le [code de conduite du projet](CODE_OF_CONDUCT.md).

## Qu'est ce que je peux faire ?
Beaucoup de choses, l’écriture de code n’étant pas loin s’en faut le facteur principal de réussite de ce projet de refonte.

### Contribuer au contenu

Cela peut être plus simple d'écrire une ligne de code bien interprétée par une machine qu'un texte qui transmet correctement un message à une communauté. Or c'est l'objectif de ce projet. Vous êtes donc les bienvenues pour nous aider à rédiger les contenus des pages d'**appels à talks**, de **demande d'accueil** auprès des entreprises ainsi que la **baseline** des CaenCamp.

Il faut également re-intégrer tout les contenus de l'ancien site, les qualifier (avec des tags), extraire les informations des speaker et rédiger une petite bio pour chacun d'eux.

Vous trouverez plus de détails sur ces besoins dans [les issues taguées `content`](https://github.com/CaenCamp/new-website/issues?q=is%3Aissue+is%3Aopen+label%3Acontent).

Et plus globalement, tout le contenu qui n'est pas du code mérite certainement votre attention. Par exemple, vous aurez peut-être identifié des phrases à rallonge, des fautes d'orthographe ou de grammaire sur cette page "guide de contribution" ? Si c'est le cas, n'hésitez pas à faire une petite pull request avec vos corrections.


**Note** : Pour les corrections de type typo, grammaire ou orthographe à faire sur des pull requests, vous pouvez utiliser le syntaxe `s/[search pattern]/[replace]/` de [sedy](https://marmelab.com/blog/2017/02/28/sedy-the-serverless-github-bot-which-fix-typos-for-you.html) qui est configuré sur le projet.

### Contribuer au design

Concernant le design, tout est à faire. Nous pouvons certainement partir sur un look *à la bootstrap*, mais si certains d'entre vous se sentent inspirés, ce sera un gros plus.

Pour l'instant, nous n'avons qu'un logo qui d'ailleurs ne demande qu'à évoluer.

![CaenCamp Logo](logo.png)

Cela peut-être une occasion de collaboration entre développeurs/intégrateur/designer/ergonome/...

Le projet intègre [storyBook](https://storybook.js.org/) permettant la mise en place un [styleguide](http://styleguides.io/) dans les règles de l'art.

Les issues concernant le design sont associées au tag [`design`](https://github.com/CaenCamp/new-website/issues?q=is%3Aopen+is%3Aissue+label%3Adesign).

### Contribuer au code

Le site repose sur [GatsbyJs](https://www.gatsbyjs.org/). Cela va donc impliquer pour participer au code de faire du [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript), et plus particulièrement du [React](https://reactjs.org/) (en version 16). Pour les fonctionnalités les plus simples, cela devrait suffir. Pour les fonctionnalités un peu plus avancées, il faudra aussi s'attaquer à [GraphQL](http://graphql.org/), au [service worker](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API) et aux API de [Slack](https://api.slack.com/), [Trello](https://developers.trello.com/) ou [Meetup](https://www.meetup.com/fr-FR/meetup_api/). Bref de quoi découvrir plein de choses.

Et si vraiment vous détester le Javascript, il y aurait sûrement moyen de mettre en place quelques services
en mode serverless avec du Go ou du Clojure, ... ou ce que vous voulez en fait du moment que cela fait le job.

Les issues concernant le code sont associées au tag [`code`](https://github.com/CaenCamp/new-website/issues?q=is%3Aopen+is%3Aissue+label%3Acode).

### Rapporter des bugs
Il parait que chaque bug relevé sauve un chaton. En tout cas, la technique du [ZBSD (Zero-Bug Software Development)](https://medium.com/quality-functions/the-zero-bug-policy-b0bd987be684) semble porter ses fruits, comme le rapporte [Andrew Fulton](https://medium.com/@andrew.fulton/how-we-got-to-zero-bugs-and-implemented-a-zero-bug-policy-c77ee3f2e50b).
Donc, si à chaque bug rencontré quelqu'un [ouvre une issue](#ouvrir-une-issue) avec le label `bug`, ce seront des familles entières de chats qui seront sauvées.

<h3 id="suggestions">Suggérer des améliorations ou de nouvelles fonctionnalités</h3>
Les objectifs de la refonte du site sont donc : mettre en avant les talks passés ainsi que leur speaker, encourager les nouvelles propositions de talks et encourager les entreprises caennaises à nous accueillir.

Les fonctionnalités prévues donc déjà présentes dans les [issues](https://github.com/CaenCamp/new-website/issues) ou sur le [board du projet](https://github.com/CaenCamp/new-website/projects/1) vous semblent peut-être inabouties ou insuffisantes ?

Dans ce cas, ouvrez une nouvelle issue de type `feature` ou `improvement` en décrivant bien votre idée.

## Installer le projet

Quelle que soit votre type d'implication, ce peut-être une bonne chose que d'installer le projet sur votre machine pour pouvoir visualiser votre contribution avant de la proposer sur Github.

### Prérequis

Tout d'abord vous devez avoir un compte GitHub ainsi que [git installé](https://help.github.com/articles/set-up-git/) sur votre ordinateur.
Ensuite vous devez ["*forker*"](https://guides.github.com/activities/forking/) le dépôt du projet et le cloner localement.

Enfin, vous devez faire un choix :
* Soit vous décidez d'installer [Node.js](https://nodejs.org/en/download/) en version 8.9 (LTS) sur votre ordinateur. Node est un environnement d'exécution JavaScript .js (comme l'est un navigateur). C'est un bon choix.
* Soit vous préférez ne pas installer Node.js, et dans ce cas, vous devrez installer [Docker](https://docs.docker.com/engine/installation/). Docker va vous permettre d'exécuter Node.js au sein d'un container (une sorte de machine virtuelle). C'est aussi un bon choix.

Si vous ne savez pas que choisir, Docker présente l'avantage de bien isoler les dépendances du projet de votre OS ainsi que de rendre un peu plus facile l'exécution des tests.

### Sans Docker
Vous avez donc décidez d'installer Node.js. La première chose à faire est d'installer les dépendances du projet :

```bash
npm install
```

Ensuite, voici la principale commande à connaitre :

```bash
npm develop
```

Le projet est maintenant executé en mode développement (avec un [Webpack Dev Server)](https://webpack.github.io/docs/webpack-dev-server.html))  et vous pouvez voir le site à l'adresse http://localhost:8000. Chaque modification effectuée dans le code sera immédiatement impactée dans votre navigateur.

### Avec Docker
Si vous avez choisi Docker, vous pouvez utiliser les recettes du fichier `makefile` pour lancer les commandes du projet.

La première commande à lancer permettant d'installer les dépendances du projet est :

```bash
make install
```

Ensuite, voici les deux principales commandes à connaitre :

```bash
make start
```

Le projet est maintenant executé en mode développement (avec un [Webpack Dev Server)](https://webpack.github.io/docs/webpack-dev-server.html))  et vous pouvez voir le site à l'adresse http://localhost:8000. Chaque modification effectuée dans le code sera immédiatement impactée dans votre navigateur.

Pour arrêter le projet, faites un:

```bash
make stop
```

**Tips** : Vous pouvez voir toutes les commandes disponibles en tappant juste `make`.

### L'organisation du code

Voici l'organisation des principaux répertoires du projet :

* **.github** : On trouve ici les fichiers d'aide sur le projet et les templates pour Github.
* **.storybook** : On trouve ici les fichiers de configuration permettant le bon fonctionnement du storybook
* **e2e** : On trouve ici les fichiers des tests e2e.
* **public** : Ce répertoire n'est pas dans le dépôt git, mais sera visible dès que vous lancerez un `build` du projet. Vous y trouverez donc les fichiers statiques finaux tels qu'ils  seront mis en ligne.
* **src** : On trouve ici tous les fichiers propres à Gatsby ainsi que les fichiers de tests unitaires.
* **static** : On trouve ici tous les fichiers *static*, c.a.d les images, la favicon, etc ...
* **stories** : On trouve ici les fichiers propres au storybook (hors configuration).

## Faire une Pull request

Si vous n'avez encore jamais fait de Pull Request (PR), la lecture du tutorial Github [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/) est sûrement un bon point de départ.

### le git flow

Pour le projet, nous utilisons le workflow suivant :

 * Le projet principal ne possède qu'une branche `master`.
 * Chaque participant réalise un [fork](https://guides.github.com/activities/forking/) du dépôt principal puis ouvre une [branche](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) depuis son fork pour chaque nouvelle feature.
 * Une [PR](https://help.github.com/articles/about-pull-requests/) est créée depuis la branche du fork vers la branche `master` du dépôt principal.

![Git Flow](gitflow.png)

Si vous vous sentez un peu perdu.e, la lecture de [Using the Fork-and-Branch Git Workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/) devrait vous rendre plus serein.ne.

### Les tests

Afin de facililiter l'intégration (le merge) de vos PR, surtout si elles contiennent du code, celle-ci devront contenir les tests couvrant vos propositions.

Il y a deux grands types de tests sur le projet:

* des tests unitaires lancés par [Jest](https://facebook.github.io/jest/) et pouvant inclure [enzyme](http://airbnb.io/enzyme/) pour les tests de composants React,
* des tests [e2e](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c) lancés par [Jest](https://facebook.github.io/jest/) et utilisant [puppeteer](https://github.com/GoogleChrome/puppeteer).

Les tests unitaires sont lancés localement avec la commande `npm run test` ou `make test-unit` si vous avez docker.

Les tests e2e sont facilement lancés si vous avez Docker : `make test-e2e`.

Le dépôt du projet est branché sur la plateforme d'intégration continue [Travis](https://travis-ci.org/CaenCamp/new-website), les tests seront donc également automatiquement lancés lors de votre PR.

[![Build Status](https://travis-ci.org/CaenCamp/new-website.svg?branch=master)](https://travis-ci.org/CaenCamp/new-website)

### Les bonnes pratiques

La bonne pratique, c'est de **faire des PR**, et puis c'est tout.

Mais voici quelques conseils qui peuvent les rendre encore meilleures :

* Faites des commits [courts et bien commentés](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
* Faites des [PR courtes](https://dev.to/bosepchuk/optimal-pull-request-size-600), toute une tache (une issue) n'a pas forcement besoin d'être adressée dans une seule PR.
* Faites référence à l'issue que la PR adresse.
* N'hésitez pas à joindre des captures d'écran, fixes ou animées.
* Ajouter une description et une *todo list* en ouvrant la PR.
* N'attendez pas que la PR soit terminée pour l'ouvrir : la communauté viendra plus facilement en aide en découvrant tôt la PR.
* Utilisez les labels `WIP` (Work In Progress) et `RFR` (Ready For Review) pour indiquer l'avancement de la PR.
* dernier point : normalement, toute les *textes* (titre, description, commentaires, ...) sont fait en anglais. Si vous n'êtes pas à l'aise, écrivez en français. Mais le norme en opensource, c'est l'anglais.

## Trouver de l'aide

### Dans une issue
Le [système d'issues du Github](https://guides.github.com/features/issues/) est très bien pensé et permet de facilement réagir, commenter, noter... Donc si une issue vous intéresse mais qu'elle ne vous semble pas claire, c'est directement dans l'issue que vous pouvez poser des questions.

### Au cours d'une pull request
Si vous avez commencé une PR, mais que vous êtes bloqué, vous pouvez écrire un commentaire dessus décrivant votre problème et ajouter le label `help wanted`.


### Sur Slack
Il existe un channel **caen-camps** sur le slack [Web@Caen](http://webcaen.slack.com). N'hésitez pas à [demander une invitation](mailto:contact@alexisjanvier.net) puis à y poser vos questions.
L'une des tâches de cette refonte concerne d'ailleur la mise en place d'un sytème d'invitation simplifié pour rejoindre le Slack des CaenCamp.s .

### Le wiki
Le wiki d'un projet est souvent difficile à maintenir. C'est portant une manière simple et efficace de noter des "astuces" et autres commentaires documentant la vie du projet. Vous pouvez aller y jeter un coup d'oeil, quelquefois qu'une bonne âme se serait donné la peine d'y noter quelque chose.

### Aux meetups, dans les bars
Les CaenCamp.s, c'est avant tout des rencontres. Venez donc chaque dernier mardi du mois aux éditions des CaenCamp.s, ce sera l'occasion de poser toutes vos questions sur ce projet de refonte.

Et Caen regorge d'autres rencontres succeptibles d'aider au projet : les apero-seo, les apero-web, les [apero UX](https://www.meetup.com/fr-FR/Apero-UX-Design/), les [rencontres interactives](http://rencontres-interactives.net/a-propos/) ...

### Par email

Si vous souhaitez participer, mais que vous n'y arrivez pas malgré les issues, le slack, le wiki et les talks, vous pouvez toujours envoyer un email à la mer : contact@alexisjanvier.net

## Notes additionnelles

### La Roadmap

Ce projet est un projet uniquement lié aux bonnes volontés. Tous nous travaillons et il n'est donc pas question de mettre en place un Roadmap.

**Mais**, ce serait chouette de voir une première version en ligne pour 2018 ;)

### L'hébergement final du site

L'hébergement final du site (les fichiers buildés dans le répertoire `public`) sera assuré par Github, mais ne sera pas géré directement au sein de ce projet de refonte.
