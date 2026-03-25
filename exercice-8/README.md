1. build l'image
```bash
docker build -t flask-storage:v1 .
```
2. Crée le cluster :
```bash
kind create cluster --name exo-storage --image kindest/node:v1.31.0
```
3. Vérifie qu'on est sur le bon contexte :
```bash
kubectl config use-context kind-exo-storage
```
4. Charger l'image dans CE cluster :
```bash
kind load docker-image flask-storage:v1 --name exo-storage
```
- Étape 1 : Le Test "SANS VOLUME" 

Appliquer :
```bash
kubectl apply -f 1-no-volume.yaml
# verifier :
kubectl get pods
```
 Le Protocole de Crash, le Tunnel :
```bash
kubectl port-forward deployment/flask-no-volume 5000:5000
```
tester : 
```bash
Invoke-RestMethod -Uri "http://localhost:5000/log" -Method Post -Body '{"message": "Premier log de test"}' -ContentType "application/json"
Invoke-RestMethod -Uri "http://localhost:5000/log" -Method Get
Invoke-RestMethod -Uri "http://localhost:5000/crash" -Method Post
```
# Supprime le pod actuel, le Deployment en créera un nouveau tout de suite
```bash
kubectl delete pod -l app=flask-api
```
Étape 2 : emptyDir

Supprime l'ancien déploiement et ses pods associés puis lancer deployment 2
```bash
kubectl delete deployment flask-no-volume
kubectl apply -f 2-empty-dir.yaml
```
tester: 
```bash
kubectl port-forward deployment/flask-empty-dir 5000:5000
```
Étape 3 : ehost-path
```bash
kubectl delete deployment flask-empty-dir
kubectl apply -f 3-host-path.yaml
```

tester: 
```bash
Invoke-RestMethod -Uri "http://localhost:5000/log" -Method Post -Body '{"message": "Persistance HostPath"}' -ContentType "application/json"
kubectl port-forward deployment/flask-host-pathrt-forward deployment/flask-host-path 5000:5000
kubectl delete pod -l app=flask-persistent
Invoke-RestMethod -Uri "http://localhost:5000/log" -Method Post -Body '{"message": "Persistance HostPath"}' -ContentType "application/json"

```