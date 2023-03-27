export class Paste {
  Source: string;
  Id: string;
  Title: string;
  Date: Date;
  EmailCount: number;

  constructor(paste: Paste) {
    this.Source = paste.Source;
    this.Id = paste.Id;
    this.Title = paste.Title;
    this.Date = paste.Date;
    this.EmailCount = paste.EmailCount;
  }
}
