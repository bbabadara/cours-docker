// ==========================================
// CONTENT — Toutes les données du cours
// ==========================================

// SVG helpers
const svgArchVM = `<svg viewBox="0 0 600 420" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="vmApp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#2563EB"/></linearGradient>
<linearGradient id="vmOS" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#D97706"/></linearGradient>
<linearGradient id="vmHyper" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#7C3AED"/></linearGradient>
<linearGradient id="vmHostOS" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#64748B"/><stop offset="100%" stop-color="#475569"/></linearGradient>
<linearGradient id="vmHW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1E293B"/><stop offset="100%" stop-color="#0F172A"/></linearGradient></defs>
<text x="300" y="24" text-anchor="middle" font-weight="700" font-size="14" fill="#1E293B">Architecture Machine Virtuelle</text>
<g class="layer-group"><rect x="100" y="40" width="400" height="60" rx="8" fill="url(#vmApp)"/><text x="300" y="75" text-anchor="middle" fill="white" font-weight="600" font-size="14">Application A</text></g>
<g class="layer-group"><rect x="100" y="110" width="400" height="60" rx="8" fill="url(#vmOS)"/><text x="300" y="145" text-anchor="middle" fill="white" font-weight="600" font-size="14">OS Invité (Guest OS) — 2 Go+</text></g>
<g class="layer-group"><rect x="100" y="180" width="400" height="60" rx="8" fill="url(#vmHyper)"/><text x="300" y="215" text-anchor="middle" fill="white" font-weight="600" font-size="14">Hyperviseur (VMware, Hyper-V)</text></g>
<g class="layer-group"><rect x="100" y="250" width="400" height="60" rx="8" fill="url(#vmHostOS)"/><text x="300" y="285" text-anchor="middle" fill="white" font-weight="600" font-size="14">OS Hôte (Linux / Windows)</text></g>
<g class="layer-group"><rect x="100" y="320" width="400" height="60" rx="8" fill="url(#vmHW)"/><text x="300" y="355" text-anchor="middle" fill="white" font-weight="600" font-size="14">Infrastructure — CPU, RAM, Disque</text></g>
<text x="510" y="145" fill="#D97706" font-size="12">Lourd</text>
<text x="510" y="215" fill="#7C3AED" font-size="12">Overhead</text>
<text x="510" y="75" fill="#2563EB" font-size="12">App</text>
</svg>`;

const svgArchContainer = `<svg viewBox="0 0 600 400" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="ctA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#2563EB"/></linearGradient>
<linearGradient id="ctB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22C55E"/><stop offset="100%" stop-color="#16A34A"/></linearGradient>
<linearGradient id="ctC" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#D97706"/></linearGradient>
<linearGradient id="ctEng" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0891B2"/><stop offset="100%" stop-color="#0E7490"/></linearGradient>
<linearGradient id="ctKernel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#DC2626"/><stop offset="100%" stop-color="#B91C1C"/></linearGradient>
<linearGradient id="ctHW" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1E293B"/><stop offset="100%" stop-color="#0F172A"/></linearGradient></defs>
<text x="300" y="24" text-anchor="middle" font-weight="700" font-size="14" fill="#1E293B">Architecture Container</text>
<g class="layer-group"><rect x="40" y="40" width="160" height="100" rx="8" fill="url(#ctA)"/><text x="120" y="80" text-anchor="middle" fill="white" font-weight="600" font-size="13">Container A</text><text x="120" y="100" text-anchor="middle" fill="#BFDBFE" font-size="11">App + Bins + Libs</text></g>
<g class="layer-group"><rect x="220" y="40" width="160" height="100" rx="8" fill="url(#ctB)"/><text x="300" y="80" text-anchor="middle" fill="white" font-weight="600" font-size="13">Container B</text><text x="300" y="100" text-anchor="middle" fill="#BBF7D0" font-size="11">App + Bins + Libs</text></g>
<g class="layer-group"><rect x="400" y="40" width="160" height="100" rx="8" fill="url(#ctC)"/><text x="480" y="80" text-anchor="middle" fill="white" font-weight="600" font-size="13">Container C</text><text x="480" y="100" text-anchor="middle" fill="#FDE68A" font-size="11">App + Bins + Libs</text></g>
<g class="layer-group"><rect x="40" y="155" width="520" height="55" rx="8" fill="url(#ctEng)"/><text x="300" y="190" text-anchor="middle" fill="white" font-weight="600" font-size="14">Docker Engine (containerd)</text></g>
<g class="layer-group"><rect x="40" y="225" width="520" height="55" rx="8" fill="url(#ctKernel)"/><text x="300" y="260" text-anchor="middle" fill="white" font-weight="600" font-size="14">Kernel Linux (partagé — cgroups + namespaces)</text></g>
<g class="layer-group"><rect x="40" y="295" width="520" height="55" rx="8" fill="url(#ctHW)"/><text x="300" y="330" text-anchor="middle" fill="white" font-weight="600" font-size="14">Infrastructure — CPU, RAM, Disque</text></g>
<text x="300" y="380" text-anchor="middle" fill="#64748B" font-size="12">✓ Léger (Mo)  ✓ Démarrage rapide  ✓ Partage du noyau</text>
</svg>`;

