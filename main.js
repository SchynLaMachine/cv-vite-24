import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Nathan Wick</h1>
  <p class="description">Étudiant en UX/UI design à l'IFOSUP, je développe des compétences solides dans la conception d’interfaces utilisateur intuitives et attrayantes. En parallèle, je travaille comme monteur vidéo indépendant, avec une expertise en production vidéo, gestion de contenu et des réseaux sociaux.</p>

  <section id="experience">
    <h3>Expérience Professionnelle</h3>
    <div class="experience">
      <h4>Monteur vidéo & gestion des réseaux sociaux</h4>
      <p><strong>Indépendant</strong></p>
      <p><strong>Localisation:</strong> 123 Anywhere St., Any City</p>
      <p><strong>Période:</strong> Janvier 2020 - Présent</p>
      <ul>
        <li>Création, montage et publication de vidéos sur YouTube</li>
        <li>Gestion des réseaux sociaux pour promouvoir les contenus</li>
        <li>Développement d'une audience et interaction avec la communauté</li>
        <li>Acquisition de compétences en gestion de projet, montage vidéo et marketing digital</li>
      </ul>
    </div>
  </section>

  <section id="competences">
    <h3>Compétences</h3>
    <ul class="competences">
      <li><i class="fas fa-paint-brush"></i> Webdesign</li>
      <li><i class="fas fa-code"></i> Développement</li>
      <li><i class="fas fa-camera"></i> Montage vidéo</li>
      <li><i class="fas fa-comments"></i> Community management</li>
      <li><i class="fas fa-share-alt"></i> Publication et gestion des réseaux sociaux</li>
      <li><i class="fas fa-pencil-alt"></i> Graphisme</li>
    </ul>
  </section>

  <section id="formation">
    <h3>Formation</h3>
    <div class="formation">
      <p><strong>IFOSUP Wavre</strong></p>
      <p>BES UX/UI Designer - <strong>En cours</strong></p>
    </div>
    <div class="formation">
      <p><strong>École Polytechnique de Verviers</strong></p>
      <p>CESS technique de transition informatique - <strong>Terminé</strong></p>
    </div>
  </section>

  <section id="langues">
    <h3>Langues</h3>
    <p><span>Français:</span> Langue maternelle</p>
    <p><span>Anglais:</span> Niveau B2</p>
  </section>
`;

// Ajouter des événements de clic aux liens de navigation
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const targetId = this.getAttribute("href"); // Récupérer l'ID de la section ciblée
    const targetSection = document.querySelector(targetId); // Sélectionner la section ciblée

    // Faire défiler vers la section
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Ajouter la classe de surbrillance
    targetSection.classList.add("highlight");

    // Enlever la classe après quelques secondes
    setTimeout(() => {
      targetSection.classList.remove("highlight");
    }, 2000); // Durée de la surbrillance (2000ms = 2 secondes)
  });
});

// Charger le fichier JSON
fetch("./data.json") // Assurez-vous que le fichier JSON est bien dans le même dossier
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Vous pouvez utiliser les données ici si nécessaire
  })
  .catch((error) => console.error("Erreur lors du chargement du JSON:", error));
