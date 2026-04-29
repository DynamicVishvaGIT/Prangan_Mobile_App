
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  tran_please_wait = 'Please Wait';
  public userData: Subject<any>;
  public userTypeData: Subject<any>;


  //private baseUrl = 'https://dynamicvishva.in/Prangan_New/cocoon_api/api';
  private baseUrl = 'https://app.prangan.in/Prangan_New/cocoon_api/api';
  // private baseUrl = 'https://developer.dvadminpanel.in/prangan/cocoon_api/api';
  // private baseUrl = 'https://prangan.aayuralife.in/cocoon_api/api'; // testing purpose
  constructor(
    public http: HTTP,
    public toastCtrl: ToastController,
    public loadingController: LoadingController,
    public httpclient:HttpClient,

  ) {
    this.userData = new Subject();
    this.userTypeData = new Subject();

   }
  async presentToast(message,duration) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      position:'bottom',
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }
  login(data) {
    console.log(data);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // };
    let httpOptions: {
      'Content-Type': 'application/json';
    };
    // return this.http.post(`${this.baseUrl}/login.php`,{},data);
    return this.http.post(`${this.baseUrl}/login.php`,data, httpOptions);
    // const formData = new FormData();
    // formData.append('Username', data.Username);
    // console.log(data);
    // return this.httpclient.post(`${this.baseUrl}/login.php`,formData);
  }
  send_otp(){
    return this.http.post(`${this.baseUrl}/sendOTP`,{},{});
  }
  verify_otp(username,code){
    // const formData = new FormData();
    // formData.append('Username', username);
    // formData.append('Otp', code.toString());
   // let tempData={'Username':username, 'Otp':code.toString()};
   let httpOptions: {
    'Content-Type': 'application/json';
  };
    return this.http.post(`${this.baseUrl}/validate_otp.php`,{'Username' : username,'Otp' : code.toString()}, httpOptions);
   // return this.httpclient.post(`${this.baseUrl}/validate_otp.php`,tempData);
  }
  userDetails(id,class_name){
    // const formData = new FormData();
    // formData.append('Userid', id);
    // formData.append('Class', class_name);
    let httpOptions: {
      'Content-Type': 'application/json';
    };
    return this.http.post(`${this.baseUrl}/user_details.php`,{'Userid' : id,'Class' :class_name},httpOptions);
    //return this.httpclient.post(`${this.baseUrl}/user_details.php`,formData);
  }
  daycareRegistration(body){
    return this.httpclient.post(this.baseUrl+'/daycare_reg.php',body,{})
  }
  daycareRegistrationStep2(body){
    return this.httpclient.post(this.baseUrl+'/add_daycare_step2.php',body,{})
  }
  daycareRegistrationStep3(body){
    return this.httpclient.post(this.baseUrl+'/add_daycare_step3.php',body,{})
  }
  daycareRegistrationStep4(body){
    return this.httpclient.post(this.baseUrl+'/add_daycare_step4.php',body,{})
  }
  getBranches(){
    return this.http.post(`${this.baseUrl}/fetch_branch.php`,{},{});
  }
  fetchDayCareStep2(id){
    return this.http.post(`${this.baseUrl}/fetch_daycare_step2.php`,{},{'Userid' : id});
  }
  fetchDayCareStep3(id){
    return this.http.post(`${this.baseUrl}/fetch_daycare_step3.php`,{},{'Userid' : id});
  }
  fetchDayCareStep4(id){
    return this.http.post(`${this.baseUrl}/fetch_daycare_step4.php`,{},{'Userid' : id});
  }
  fetchAllEvents(){
    return this.http.post(`${this.baseUrl}/all_event.php`,{},{});
  }
  fetchBranchEvents(Classtype,Type,Branchid){
    return this.http.post(`${this.baseUrl}/event.php`,{},{'Classtype':Classtype,'Type':Type,'Branchid':Branchid});
  }
  fetchBranchHoliday(Classtype,Type,Branchid){
    return this.http.post(`${this.baseUrl}/holiday.php`,{},{'Classtype':Classtype,'Type':Type,'Branchid':Branchid});
  }
  fetchAllAlbums(){
    return this.http.post(`${this.baseUrl}/all_album.php`,{},{});
  }
  fetchAllBranchFeeStructure(){
    return this.http.post(`${this.baseUrl}/fetch_all_fees_stucture.php`,{},{});
  }
  fetchBranchFeeStructure(Branchid){
    return this.http.post(`${this.baseUrl}/branch_fees_stucture.php`,{},{'Branchid':Branchid});
  }
  fetchAlbumDetails(Albumid){
    return this.http.post(`${this.baseUrl}/album_image.php`,{},{'Albumid':Albumid});
  }
  fetchBranchAlbum(Classtype,Type,Branchid){
    return this.http.post(`${this.baseUrl}/album.php`,{},{'Classtype':Classtype,'Type':Type,'Branchid':Branchid});
  }
  preschoolRegStep1(body){
    return this.httpclient.post(this.baseUrl+'/preschool_reg.php',body,{})
  }
  preschoolRegStep2(body){
    return this.httpclient.post(this.baseUrl+'/preschool_step2.php',body,{})
  }
  preschoolRegStep3(body){
    return this.httpclient.post(this.baseUrl+'/preschool_step3.php',body,{})
  }
  fetchPreschoolRegStep2(id){
    return this.http.post(`${this.baseUrl}/fetch_preschool_step2.php`,{},{'Userid' : id});
  }
  fetchPreschoolRegStep3(id){
    return this.http.post(`${this.baseUrl}/fetch_preschool_step3.php`,{},{'Userid' : id});
  }
  updatePreschoolRegStep1(formdata){
    return this.httpclient.post(`${this.baseUrl}/update_preschool_step1.php`,formdata,{});
  }
  updatePreschoolRegStep2(formdata){
    return this.httpclient.post(`${this.baseUrl}/update_preschool_step2.php`,formdata,{});
  }
  updatePreschoolRegStep3(formdata){
    return this.httpclient.post(`${this.baseUrl}/update_preschool_step3.php`,formdata,{});
  }
  updateDaycareRegStep1(formdata){
    return this.httpclient.post(`${this.baseUrl}/update_daycare_step1.php`,formdata,{});
  }
  updateDaycareRegStep2(formdata){
    return this.httpclient.post(`${this.baseUrl}/update_daycare_step2.php`,formdata,{});
  }
  updateDaycareRegStep3(formdata){
    return this.httpclient.post(`${this.baseUrl}/update_daycare_step3.php`,formdata,{});
  }
  updateDaycareRegStep4(formdata){
    return this.httpclient.post(`${this.baseUrl}/update_daycare_step4.php`,formdata,{});
  }
  userFMS(body){
    this.http.setDataSerializer('json')
    return this.http.post(this.baseUrl+'/user_fms_key.php',body,{})
  }
  addEnquiry(body){
    return this.http.post(this.baseUrl+'/add_enquiry.php',body,{})
  }
  setUserData(userData,class_type){
    console.log('userData service',userData,class_type)
    var userId=JSON.parse(userData)
    this.userDetails(userId.id,class_type).then(data=>{
      console.log('userDetails',data,class_type)
      this.userData.next(data)
      this.userTypeData.next(class_type)

    })
  }
  fetchFeeColumn(){
    return this.http.post(`${this.baseUrl}/fetch_fees_columns.php`,{},{});
  }
  fetchFeeRow(){
    return this.http.post(`${this.baseUrl}/fetch_fees_rows.php`,{},{});
  }
  fetchFeeStructure(Rowid,Branchid){
    return this.http.post(`${this.baseUrl}/fetch_fees_structure.php`,{},{'Rowid':Rowid,'Branchid':Branchid});
  }
  fetchUserAttendance(Type,Userid){
    return this.http.post(`${this.baseUrl}/fetch_user_attendence.php`,{},{'Type':Type,'Userid':Userid});
  }
  fetchNotifications(Type,Userid){
    return this.http.post(`${this.baseUrl}/fetch_notification.php`,{},{'Type':Type,'Userid':Userid});
  }
  fetchFeesDetails(Userid){
    return this.http.post(`${this.baseUrl}/fetch_fees_details.php`,{},{'Type':'Preschool','Userid':Userid});
  }
  fetchInstallation(){
    return this.http.post(`${this.baseUrl}/installation.php`,{},{});
  }
  fetchDaycare(Userid){
    return this.http.post(`${this.baseUrl}/daycare_fee_details.php`,{},{'Type':'Daycare','Userid':Userid});
  }
  onlinePayment(body){
    return this.http.post(`${this.baseUrl}/online_payment.php`,body,{});
  }
  verifyonlinePayment(body){
    return this.http.post(`${this.baseUrl}/varify_online_payment.php`,body,{});
  }
  paymentHistory(Type,Userid){
    return this.http.post(`${this.baseUrl}/user_order_history.php`,{},{'Type':Type,'Userid':Userid});
  }
  fetchMedicine(Userid,Illnessid){
    return this.http.post(`${this.baseUrl}/fetch_medicine.php`,{},{'Userid':Userid,'Illnessid':Illnessid});
  }
  fetchNotices(){
    return this.http.post(`${this.baseUrl}/fetch_notices.php`,{},{});
  }
  fetchOffers(){
    return this.http.post(`${this.baseUrl}/fetch_offers.php`,{},{});
  }
  fetchOtherActivities(){
    return this.http.post(`${this.baseUrl}/fetch_other_activities.php`,{},{});
  }
  fetchRules(){
    return this.http.post(`${this.baseUrl}/fetch_rules.php`,{},{});
  }
  fetchSchedule(type,classid,branchid){
    return this.http.post(`${this.baseUrl}/fetch_schedule.php`,{},{'Type':type,'Classid':classid,'Branchid':branchid});
  }
  fetchServices(){
    return this.http.post(`${this.baseUrl}/fetch_services.php`,{},{});
  }
  fetchIllness(Userid){
    return this.http.post(`${this.baseUrl}/fetch_illness.php`,{},{'Userid':Userid});
  }
  addIllness(body){
    return this.httpclient.post(`${this.baseUrl}/add_illness.php`,body,{});
  }
  addMedicine(body){
    this.http.setDataSerializer('json');
    return this.http.post(`${this.baseUrl}/add_medicine.php`,body,{});
  }
  editMedicine(body){
    this.http.setDataSerializer('json')
    return this.http.post(`${this.baseUrl}/edit_medicine.php`,{},{});
  }
  deleteMedicine(Userid,Illnessid,Tabid){
    return this.http.post(`${this.baseUrl}/delete_medicine.php`,{},{'Userid':Userid,'Illnessid':Illnessid,'Tabid':Tabid});
  }
  deleteIllness(Userid,Illnessid){
    return this.http.post(`${this.baseUrl}/delete_illness.php`,{},{'Userid':Userid,'Illnessid':Illnessid});
  }
  discontinueMedicine(Userid,Illnessid,TabId,Reason){
    return this.http.post(`${this.baseUrl}/delete_medicine.php`,{},{'Userid':Userid,'Illnessid':Illnessid,'TabId':TabId,'Reason':Reason});
  }
  discontinueIllness(Userid,Illnessid,Reason){
    return this.http.post(`${this.baseUrl}/inactive_illness.php`,{},{'Userid':Userid,'Illnessid':Illnessid,'Reason':Reason});
  }
  editIllness(body){
    return this.httpclient.post(`${this.baseUrl}/edit_illness.php`,body,{});
  }
}
