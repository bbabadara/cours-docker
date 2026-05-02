# 🐳 TP Administration : Conteneurisation (Docker)

Cours complet et travaux pratiques sur la conteneurisation avec Docker.

## 📋 Table des matières

1. [Conteneurisation](#1-conteneurisation)
2. [VM vs Container](#2-vm-vs-container)
3. [Docker](#3-docker)
4. [Composants](#4-composants)
5. [Cycle de vie](#5-cycle-de-vie)
6. [Commandes de base](#6-commandes-de-base)
7. [Docker Compose](#7-docker-compose)
8. [Manipulations](#8-manipulations)
9. [Réseau](#9-réseau)
10. [TP](#10-tp)

## 🚀 Démarrage rapide

### Prérequis

- Ubuntu (ou autre distribution Linux)
- Accès root ou sudo

### Installation

```bash
# Supprimer une ancienne installation
sudo apt remove docker docker-engine docker.io
sudo snap remove docker

# Installer docker-ce (officiel)
sudo apt update
sudo apt install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Vérifier l'installation
docker --version
docker compose version
systemctl status docker

# (Optionnel) Ajouter l'utilisateur au groupe docker
sudo usermod -aG docker ${USER}
su - ${USER}
```

### Tester

```bash
docker run hello-world
```

## 📖 Contenu du cours

### 1. Conteneurisation

- Qu'est-ce que la conteneurisation ?
- Caractéristiques : Flexible, Léger, Portable, Faible couplage, Évolutif, Sécurisé
- Avantages et limites

### 2. VM vs Container

- Architecture Machine Virtuelle (hyperviseur, OS invité)
- Architecture Container (noyau partagé, processus isolé)
- Comparaison détaillée (taille, démarrage, isolation, performance)

### 3. Docker

- Présentation de Docker (docker-ce vs docker-io)
- Installation sous Ubuntu
- Docker Engine (daemon dockerd, CLI, REST API)
- Architecture (dockerd → containerd → runc → kernel)
- Technologie sous-jacente (namespaces, cgroups, UnionFS)
- Principe : Un Conteneur = Un processus

### 4. Composants

- **Image** : modèle en lecture seule, calques
- **Container** : instance exécutable
- **Dockerfile** : instructions (FROM, RUN, COPY, WORKDIR, CMD, EXPOSE, ENV, USER, LABEL)
- **Docker Hub** : registre cloud
- **Volume** : persistance des données
- **Network** : connexion entre conteneurs

### 5. Cycle de vie

1. Téléchargement (`docker pull`)
2. Création (`docker create`)
3. Démarrage (`docker start`)
4. Arrêt (`docker stop`)
5. Suppression (`docker rm`)

### 6. Commandes de base

- Aide et informations : `docker --help`, `docker info`
- Lister : `docker images`, `docker ps -a`
- Récupérer : `docker search`, `docker pull`
- Exécuter : `docker run`, `docker exec`, `docker start/stop`
- Nettoyer : `docker system prune`
- Surveillance : `docker logs`, `docker stats`

### 7. Docker Compose

- Définition et exécution de multiples conteneurs
- Fichier `docker-compose.yml`
- Exemple complet : NGINX + PHP-FPM + MySQL/MariaDB
- Commandes : `docker compose up -d`, `docker compose stop`, `docker compose down`

### 8. Manipulations

- Hello World
- Ubuntu interactif
- Environnement C/C++ avec Dockerfile
- Création et publication d'image (`docker commit`, `docker push`)

### 9. Réseau

- Types de réseaux : none, bridge, host, overlay, ipvlan, macvlan
- Réseau bridge par défaut (docker0)
- Création et gestion de réseaux personnalisés
- Communication entre conteneurs

### 10. TP

**Partie 1 : Installation et vérification** (Q1-Q6)
- Installer docker-ce, vérifier les versions, tester hello-world

**Partie 2 : Premier pas** (Q7-Q11)
- Alpine Linux, conteneur interactif, logs

**Partie 3 : Dockerfile** (Q12-Q15)
- Créer une image ubuntu-22.04 avec g++, make, git
- Environnement de développement C/C++

**Partie 4 : Docker Compose** (Q16-Q20)
- Service web nginx sur port 5000
- Environnement PHP complet (NGINX + PHP-FPM + MySQL)

**Partie 5 : Bonus**
- Modification, commit et publication d'image sur Docker Hub

## 📂 Fichiers

| Fichier | Description |
|---------|-------------|
| `index.html` | Cours interactif complet (10 sections avec navigation par onglets) |
| `README.md` | Documentation du projet |

## 🔗 Liens utiles

- [Docker Engine](https://docs.docker.com/engine/)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Docker Network](https://docs.docker.com/network/)
- [Docker Hub](https://hub.docker.com/)
- [Docker CLI Cheat Sheet](https://docs.docker.com/getstarted/docker_cheatsheet.pdf)
- [Tutoriel d'introduction](https://docker-curriculum.com/)
- [Play with Docker](https://training.play-with-docker.com/)

## 👤 Auteur

**Thierry Vaira** : thierry.vaira@gmail.com

## 📅 Date

30/01/2024
