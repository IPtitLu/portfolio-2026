export type Education = {
  year: string
  title: string
  school: string
  location: string
  details: string[]
}

export const educations: Education[] = [
  {
    year: '2023',
    title: 'Master Expert Développeur Web',
    school: 'Ynov Campus',
    location: 'Nantes',
    details: [
      'Développement front-end avec Vue.js et React',
      'Développement back-end avec Node.js',
      'Utilisation de la blockchain avec Solidity',
      'Création d’architectures cloud sur Microsoft Azure avec Terraform',
      'Configuration de pipelines CI/CD avec GitLab CI',
      'Développement d’une application type BlaBlaCar en Next.js',
    ],
  },
  {
    year: '2022',
    title: 'Bachelor Développeur Web',
    school: 'Hetic',
    location: 'Paris',
    details: [
      'Développement back-end avec PHP Symfony',
      'Développement front-end avec React et WordPress',
      'Réalisation de nombreux projets web',
      'Utilisation de PHP Symfony, React et WordPress',
    ],
  },
  {
    year: '2021',
    title: 'BTS SIO – option SLAM',
    school: 'Lycée Fulbert',
    location: 'Chartres',
    details: [
      'Fondements de l’informatique',
      'Programmation orientée objet',
      'Utilisation de frameworks back-end et front-end',
      'Bases en réseaux et bases de données',
    ],
  },
  {
    year: '2019',
    title: 'Baccalauréat',
    school: 'Lycée Fulbert',
    location: 'Chartres',
    details: [
      'Compréhension de la place de l’informatique dans le monde du travail',
      'Sensibilisation aux principes fondamentaux de l’informatique',
    ],
  },
]
