import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { ImgDetail } from '../../img';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
  
})
export class ImageListComponent implements OnInit {
  imageList: any[];
  rowIndexArray: any[];

  constructor(private imageservice: ImageService) { }
  
  img: ImgDetail;

  ngOnInit() {
    this.imageservice.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );
  }
  del(event, item) {
    if (window.confirm("confirm delete?")) {
      console.log("delete", item);
      this.imageservice.deleteImage(item);
    }
    // if (window.confirm("confirm")) {
    //   this.service
    //     .deleteImage(this.imageList.id)
    //     .then(() => {
    //       alert("deleteComplete");
    //     })
    //     .catch(err => {
    //       alert("deleteFailure");
    //     });
    // }
  }
  forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

}