const svgDockerArch = `<svg viewBox="0 0 600 440" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="daCLI" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#2563EB"/></linearGradient>
<linearGradient id="daDaemon" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0891B2"/><stop offset="100%" stop-color="#0E7490"/></linearGradient>
<linearGradient id="daCTD" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#7C3AED"/></linearGradient>
<linearGradient id="daRunc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#D97706"/></linearGradient>
<linearGradient id="daKernel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#DC2626"/><stop offset="100%" stop-color="#B91C1C"/></linearGradient></defs>
<text x="300" y="24" text-anchor="middle" font-weight="700" font-size="14" fill="#1E293B">Architecture Docker Engine</text>
<g class="layer-group"><rect x="60" y="50" width="200" height="70" rx="10" fill="url(#daCLI)"/><text x="160" y="80" text-anchor="middle" fill="white" font-weight="700" font-size="15">CLI Client</text><text x="160" y="100" text-anchor="middle" fill="#BFDBFE" font-size="12">docker</text></g>
<g class="layer-group"><rect x="340" y="50" width="200" height="70" rx="10" fill="url(#daDaemon)"/><text x="440" y="80" text-anchor="middle" fill="white" font-weight="700" font-size="15">Daemon</text><text x="440" y="100" text-anchor="middle" fill="#A7F3D0" font-size="12">dockerd</text></g>
<line x1="260" y1="85" x2="340" y2="85" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow)" class="flow-connector"/>
<defs><marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6"/></marker></defs>
<text x="300" y="78" text-anchor="middle" fill="#64748B" font-size="11">REST API</text>
<g class="layer-group"><rect x="170" y="150" width="260" height="55" rx="10" fill="url(#daCTD)"/><text x="300" y="185" text-anchor="middle" fill="white" font-weight="700" font-size="14">containerd</text></g>
<line x1="440" y1="120" x2="440" y2="150" stroke="#0E7490" stroke-width="2"/>
<line x1="340" y1="85" x2="300" y2="85" stroke="#0E7490" stroke-width="2" marker-end="url(#arrow)"/>
<g class="layer-group"><rect x="200" y="230" width="200" height="55" rx="10" fill="url(#daRunc)"/><text x="300" y="265" text-anchor="middle" fill="white" font-weight="700" font-size="14">runc</text></g>
<line x1="300" y1="205" x2="300" y2="230" stroke="#7C3AED" stroke-width="2"/>
<g class="layer-group"><rect x="100" y="310" width="400" height="60" rx="10" fill="url(#daKernel)"/><text x="300" y="340" text-anchor="middle" fill="white" font-weight="700" font-size="14">Kernel Linux</text><text x="300" y="358" text-anchor="middle" fill="#FECACA" font-size="12">cgroups + namespaces</text></g>
<line x1="300" y1="285" x2="300" y2="310" stroke="#D97706" stroke-width="2"/>
<g class="layer-group"><rect x="100" y="385" width="400" height="40" rx="8" fill="#F1F5F9" stroke="#E2E8F0"/><text x="300" y="410" text-anchor="middle" fill="#64748B" font-size="12">Infrastructure (CPU, RAM, Disque, Réseau)</text></g>
</svg>`;

const svgImageLayers = `<svg viewBox="0 0 500 340" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
<text x="250" y="24" text-anchor="middle" font-weight="700" font-size="14" fill="#1E293B">Architecture en couches d'une image Docker</text>
<g class="layer-group"><rect x="50" y="40" width="400" height="50" rx="6" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" stroke-width="1.5"/><text x="250" y="70" text-anchor="middle" font-weight="600" font-size="13" fill="#1E40AF">Couche 4 — CMD ["node","app.js"]</text><text x="460" y="70" font-size="10" fill="#64748B">Writable</text></g>
<g class="layer-group"><rect x="50" y="100" width="400" height="50" rx="6" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" stroke-width="1.5"/><text x="250" y="130" text-anchor="middle" font-weight="600" font-size="13" fill="#5B21B6">Couche 3 — COPY . /app</text><text x="460" y="130" font-size="10" fill="#64748B">~5 Mo</text></g>
<g class="layer-group"><rect x="50" y="160" width="400" height="50" rx="6" fill="#22C55E" opacity="0.15" stroke="#22C55E" stroke-width="1.5"/><text x="250" y="190" text-anchor="middle" font-weight="600" font-size="13" fill="#166534">Couche 2 — RUN npm ci</text><text x="460" y="190" font-size="10" fill="#64748B">~80 Mo</text></g>
<g class="layer-group"><rect x="50" y="220" width="400" height="50" rx="6" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" stroke-width="1.5"/><text x="250" y="250" text-anchor="middle" font-weight="600" font-size="13" fill="#92400E">Couche 1 — FROM node:18-alpine</text><text x="460" y="250" font-size="10" fill="#64748B">~180 Mo</text></g>
<rect x="50" y="285" width="400" height="35" rx="6" fill="#F1F5F9" stroke="#E2E8F0"/><text x="250" y="307" text-anchor="middle" font-size="12" fill="#64748B">UnionFS — overlay2 : toutes les couches sont superposées</text>
</svg>`;

const svgComposeArch = `<svg viewBox="0 0 600 380" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
<text x="300" y="24" text-anchor="middle" font-weight="700" font-size="14" fill="#1E293B">Architecture Docker Compose — Stack Web</text>
<g class="layer-group"><rect x="40" y="50" width="160" height="100" rx="10" fill="#3B82F6"/><text x="120" y="85" text-anchor="middle" fill="white" font-weight="700" font-size="15">NGINX</text><text x="120" y="105" text-anchor="middle" fill="#BFDBFE" font-size="12">Port 8080:80</text><text x="120" y="125" text-anchor="middle" fill="#BFDBFE" font-size="11">webnet</text></g>
<g class="layer-group"><rect x="220" y="50" width="160" height="100" rx="10" fill="#8B5CF6"/><text x="300" y="85" text-anchor="middle" fill="white" font-weight="700" font-size="15">PHP-FPM</text><text x="300" y="105" text-anchor="middle" fill="#DDD6FE" font-size="12">Port 9000</text><text x="300" y="125" text-anchor="middle" fill="#DDD6FE" font-size="11">webnet + dbnet</text></g>
<g class="layer-group"><rect x="400" y="50" width="160" height="100" rx="10" fill="#F59E0B"/><text x="480" y="85" text-anchor="middle" fill="white" font-weight="700" font-size="15">MariaDB</text><text x="480" y="105" text-anchor="middle" fill="#FDE68A" font-size="12">Port 3306</text><text x="480" y="125" text-anchor="middle" fill="#FDE68A" font-size="11">dbnet</text></g>
<g class="layer-group"><rect x="40" y="180" width="520" height="60" rx="10" fill="#0891B2"/><text x="300" y="215" text-anchor="middle" fill="white" font-weight="600" font-size="13">Docker Engine — docker compose up -d</text></g>
<g class="layer-group"><rect x="40" y="260" width="250" height="50" rx="8" fill="#E2E8F0"/><text x="165" y="290" text-anchor="middle" fill="#475569" font-weight="600" font-size="13">Network: webnet</text></g>
<g class="layer-group"><rect x="310" y="260" width="250" height="50" rx="8" fill="#E2E8F0"/><text x="435" y="290" text-anchor="middle" fill="#475569" font-weight="600" font-size="13">Network: dbnet</text></g>
<g class="layer-group"><rect x="160" y="325" width="280" height="40" rx="8" fill="#DBEAFE" stroke="#3B82F6"/><text x="300" y="350" text-anchor="middle" fill="#1D4ED8" font-weight="600" font-size="12">Volume: dbdata → /var/lib/mysql</text></g>
<path d="M200 150 L200 170 L300 170 L300 180" fill="none" stroke="#3B82F6" stroke-width="2" class="flow-connector"/>
<path d="M380 150 L380 170 L480 170 L480 180" fill="none" stroke="#F59E0B" stroke-width="2" class="flow-connector"/>
</svg>`;

