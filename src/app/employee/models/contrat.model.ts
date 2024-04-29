import { Employee } from "../employee.model";

export interface Contrat {
    id: number;
    employe: Employee;
    typeContrat: string;
    dateDebut: Date;
    dateFin: Date;
    salaireBrut: number;
}