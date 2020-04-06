---
edition: 11
meetupId: 269886176
title: "Usine Partagée et JobBoard"
slug: "ccc-11" 
date: "2020-04-08 18:30:00"
description: "On fait le point ensemble sur deux projets en ébullition : Usine partagée et le JobBoard"
place:
published: true
image: ccc11.png
---
Ce Coding CaenCamp sera l'occasion d'aborder pas mal de sujets, en commençant par le projet Usine Partagée.

Ce projet est arrivé sur la table des CaenCamp en fin de semaine dernière. Sur une initiative du Dôme et du conseil Régional, un collectif de Fablabs et autres lieux de fabrication s'est mis en place afin d'organiser la fabrication et la distribution de visières de protection pour les soignants. Si tout se mettait bien en place "IRL", il manquait encore le système permettant de prendre les commandes en ligne et d'assurer le suivi. C'est via le réseau des CaenCamp, du Dôme et de Thomas/Incaya que s'est montée en quelques heures une petite équipe pour résoudre ce problème. Pourquoi une petite équipe ? Parce qu'il fallait mettre en place l'application fonctionnelle en 2 jours, et que dans ce cas là, une petite équipe qui se connait bien est plus efficace qu'un plus grand collectif moins habitué à travailler ensemble. 

Voici 2 liens pour vous donner plus d'informations sur le projet : 

* [Usine partagée](http://ledome.info/index.php?page=fiche_agenda&id_manifestation=2315)
* [Usine partagée : des visières contre le Covid-19](https://marmelab.com/blog/2020/03/31/visieres-covid.html)

Toujours est-il que le projet est [en open-source sur le compte Github des CaenCamp.s](https://github.com/CaenCamp/usine-distribuee) et que si l'application est déjà en ligne, ce n'est pas pour autant qu'il n'y a plus rien à y faire. 

Bonne nouvelle, la stack choisie est la même que sur le projet de [JobBoard](https://github.com/CaenCamp/jobs-caen-camp) qui doit commencer à être familière à plusieurs d'entre vous.

Donc, si le projet vous intéresse, et que vous souhaitez vous y investir, toutes les bonnes volontés sont les bienvenues pour entretenir l'application en ligne le temps que le besoin existe ! Nous pourrons si certains le souhaitent vous faire une présentation complète du projet et du code. 

Toujours dans la suite du projet usine partagée, nous avons aussi une problématique de préparation au partage de ce projet. En effet, même si le code est open-source, il est très lié à l'organisation qui s'est mise en place en Normandie, ce qui fait que le modèle utilisé n'est pas 
encore prêt pour s'adapter à une organisation un peu plus générique.
Donc, si certains se sentent l'âme d'architecte, il y a un travail intéressant à faire pour permettre un partage plus facile du code déjà développé. Toutes les informations sont dans cette issue : [Partage du projet d'usine.s partagée.s](https://github.com/CaenCamp/usine-distribuee/issues/115)

Mais revenons maintenant au projet JobBoard. Les choses avancent malgré les aléas, et nous avons déjà un hébergement prêt à ouvrir le projet au monde. Cependant, tout n'est pas encore prêt, même pour une version strictement minimale. 

Tout d'abord, l'implémentation réalisée des paramètres de requêtes des listes de l'API n'a pas passé l'épreuve de l'expérimentation. Il y a donc 3 issues sur ces bugs, qui n'attendent que vous. Les problèmes à résoudre sont bien identifiés, et concernent des interventions assez simples mais impliquant l'ensemble de la stack. Ce sont donc de très bonnes issues à prendre si vous souhaitez découvrir le projet : 

- [Refonte de la pagination de l'API](https://github.com/CaenCamp/jobs-caen-camp/issues/55) 
- [Refonte du tri de l'API](https://github.com/CaenCamp/jobs-caen-camp/issues/56) 
- [Refonte des filtres de l'API](https://github.com/CaenCamp/jobs-caen-camp/issues/57) 

Ensuite, il faut prévoir de mettre en place une authentification sur 
l'interface d'administration : [Sécurisation de l’administration](https://github.com/CaenCamp/jobs-caen-camp/issues/47) 

Le front est aussi en cours d'élaboration et une discussion est en cours sur le sujet : [Wireframe préliminaire](https://github.com/CaenCamp/jobs-caen-camp/issues/21). N'hésitez pas à y participer. 

Et enfin, comme la mise en ligne ne concernera qu'une version vraiment à minima des offres d'emploi, vos envies/besoins concernant ce que pourra devenir le site jobBoard sont les bienvenues.
Vous pouvez venir en discuter sur cette issue : [Amélioration du modèle des offres d’emplois](https://github.com/CaenCamp/jobs-caen-camp/issues/48). 

En espérant discuter de tous cela avec vous mercredi prochain sur Discord.

Pour s'inscrire, c'est ici : https://www.meetup.com/fr-FR/CaenCamp/events/269886176/

*Remarque : pour ceux n'ayant pas encore accès au Discord des CaenCamp.s, demandez nous par mail, sur Meetup ou sur Slack une invitation !*

## Il faut prendre son laptop ?

Ce sera plus facile ^^

## Ce sera où ?

Sur Discord