const svgNetwork = `<svg viewBox="0 0 600 300" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
<text x="300" y="24" text-anchor="middle" font-weight="700" font-size="14" fill="#1E293B">Réseau Bridge Docker — Communication entre conteneurs</text>
<rect x="50" y="50" width="500" height="120" rx="12" fill="#EFF6FF" stroke="#93C5FD" stroke-width="2"/>
<text x="300" y="75" text-anchor="middle" font-weight="600" font-size="12" fill="#1D4ED8">Network: mon-reseau (172.16.0.0/16)</text>
<g class="layer-group"><rect x="80" y="90" width="120" height="60" rx="8" fill="#3B82F6"/><text x="140" y="115" text-anchor="middle" fill="white" font-weight="600" font-size="12">web1</text><text x="140" y="135" text-anchor="middle" fill="#BFDBFE" font-size="10">172.16.0.2</text></g>
<g class="layer-group"><rect x="240" y="90" width="120" height="60" rx="8" fill="#22C55E"/><text x="300" y="115" text-anchor="middle" fill="white" font-weight="600" font-size="12">web2</text><text x="300" y="135" text-anchor="middle" fill="#BBF7D0" font-size="10">172.16.0.3</text></g>
<g class="layer-group"><rect x="400" y="90" width="120" height="60" rx="8" fill="#F59E0B"/><text x="460" y="115" text-anchor="middle" fill="white" font-weight="600" font-size="12">db</text><text x="460" y="135" text-anchor="middle" fill="#FDE68A" font-size="10">172.16.0.4</text></g>
<path d="M200 120 L240 120" stroke="#93C5FD" stroke-width="2" class="flow-connector"/>
<path d="M360 120 L400 120" stroke="#93C5FD" stroke-width="2" class="flow-connector"/>
<g class="layer-group"><rect x="150" y="200" width="300" height="50" rx="8" fill="#F1F5F9" stroke="#E2E8F0"/><text x="300" y="230" text-anchor="middle" fill="#475569" font-size="13">docker0 bridge — Gateway: 172.16.0.1</text></g>
<g class="layer-group"><rect x="150" y="260" width="300" height="30" rx="6" fill="#1E293B"/><text x="300" y="280" text-anchor="middle" fill="white" font-size="11">Infrastructure Hôte</text></g>
<line x1="300" y1="170" x2="300" y2="200" stroke="#64748B" stroke-width="2"/>
<line x1="300" y1="250" x2="300" y2="260" stroke="#64748B" stroke-width="2"/>
</svg>`;

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

                <div class="diagram-container">
                    <div class="diagram-title">Vue d'ensemble : Du physique au container</div>
                    <svg viewBox="0 0 600 260" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <g class="layer-group"><rect x="20" y="40" width="160" height="100" rx="10" fill="#1E293B"/><text x="100" y="75" text-anchor="middle" fill="white" font-weight="700" font-size="13">Bare Metal</text><text x="100" y="95" text-anchor="middle" fill="#94A3B8" font-size="11">1 App / Serveur</text><text x="100" y="115" text-anchor="middle" fill="#64748B" font-size="10">Coûteux, rigide</text></g>
                        <text x="180" y="90" fill="#94A3B8" font-size="20">→</text>
                        <g class="layer-group"><rect x="200" y="40" width="160" height="100" rx="10" fill="#7C3AED"/><text x="280" y="75" text-anchor="middle" fill="white" font-weight="700" font-size="13">Machines Virtuelles</text><text x="280" y="95" text-anchor="middle" fill="#DDD6FE" font-size="11">Plusieurs OS / Hôte</text><text x="280" y="115" text-anchor="middle" fill="#A78BFA" font-size="10">Lourd, isolé</text></g>
                        <text x="360" y="90" fill="#94A3B8" font-size="20">→</text>
                        <g class="layer-group"><rect x="380" y="40" width="200" height="100" rx="10" fill="#3B82F6"/><text x="480" y="75" text-anchor="middle" fill="white" font-weight="700" font-size="13">🐳 Conteneurs Docker</text><text x="480" y="95" text-anchor="middle" fill="#BFDBFE" font-size="11">Kernel partagé, léger</text><text x="480" y="115" text-anchor="middle" fill="#93C5FD" font-size="10">Rapide, portable</text></g>
                        <text x="300" y="190" text-anchor="middle" font-weight="700" font-size="16" fill="#1E293B">Évolution de la virtualisation</text>
                        <text x="300" y="215" text-anchor="middle" font-size="13" fill="#64748B">1990s —————— 2000s —————— 2013+</text>
                        <text x="100" y="245" text-anchor="middle" font-size="11" fill="#94A3B8">Hardware</text>
                        <text x="280" y="245" text-anchor="middle" font-size="11" fill="#94A3B8">Hyperviseur</text>
                        <text x="480" y="245" text-anchor="middle" font-size="11" fill="#94A3B8">Docker Engine</text>
                    </svg>
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

                <div class="diagram-container">
                    <div class="diagram-title">Anatomie d'un conteneur Docker</div>
                    <svg viewBox="0 0 500 200" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <rect x="50" y="30" width="400" height="140" rx="12" fill="#EFF6FF" stroke="#93C5FD" stroke-width="2"/>
                        <g class="layer-group"><rect x="80" y="50" width="100" height="45" rx="6" fill="#3B82F6"/><text x="130" y="78" text-anchor="middle" fill="white" font-weight="600" font-size="12">📝 Code</text></g>
                        <g class="layer-group"><rect x="200" y="50" width="100" height="45" rx="6" fill="#8B5CF6"/><text x="250" y="78" text-anchor="middle" fill="white" font-weight="600" font-size="12">📚 Bibliothèques</text></g>
                        <g class="layer-group"><rect x="320" y="50" width="100" height="45" rx="6" fill="#22C55E"/><text x="370" y="78" text-anchor="middle" fill="white" font-weight="600" font-size="12">⚙️ Config</text></g>
                        <g class="layer-group"><rect x="80" y="110" width="100" height="45" rx="6" fill="#F59E0B"/><text x="130" y="138" text-anchor="middle" fill="white" font-weight="600" font-size="12">🔧 Outils</text></g>
                        <g class="layer-group"><rect x="200" y="110" width="100" height="45" rx="6" fill="#EC4899"/><text x="250" y="138" text-anchor="middle" fill="white" font-weight="600" font-size="12">🌍 ENV</text></g>
                        <g class="layer-group"><rect x="320" y="110" width="100" height="45" rx="6" fill="#0891B2"/><text x="370" y="138" text-anchor="middle" fill="white" font-weight="600" font-size="12">📁 Runtime</text></g>
                        <text x="250" y="195" text-anchor="middle" font-size="11" fill="#64748B">Tout est empaqueté ensemble → Portable partout</text>
                    </svg>
                </div>

                <div class="note">
                    <strong>Analogie :</strong> Si une VM est comme une maison individuelle (complète mais coûteuse), un conteneur est comme un appartement (partage les infrastructures mais reste autonome).
                </div>

                <h3>1.2 Historique</h3>
                <div class="diagram-container">
                    <div class="diagram-title">Timeline de la conteneurisation</div>
                    <svg viewBox="0 0 700 120" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50" y1="60" x2="650" y2="60" stroke="#E2E8F0" stroke-width="3"/>
                        <g><circle cx="50" cy="60" r="6" fill="#64748B"/><text x="50" y="40" text-anchor="middle" font-weight="700" font-size="10" fill="#1E293B">1979</text><text x="50" y="85" text-anchor="middle" font-size="9" fill="#64748B">chroot</text></g>
                        <g><circle cx="150" cy="60" r="6" fill="#64748B"/><text x="150" y="40" text-anchor="middle" font-weight="700" font-size="10" fill="#1E293B">2000</text><text x="150" y="85" text-anchor="middle" font-size="9" fill="#64748B">FreeBSD Jails</text></g>
                        <g><circle cx="250" cy="60" r="6" fill="#64748B"/><text x="250" y="40" text-anchor="middle" font-weight="700" font-size="10" fill="#1E293B">2008</text><text x="250" y="85" text-anchor="middle" font-size="9" fill="#64748B">LXC</text></g>
                        <g><circle cx="370" cy="60" r="10" fill="#3B82F6"/><text x="370" y="35" text-anchor="middle" font-weight="800" font-size="12" fill="#3B82F6">2013</text><text x="370" y="85" text-anchor="middle" font-weight="700" font-size="10" fill="#3B82F6">Docker 🐳</text></g>
                        <g><circle cx="490" cy="60" r="6" fill="#64748B"/><text x="490" y="40" text-anchor="middle" font-weight="700" font-size="10" fill="#1E293B">2015</text><text x="490" y="85" text-anchor="middle" font-size="9" fill="#64748B">OCI</text></g>
                        <g><circle cx="590" cy="60" r="6" fill="#64748B"/><text x="590" y="40" text-anchor="middle" font-weight="700" font-size="10" fill="#1E293B">2017</text><text x="590" y="85" text-anchor="middle" font-size="9" fill="#64748B">containerd</text></g>
                    </svg>
                </div>

                <h3>1.3 Caractéristiques des conteneurs</h3>
                <div class="grid-3">
                    <div class="feature-card"><div class="icon">🔧</div><h4>Flexible</h4><p>Même les applications les plus complexes peuvent être conteneurisées.</p></div>
                    <div class="feature-card"><div class="icon">🪶</div><h4>Léger</h4><p>Partage le noyau hôte, efficacité maximale en ressources système.</p></div>
                    <div class="feature-card"><div class="icon">🌍</div><h4>Portable</h4><p>Créer localement, déployer sur le cloud, exécuter partout.</p></div>
                    <div class="feature-card"><div class="icon">🔗</div><h4>Faible couplage</h4><p>Conteneurs autonomes, remplacement sans perturbation.</p></div>
                    <div class="feature-card"><div class="icon">📈</div><h4>Évolutif</h4><p>Répliques automatiques distribuées dans le datacenter.</p></div>
                    <div class="feature-card"><div class="icon">🛡️</div><h4>Sécurisé</h4><p>Isolation des processus sans configuration complexe.</p></div>
                </div>

                <h3>1.4 Cas d'utilisation courants</h3>
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
                <div class="diagram-container">${svgArchVM}</div>
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
                <div class="diagram-container">${svgArchContainer}</div>

                <h3>2.3 Comparaison visuelle</h3>
                <div class="comparison-visual">
                    <div class="comparison-box vm">
                        <h4>🏠 Machine Virtuelle</h4>
                        <div class="weight"><span>Taille :</span><div class="weight-bar heavy"></div><span>~2-10 Go</span></div>
                        <div class="weight"><span>Boot :</span><div class="weight-bar" style="width:80%;background:#EF4444"></div><span>1-5 min</span></div>
                        <div class="weight"><span>Overhead :</span><div class="weight-bar" style="width:60%;background:#EF4444"></div><span>10-15%</span></div>
                        <div class="weight"><span>Densité :</span><div class="weight-bar" style="width:20%;background:#EF4444"></div><span>10-20/hôte</span></div>
                    </div>
                    <div class="comparison-box container">
                        <h4>📦 Container</h4>
                        <div class="weight"><span>Taille :</span><div class="weight-bar light"></div><span>~10-100 Mo</span></div>
                        <div class="weight"><span>Boot :</span><div class="weight-bar" style="width:5%;background:#22C55E"></div><span>&lt; 1 sec</span></div>
                        <div class="weight"><span>Overhead :</span><div class="weight-bar" style="width:5%;background:#22C55E"></div><span>1-2%</span></div>
                        <div class="weight"><span>Densité :</span><div class="weight-bar" style="width:95%;background:#22C55E"></div><span>100-1000+/hôte</span></div>
                    </div>
                </div>

                <h3>2.4 Tableau comparatif détaillé</h3>
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

                <h3>2.5 Quand utiliser quoi ?</h3>
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
                <div class="code-block"><code># Étape 1 : Supprimer les anciennes versions
