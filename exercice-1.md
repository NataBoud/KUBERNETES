# Exercice Kubernetes #1 - Réalisation d'un déploiement de base

## Sujet 

Réaliser, via minikube ainsi que l'interface en ligne de commande kubectl, un déploiement de la page d'accueil par défaut de NGINX

## 1. Initialisation du cluster
- Démarre un cluster Kubernetes local via Minikube
```bash
minikube start
```

## 2. Vérification de la connexion
- Vérifie que kubectl pointe bien sur le bon cluster
```bash
kubectl cluster-info
```
- Liste les nœuds (serveurs) disponibles 
```bash
kubectl get nodes
```

## 3. Déploiement de l'application
- Crée un 'Deployment' qui va gérer un Pod contenant l'image légère nginx:alpine
```bash
kubectl create deployment nginx-exercise --image=nginx:alpine
```

- Vérifie que le Pod est bien en statut 'Running'
```bash
kubectl get pods
```

## 4. Exposition du service
- Crée un Service de type NodePort pour rendre l'application accessible
- Le port 80 est le port standard de NGINX à l'intérieur du conteneur
```bash
kubectl expose deployment nginx-exercise --port=80 --type=NodePort
```
- Vérifie que le service est bien créé dans la liste
kubectl get services

## 5. Accès à l'application (Tunnel)
- Commande spéciale Minikube qui génère l'URL et ouvre le navigateur
```bash
minikube service nginx-exercise
```

## 6. Suppression 
```bash
kubectl delete service nginx-exercise
kubectl delete deployment nginx-exercise
```
