import { Employee } from '../employee.model';

export class Conge {
  id: number;
  employe: Employee;
  typeConge?: string;
  dateDebut: Date;
  dateFin: Date;
  statut?: string;
  empId: number;

  constructor(
    id?: number,
    employe?: Employee,
    empId?: number,
    dateDebut?: Date,
    dateFin?: Date,
    statut?: string,
    typeConge?: string
  ) {
    this.id = id;
    this.employe = employe;
    this.typeConge = typeConge;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.statut = statut;
    this.empId = empId;
  }
}