sudo apt remove docker docker-engine docker.io containerd runc
sudo snap remove docker

# Étape 2 : Installer les prérequis
sudo apt update && sudo apt install ca-certificates curl gnupg

# Étape 3 : Ajouter la clé GPG officielle
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Étape 4 : Configurer le dépôt
echo \\
  "deb [arch=\\$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \\
  https://download.docker.com/linux/ubuntu \\
  \\$(. /etc/os-release && echo "\$VERSION_CODENAME") stable" | \\
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Étape 5 : Installer Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Étape 6 : Vérifier
systemctl status docker
docker --version

# Étape 7 : Permissions
sudo usermod -aG docker \$USER && su - \$USER</code></div>

                <h3>3.3 Architecture Docker Engine</h3>
                <div class="diagram-container">${svgDockerArch}</div>

                <h3>3.4 Technologie sous-jacente</h3>
                <div class="diagram-container">
                    <div class="diagram-title">Les 3 piliers de Docker</div>
                    <svg viewBox="0 0 500 220" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <g class="layer-group"><rect x="30" y="40" width="130" height="140" rx="10" fill="#DBEAFE" stroke="#3B82F6"/><text x="95" y="70" text-anchor="middle" font-weight="700" font-size="14" fill="#1E40AF">Namespaces</text><text x="95" y="95" text-anchor="middle" font-size="11" fill="#3B82F6">pid, net, ipc</text><text x="95" y="112" text-anchor="middle" font-size="11" fill="#3B82F6">mnt, uts, user</text><text x="95" y="150" text-anchor="middle" font-size="10" fill="#64748B">Isolation</text></g>
                        <g class="layer-group"><rect x="185" y="40" width="130" height="140" rx="10" fill="#F0FDF4" stroke="#22C55E"/><text x="250" y="70" text-anchor="middle" font-weight="700" font-size="14" fill="#166534">Cgroups</text><text x="250" y="95" text-anchor="middle" font-size="11" fill="#22C55E">cpu, memory</text><text x="250" y="112" text-anchor="middle" font-size="11" fill="#22C55E">blkio, pids</text><text x="250" y="150" text-anchor="middle" font-size="10" fill="#64748B">Limites</text></g>
                        <g class="layer-group"><rect x="340" y="40" width="130" height="140" rx="10" fill="#FEF3C7" stroke="#F59E0B"/><text x="405" y="70" text-anchor="middle" font-weight="700" font-size="14" fill="#92400E">UnionFS</text><text x="405" y="95" text-anchor="middle" font-size="11" fill="#D97706">overlay2</text><text x="405" y="112" text-anchor="middle" font-size="11" fill="#D97706">aufs, btrfs</text><text x="405" y="150" text-anchor="middle" font-size="10" fill="#64748B">Couches</text></g>
                    </svg>
                </div>

                <div class="card card-info">
                    <h4>Namespaces (espaces de noms)</h4>
                    <ul>
                        <li><code>pid</code> : Isolation des processus (PID)</li>
                        <li><code>net</code> : Isolation réseau (interfaces, ports)</li>
                        <li><code>ipc</code> : Isolation de la communication inter-processus</li>
                        <li><code>mnt</code> : Isolation du système de fichiers</li>
                        <li><code>uts</code> : Isolation du hostname et domaine</li>
                        <li><code>user</code> : Isolation des UID/GID</li>
                    </ul>
                </div>
                <div class="card card-success">
                    <h4>Cgroups (Control Groups)</h4>
                    <ul>
                        <li><code>cpu</code> : Partage du temps CPU</li>
                        <li><code>memory</code> : Limite de mémoire RAM</li>
                        <li><code>blkio</code> : Bande passante disque I/O</li>
                        <li><code>pids</code> : Nombre maximum de processus</li>
                    </ul>
                </div>

                <h3>3.5 Principe fondamental : Un Conteneur = Un Processus</h3>
                <div class="note">
                    <strong>Astuce :</strong> Pour exécuter plusieurs processus dans un conteneur, utilisez <code>supervisord</code> ou <code>tini</code> comme PID 1.
                </div>
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
                    <p>Une image est un <strong>modèle en lecture seule</strong> avec des instructions pour créer un conteneur.</p>
                </div>
                <div class="diagram-container">${svgImageLayers}</div>

                <div class="code-block"><code># Rechercher, télécharger, lister, inspecter, supprimer
