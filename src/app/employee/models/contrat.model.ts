import { Employee } from '../employee.model';

export class Contrat {
  id: number;
  employe: Employee;
  typeContrat: string;
  dateDebut: Date;
  dateFin: Date;
  salaireBrut: number;
  empId: number;

  constructor(
    id?: number,
    employee?: Employee,
    empId?: number,
    typeContrat?: string,
    dateDebut?: Date,
    dateFin?: Date,
    salaireBrut?: number
  ) {
    this.id = id;
    this.employe = employee;
    this.typeContrat = typeContrat;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.salaireBrut = salaireBrut;
    this.empId = empId;
  }
}
