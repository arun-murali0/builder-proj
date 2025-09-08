export class Documents {
  public readonly documentId: string;
  public userId: string;
  public title: string;
  public url: string;
  public uploadedAt?: Date;

  constructor(documetId: string, userId: string, title: string, url: string) {
    this.documentId = documetId;
    this.title = title;
    this.userId = userId;
    this.url = url;
    this.uploadedAt = new Date();
  }

  get getDocumentTitle(): string {
    return this.title;
  }

  get userDocId(): string {
    return this.userId;
  }
}