docker search --filter "is-official=true" ubuntu
docker pull ubuntu:22.04
docker images
docker history nginx:latest
docker rmi nginx:latest
docker image prune -a</code></div>

                <h3>4.2 Container</h3>
                <div class="code-block"><code># Créer, contrôler, exécuter, surveiller
docker run -d --name mon-nginx -p 8080:80 nginx
docker ps -a
docker exec -it mon-nginx /bin/bash
docker logs -f mon-nginx
docker stats mon-nginx
docker stop mon-nginx && docker rm mon-nginx</code></div>

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
                            <tr><td><code>HEALTHCHECK</code></td><td>Vérification de santé</td><td><code>HEALTHCHECK CMD curl -f http://localhost/</code></td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>4.4 Volume</h3>
                <div class="diagram-container">
                    <div class="diagram-title">Persistance des données</div>
                    <svg viewBox="0 0 500 180" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <g class="layer-group"><rect x="50" y="30" width="160" height="80" rx="10" fill="#3B82F6"/><text x="130" y="60" text-anchor="middle" fill="white" font-weight="600" font-size="13">Container</text><text x="130" y="80" text-anchor="middle" fill="#BFDBFE" font-size="11">/var/lib/mysql</text><text x="130" y="100" text-anchor="middle" fill="#BFDBFE" font-size="10">Données éphémères</text></g>
                        <path d="M210 70 L290 70" stroke="#3B82F6" stroke-width="2" class="flow-connector"/>
                        <text x="250" y="63" text-anchor="middle" font-size="10" fill="#64748B">-v</text>
                        <g class="layer-group"><rect x="290" y="30" width="160" height="80" rx="10" fill="#22C55E"/><text x="370" y="60" text-anchor="middle" fill="white" font-weight="600" font-size="13">Volume Docker</text><text x="370" y="80" text-anchor="middle" fill="#BBF7D0" font-size="11">/var/lib/docker/volumes</text><text x="370" y="100" text-anchor="middle" fill="#BBF7D0" font-size="10">Données persistantes</text></g>
                        <text x="250" y="150" text-anchor="middle" font-size="12" fill="#64748B">Les volumes survivent à la suppression du conteneur</text>
                    </svg>
                </div>

                <div class="code-block"><code># Volume nommé vs Bind mount vs tmpfs
