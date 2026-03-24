# Commandes - Exercice #3

### 1. Préparation
```bash
minikube start
```

### 2. Déploiement initial
```bash
kubectl create deployment monsite-custom --image=<psedo-docker>/monsite:v1
```

### 3. Exposition au monde extérieur -LoadBalancer pour simuler une IP publique
```bash
kubectl expose deployment monsite-custom --port=80 --type=LoadBalancer
```

### 4. Mise à l'échelle (Scaling)
```bash
kubectl scale deployment monsite-custom --replicas=3
```

# Vérification 
```bash
kubectl get pods
```

### 5. Accès via le tunnel
```bash
minikube tunnel
```

# Dans ton terminal principal pour ouvrir le site
```bash
minikube service monsite-custom
```

