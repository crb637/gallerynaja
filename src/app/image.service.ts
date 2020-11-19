import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase) {}

  getImageDetailList() {
    this.imageDetailList = this.firebase.list("imageDetails");;
  }

  insertImageDetails(imageDetails) {
    //this.imageDetailList.push(imageDetails);
    const ref = this.imageDetailList.push(imageDetails);
    ref.update({
      date: new Date(),
      key: ref.key
    });
    console.log(ref.key);
    return ref;
  }

  deleteImage(imageDetails) {
    //.collection("tweet")
    console.log(imageDetails.key);
    this.imageDetailList.remove(imageDetails.key);

    return this.firebase;
  }
}
