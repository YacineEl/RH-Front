import { BulletinPaie } from "./models/bulletinPaie.model";
import { Conge } from "./models/conge.model";
import { Contrat } from "./models/contrat.model";
import { Metier } from "./models/metier.model";

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
    bulletinPaie?: BulletinPaie;
    conge?:Conge;
    metier?:Metier;
    contrat?:Contrat;
  
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
      photoIdentite?: string,
      bulletinPaie?: BulletinPaie,
      conge?: Conge,
      metier?: Metier,
      contrat?: Contrat
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
      this.bulletinPaie = bulletinPaie;
      this.conge = conge;
      this.metier = metier;
      this.contrat = contrat;
    }
  }
  