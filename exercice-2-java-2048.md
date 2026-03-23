# Exercice Kubernetes #2 - Réalisation d'un déploiement d'applicatif Java

## Sujet 

Réaliser, via minikube ainsi que l'interface en ligne de commande kubectl, un déploiement de l'application 2048 déservie par un serveur Tomcat (image docker de `quchaonet`)


## 1. Initialisation du cluster
- Démarrer le cluster local 
```bash
minikube start
```

## 2. Déploiement de l'application
- Créer le déploiement à partir de l'image contenant `Tomcat` et `le jeu 2048`
- `quchaonet/2048` est le chemin complet (Auteur/Projet)
```bash
kubectl create deployment java-2048 --image=quchaonet/2048
```

- Vérifier que le Pod est bien 'Running'
```bash
kubectl get pods
```

## 3. Exposition via un LoadBalancer
- Exposer l'application sur le port `8080` (port par défaut de `Tomcat`)
- Le type `LoadBalancer` est utilisé pour l'accès externe direct
```bash
kubectl expose deployment java-2048 --type=LoadBalancer --port=8080
```
- Vérifier l'état du service (EXTERNAL-IP sera en `pending`)
```bash
kubectl get services
```

## 4. Activation du Tunnel 
- Ouvrir un NOUVEAU terminal et lancer la commande
```bash
minikube tunnel
```
- Elle permet de simuler l'IP externe sur l'ordinateur local


## 5. Accès au jeu
- Utilise cette commande pour ouvrir le navigateur sur l'adresse du jeu
- Ouvrir un NOUVEAU terminal et lancer la commande
```bash
minikube service java-2048
```

### Suppression
- Pour supprimer les ressources de l'exercice :
```bash
kubectl delete service java-2048
kubectl delete deployment java-2048
```
