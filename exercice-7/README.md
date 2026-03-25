### Créer le cluster et labeliser les workers: 
- basic-cluster.yaml :
```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: world-cluster
nodes:
  - role: control-plane
  - role: worker
    labels:
      country: france
  - role: worker
    labels:
      country: japan
  - role: worker
    labels:
      country: usa
```

```bash
kind create cluster --config basic-cluster.yaml
```

### Verrouiller le nœuds
```bash
kubectl taint nodes world-cluster-worker2 country=japan:NoExecute
kubectl taint nodes world-cluster-worker country=france:NoExecute
kubectl taint nodes world-cluster-worker3 country=usa:NoExecute
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
