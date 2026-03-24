# Guide des commandes - Exercice #3

### 1. Préparation
minikube start

### 2. Déploiement initial
# On utilise l'image que tu viens d'envoyer sur le cloud
kubectl create deployment monsite-custom --image=TON_PSEUDO/monsite:v1

### 3. Exposition au monde extérieur
# On utilise LoadBalancer pour simuler une IP publique
kubectl expose deployment monsite-custom --port=80 --type=LoadBalancer

### 4. Mise à l'échelle (Scaling)
# On demande à Kubernetes de passer à 3 réplicas (3 instances du site)
kubectl scale deployment monsite-custom --replicas=3

# Vérification : Tu devrais voir 3 Pods "Running"
kubectl get pods

### 5. Accès via le tunnel
# Dans un terminal séparé
minikube tunnel

# Dans ton terminal principal pour ouvrir le site
minikube service monsite-custom