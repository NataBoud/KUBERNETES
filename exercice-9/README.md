# Exercice Kubernetes #9 - Déploiement de Postgres dans un cluster K8s

Vous êtes chargé de déployer une instance **PostgreSQL** dans un cluster Kubernetes local.
L'exigence principale est que les données de la base **survivent au redémarrage ou à la suppression du Pod**.

Pour cela, vous allez utiliser deux ressources Kubernetes fondamentales :

- Un **PersistentVolume (PV)** : représente une unité de stockage physique dans le cluster.
- Un **PersistentVolumeClaim (PVC)** : est la *demande* de stockage faite par un Pod. Il lie le Pod au PV.

* Créez un fichier `kind-config.yaml`

```bash
kind create cluster --config kind/kind-config.yaml --name exo-9 --image kindest/node:v1.31.0
```
* Lancer la commande qui va lire tout le dossier k8s

* Créez un fichier `namespace.yaml`
* Créez un fichier `pv.yaml`
* Créez un fichier `pvc.yaml`
* Créez un fichier `secret.yaml`
* Créez un fichier `deployment.yaml`
* Créez un fichier `service.yaml` pour accéder à PostgreSQL depuis l'extérieur du cluster

```bash
kubectl apply -f k8s/
```

* vérification :
```bash
kubectl get deployment -n postgres-ns
kubectl get pvc -n postgres-ns
```
* Test de Connexion et Création de Données :
```bash
kubectl port-forward svc/postgres-service 5432:5432 -n postgres-ns
kubectl exec -it deployment/postgres-db -n postgres-ns -- psql -U postgres
```
* creer une table de test: 
```sql
CREATE TABLE test_survie (id serial PRIMARY KEY, contenu TEXT);
INSERT INTO test_survie (contenu) VALUES ('Donnee persistante de l exercice 9');
SELECT * FROM test_survie;
\q
```

```bash
kubectl delete pod -l app=postgres -n postgres-ns
```
* verifier: 
```sql
SELECT * FROM test_survie;
\q
```
