1. * Créez un fichier `kind-config.yaml`

```bash
create cluster --config kind/kind-config.yaml --name exo-10 --image kindest/node:v1.31.0
```
2. * Créez un fichier `namespace.yaml`

```bash
kubectl apply -f k8s/namespace.yaml
```
3.  * Build et Import dans Kind image 

```bash
docker build -t bounat/auth-api:latest .
kind load docker-image bounat/auth-api:latest --name exo-10
docker build -t bounat/tasks-api:latest .
kind load docker-image bounat/tasks-api:latest --name exo-10
docker build -t bounat/exo-10-frontend:latest .
kind load docker-image bounat/exo-10-frontend:latest --name exo-10

```
* tester: 

```bash
kubectl port-forward svc/auth-service 8081:80 -n fullstack-ns
```