docker volume create mon-data
docker run -d -v mon-data:/var/lib/mysql mysql
docker run -d -v \$(pwd):/app nginx        # bind mount
docker run -d --tmpfs /tmp nginx           # en RAM</code></div>

                <h3>4.5 Docker Hub</h3>
                <div class="code-block"><code>docker login
docker tag mon-app:1.0 badara/mon-app:1.0
docker push badara/mon-app:1.0
docker commit -m "msg" -a "badara" &lt;id&gt; badara/mon-app:2.0</code></div>
            `
    },
    {
        id: 'cycle-de-vie',
        number: '05',
        title: 'Cycle de vie',
        icon: '🔄',
        category: 'Docker',
        subtitle: "Les étapes de vie d'un conteneur de la création à la suppression",
        html: `
                <h3>5.1 Diagramme du cycle de vie</h3>
                <div class="lifecycle">
                    <div class="lifecycle-step"><div class="step-icon">📥</div><div class="step-title">1. Pull</div><div class="step-command">docker pull</div></div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step"><div class="step-icon">🏗️</div><div class="step-title">2. Create</div><div class="step-command">docker create</div></div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step"><div class="step-icon">▶️</div><div class="step-title">3. Start</div><div class="step-command">docker start</div></div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step"><div class="step-icon">⏸️</div><div class="step-title">4. Pause</div><div class="step-command">docker pause</div></div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step"><div class="step-icon">⏹️</div><div class="step-title">5. Stop</div><div class="step-command">docker stop</div></div>
                    <div class="lifecycle-arrow">→</div>
                    <div class="lifecycle-step"><div class="step-icon">🗑️</div><div class="step-title">6. Remove</div><div class="step-command">docker rm</div></div>
                </div>

                <h3>5.2 États d'un conteneur</h3>
                <div class="diagram-container">
                    <div class="diagram-title">Machine à états d'un conteneur</div>
                    <svg viewBox="0 0 600 160" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <g class="layer-group"><circle cx="80" cy="80" r="35" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/><text x="80" y="75" text-anchor="middle" font-weight="600" font-size="11" fill="#1E40AF">Created</text><text x="80" y="90" text-anchor="middle" font-size="9" fill="#64748B">configuré</text></g>
                        <g class="layer-group"><circle cx="220" cy="80" r="35" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="220" y="75" text-anchor="middle" font-weight="600" font-size="11" fill="#166534">Running</text><text x="220" y="90" text-anchor="middle" font-size="9" fill="#64748B">actif</text></g>
                        <g class="layer-group"><circle cx="360" cy="80" r="35" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/><text x="360" y="75" text-anchor="middle" font-weight="600" font-size="11" fill="#92400E">Paused</text><text x="360" y="90" text-anchor="middle" font-size="9" fill="#64748B">suspendu</text></g>
                        <g class="layer-group"><circle cx="490" cy="80" r="35" fill="#FEF2F2" stroke="#EF4444" stroke-width="2"/><text x="490" y="75" text-anchor="middle" font-weight="600" font-size="11" fill="#991B1B">Exited</text><text x="490" y="90" text-anchor="middle" font-size="9" fill="#64748B">arrêté</text></g>
                        <path d="M115 80 L185 80" stroke="#22C55E" stroke-width="2" marker-end="url(#arrow)"/>
                        <text x="150" y="72" text-anchor="middle" font-size="9" fill="#166534">start</text>
                        <path d="M255 80 L325 80" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow)"/>
                        <text x="290" y="72" text-anchor="middle" font-size="9" fill="#92400E">pause</text>
                        <path d="M325 95 L255 95" stroke="#22C55E" stroke-width="2" marker-end="url(#arrow)"/>
                        <text x="290" y="108" text-anchor="middle" font-size="9" fill="#166534">unpause</text>
                        <path d="M395 80 L455 80" stroke="#EF4444" stroke-width="2" marker-end="url(#arrow)"/>
                        <text x="425" y="72" text-anchor="middle" font-size="9" fill="#991B1B">stop</text>
                        <path d="M455 95 L255 95" stroke="#22C55E" stroke-width="2" marker-end="url(#arrow)"/>
                        <text x="355" y="108" text-anchor="middle" font-size="9" fill="#166534">restart</text>
                    </svg>
                </div>

                <h3>5.3 Politiques de redémarrage</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Politique</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>no</code></td><td>Ne redémarre jamais (par défaut)</td></tr>
                            <tr><td><code>always</code></td><td>Redémarre toujours, même après un stop manuel</td></tr>
                            <tr><td><code>unless-stopped</code></td><td>Redémarre toujours, sauf si arrêté manuellement</td></tr>
                            <tr><td><code>on-failure[:max]</code></td><td>Redémarre si exit code != 0</td></tr>
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
                <div class="diagram-container">
                    <div class="diagram-title">Résumé visuel des commandes</div>
                    <svg viewBox="0 0 500 300" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <g class="layer-group"><rect x="20" y="20" width="220" height="70" rx="8" fill="#3B82F6" opacity="0.1" stroke="#3B82F6"/><text x="130" y="45" text-anchor="middle" font-weight="700" font-size="13" fill="#1E40AF">📦 Images</text><text x="130" y="65" text-anchor="middle" font-size="11" fill="#3B82F6">pull, images, rmi, build, history</text></g>
                        <g class="layer-group"><rect x="260" y="20" width="220" height="70" rx="8" fill="#22C55E" opacity="0.1" stroke="#22C55E"/><text x="370" y="45" text-anchor="middle" font-weight="700" font-size="13" fill="#166534">🐳 Containers</text><text x="370" y="65" text-anchor="middle" font-size="11" fill="#22C55E">run, ps, stop, rm, exec, logs</text></g>
                        <g class="layer-group"><rect x="20" y="110" width="220" height="70" rx="8" fill="#F59E0B" opacity="0.1" stroke="#F59E0B"/><text x="130" y="135" text-anchor="middle" font-weight="700" font-size="13" fill="#92400E">💾 Volumes</text><text x="130" y="155" text-anchor="middle" font-size="11" fill="#D97706">volume create, ls, inspect, prune</text></g>
                        <g class="layer-group"><rect x="260" y="110" width="220" height="70" rx="8" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6"/><text x="370" y="135" text-anchor="middle" font-weight="700" font-size="13" fill="#5B21B6">🌐 Networks</text><text x="370" y="155" text-anchor="middle" font-size="11" fill="#8B5CF6">network create, ls, connect, rm</text></g>
                        <g class="layer-group"><rect x="140" y="200" width="220" height="70" rx="8" fill="#EF4444" opacity="0.1" stroke="#EF4444"/><text x="250" y="225" text-anchor="middle" font-weight="700" font-size="13" fill="#991B1B">🧹 Nettoyage</text><text x="250" y="245" text-anchor="middle" font-size="11" fill="#EF4444">system prune, container prune</text></g>
                        <line x1="130" y1="90" x2="130" y2="110" stroke="#E2E8F0" stroke-width="1"/>
                        <line x1="370" y1="90" x2="370" y2="110" stroke="#E2E8F0" stroke-width="1"/>
                        <line x1="250" y1="180" x2="250" y2="200" stroke="#E2E8F0" stroke-width="1"/>
                    </svg>
                </div>

                <h3>6.1 Commandes essentielles</h3>
                <div class="code-block"><code># IMAGES
