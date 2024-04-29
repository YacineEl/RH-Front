import { Employee } from "../employee.model";

export interface Conge {
    id: number;
    employe: Employee;
    typeConge: string;
    dateDebut: Date;
    dateFin: Date;
    statut: string;
}