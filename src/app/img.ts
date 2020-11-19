export class ImgDetail {
  key: string;
  caption: string;
  category: string;
  imageUrl: string;
  file: File;
  date: any;
 
  constructor(file: File) {
    this.file = file;
  }
}