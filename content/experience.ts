export type Experience = {
  year: string
  role: string
  company: string
  location: string
  details: string[]
}

export const experiences: Experience[] = [
  {
    year: '2023 - Aujourd\'hui',
    role: 'Développeur Fullstack',
    company: 'Sopra Steria',
    location: 'Nantes',
    details: [
      'Développement de tâches backend en Java sur un projet complexe avec gestion de files JMS',
      'Appels entre modules et participation à l’architecture applicative',
      'Mise en place de fonctionnalités frontend en React',
      'Optimisation des composants et gestion de tests poussés',
    ],
  },
  {
    year: '2022',
    role: 'Développeur Fullstack',
    company: 'V-labs',
    location: 'Le Coudray',
    details: [
      'Développement de projets backend en PHP Symfony',
      'Structuration, sécurisation et amélioration de la qualité du code',
      'Réalisation de tâches frontend en React',
      'Création de landing pages et composants UX/UI en Symfony avec une architecture atomique',
    ],
  },
  {
    year: '2021',
    role: 'Développeur Fullstack',
    company: 'V-labs',
    location: 'Le Coudray',
    details: [
      'Mise en place d’un site local de gestion en Symfony',
      'Gestion d’utilisateurs, concessions et véhicules affiliés',
      'Création d’une landing page pour Kropeo',
      'Ajout de blocs frontend sur le site v-labs.fr',
    ],
  },
  {
    year: '2020',
    role: 'Développeur Backend',
    company: 'Ingencys',
    location: 'Chartres',
    details: [
      'Migration d’un projet vers une technologie plus récente',
      'Migration d’un projet Flash vers JavaScript',
      'Étape intermédiaire de migration ActionScript 2 vers ActionScript 3',
    ],
  },
  {
    year: '2020',
    role: 'Développeur Backend',
    company: 'Ingencys',
    location: 'Chartres',
    details: [
      'Mise en place et développement d’un chatbot pour des structures e-commerce',
      'Utilisation de JavaScript, Node.js et JSON',
      'Stage de première année de BTS',
    ],
  },
]
