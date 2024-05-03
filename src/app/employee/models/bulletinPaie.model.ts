import { Employee } from "../employee.model";

export class BulletinPaie {
    id?: number;
    employe?: Employee;
    date?: Date;
    nbJoursTravailles?: number;
    tauxHoraire?: number;
    salaireBrut?: number;
    cotisationCNSS?: number;
    cotisationAMO?: number;
    prelevementIGR?: number;
    congesPayes?: number;
    congesSansSoldeMontant?: number;
    netAPayer?: number;

    constructor(id?: number, employe?: Employee, date?: Date,
                nbJoursTravailles?: number, tauxHoraire?: number,
                salaireBrut?: number, cotisationCNSS?: number,
                cotisationAMO?: number, prelevementIGR?: number, congesPayes?: number,
                congesSansSoldeMontant?: number, netAPayer?: number) {
      this.id = id;
      this.employe = employe;
      this.date = date;
      this.nbJoursTravailles = nbJoursTravailles;
      this.tauxHoraire = tauxHoraire;
      this.salaireBrut = salaireBrut;
      this.cotisationCNSS = cotisationCNSS;
      this.cotisationAMO = cotisationAMO;
      this.prelevementIGR = prelevementIGR;
      this.congesPayes = congesPayes;
      this.congesSansSoldeMontant = congesSansSoldeMontant;
      this.netAPayer = netAPayer;
    }
}
