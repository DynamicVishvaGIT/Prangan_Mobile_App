import { HTTP } from '@ionic-native/http/ngx';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from "@angular/platform-browser";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AlertController } from '@ionic/angular';

declare var Math;
@Component({
  selector: 'app-gallerytwo',
  templateUrl: './gallerytwo.page.html',
  styleUrls: ['./gallerytwo.page.scss'],
})
export class GallerytwoPage implements OnInit {
  event;
  id;
  images: any;
  name: string;
  // fileTransfer: FileTransferObject

  constructor(
    public route: ActivatedRoute,
    public apiService: ApiService,
    public location:Location,
    public photoViewer: PhotoViewer,
    private file: File,
    public sanitizer: DomSanitizer,
    public http:HTTP,
    private androidPermissions: AndroidPermissions,
    public alertController: AlertController,


  ) { 
    
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
      this.name = params.get('name');
      this.apiService.fetchAlbumDetails(this.id).then(data=>{
        console.log('data',data);
        this.images=JSON.parse(data.data)
      })
    });
  }
  goBack(){
    this.location.back()
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Successful',
      message: message,
      mode: 'ios',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
           console.log('ok');
          },
        },
      ],
    });
    await alert.present();
  }
  download(url){
    if(url){
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(data=>{
        console.log(data);
        if(!data.hasPermission){
          console.log('1');
          this.apiService.presentToast('Storage permission is not turned on',2000)
          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE])
        }
        else{
          console.log('2');
          var filename=this.parseUrlFilename(url)
          console.log('filename',filename);
          const filePath = this.file.externalRootDirectory+'/Download/' + filename;
            this.http.downloadFile(url, {}, {}, filePath).then(response => {
              this.presentAlert('Image saved to Downloads folder');
            }).catch(err => {
              this.apiService.presentToast(err.error,2000)
                // prints 403
                console.log('error block ... ', err.status);
                // prints Permission denied
                console.log('error block ... ', err.error);
            })
        }
      }).catch(err=>{
      
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE])
      })
      
    }
   
  }
  parseUrlFilename(url, defaultFilename = null) {
    let filename = new URL(url, "https://example.com").href.split("#").shift().split("?").shift().split("/").pop(); //No need to change "https://example.com"; it's only present to allow for processing relative URLs.
    if(!filename) {
        if(defaultFilename) {
            filename = defaultFilename;
        //No default filename provided; use a pseudorandom string.
        } else {
            filename = Math.random().toString(36).substr(2, 10);
            // filename='abc.png'
        }
    }
    
    return filename;
}
  viewImage(url){
    if(url){
      this.photoViewer.show(url, '', {share: true});

    }

  }
  doRefresh(event){
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
      this.name = params.get('name');
      this.apiService.fetchAlbumDetails(this.id).then(data=>{
        console.log('data',data);
        this.images=JSON.parse(data.data)
      event.target.complete()

      }).catch(err=>{
      event.target.complete()

      })
    });
  }
}
