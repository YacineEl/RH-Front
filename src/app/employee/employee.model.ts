export class Employee {
    id:number;
    matricule: string;
    nom: string;
    prenom: string;
    codeCNSS?: string;
    dateNaissance?: Date;
    telephone?: string;
    adresse?: string;
    situationFamiliale?: string;
    photoIdentite?: string;
  
    constructor(
      id: number,
      matricule: string,
      nom: string,
      prenom: string,
      codeCNSS?: string,
      dateNaissance?: Date,
      telephone?: string,
      adresse?: string,
      situationFamiliale?: string,
      photoIdentite?: string
    ) {
      this.id = id;
      this.matricule = matricule;
      this.nom = nom;
      this.prenom = prenom;
      this.codeCNSS = codeCNSS;
      this.dateNaissance = dateNaissance;
      this.telephone = telephone;
      this.adresse = adresse;
      this.situationFamiliale = situationFamiliale;
      this.photoIdentite = photoIdentite;
    }
  }
  