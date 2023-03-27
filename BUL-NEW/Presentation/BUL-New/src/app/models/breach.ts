export class Breach {
  name: string;
  title: string;
  domain: string;
  breachDate: Date;
  addedDate: Date;
  modifiedDate: Date;
  pwnCount: number;
  description: string;
  dataClasses: string[];
  isVerified: boolean;
  isFabricated: boolean;
  isSensitive: boolean;
  isRetired: boolean;
  isSpamList: boolean;
  isMalware: boolean;
  logoPath: string;

  constructor(breach: Breach) {
    this.name = breach.name;
    this.title = breach.title;
    this.domain = breach.domain;
    this.breachDate = breach.breachDate;
    this.addedDate = breach.addedDate;
    this.modifiedDate = breach.modifiedDate;
    this.pwnCount = breach.pwnCount;
    this.description = breach.description;
    this.dataClasses = breach.dataClasses;
    this.isVerified = breach.isVerified;
    this.isFabricated = breach.isFabricated;
    this.isSensitive = breach.isSensitive;
    this.isRetired = breach.isRetired;
    this.isSpamList = breach.isSpamList;
    this.isMalware = breach.isMalware;
    this.logoPath = breach.logoPath;
  }
}
