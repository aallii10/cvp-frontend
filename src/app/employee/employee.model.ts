export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
  hireDate: Date;

  constructor(id: number, firstName: string, lastName: string, email: string, phonenumber: string, hireDate: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phonenumber = phonenumber;
    this.hireDate = hireDate;
  }
}

