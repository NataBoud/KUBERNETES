# Exercice #6

## Sujet
Réaliser, via minikube ainsi l'approche déclarative de K8s, un déploiement via un pod d'un conteneur de type NGINX dont la page d'accueil devra retourner l'adresse IP privée du serveur sur lequel elle tourne. 

* Créer ou trouver une image répondant aux besoins métiers
* La rendre disponible pour notre cluster 
* Créer un cluster
* Se connecter au cluster
* Créer les fichiers de manifeste
  * Créer le fichier de déploiement
  * Créer le fichier de service exposé au monde extérieur
* Tester le déploiement vis un tunnel dans minikube

## On cible le répertoire. Kubernetes va lire tous les fichiers .yaml et .yml à l'intérieur et les appliquer dans le bon ordre.

```bash
kubectl apply -f ./manifestes/
```
cela va retourner :
```bash
deployment.apps/nginx-ip-deployment created
service/nginx-ip-service created
```

## Vérification et Test
```bash
kubectl get pods -l app=nginx-ip
```
Lancer l'accès via Minikube :

```bash
minikube service nginx-ip-service
```
La page d'accueil retourne l'adresse IP privée du serveur sur lequel elle tourne. 

```bash
Server address: 10.244.0.19:80
Server name: nginx-ip-deployment-5c57769b48-cxtjz
Date: 24/Mar/2026:10:33:39 +0000
URI: /
Request ID: c54fdbfa54fc28185c6f3599a1a549b2
```
