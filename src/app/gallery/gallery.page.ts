import { Location } from '@angular/common';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  type;
  branch_id: any;
  albums: any;
  isAlbumPresent: boolean;
  plan: string;
  classType: any;

  constructor(
    public storage: Storage,
    public router: Router,
    public apiService: ApiService,
    public location:Location


  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('type').then(data=>{
      console.log('data',data);
      this.type=data;
    })
      this.storage.get('user').then(data=>{
        if(data){
          if(JSON.parse(data).class){
            this.plan='Preschool'
            this.classType=JSON.parse(data).class
          }
          else{
            this.plan='Daycare'
            this.classType='Daycare'
          }
        this.branch_id = JSON.parse(data).branch_id;
        this.storage.get('userType').then(userType=>{
          if(userType=='Daycare'){
          this.apiService.fetchBranchAlbum(userType,userType,this.branch_id).then(album_data=>{
            this.albums=JSON.parse(album_data.data)
            console.log('albums',this.albums);
            this.isAlbumPresent=true
          }).catch(err=>{
          this.albums='';

            this.isAlbumPresent=false
          })
        }
        else{
          this.apiService.fetchBranchAlbum(this.classType,userType,this.branch_id).then(album_data=>{
            this.albums=JSON.parse(album_data.data)
            console.log('albums',this.albums);
            this.isAlbumPresent=true
          }).catch(err=>{
          this.albums='';

            this.isAlbumPresent=false
          })
        }
        })
      }
      else{
        this.apiService.fetchAllAlbums().then(data=>{
          var albums=JSON.parse(data.data)
          if(albums){

          var albums_array=[]
          var class_array=[]

          for (let index = 0; index < albums.length; index++) {
            if(albums[index]['b']){
              for (let i = 0; i < albums[index]['b'].length; i++) {
                class_array.push(albums[index]['b'][i]['class'])
              }

              var album={
                ...albums[index]['a']
              }
              album['class']=class_array.join()
            }
            else{
              var album={
                ...albums[index]['a'],
               
              }
              album['class']=''
            }
          
            albums_array.push(album)
          }
          this.albums=albums_array;
          this.isAlbumPresent=true
        }
        else{
          this.isAlbumPresent=false
        }
        }).catch(err=>{
          this.albums='';
          this.isAlbumPresent=false
        })
      }

    });
  }

  goBack(){
    this.location.back()
  }
  openDetails(event){
    this.router.navigate(['eventdetails',event]);
  }
  openDetails2(id,name){
    this.router.navigate(['gallerytwo',id,name]);
  }
  doRefresh(event){
    this.storage.get('type').then(data=>{
      console.log('data',data);
      this.type=data;
    })
      this.storage.get('user').then(data=>{
        if(data){
          if(JSON.parse(data).class){
            this.plan='Preschool'
            this.classType=JSON.parse(data).class
          }
          else{
            this.plan='Daycare'
            this.classType='Daycare'
          }
        this.branch_id = JSON.parse(data).branch_id;
        this.storage.get('userType').then(userType=>{
          if(userType=='Daycare'){
          this.apiService.fetchBranchAlbum(userType,userType,this.branch_id).then(album_data=>{
            this.albums=JSON.parse(album_data.data)
            console.log('albums',this.albums);
            this.isAlbumPresent=true
          }).catch(err=>{
          this.albums='';

            this.isAlbumPresent=false
          })
        }
        else{
          this.apiService.fetchBranchAlbum(this.classType,userType,this.branch_id).then(album_data=>{
            this.albums=JSON.parse(album_data.data)
            console.log('albums',this.albums);
            this.isAlbumPresent=true
          }).catch(err=>{
          this.albums='';

            this.isAlbumPresent=false
          })
        }
        })
      event.target.complete()

      }
      else{
        this.apiService.fetchAllAlbums().then(data=>{
      event.target.complete()

          var albums=JSON.parse(data.data)
          if(albums){

          var albums_array=[]
          var class_array=[]

          for (let index = 0; index < albums.length; index++) {
            if(albums[index]['b']){
              for (let i = 0; i < albums[index]['b'].length; i++) {
                class_array.push(albums[index]['b'][i]['class'])
              }

              var album={
                ...albums[index]['a']
              }
              album['class']=class_array.join()
            }
            else{
              var album={
                ...albums[index]['a'],
               
              }
              album['class']=''
            }
          
            albums_array.push(album)
          }
          this.albums=albums_array;
          this.isAlbumPresent=true
        }
        else{
          this.isAlbumPresent=false
        }
        }).catch(err=>{
      event.target.complete()

          this.albums='';
          this.isAlbumPresent=false
        })
      }

    });
  }
}
