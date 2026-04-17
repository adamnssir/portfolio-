## Portfolio Next.js

### Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

### Build local

```bash
npm run build
npm run start
```

### Deploiement sur Google Cloud Run

Ce projet est configure pour fonctionner sans `ngrok`, avec un deploiement direct sur `Google Cloud Run`.

#### 1. Se connecter a Google Cloud

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

#### 2. Activer les services necessaires

```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

#### 3. Construire et deployer

```bash
gcloud run deploy portfolio \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated
```

#### 4. Resultat

Google Cloud Run va fournir une URL HTTPS publique du type :

```text
https://portfolio-xxxxx-ew.a.run.app
```

Tu peux utiliser directement cette URL publique au lieu de `ngrok`.

### Fichiers ajoutes pour Cloud Run

- `next.config.ts` : build `standalone`
- `Dockerfile` : image de production Next.js
- `.dockerignore` : optimisation du build Docker
