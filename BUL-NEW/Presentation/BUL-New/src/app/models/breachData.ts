export class BreachData {
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: Date;
  AddedDate: Date;
  ModifiedDate: Date;
  PwnCount: number;
  Description: string;
  DataClasses: string[];
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  IsMalware: boolean;
  LogoPath: string;

  constructor(breach: BreachData) {
    this.Name = breach.Name;
    this.Title = breach.Title;
    this.Domain = breach.Domain;
    this.BreachDate = breach.BreachDate;
    this.AddedDate = breach.AddedDate;
    this.ModifiedDate = breach.ModifiedDate;
    this.PwnCount = breach.PwnCount;
    this.Description = breach.Description;
    this.DataClasses = breach.DataClasses;
    this.IsVerified = breach.IsVerified;
    this.IsFabricated = breach.IsFabricated;
    this.IsSensitive = breach.IsSensitive;
    this.IsRetired = breach.IsRetired;
    this.IsSpamList = breach.IsSpamList;
    this.IsMalware = breach.IsMalware;
    this.LogoPath = breach.LogoPath;
  }
}