docker search --filter "is-official=true" ubuntu
docker pull ubuntu:22.04
docker images -a
docker history nginx:latest
docker rmi &lt;image_id&gt;
docker image prune -a

# CONTAINERS
docker run -d --name web -p 80:80 nginx
docker run -it ubuntu bash
docker ps -a
docker exec -it &lt;nom&gt; bash
docker logs -f &lt;nom&gt;
docker stats &lt;nom&gt;
docker stop &lt;nom&gt; && docker rm &lt;nom&gt;

# NETTOYAGE
docker system prune -a --volumes

# ALIAS .bashrc
alias d='docker'
alias dc='docker compose'
alias dps='docker ps'
alias di='docker images'
alias dclean='docker system prune -af --volumes'</code></div>
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
                    <p><strong>Docker Compose</strong> est un outil pour définir et exécuter des applications multi-conteneurs via un fichier YAML.</p>
                </div>

                <div class="diagram-container">${svgComposeArch}</div>

                <h3>7.1 Structure de docker-compose.yml</h3>
                <div class="code-block"><code>version: '3.8'

services:
  nginx:
    image: nginx:1.25
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    networks:
      - frontend

  php:
    build: ./php
    volumes:
      - ./app:/var/www/html
    networks:
      - frontend
      - backend

  mysql:
    image: mariadb:10.11
    environment:
      MYSQL_ROOT_PASSWORD: secret
    volumes:
      - dbdata:/var/lib/mysql
    networks:
      - backend

networks:
  frontend:
  backend:

volumes:
  dbdata:</code></div>

                <h3>7.2 Commandes Docker Compose</h3>
                <div class="code-block"><code>docker compose up -d          # Démarrer
docker compose ps              # Lister services
docker compose logs -f         # Logs
docker compose exec web bash   # Shell dans service
docker compose stop            # Arrêter
docker compose down -v         # Arrêter + supprimer volumes
docker compose up -d --build   # Reconstruire</code></div>
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
                <div class="code-block"><code>docker run hello-world
docker images
docker ps -a
docker rm \$(docker ps -aq)
docker rmi hello-world</code></div>

                <h3>8.2 Ubuntu interactif</h3>
                <div class="code-block"><code>docker pull ubuntu:22.04
docker run -it --name my-ubuntu ubuntu:22.04 bash
# Dans le conteneur :
cat /etc/os-release
apt update && apt install -y curl vim
exit
# Sur l'hôte :
docker start my-ubuntu
docker exec -it my-ubuntu bash
docker logs my-ubuntu</code></div>

                <h3>8.3 Environnement C/C++ avec Dockerfile</h3>
                <div class="code-block"><code>mkdir cpp-dev && cd cpp-dev
