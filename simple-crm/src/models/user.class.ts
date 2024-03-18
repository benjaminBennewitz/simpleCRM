export class User {
  firstName: String;
  lastName: String;
  costumerNo: number;
  birthDate: number;
  street: String;
  streetNo: number;
  city: String;
  zip: number;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.costumerNo = obj ? obj.costumerNo : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.streetNo = obj ? obj.streetNo : '';
    this.city = obj ? obj.city : '';
    this.zip = obj ? obj.zip : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      costumerNo: this.costumerNo,
      birthDate: this.birthDate,
      street: this.street,
      streetNo: this.streetNo,
      city: this.city,
      zip: this.zip,
    };
  }
}
