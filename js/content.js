const CourseContent = (() => {

    const sections = [
        {
            id: 'conteneurisation',
            number: '01',
            title: 'Conteneurisation',
            icon: '📦',
            category: 'Fondamentaux',
            subtitle: 'Comprendre la technologie de conteneurisation moderne',
            html: `
                <div class="card card-gradient">
                    <p class="text-lg">La <strong>conteneurisation</strong> est une technologie de virtualisation au niveau du système d'exploitation qui permet d'exécuter des applications dans des environnements isolés appelés <strong>conteneurs</strong>.</p>
                </div>

                <h3>1.1 Qu'est-ce qu'un conteneur ?</h3>
                <p>Un conteneur est une unité standardisée de logiciel qui regroupe :</p>
                <ul>
                    <li>Le code de l'application et ses dépendances</li>
                    <li>Les bibliothèques et frameworks nécessaires</li>
                    <li>Les fichiers de configuration</li>
                    <li>Les outils système requis</li>
                    <li>Les variables d'environnement</li>
                </ul>

                <div class="note">
                    <strong>Analogie :</strong> Si une VM est comme une maison individuelle (complète mais coûteuse), un conteneur est comme un appartement (partage les infrastructures mais reste autonome).
                </div>

                <h3>1.2 Historique</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Année</th><th>Événement</th></tr></thead>
                        <tbody>
                            <tr><td>1979</td><td><code>chroot</code> - Premier changement de racine Unix</td></tr>
                            <tr><td>2000</td><td><code>FreeBSD Jails</code> - Isolation de systèmes de fichiers</td></tr>
                            <tr><td>2001</td><td><code>VServer</code> - Isolation de serveurs sous Linux</td></tr>
                            <tr><td>2004</td><td><code>Solaris Zones</code> - Virtualisation légère par Oracle</td></tr>
                            <tr><td>2006</td><td><code>Google Process Container</code> - Ancêtre des cgroups</td></tr>
                            <tr><td>2008</td><td><code>LXC</code> (Linux Containers) - Premier conteneur Linux complet</td></tr>
                            <tr><td>2013</td><td><strong>Docker</strong> - Révolution de la conteneurisation</td></tr>
                            <tr><td>2015</td><td><strong>OCI</strong> (Open Container Initiative) - Standardisation</td></tr>
                            <tr><td>2017</td><td><strong>containerd</strong> - Runtime industriel</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>1.3 Caractéristiques des conteneurs</h3>
                <div class="grid-3">
                    <div class="feature-card">
                        <div class="icon">🔧</div>
                        <h4>Flexible</h4>
                        <p>Même les applications les plus complexes peuvent être conteneurisées.</p>
                    </div>
                    <div class="feature-card">
                        <div class="icon">🪶</div>
                        <h4>Léger</h4>
                        <p>Partage le noyau hôte, efficacité maximale en ressources système.</p>
                    </div>
                    <div class="feature-card">
                        <div class="icon">🌍</div>
                        <h4>Portable</h4>
                        <p>Créer localement, déployer sur le cloud, exécuter partout.</p>
                    </div>
                    <div class="feature-card">
                        <div class="icon">🔗</div>
                        <h4>Faible couplage</h4>
                        <p>Conteneurs autonomes, remplacement sans perturbation.</p>
                    </div>
                    <div class="feature-card">
                        <div class="icon">📈</div>
                        <h4>Évolutif</h4>
                        <p>Répliques automatiques distribuées dans le datacenter.</p>
                    </div>
                    <div class="feature-card">
                        <div class="icon">🛡️</div>
                        <h4>Sécurisé</h4>
                        <p>Isolation des processus sans configuration complexe.</p>
                    </div>
                </div>

                <h3>1.4 Pourquoi la conteneurisation est essentielle aujourd'hui ?</h3>
                <div class="card card-info">
                    <h4>Le problème résolu</h4>
                    <p>Avant les conteneurs, le fameux <em>"ça marche sur ma machine"</em> était un problème récurrent. Les différences d'environnement entre développement, test et production causaient d'innombrables bugs et retards.</p>
                    <p>Les conteneurs résolvent ce problème en <strong>empaquetant l'environnement complet</strong> avec l'application.</p>
                </div>

                <h3>1.5 Cas d'utilisation courants</h3>
                <ul>
                    <li><strong>Microservices</strong> : Chaque service dans son propre conteneur</li>
                    <li><strong>CI/CD</strong> : Environnements de build reproductibles</li>
                    <li><strong>Environnements de dev</strong> : Setup instantané pour les nouveaux développeurs</li>
                    <li><strong>Applications legacy</strong> : Isolation d'anciens logiciels avec leurs dépendances</li>
                    <li><strong>Batch processing</strong> : Exécution de tâches éphémères à grande échelle</li>
                </ul>
            `
        },
        {
            id: 'vm-vs-container',
            number: '02',
            title: 'VM vs Container',
            icon: '⚖️',
            category: 'Fondamentaux',
            subtitle: 'Comprendre les différences entre virtualisation classique et conteneurisation',
            html: `
                <h3>2.1 Architecture Machine Virtuelle</h3>
                <p>Une VM exécute un <strong>système d'exploitation invité complet</strong> avec un accès virtuel aux ressources via un hyperviseur.</p>
                <div class="diagram">┌──────────────────────────────────────┐
│           Application A              │
├──────────────────────────────────────┤
│       OS Invité (Guest OS)           │  ← Système complet (ex: Ubuntu 2Go+)
├──────────────────────────────────────┤
│    Hyperviseur (VMware, Hyper-V)     │  ← Émule le matériel virtuel
├──────────────────────────────────────┤
│         OS Hôte (Host OS)            │  ← Linux / Windows
├──────────────────────────────────────┤
│           Infrastructure             │  ← CPU, RAM, Disque physique
└──────────────────────────────────────┘</div>
                <div class="card card-warning">
                    <h4>Problèmes des VM</h4>
                    <ul>
                        <li>Chaque VM embarque un OS complet (lourd, plusieurs Go)</li>
                        <li>Consommation excessive de RAM et CPU</li>
                        <li>Démarrage lent (plusieurs minutes)</li>
                        <li>Overhead de l'hyperviseur (10-15% de performance perdue)</li>
                    </ul>
                </div>

                <h3>2.2 Architecture Container</h3>
                <p>Un conteneur s'exécute <strong>nativement sur le noyau de l'hôte</strong>, isolé au niveau processus uniquement.</p>
                <div class="diagram">┌─────────────────┬─────────────────┬─────────────────┐
│  Container A    │  Container B    │  Container C    │
│  ┌───────────┐  │  ┌───────────┐  │  ┌───────────┐  │
│  │   App     │  │  │   App     │  │  │   App     │  │
│  ├───────────┤  │  ├───────────┤  │  ├───────────┤  │
│  │   Bins    │  │  │   Bins    │  │  │   Bins    │  │
│  ├───────────┤  │  ├───────────┤  │  ├───────────┤  │
│  │   Libs    │  │  │   Libs    │  │  │   Libs    │  │
│  └───────────┘  │  └───────────┘  │  └───────────┘  │
├─────────────────┴─────────────────┴─────────────────┤
│              Docker Engine (containerd)              │
├─────────────────────────────────────────────────────┤
│              OS Hôte - Kernel partagé               │
├─────────────────────────────────────────────────────┤
│                    Infrastructure                    │
└─────────────────────────────────────────────────────┘</div>

                <h3>2.3 Comparaison détaillée</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Critère</th><th>Machine Virtuelle</th><th>Container</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Taille</strong></td><td>Lourde (1-10+ Go)</td><td>Légère (10-100 Mo)</td></tr>
                            <tr><td><strong>Démarrage</strong></td><td>Lent (1-5 minutes)</td><td>Rapide (&lt; 1 seconde)</td></tr>
                            <tr><td><strong>OS</strong></td><td>OS complet invité</td><td>Partage le noyau hôte</td></tr>
                            <tr><td><strong>Isolation</strong></td><td>Forte (niveau matériel)</td><td>Bonne (niveau processus)</td></tr>
                            <tr><td><strong>Performance</strong></td><td>Overhead 10-15%</td><td>Proche du natif (1-2%)</td></tr>
                            <tr><td><strong>Densité</strong></td><td>10-20 VMs par hôte</td><td>100-1000+ conteneurs par hôte</td></tr>
                            <tr><td><strong>Portabilité</strong></td><td>Limitée (format propriétaire)</td><td>Haute (format standard OCI)</td></tr>
                            <tr><td><strong>Usage typique</strong></td><td>Serveurs complets, héritage</td><td>Microservices, CI/CD, apps cloud</td></tr>
                            <tr><td><strong>Coût</strong></td><td>Élevé (ressources, licences)</td><td>Réduit (open source, léger)</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>2.4 Quand utiliser quoi ?</h3>
                <div class="grid-2">
                    <div class="card card-success">
                        <h4>Choisir les VM quand :</h4>
                        <ul>
                            <li>Vous avez besoin d'isoler des OS différents (Linux + Windows)</li>
                            <li>La sécurité absolue est requise (banque, défense)</li>
                            <li>Vous migrez un système legacy complet</li>
                            <li>Conformité réglementaire stricte</li>
                        </ul>
                    </div>
                    <div class="card card-info">
                        <h4>Choisir les containers quand :</h4>
                        <ul>
                            <li>Architecture microservices</li>
                            <li>Déploiements fréquents (CI/CD)</li>
                            <li>Optimisation des ressources serveur</li>
                            <li>Scalabilité horizontale rapide</li>
                            <li>Environnements de développement reproductibles</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: 'docker',
            number: '03',
            title: 'Docker',
            icon: '🐳',
            category: 'Docker',
            subtitle: 'Présentation, installation et architecture de Docker',
            html: `
                <div class="card card-gradient">
                    <p><strong>Docker</strong> est une plateforme open-source qui automatise le déploiement d'applications dans des conteneurs. Elle fournit des outils pour créer, déployer et exécuter des applications conteneurisées de manière standardisée.</p>
                </div>

                <h3>3.1 docker-io vs docker-ce</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th></th><th>docker-io</th><th>docker-ce</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Source</strong></td><td>Dépôts officiels Debian/Ubuntu</td><td>Docker Inc. (docker.com)</td></tr>
                            <tr><td><strong>Version</strong></td><td>Souvent ancienne</td><td>Toujours à jour</td></tr>
                            <tr><td><strong>Support</strong></td><td>Communauté Debian/Ubuntu</td><td>Docker Inc.</td></tr>
                            <tr><td><strong>Plugins</strong></td><td>Limités</td><td>buildx, compose, scan...</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="note">
                    <strong>Recommandation :</strong> Privilégiez <code>docker-ce</code> pour bénéficier des dernières fonctionnalités et corrections de sécurité.
                </div>

                <h3>3.2 Installation sous Ubuntu</h3>
                <h4>Étape 1 : Supprimer les anciennes versions</h4>
                <div class="code-block"><code>sudo apt remove docker docker-engine docker.io containerd runc
sudo snap remove docker</code></div>

                <h4>Étape 2 : Installer les prérequis</h4>
                <div class="code-block"><code>sudo apt update
sudo apt install ca-certificates curl gnupg</code></div>

                <h4>Étape 3 : Ajouter la clé GPG officielle</h4>
                <div class="code-block"><code>sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg</code></div>

                <h4>Étape 4 : Configurer le dépôt</h4>
                <div class="code-block"><code>echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null</code></div>

                <h4>Étape 5 : Installer Docker</h4>
                <div class="code-block"><code>sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</code></div>

                <h4>Étape 6 : Vérifier l'installation</h4>
                <div class="code-block"><code>systemctl status docker
docker --version
docker compose version</code></div>

                <h4>Étape 7 : Configuration des permissions</h4>
                <div class="code-block"><code>sudo usermod -aG docker ${USER}
su - ${USER}</code></div>

                <h3>3.3 Architecture Docker Engine</h3>
                <div class="diagram">┌──────────────┐        REST API        ┌──────────────┐
│   CLI Client │  ──────────────────>   │    Daemon    │
│   (docker)   │  <──────────────────   │   (dockerd)  │
└──────────────┘                        └──────┬───────┘
                                               │
                                          ┌────▼──────┐
                                          │ containerd │
                                          └────┬──────┘
                                               │
                                          ┌────▼──────┐
                                          │   runc     │
                                          └────┬──────┘
                                               │
                                     ┌─────────▼──────────┐
                                     │   Kernel Linux     │
                                     │ (cgroups + namespaces)
                                     └────────────────────┘</div>

                <h3>3.4 Technologie sous-jacente</h3>
                <div class="card card-info">
                    <h4>Namespaces (espaces de noms)</h4>
                    <p>Isolent les ressources du système pour chaque conteneur :</p>
                    <ul>
                        <li><code>pid</code> : Isolation des processus (PID)</li>
                        <li><code>net</code> : Isolation réseau (interfaces, ports)</li>
                        <li><code>ipc</code> : Isolation de la communication inter-processus</li>
                        <li><code>mnt</code> : Isolation du système de fichiers (mount points)</li>
                        <li><code>uts</code> : Isolation du hostname et domaine</li>
                        <li><code>user</code> : Isolation des UID/GID</li>
                    </ul>
                </div>
                <div class="card card-success">
                    <h4>Cgroups (Control Groups)</h4>
                    <p>Limitent et comptabilisent les ressources utilisées par chaque conteneur :</p>
                    <ul>
                        <li><code>cpu</code> : Partage du temps CPU</li>
                        <li><code>memory</code> : Limite de mémoire RAM</li>
                        <li><code>blkio</code> : Bande passante disque I/O</li>
                        <li><code>pids</code> : Nombre maximum de processus</li>
                    </ul>
                </div>
                <div class="card" style="border-left: 4px solid #8B5CF6;">
                    <h4>UnionFS (Système de fichiers en couches)</h4>
                    <p>Permet de superposer plusieurs systèmes de fichiers en lecture seule et d'ajouter une couche en lecture-écriture :</p>
                    <ul>
                        <li><code>overlay2</code> : Driver par défaut (recommandé)</li>
                        <li><code>aufs</code> : Ancien driver</li>
                        <li><code>btrfs</code> : Alternative avec snapshots</li>
                        <li><code>devicemapper</code> : Basé sur LVM</li>
                    </ul>
                </div>

                <h3>3.5 Principe fondamental : Un Conteneur = Un Processus</h3>
                <p>Le principe de Docker implique qu'un conteneur représente un <strong>seul processus</strong> du système. Quand ce processus se termine, le conteneur s'arrête.</p>
                <div class="note">
                    <strong>Astuce :</strong> Pour exécuter plusieurs processus dans un conteneur, utilisez un gestionnaire comme <code>supervisord</code> ou <code>tini</code> comme processus principal (PID 1).
                </div>

                <h3>3.6 Docker Desktop (GUI)</h3>
                <p>Docker Desktop est l'application graphique officielle pour gérer Docker. Disponible pour Windows, macOS et Linux.</p>
                <ul>
                    <li>Interface graphique pour les conteneurs, images, volumes</li>
                    <li>Kubernetes intégré</li>
                    <li>Extensions Docker</li>
                    <li><strong>Lien :</strong> <a href="https://docs.docker.com/desktop/">docs.docker.com/desktop</a></li>
                </ul>
            `
        },
        {
            id: 'composants',
            number: '04',
            title: 'Composants',
            icon: '🧩',
            category: 'Docker',
            subtitle: 'Images, containers, Dockerfile, volumes, registres',
            html: `
                <h3>4.1 Image Docker</h3>
                <div class="card card-info">
                    <p>Une image est un <strong>modèle en lecture seule</strong> avec des instructions pour créer un conteneur. C'est l'équivalent d'un template ou d'un blueprint.</p>
                </div>

                <h4>Architecture en couches (Layers)</h4>
                <div class="diagram">┌──────────────────────────────┐
│     Couche 4 : CMD ["app"]   │  ← Instruction finale
├──────────────────────────────┤
│     Couche 3 : COPY . /app   │  ← Code de l'application
├──────────────────────────────┤
│     Couche 2 : RUN npm i     │  ← Dépendances installées
├──────────────────────────────┤
│     Couche 1 : FROM node:18  │  ← Image de base
└──────────────────────────────┘
  Chaque couche est mise en cache et réutilisable</div>

                <div class="code-block"><code># Rechercher des images
docker search ubuntu
docker search --filter "is-official=true" ubuntu

# Télécharger une image
docker pull ubuntu:22.04
docker pull nginx:latest

# Lister les images
docker images
docker images -a  # toutes les images (y compris intermédiaires)
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# Inspecter une image
docker inspect nginx:latest

# Historique des couches
docker history nginx:latest

# Supprimer des images
docker rmi &lt;image_id&gt;
docker rmi nginx:latest
docker image prune  # supprimer les images dangling
docker image prune -a  # supprimer toutes les images non utilisées</code></div>

                <h3>4.2 Container</h3>
                <p>Un conteneur est une <strong>instance exécutable d'une image</strong>. Il est défini par son image et les options de configuration fournies à la création.</p>
                <div class="code-block"><code># Créer et démarrer un conteneur
docker run -d --name mon-nginx -p 8080:80 nginx

# Mode interactif (TTY + STDIN)
docker run -it --name mon-ubuntu ubuntu:22.04 /bin/bash

# Lister les conteneurs
docker ps           # en cours
docker ps -a        # tous
docker ps -q        # IDs uniquement

# Contrôler les conteneurs
docker start &lt;nom&gt;
docker stop &lt;nom&gt;
docker restart &lt;nom&gt;
docker pause &lt;nom&gt;
docker unpause &lt;nom&gt;
docker kill &lt;nom&gt;   # arrêt brutal (SIGKILL)

# Exécuter une commande dans un conteneur en cours
docker exec -it &lt;nom&gt; /bin/bash
docker exec &lt;nom&gt; ls -l /app

# Copier des fichiers
docker cp mon-fichier.txt &lt;nom&gt;:/app/
docker cp &lt;nom&gt;:/app/logs/ ./logs/

# Voir les logs
docker logs &lt;nom&gt;
docker logs -f &lt;nom&gt;     # suivre en temps réel
docker logs --tail 100 &lt;nom&gt;

# Inspecter un conteneur
docker inspect &lt;nom&gt;

# Statistiques en temps réel
docker stats
docker stats &lt;nom&gt;

# Top (processus dans le conteneur)
docker top &lt;nom&gt;</code></div>

                <h3>4.3 Dockerfile</h3>
                <p>Fichier texte contenant les instructions pour construire une image Docker.</p>

                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Instruction</th><th>Description</th><th>Exemple</th></tr></thead>
                        <tbody>
                            <tr><td><code>FROM</code></td><td>Image de base (obligatoire)</td><td><code>FROM ubuntu:22.04</code></td></tr>
                            <tr><td><code>RUN</code></td><td>Exécute pendant la construction</td><td><code>RUN apt-get install -y curl</code></td></tr>
                            <tr><td><code>COPY</code></td><td>Copie fichiers hôte → conteneur</td><td><code>COPY . /app</code></td></tr>
                            <tr><td><code>ADD</code></td><td>Comme COPY + extraction archives</td><td><code>ADD archive.tar.gz /app</code></td></tr>
                            <tr><td><code>WORKDIR</code></td><td>Répertoire de travail</td><td><code>WORKDIR /app</code></td></tr>
                            <tr><td><code>EXPOSE</code></td><td>Documente le port utilisé</td><td><code>EXPOSE 3000</code></td></tr>
                            <tr><td><code>ENV</code></td><td>Variable d'environnement</td><td><code>ENV NODE_ENV=production</code></td></tr>
                            <tr><td><code>CMD</code></td><td>Commande par défaut au démarrage</td><td><code>CMD ["node", "app.js"]</code></td></tr>
                            <tr><td><code>ENTRYPOINT</code></td><td>Point d'entrée principal</td><td><code>ENTRYPOINT ["nginx"]</code></td></tr>
                            <tr><td><code>VOLUME</code></td><td>Point de montage persistant</td><td><code>VOLUME /data</code></td></tr>
                            <tr><td><code>USER</code></td><td>Utilisateur d'exécution</td><td><code>USER node</code></td></tr>
                            <tr><td><code>ARG</code></td><td>Variable de build-time</td><td><code>ARG VERSION=latest</code></td></tr>
                            <tr><td><code>LABEL</code></td><td>Métadonnées</td><td><code>LABEL maintainer="email"</code></td></tr>
                            <tr><td><code>HEALTHCHECK</code></td><td>Vérification de santé</td><td><code>HEALTHCHECK CMD curl -f http://localhost/</code></td></tr>
                        </tbody>
                    </table>
                </div>

                <h4>Exemple Dockerfile complet</h4>
                <div class="code-block"><code># Image de base
FROM node:18-alpine AS builder

# Métadonnées
LABEL maintainer="badara@gmail.com"
LABEL description="Application Node.js en conteneur"

# Arguments de build
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances d'abord (cache Docker)
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le reste du code
COPY . .

# Construire l'application
RUN npm run build

# Stage de production (multi-stage build)
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Utilisateur non-root pour la sécurité
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# Port
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Commande par défaut
CMD ["node", "dist/server.js"]</code></div>

                <h4>Construire une image</h4>
                <div class="code-block"><code># Construction basique
docker build -t mon-app:1.0 .

# Avec arguments de build
docker build --build-arg NODE_ENV=production -t mon-app:prod .

# Sans cache
docker build --no-cache -t mon-app:latest .

# Dockerfile personnalisé
docker build -f Dockerfile.prod -t mon-app:prod .</code></div>

                <h3>4.4 Volume</h3>
                <p>Les volumes permettent de <strong>persister les données</strong> en dehors du cycle de vie du conteneur.</p>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Type</th><th>Description</th><th>Syntaxe</th><th>Usage</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Volume nommé</strong></td><td>Géré par Docker</td><td><code>-v mon-vol:/data</code></td><td>Bases de données, données persistantes</td></tr>
                            <tr><td><strong>Bind mount</strong></td><td>Chemin hôte spécifique</td><td><code>-v $(pwd):/app</code></td><td>Développement, config files</td></tr>
                            <tr><td><strong>tmpfs</strong></td><td>En mémoire RAM</td><td><code>--tmpfs /tmp</code></td><td>Données temporaires sensibles</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="code-block"><code># Créer un volume
docker volume create mon-data

# Lister les volumes
docker volume ls

# Inspecter un volume
docker volume inspect mon-data

# Utiliser un volume
docker run -d -v mon-data:/var/lib/mysql mysql

# Bind mount en lecture seule
docker run -d -v $(pwd)/config:/app/config:ro nginx

# Nettoyer les volumes inutilisés
docker volume prune</code></div>

                <h3>4.5 Docker Hub</h3>
                <p>Registre public officiel pour stocker et partager des images Docker.</p>
                <div class="code-block"><code># Se connecter
docker login

# Tag une image pour le registre
docker tag mon-app:1.0 badara/mon-app:1.0
docker tag mon-app:1.0 badara/mon-app:latest

# Publier
docker push badara/mon-app:1.0
docker push badara/mon-app:latest

# Créer une nouvelle image depuis un conteneur modifié
docker commit -m "description" -a "auteur" &lt;container_id&gt; badara/mon-app:2.0

# Se déconnecter
docker logout</code></div>
            `
        },
        {
            id: 'cycle-de-vie',
            number: '05',
            title: 'Cycle de vie',
            icon: '🔄',
            category: 'Docker',
            subtitle: 'Les étapes de vie d\'un conteneur de la création à la suppression',
            html: `
                <h3>5.1 Diagramme du cycle de vie</h3>
                <div class="lifecycle">
                    <div class="lifecycle-step">
                        <div class="step-icon">📥</div>
                        <div class="step-title">1. Pull</div>
                        <div class="step-command">docker pull</div>
                    </div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step">
                        <div class="step-icon">🏗️</div>
                        <div class="step-title">2. Create</div>
                        <div class="step-command">docker create</div>
                    </div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step">
                        <div class="step-icon">▶️</div>
                        <div class="step-title">3. Start</div>
                        <div class="step-command">docker start</div>
                    </div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step">
                        <div class="step-icon">⏸️</div>
                        <div class="step-title">4. Pause</div>
                        <div class="step-command">docker pause</div>
                    </div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step">
                        <div class="step-icon">⏹️</div>
                        <div class="step-title">5. Stop</div>
                        <div class="step-command">docker stop</div>
                    </div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step">
                        <div class="step-icon">🗑️</div>
                        <div class="step-title">6. Remove</div>
                        <div class="step-command">docker rm</div>
                    </div>
                </div>

                <h3>5.2 Détails de chaque étape</h3>

                <div class="card card-info">
                    <h4>1. Téléchargement (docker pull)</h4>
                    <p>Récupère l'image depuis un registre (Docker Hub par défaut). L'image est décomposée en couches qui sont téléchargées et mises en cache.</p>
                    <div class="code-block"><code>docker pull nginx:latest
docker pull ubuntu:22.04
docker pull alpine:3.18</code></div>
                </div>

                <div class="card card-success">
                    <h4>2. Création (docker create)</h4>
                    <p>Crée un conteneur à partir d'une image sans le démarrer. Utile pour pré-configurer des conteneurs.</p>
                    <div class="code-block"><code>docker create --name mon-nginx -p 8080:80 nginx
docker create --name mon-db -e MYSQL_ROOT_PASSWORD=secret mysql</code></div>
                </div>

                <div class="card" style="border-left: 4px solid #F59E0B;">
                    <h4>3. Démarrage (docker start / run)</h4>
                    <p><code>docker run</code> = <code>docker create</code> + <code>docker start</code> en une seule commande. C'est la commande la plus utilisée.</p>
                    <div class="code-block"><code># Run basique
docker run -d --name mon-nginx nginx

# Run complet avec toutes les options
docker run -d \
  --name mon-app \
  -p 3000:3000 \
  -v $(pwd):/app \
  -e NODE_ENV=production \
  --restart unless-stopped \
  mon-app:1.0

# Options importantes de docker run :
# -d              : mode détaché (arrière-plan)
# -i              : interactif (stdin)
# -t              : terminal (TTY)
# --name          : nom du conteneur
# -p              : mappage de port (host:container)
# -v              : montage de volume
# -e              : variable d'environnement
# --restart       : politique de redémarrage
# --rm            : auto-suppression après arrêt
# --network       : réseau à utiliser
# --memory        : limite de RAM
# --cpus          : limite de CPU</code></div>
                </div>

                <div class="card" style="border-left: 4px solid #8B5CF6;">
                    <h4>4. Pause (docker pause)</h4>
                    <p>Suspend tous les processus du conteneur (SIGSTOP). Le conteneur reste en mémoire mais ne consomme plus de CPU.</p>
                    <div class="code-block"><code>docker pause mon-nginx
docker unpause mon-nginx</code></div>
                </div>

                <div class="card card-danger">
                    <h4>5. Arrêt (docker stop / kill)</h4>
                    <p><code>docker stop</code> envoie SIGTERM puis SIGKILL après 10s (graceful shutdown).<br>
                    <code>docker kill</code> envoie SIGKILL immédiatement (arrêt brutal).</p>
                    <div class="code-block"><code>docker stop mon-nginx      # arrêt propre (10s timeout)
docker stop -t 30 mon-nginx  # avec timeout personnalisé
docker kill mon-nginx        # arrêt immédiat</code></div>
                </div>

                <div class="card" style="border-left: 4px solid #6B7280;">
                    <h4>6. Suppression (docker rm)</h4>
                    <div class="code-block"><code># Supprimer un conteneur arrêté
docker rm mon-nginx

# Forcer la suppression (même en cours)
docker rm -f mon-nginx

# Supprimer avec les volumes associés
docker rm -v mon-nginx

# Nettoyer tout
docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
docker system prune -a --volumes  # attention : supprime TOUT</code></div>
                </div>

                <h3>5.3 Politiques de redémarrage</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Politique</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>no</code></td><td>Ne redémarre jamais (par défaut)</td></tr>
                            <tr><td><code>always</code></td><td>Redémarre toujours, même après un stop manuel</td></tr>
                            <tr><td><code>unless-stopped</code></td><td>Redémarre toujours, sauf si arrêté manuellement</td></tr>
                            <tr><td><code>on-failure[:max-retries]</code></td><td>Redémarre si exit code != 0 (option : nb max de tentatives)</td></tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: 'commandes',
            number: '06',
            title: 'Commandes',
            icon: '💻',
            category: 'Docker',
            subtitle: 'Référence complète des commandes Docker essentielles',
            html: `
                <h3>6.1 Commandes de gestion des images</h3>
                <div class="code-block"><code># Rechercher
docker search &lt;terme&gt;
docker search --filter "is-official=true" ubuntu

# Télécharger
docker pull &lt;image&gt;[:tag]
docker pull ubuntu:22.04

# Lister
docker images
docker images -a          # inclure les images intermédiaires
docker images --digests   # afficher les digests
docker images --format "{{.Repository}}:{{.Tag}}"

# Inspecter
docker inspect &lt;image&gt;
docker history &lt;image&gt;    # voir l'historique des couches

# Supprimer
docker rmi &lt;image&gt;
docker rmi -f &lt;image&gt;     # forcer
docker image prune         # images dangling
docker image prune -a      # toutes les images non utilisées</code></div>

                <h3>6.2 Commandes de gestion des conteneurs</h3>
                <div class="code-block"><code># Exécuter
docker run [OPTIONS] IMAGE [COMMAND]
docker run -d --name web -p 80:80 nginx
docker run -it ubuntu bash

# Lister
docker ps           # en cours
docker ps -a        # tous
docker ps -q        # IDs seuls
docker ps --filter "status=exited"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Contrôler
docker start &lt;nom&gt;
docker stop &lt;nom&gt;
docker restart &lt;nom&gt;
docker pause &lt;nom&gt;
docker unpause &lt;nom&gt;
docker kill &lt;nom&gt;

# Exécuter dans un conteneur
docker exec -it &lt;nom&gt; bash
docker exec &lt;nom&gt; ls -l /app
docker exec &lt;nom&gt; cat /etc/os-release

# Copier
docker cp hôte:src conteneur:dest
docker cp conteneur:src hôte:dest

# Logs
docker logs &lt;nom&gt;
docker logs -f &lt;nom&gt;        # follow
docker logs --tail 50 &lt;nom&gt; # dernières lignes
docker logs --since 1h &lt;nom&gt;

# Stats & Infos
docker stats
docker stats &lt;nom&gt;
docker top &lt;nom&gt;
docker inspect &lt;nom&gt;
docker diff &lt;nom&gt;  # fichiers modifiés dans le conteneur

# Supprimer
docker rm &lt;nom&gt;
docker rm -f &lt;nom&gt;
docker rm $(docker ps -aq)  # tous les conteneurs</code></div>

                <h3>6.3 Commandes de nettoyage système</h3>
                <div class="code-block"><code># Nettoyage doux
docker system prune         # conteneurs arrêtés, réseaux unused, images dangling

# Nettoyage complet
docker system prune -a      # + toutes les images non utilisées

# Nettoyage avec volumes
docker system prune -a --volumes

# Nettoyage par type
docker container prune
docker image prune -a
docker volume prune
docker network prune</code></div>

                <h3>6.4 Alias utiles pour le .bashrc</h3>
                <div class="code-block"><code># Alias Docker
alias d='docker'
alias dc='docker compose'
alias dps='docker ps'
alias dpsa='docker ps -a'
alias di='docker images'
alias drm='docker rm'
alias drmi='docker rmi'
alias dstop='docker stop $(docker ps -aq)'
alias drmall='docker rm $(docker ps -aq)'
alias dclean='docker system prune -af --volumes'
alias dlogs='docker logs -f'</code></div>
            `
        },
        {
            id: 'docker-compose',
            number: '07',
            title: 'Docker Compose',
            icon: '📋',
            category: 'Docker',
            subtitle: 'Orchestrer plusieurs conteneurs avec docker-compose.yml',
            html: `
                <div class="card card-gradient">
                    <p><strong>Docker Compose</strong> est un outil pour définir et exécuter des applications multi-conteneurs. Il utilise un fichier YAML pour configurer les services, réseaux et volumes.</p>
                </div>

                <h3>7.1 Structure de docker-compose.yml</h3>
                <div class="code-block"><code>version: '3.8'          # Version du format Compose

services:                 # Liste des services (conteneurs)
  web:                    # Nom du service
    image: nginx:latest   # Image à utiliser
    ports:
      - "8080:80"         # Mappage de ports
    volumes:
      - ./html:/usr/share/nginx/html  # Montage de volume
    networks:
      - frontend          # Réseau

  api:
    build: ./api          # Construire depuis un Dockerfile
    ports:
      - "3000:3000"
    environment:          # Variables d'environnement
      - NODE_ENV=production
      - DB_HOST=db
    depends_on:           # Dépendances
      - db
    networks:
      - frontend
      - backend

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - backend

networks:                 # Définition des réseaux
  frontend:
  backend:

volumes:                  # Définition des volumes nommés
  pgdata:</code></div>

                <h3>7.2 Instructions principales</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Instruction</th><th>Description</th><th>Exemple</th></tr></thead>
                        <tbody>
                            <tr><td><code>image</code></td><td>Image à utiliser</td><td><code>image: nginx:latest</code></td></tr>
                            <tr><td><code>build</code></td><td>Construire depuis Dockerfile</td><td><code>build: ./app</code></td></tr>
                            <tr><td><code>ports</code></td><td>Mappage de ports</td><td><code>- "8080:80"</code></td></tr>
                            <tr><td><code>volumes</code></td><td>Montage de volumes</td><td><code>- ./data:/app/data</code></td></tr>
                            <tr><td><code>environment</code></td><td>Variables d'environnement</td><td><code>- DB_HOST=mysql</code></td></tr>
                            <tr><td><code>env_file</code></td><td>Fichier .env</td><td><code>env_file: .env</code></td></tr>
                            <tr><td><code>depends_on</code></td><td>Dépendances de service</td><td><code>depends_on: [db]</code></td></tr>
                            <tr><td><code>networks</code></td><td>Réseaux du service</td><td><code>networks: [frontend]</code></td></tr>
                            <tr><td><code>restart</code></td><td>Politique de redémarrage</td><td><code>restart: unless-stopped</code></td></tr>
                            <tr><td><code>command</code></td><td>Commande à exécuter</td><td><code>command: ["npm", "start"]</code></td></tr>
                            <tr><td><code>working_dir</code></td><td>Répertoire de travail</td><td><code>working_dir: /app</code></td></tr>
                            <tr><td><code>deploy</code></td><td>Configuration de déploiement</td><td><code>deploy: replicas: 3</code></td></tr>
                            <tr><td><code>healthcheck</code></td><td>Vérification de santé</td><td><code>test: ["CMD", "curl", "-f"]</code></td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>7.3 Commandes Docker Compose</h3>
                <div class="code-block"><code># Démarrer tous les services
docker compose up -d

# Démarrer un service spécifique
docker compose up -d web

# Voir les logs
docker compose logs -f
docker compose logs -f web

# Lister les services
docker compose ps

# Arrêter tous les services
docker compose stop
docker compose stop web

# Redémarrer un service
docker compose restart web

# Reconstruire et redémarrer
docker compose up -d --build

# Arrêter et supprimer tout
docker compose down

# Arrêter, supprimer et supprimer les volumes
docker compose down -v

# Voir les processus
docker compose top

# Exécuter une commande dans un service
docker compose exec web bash

# Voir la configuration
docker compose config</code></div>

                <h3>7.4 Exemple complet : Stack PHP/NGINX/MySQL</h3>
                <div class="code-block"><code>version: '3.8'

services:
  nginx:
    image: nginx:1.25
    ports:
      - "8080:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./app:/var/www/html
    depends_on:
      - php
    networks:
      - webnet

  php:
    build:
      context: ./php
      dockerfile: Dockerfile
    volumes:
      - ./app:/var/www/html
    networks:
      - webnet
      - dbnet

  mysql:
    image: mariadb:10.11
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: myapp
      MYSQL_USER: appuser
      MYSQL_PASSWORD: apppass
    volumes:
      - dbdata:/var/lib/mysql
    ports:
      - "3306:3306"
    networks:
      - dbnet

networks:
  webnet:
  dbnet:

volumes:
  dbdata:</code></div>

                <div class="card" style="border-left: 4px solid #8B5CF6;">
                    <h4>./php/Dockerfile</h4>
                    <div class="code-block"><code>FROM php:8.2-fpm
RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN apt-get update && apt-get install -y libzip-dev && \
    docker-php-ext-install zip</code></div>
                </div>
            `
        },
        {
            id: 'manipulations',
            number: '08',
            title: 'Manipulations',
            icon: '🛠️',
            category: 'Pratique',
            subtitle: 'Exercices pratiques : Hello World, Ubuntu, C/C++, publication',
            html: `
                <h3>8.1 Hello World!</h3>
                <div class="code-block"><code># Exécuter le conteneur Hello World
docker run hello-world

# Observer les images et conteneurs créés
docker images
docker ps -a

# Nettoyage
docker rm $(docker ps -aq)
docker rmi hello-world

# Variante : conteneur auto-suppressible
docker run --rm --name test hello-world</code></div>

                <h3>8.2 Ubuntu interactif</h3>
                <div class="code-block"><code># Télécharger Ubuntu 22.04
docker pull ubuntu:22.04

# Démarrer en mode interactif
docker run -it --name my-ubuntu ubuntu:22.04 bash

# Dans le conteneur :
root@abc123:/# cat /etc/os-release
root@abc123:/# apt update && apt install -y curl vim
root@abc123:/# curl --version
root@abc123:/# exit

# Redémarrer le conteneur
docker start my-ubuntu

# Ouvrir un shell dans le conteneur en cours
docker exec -it my-ubuntu bash

# Exécuter une commande sans ouvrir de shell
docker exec my-ubuntu cat /etc/os-release

# Observer les logs
docker logs my-ubuntu

# Nettoyage
docker stop my-ubuntu
docker rm my-ubuntu
docker rmi ubuntu:22.04</code></div>

                <h3>8.3 Environnement C/C++ avec Dockerfile</h3>
                <div class="code-block"><code># Créer le projet
mkdir cpp-dev && cd cpp-dev

# Créer le Dockerfile
cat > Dockerfile << 'EOF'
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y \
    g++ \
    make \
    git \
    && rm -rf /var/lib/apt/lists/*
COPY . /src/
WORKDIR /src
CMD ["make", "all"]
EOF

# Créer un programme C++ simple
cat > main.cpp << 'EOF'
#include &lt;iostream&gt;
int main() {
    std::cout << "Hello from Docker!" << std::endl;
    return 0;
}
EOF

# Créer un Makefile
cat > Makefile << 'EOF'
all: main
main: main.cpp
    g++ -o main main.cpp
    ./main
EOF

# Construire l'image
docker build -t cpp-dev .

# Exécuter
docker run --rm cpp-dev

# Modifier le code sans reconstruire (volume)
echo '#include &lt;iostream&gt;
int main() { std::cout << "Modified!" << std::endl; return 0; }' > main.cpp

docker run --rm -v $(pwd):/src cpp-dev</code></div>

                <h3>8.4 Création et publication d'image</h3>
                <div class="code-block"><code># 1. Modifier un conteneur en cours
docker run -it --name modif ubuntu:22.04 bash
root@container:# apt update
root@container:# apt install -y curl vim git htop
root@container:# exit

# 2. Créer une nouvelle image (commit)
docker commit \
  -m "Ajout curl, vim, git, htop" \
  -a "badara" \
  modif \
  badara/ubuntu-dev:1.0

# 3. Vérifier l'image
docker images

# 4. Tester la nouvelle image
docker run -it --rm badara/ubuntu-dev:1.0 bash

# 5. Se connecter à Docker Hub
docker login -u badara

# 6. Publier
docker push badara/ubuntu-dev:1.0</code></div>
            `
        },
        {
            id: 'reseau',
            number: '09',
            title: 'Réseau',
            icon: '🌐',
            category: 'Docker',
            subtitle: 'Configuration réseau, pilotes et communication entre conteneurs',
            html: `
                <div class="card card-info">
                    <p>Docker fournit un système de réseau puissant permettant aux conteneurs de communiquer entre eux et avec le monde extérieur.</p>
                </div>

                <h3>9.1 Pilotes de réseau</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Pilote</th><th>Description</th><th>Usage</th></tr></thead>
                        <tbody>
                            <tr><td><code>bridge</code></td><td>Réseau par défaut. Conteneurs communiquent entre eux, isolés de l'extérieur (sauf ports mappés)</td><td>Multi-conteneurs sur un seul hôte</td></tr>
                            <tr><td><code>host</code></td><td>Partage le réseau de l'hôte. Aucune isolation réseau</td><td>Performance maximale, debugging</td></tr>
                            <tr><td><code>none</code></td><td>Aucune interface réseau (sauf loopback)</td><td>Isolation totale, sécurité</td></tr>
                            <tr><td><code>overlay</code></td><td>Connecte plusieurs démons Docker (Swarm)</td><td>Multi-hôtes, clusters</td></tr>
                            <tr><td><code>macvlan</code></td><td>Adresse MAC propre par conteneur</td><td>Legacy apps, monitoring réseau</td></tr>
                            <tr><td><code>ipvlan</code></td><td>Comme macvlan mais sans MAC unique</td><td>Réseaux avec limite de MAC</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>9.2 Le réseau bridge par défaut</h3>
                <p>Lors de l'installation, Docker crée un réseau bridge nommé <code>bridge</code> connecté à l'interface <code>docker0</code> (subnet 172.17.0.0/16).</p>
                <div class="code-block"><code># Voir l'interface docker0
ip addr show docker0
ifconfig docker0

# Lister les réseaux Docker
docker network ls

# Inspecter le réseau bridge
docker network inspect bridge</code></div>

                <h3>9.3 Créer un réseau personnalisé</h3>
                <div class="code-block"><code># Créer un réseau bridge personnalisé
docker network create mon-reseau

# Avec subnet et gateway personnalisés
docker network create \
  --driver bridge \
  --subnet=172.16.0.0/16 \
  --gateway=172.16.0.1 \
  mon-reseau

# Créer un réseau avec DNS personnalisé
docker network create \
  --opt com.docker.network.bridge.enable_ip_masquerade=true \
  --opt com.docker.network.bridge.enable_icc=true \
  mon-reseau

# Lancer des conteneurs sur le réseau
docker run -d --network mon-reseau --name web1 nginx
docker run -d --network mon-reseau --name web2 nginx

# Communication entre conteneurs (DNS automatique)
docker exec web1 ping web2

# Connecter/déconnecter un conteneur existant
docker network connect mon-reseau mon-conteneur
docker network disconnect mon-reseau mon-conteneur

# Supprimer un réseau
docker network rm mon-reseau
docker network prune</code></div>

                <h3>9.4 Résolution DNS dans Docker</h3>
                <div class="note">
                    <strong>Important :</strong> Sur un réseau personnalisé, les conteneurs peuvent communiquer entre eux par <strong>nom</strong> grâce au DNS intégré de Docker. Ce n'est PAS le cas sur le réseau bridge par défaut.
                </div>
                <div class="code-block"><code># Sur un réseau personnalisé :
docker run -d --network mon-reseau --name db mysql
docker run -d --network mon-reseau --name app mon-app

# Dans 'app', on peut atteindre 'db' par son nom
# L'application se connecte à l'hôte "db" (résolu automatiquement)</code></div>

                <h3>9.5 Mappage de ports</h3>
                <div class="code-block"><code># Mappage simple (host:container)
docker run -d -p 8080:80 nginx

# Mappage avec IP spécifique
docker run -d -p 127.0.0.1:8080:80 nginx

# Mappage de plage de ports
docker run -d -p 8080-8090:80-90 nginx

# Port aléatoire sur l'hôte
docker run -d -p 80 nginx

# Voir les ports mappés
docker port &lt;conteneur&gt;

# Exposer sans mapper (accessible uniquement depuis d'autres conteneurs)
docker run -d --expose 80 nginx</code></div>
            `
        },
        {
            id: 'tp',
            number: '10',
            title: 'TP',
            icon: '📝',
            category: 'Pratique',
            subtitle: 'Travaux pratiques : 20 exercices progressifs',
            html: `
                <div class="card card-gradient">
                    <p>Ce TP est composé de <strong>5 parties</strong> progressives, allant de l'installation à la création d'une stack complète.</p>
                </div>

                <h3>Partie 1 : Installation et vérification (Q1-Q6)</h3>

                <div class="card card-info">
                    <h4>Question 1 : Installer docker-ce et docker-desktop</h4>
                    <p>Installez Docker Community Edition sur votre système Ubuntu. L'installation de Docker Desktop est facultative.</p>
                    <div class="code-block"><code># Supprimer les anciennes versions
sudo apt remove docker docker-engine docker.io
sudo snap remove docker

# Installer docker-ce (voir section 3.2)
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
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</code></div>
                </div>

                <div class="card card-success">
                    <h4>Question 2 : Déterminer les versions installées</h4>
                    <div class="code-block"><code>docker --version
docker compose version
docker version
apt-cache policy docker-ce</code></div>
                </div>

                <div class="card" style="border-left: 4px solid #8B5CF6;">
                    <h4>Question 3 : Vérifier l'état du service docker</h4>
                    <div class="code-block"><code>systemctl status docker
systemctl is-active docker</code></div>
                </div>

                <div class="card card-warning">
                    <h4>Question 4 : Vérifier le bon fonctionnement avec hello-world</h4>
                    <div class="code-block"><code>docker run hello-world</code></div>
                    <p>Vous devriez voir le message <em>"Hello from Docker! This message shows that your installation appears to be working correctly."</em></p>
                </div>

                <div class="card card-danger">
                    <h4>Question 5 : Lister les images et conteneurs</h4>
                    <div class="code-block"><code>docker images
docker ps -a</code></div>
                </div>

                <div class="card card-info">
                    <h4>Question 6 : Supprimer le conteneur et l'image hello-world</h4>
                    <div class="code-block"><code>docker ps -a  # noter le CONTAINER ID
docker rm &lt;CONTAINER_ID&gt;
docker rmi hello-world</code></div>
                </div>

                <h3>Partie 2 : Premier pas (Q7-Q11)</h3>

                <div class="card" style="border-left: 4px solid #10B981;">
                    <h4>Question 7 : Alpine Linux</h4>
                    <p>Recherchez les images alpine officielles. Qu'est-ce qu'Alpine Linux ? Comparez sa taille avec Ubuntu.</p>
                    <div class="code-block"><code>docker search --filter "is-official=true" alpine
docker pull alpine:latest
docker pull ubuntu:latest
docker images  # comparer les tailles</code></div>
                    <div class="note">
                        <strong>Réponse :</strong> Alpine Linux est une distribution basée sur musl libc et busybox. Taille : ~5 Mo vs ~77 Mo pour Ubuntu. C'est la distribution la plus utilisée pour les images Docker grâce à sa taille minimale.
                    </div>
                </div>

                <div class="card card-success">
                    <h4>Question 8-10 : Conteneur Alpine interactif</h4>
                    <div class="code-block"><code># Q8: Démarrer en mode interactif
docker run -it --name mon-alpine alpine:latest /bin/sh

# Q9: Identifier la version
/ # cat /etc/os-release

# Q10: Quel est le compte ?
/ # whoami
# Réponse : root

# Q11: Logs et nettoyage
# (depuis l'hôte) docker logs -ft mon-alpine
docker stop mon-alpine
docker rm mon-alpine
docker rmi alpine:latest</code></div>
                </div>

                <h3>Partie 3 : Dockerfile (Q12-Q15)</h3>

                <div class="card card-warning">
                    <h4>Question 12 : Dockerfile ubuntu-22.04 avec g++, make, git</h4>
                    <div class="code-block"><code>FROM ubuntu:22.04
RUN apt-get update && apt-get install -y g++ make git \
    && rm -rf /var/lib/apt/lists/*</code></div>
                </div>

                <div class="card card-info">
                    <h4>Question 13 : Vérifier l'installation</h4>
                    <div class="code-block"><code>docker build -t ubuntu-22.04-dev .
docker run -it --rm ubuntu-22.04-dev bash
# Dans le conteneur :
g++ --version
make --version
git --version</code></div>
                </div>

                <div class="card card-success">
                    <h4>Question 14 : Supprimer</h4>
                    <div class="code-block"><code>docker rmi ubuntu-22.04-dev</code></div>
                </div>

                <div class="card" style="border-left: 4px solid #8B5CF6;">
                    <h4>Question 15 : Environnement C/C++ complet</h4>
                    <p>Réalisez la manipulation complète de la section 8.3 : créez un projet C++ avec Dockerfile, Makefile, et testez avec et sans volumes.</p>
                </div>

                <h3>Partie 4 : Docker Compose (Q16-Q20)</h3>

                <div class="card card-danger">
                    <h4>Question 16 : docker-compose.yml pour nginx 1.25.0 sur port 5000</h4>
                    <div class="code-block"><code>version: '3.8'
services:
  web:
    image: nginx:1.25.0
    ports:
      - "5000:80"</code></div>
                </div>

                <div class="card card-warning">
                    <h4>Question 17 : Démarrer et afficher images/conteneurs/processus</h4>
                    <div class="code-block"><code>docker compose up -d
docker images
docker ps -a
docker compose top</code></div>
                </div>

                <div class="card card-info">
                    <h4>Question 18 : Tester avec curl</h4>
                    <div class="code-block"><code>curl http://127.0.0.1:5000
docker compose stop web</code></div>
                </div>

                <div class="card card-success">
                    <h4>Question 19 : Stack PHP complète</h4>
                    <p>Terminez la manipulation de la section 7.4 : configurez NGINX + PHP-FPM + MySQL avec l'extension PDO MySQL.</p>
                </div>

                <div class="card card-danger">
                    <h4>Question 20 : Nettoyage final</h4>
                    <div class="code-block"><code>docker compose down
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)
docker system prune -af</code></div>
                </div>

                <h3>Partie 5 : Bonus - Publication d'image</h3>
                <div class="card card-gradient">
                    <p>Modifiez un conteneur, créez une nouvelle image et publiez-la sur Docker Hub.</p>
                    <div class="code-block"><code># 1. Modifier un conteneur
docker run -it --name modif ubuntu:22.04 bash
apt update && apt install -y curl vim git htop
exit

# 2. Commit
docker commit -m "Dev tools" -a "badara" modif badara/ubuntu-dev:tools

# 3. Push
docker login -u badara
docker push badara/ubuntu-dev:tools</code></div>
                </div>
            `
        }
    ];

    function getSections() {
        return sections;
    }

    function getSectionById(id) {
        return sections.find(s => s.id === id);
    }

    function getSectionByIndex(index) {
        return sections[index] || null;
    }

    function getCategories() {
        const cats = {};
        sections.forEach(s => {
            if (!cats[s.category]) cats[s.category] = [];
            cats[s.category].push(s);
        });
        return cats;
    }

    return {
        getSections,
        getSectionById,
        getSectionByIndex,
        getCategories
    };
})();
