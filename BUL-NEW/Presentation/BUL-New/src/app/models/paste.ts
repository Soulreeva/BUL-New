export class Paste {
  source: string;
  id: string;
  title: string;
  date: Date;
  emailCount: number;

  constructor(paste: Paste) {
    this.source = paste.source;
    this.id = paste.id;
    this.title = paste.title;
    this.date = paste.date;
    this.emailCount = paste.emailCount;
  }
}
