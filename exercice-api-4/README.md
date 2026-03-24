# 1. On construit et l'envoie sur le Docker Hub l'image
```bash
docker build -t <name>/node-api:v1 .
docker push <name>/node-api:v1
```
# Commandes - Exercice #4 (Rollout & Update)

### 1. Déploiement de la V1
```bash
kubectl create deployment node-api --image=<name>/node-api:v1
```
### 2. Exposition du service (Port 3000)
```bash
kubectl expose deployment node-api --type=LoadBalancer --port=80 --target-port=3000
```

### 3. Test V1
# Terminal 2 : 
```bash
mini kube service node-api 
```
### 3. MAJ V2
```bash
docker build -t <name>/node-api:v2 .
docker push <name>/node-api:v2
```

### 4. Mise à jour vers la V2 (Le Rollout). Change l'image du déploiement pour passer en V2
```bash
kubectl set image deployment/node-api node-api=<name>/node-api:v2
```
### 5. Surveillance de la mise à jour
# Pour voir Kubernetes tuer les anciens Pods et créer les nouveaux un par un
```bash
kubectl rollout status deployment/node-api
```

### Nettoyage
```bash
kubectl delete deployment node-api
kubectl delete service node-api
```
