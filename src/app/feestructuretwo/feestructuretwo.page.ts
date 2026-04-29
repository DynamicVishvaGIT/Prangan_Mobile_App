import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feestructuretwo',
  templateUrl: './feestructuretwo.page.html',
  styleUrls: ['./feestructuretwo.page.scss'],
})
export class FeestructuretwoPage implements OnInit {
  branch_id: string;
  pdf: string;
  columns;
  rows=[];
  branch_name;
  filtered_row=[]
  constructor(
    public route:ActivatedRoute,
    public apiService:ApiService
  ) { }
  ionViewDidEnter(){
    this.branch_id=this.route.snapshot.paramMap.get('branch_id')
    this.pdf=this.route.snapshot.paramMap.get('pdf')
    this.branch_name=this.route.snapshot.paramMap.get('branch_name')
    this.apiService.fetchFeeColumn().then(data=>{
      console.log(data);
      this.columns=JSON.parse(data.data)
    }).catch(err=>{
      console.log(err,err);
    })
    this.apiService.fetchFeeRow().then(data=>{
      console.log('row', JSON.parse(data.data))
      var rows = JSON.parse(data.data);
            for (let index = 0; index < rows.length; index++) {
                
                    console.log('r',rows[index]['row']['id'],);
                    var rowId = rows[index]['row']['id'];
                    this.apiService.fetchFeeStructure(rowId, this.branch_id).then(data => {
                        console.log(data);
                        rows[index]['row']['amount_arary'] = JSON.parse(data.data);
                        console.log('rows', rows);
                        // this.rows.push(rows);
                        this.filtered_row.push(rows[index]['row'])
                    }).catch(err => {
                        console.log(err, err);
                    });
            }
            // for (let i = 0; i < this.rows.length; i++) {
            //   this.filtered_row.push(this.rows[i]['row'])
              
            // }
            console.log('ssrows', this.filtered_row);


    }).catch(err=>{
      console.log(err,err);
    })
  }
  ngOnInit() {
  }
  // checkIfAmount(amountArray,columnId){
  //   if(amountArray.some(column => column.column_id == columnId)) {
  //    return true
  //   }
  //   else{
  //     return false
  //   }
  // }
  openPdf(){
    if (this.pdf.indexOf("pdf") !== -1){
      window.open(encodeURI(this.pdf),"_system","location=yes");
    }
    else{
      this.apiService.presentToast('File not available',2000);
    }
  }
}
