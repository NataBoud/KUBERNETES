### Créer le cluster
```bash
kind create cluster --config basic-cluster.yaml
```
### Déployer tout le dossier
```bash
kubectl apply -f manifests/
```

### Vérifier le placement géographique des Pods
```bash
kubectl get pods -o wide
```

### Créer les tunnels d'accès
```bash
kubectl port-forward svc/service-france 8080:80
kubectl port-forward svc/service-japan 8081:8080
kubectl port-forward svc/service-usa 8082:80
```
