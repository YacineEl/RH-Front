import { Employee } from "../employee.model";

export interface BulletinPaie {
    id: number;
    employe: Employee;
    date: Date;
    nbJoursTravailles: number;
    tauxHoraire: number;
    salaireBrut: number;
    cotisationCNSS: number;
    cotisationAMO: number;
    prevelementIGR: number;
    congesPayes: number;
    congesSansSoldeMontant: number;
    netAPayer: number;
}