cat > Dockerfile << 'EOF'
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y g++ make git \\
    && rm -rf /var/lib/apt/lists/*
COPY . /src/
WORKDIR /src
CMD ["make", "all"]
EOF

docker build -t cpp-dev .
docker run --rm cpp-dev
docker run --rm -v \$(pwd):/src cpp-dev  # avec volume</code></div>

                <h3>8.4 Publication d'image</h3>
                <div class="code-block"><code>docker commit -m "Dev tools" -a "badara" modif badara/ubuntu-dev:1.0
docker login -u badara
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

                <div class="diagram-container">${svgNetwork}</div>

                <h3>9.1 Pilotes de réseau</h3>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Pilote</th><th>Description</th><th>Usage</th></tr></thead>
                        <tbody>
                            <tr><td><code>bridge</code></td><td>Réseau par défaut. Conteneurs communiquent entre eux</td><td>Multi-conteneurs sur un hôte</td></tr>
                            <tr><td><code>host</code></td><td>Partage le réseau de l'hôte</td><td>Performance maximale</td></tr>
                            <tr><td><code>none</code></td><td>Aucune interface réseau (sauf loopback)</td><td>Isolation totale</td></tr>
                            <tr><td><code>overlay</code></td><td>Connecte plusieurs démons Docker</td><td>Multi-hôtes, clusters</td></tr>
                            <tr><td><code>macvlan</code></td><td>Adresse MAC propre par conteneur</td><td>Legacy apps</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>9.2 Créer et utiliser un réseau</h3>
                <div class="code-block"><code># Créer un réseau bridge
docker network create --driver bridge mon-reseau \\
  --subnet=172.16.0.0/16 --gateway=172.16.0.1

# Lancer des conteneurs sur le réseau
docker run -d --network mon-reseau --name web1 nginx
docker run -d --network mon-reseau --name db mysql

# Communication DNS automatique
docker exec web1 ping db  # résout automatiquement

# Nettoyage
docker network rm mon-reseau
docker network prune</code></div>

                <div class="note">
                    <strong>Important :</strong> Sur un réseau personnalisé, les conteneurs communiquent par <strong>nom</strong> via le DNS intégré de Docker. Ce n'est PAS le cas sur le réseau bridge par défaut.
                </div>
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
                    <p>Ce TP est composé de <strong>5 parties</strong> progressives, de l'installation à la création d'une stack complète.</p>
                </div>

                <div class="diagram-container">
                    <div class="diagram-title">Progression du TP</div>
                    <svg viewBox="0 0 600 100" class="arch-svg" xmlns="http://www.w3.org/2000/svg">
                        <g><rect x="10" y="20" width="100" height="60" rx="8" fill="#DBEAFE" stroke="#3B82F6"/><text x="60" y="45" text-anchor="middle" font-weight="600" font-size="11" fill="#1E40AF">Partie 1</text><text x="60" y="62" text-anchor="middle" font-size="9" fill="#64748B">Installation Q1-6</text></g>
                        <text x="110" y="55" fill="#94A3B8">→</text>
                        <g><rect x="120" y="20" width="100" height="60" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="170" y="45" text-anchor="middle" font-weight="600" font-size="11" fill="#166534">Partie 2</text><text x="170" y="62" text-anchor="middle" font-size="9" fill="#64748B">Premier pas Q7-11</text></g>
                        <text x="220" y="55" fill="#94A3B8">→</text>
                        <g><rect x="230" y="20" width="100" height="60" rx="8" fill="#FEF3C7" stroke="#F59E0B"/><text x="280" y="45" text-anchor="middle" font-weight="600" font-size="11" fill="#92400E">Partie 3</text><text x="280" y="62" text-anchor="middle" font-size="9" fill="#64748B">Dockerfile Q12-15</text></g>
                        <text x="330" y="55" fill="#94A3B8">→</text>
                        <g><rect x="340" y="20" width="100" height="60" rx="8" fill="#FEF2F2" stroke="#EF4444"/><text x="390" y="45" text-anchor="middle" font-weight="600" font-size="11" fill="#991B1B">Partie 4</text><text x="390" y="62" text-anchor="middle" font-size="9" fill="#64748B">Compose Q16-20</text></g>
                        <text x="440" y="55" fill="#94A3B8">→</text>
                        <g><rect x="450" y="20" width="140" height="60" rx="8" fill="#F3E8FF" stroke="#8B5CF6"/><text x="520" y="45" text-anchor="middle" font-weight="600" font-size="11" fill="#6B21A8">Bonus ⭐</text><text x="520" y="62" text-anchor="middle" font-size="9" fill="#64748B">Publication Docker Hub</text></g>
                    </svg>
                </div>

                <h3>Partie 1 : Installation (Q1-Q6)</h3>
                <div class="card card-info">
                    <h4>Q1 : Installer docker-ce</h4>
                    <div class="code-block"><code>sudo apt update && sudo apt install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=\\$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\$(. /etc/os-release && echo "\$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update && sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</code></div>
                </div>
                <div class="card card-success"><h4>Q2 : Versions</h4><div class="code-block"><code>docker --version && docker compose version && docker version</code></div></div>
                <div class="card"><h4>Q3 : État du service</h4><div class="code-block"><code>systemctl status docker</code></div></div>
                <div class="card card-warning"><h4>Q4 : Hello World</h4><div class="code-block"><code>docker run hello-world</code></div></div>
                <div class="card card-danger"><h4>Q5 : Lister</h4><div class="code-block"><code>docker images && docker ps -a</code></div></div>
                <div class="card card-info"><h4>Q6 : Supprimer</h4><div class="code-block"><code>docker rm \$(docker ps -aq) && docker rmi hello-world</code></div></div>

                <h3>Partie 2 : Premier pas (Q7-Q11)</h3>
                <div class="card card-success">
                    <h4>Q7 : Alpine Linux</h4>
                    <p>Alpine Linux est une distribution basée sur musl libc et busybox. Taille : <strong>~5 Mo</strong> vs ~77 Mo pour Ubuntu.</p>
                    <div class="code-block"><code>docker search --filter "is-official=true" alpine
docker pull alpine:latest && docker pull ubuntu:latest
docker images</code></div>
                </div>
                <div class="card card-info"><h4>Q8-11 : Alpine interactif</h4><div class="code-block"><code>docker run -it --name mon-alpine alpine:latest /bin/sh
/ # cat /etc/os-release
/ # whoami  # root
# (hôte) docker logs -ft mon-alpine
docker rm -f mon-alpine && docker rmi alpine:latest</code></div></div>

                <h3>Partie 3 : Dockerfile (Q12-Q15)</h3>
                <div class="card card-warning"><h4>Q12-14 : ubuntu-22.04-dev</h4><div class="code-block"><code>FROM ubuntu:22.04
RUN apt-get update && apt-get install -y g++ make git && rm -rf /var/lib/apt/lists/*
# docker build -t ubuntu-22.04-dev .
# docker run -it --rm ubuntu-22.04-dev bash
# g++ --version && make --version && git --version
# docker rmi ubuntu-22.04-dev</code></div></div>

                <h3>Partie 4 : Docker Compose (Q16-Q20)</h3>
                <div class="card card-danger"><h4>Q16 : nginx sur port 5000</h4><div class="code-block"><code>version: '3.8'
services:
  web:
    image: nginx:1.25.0
    ports:
      - "5000:80"</code></div></div>
                <div class="card card-warning"><h4>Q17-18 : Tester</h4><div class="code-block"><code>docker compose up -d
docker images && docker ps -a && docker compose top
curl http://127.0.0.1:5000
docker compose stop web</code></div></div>
                <div class="card card-success"><h4>Q19 : Stack PHP complète</h4><p>Suivre la section 7.4 du cours : NGINX + PHP-FPM + MySQL avec PDO.</p></div>
                <div class="card card-danger"><h4>Q20 : Nettoyage</h4><div class="code-block"><code>docker compose down
docker stop \$(docker ps -aq) && docker rm \$(docker ps -aq)
docker rmi \$(docker images -q) && docker system prune -af</code></div></div>

                <h3>Bonus : Publication</h3>
                <div class="card card-gradient">
                    <div class="code-block"><code>docker commit -m "Dev tools" -a "badara" modif badara/ubuntu-dev:tools
docker login -u badara
docker push badara/ubuntu-dev:tools</code></div>
                </div>
            `
    }
];

export function getSections() { return sections; }
export function getSectionByIndex(i) { return sections[i] || null; }
export function getSectionById(id) { return sections.find(s => s.id === id); }
export function getCategories() {
    const cats = {};
    sections.forEach(s => {
        if (!cats[s.category]) cats[s.category] = [];
        cats[s.category].push(s);
    });
    return cats;
}
