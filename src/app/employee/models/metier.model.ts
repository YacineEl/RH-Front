import { Employee } from '../employee.model';

export class Metier {
  id: number;
  libelle: string;
  employe: Employee;
  dateDebut: Date;
  dateFin: Date;
  empId: number;

  constructor(
    id?: number,
    libelle?: string, 
    employee?: Employee, 
    dateDebut?: Date, 
    dateFin?: Date, 
    empId?: number)
  {
    this.id = id;
    this.libelle = libelle;
    this.employe = employee;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.empId = empId;
  }
}
