import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ChangeDetectorRef,Component,ElementRef,Input,OnInit,ViewChild,
} from '@angular/core';
import {
  IonContent,
  ActionSheetController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { Location } from '@angular/common';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-addadmission',
  templateUrl: './addadmission.page.html',
  styleUrls: ['./addadmission.page.scss'],
})
export class AddadmissionPage implements OnInit {
  step = 'step-1';
  value = 'personal_info';
  isOtherInfoEnabled = false;
  isImagesEnabled = false;
  isDisabled = false;
  isLoggedIn = false;
  todays_date = new Date().toJSON().split('T')[0];
  @ViewChild(IonContent, { read: IonContent, static: false })
  myContent: IonContent;
  dayCareRegForm: FormGroup;
  child_file_name: string;
  childbase64Image: any;
  mother_file_name: string;
  motherbase64Image: any;
  father_file_name: string;
  fatherbase64Image: any;
  guardian_file_name: string;
  guardianbase64Image: any;
  base64Image: any;
  file_name: string;
  imgBlob: Blob;
  childimgBlob: Blob;
  motherimgBlob: Blob;
  fatherimgBlob: Blob;
  guardianimgBlob: Blob;
  branches: any;
  accordion_expanded = false;
  userid: any;
  fetchDaycareStepOne: any;
  isDataPresent: boolean;
  id;
  childimg: any;
  motherimg: any;
  fatherimg: any;
  guardianimg: any;
  childioldmg: any;
  motheroldimg: any;
  fatheroldimg: any;
  guardianoldimg: any;
  modified_filename: string;
  isApproved = false;
  userType: string;
  constructor(
    public storage: Storage,
    public apiService: ApiService,
    public actionSheetController: ActionSheetController,
    private file: File,
    private camera: Camera,
    private cf: ChangeDetectorRef,
    public alertController: AlertController,
    public router: Router,
    public loadingController: LoadingController,
    public location: Location,
    public menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);

    this.dayCareRegForm = new FormGroup({
      branch_id: new FormControl('', [Validators.required]),
      program: new FormControl('', [
        Validators.pattern(/^[a-zA-z ]+$/),
      ]),
      timings: new FormControl('',),
      child_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\. ]+$/),
      ]),
      pet_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-z ]+$/),
      ]),
      gender: new FormControl('', [Validators.required]),
      d_o_b: new FormControl('', [Validators.required]),
     // dob_words: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      // figures: new FormControl('', [Validators.required]),
      mobile_1: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      emailid: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?!\_)(?!_*_$)([0-9A-Za-z]+\.)*[a-zA-Z0-9_+-]+@([\w+-]+\.)*[\w+-]+\.[a-zA-Z]{2,4}$/
        ),
      ]),
      address: new FormControl(''),
      landmark: new FormControl(''),
      mother_qua: new FormControl(''),
      mother_hobbies: new FormControl('', [
        Validators.pattern(/^[a-zA-z ,]+$/),
      ]),
      mother_work_place: new FormControl(''),
      mother_work_phone_num: new FormControl('', [
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      mother_work_mob_num: new FormControl('', [
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      father_qualification: new FormControl(''),
      father_hobbies: new FormControl('', [
        Validators.pattern(/^[a-zA-z ,]+$/),
      ]),
      father_work_place: new FormControl(''),
      father_work_phone_num: new FormControl('', [
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      father_work_mob_num: new FormControl('', [
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      sibling_name: new FormControl('', [Validators.pattern(/^[a-zA-Z\. ]+$/)]),
      sibling_age: new FormControl(''),
      sibling_school: new FormControl(''),
      emg_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\. ]+$/),
      ]),
      emg_contact_rel: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-z ]+$/),
      ]),
      emg_contact_phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      household_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\. ]+$/),
      ]),
      household_rel: new FormControl('', [ Validators.required,Validators.pattern(/^[a-zA-z ]+$/)]),
      household_num: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]{10}$/),
      ]),
    });
  }
  toggleForm(stepToActivate) {
    this.step = 'step-' + stepToActivate;
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      mode: 'ios',
      backdropDismiss: false,
    });
    return loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  segmentChanged(ev: any) {
    this.value = ev.detail.value;
    console.log('Segment changed', ev);
  }
  goToForm(value) {
    if (value === 'other_info') {
      if (this.branch_id.valid == false) {
        this.apiService.presentToast('Please select center', 2000);
      }
      if (this.program.valid == false) {
        this.apiService.presentToast('Please enter valid program', 2000);
      } else if (this.timings.valid == false) {
        this.apiService.presentToast('Please enter valid timing', 2000);
      } else if (this.child_name.valid == false) {
        this.apiService.presentToast('Please enter valid child name', 2000);
      } else if (this.pet_name.valid == false) {
        this.apiService.presentToast('Please enter valid pet name', 2000);
      } else if (this.gender.valid == false) {
        this.apiService.presentToast('Please select gender', 2000);
      } else if (this.d_o_b.valid == false) {
        this.apiService.presentToast('Please enter valid date of birth', 2000);
      }
      // } else if (this.dob_words.valid == false) {
      //   this.apiService.presentToast(
      //     'Please enter valid date of birth in words',
      //     2000
      //   );
      // }
      // else if (this.figures.valid == false) {
      //   this.apiService.presentToast(
      //     'Please enter valid date of birth in figures',
      //     2000
      //   );
      // }
      else if (this.mobile_1.valid == false) {
        this.apiService.presentToast(
          'Please enter valid residence phone number',
          2000
        );
      } else if (this.emailid.valid == false) {
        this.apiService.presentToast('Please enter valid email', 2000);
      } else if (this.address.valid == false) {
        this.apiService.presentToast('Please enter valid address', 2000);
      } else if (this.landmark.valid == false) {
        this.apiService.presentToast('Please enter valid landmark', 2000);
      } else if (this.mother_qua.valid == false) {
        this.apiService.presentToast(
          "Please enter valid mother's qualification",
          2000
        );
      } else if (this.mother_hobbies.valid == false) {
        this.apiService.presentToast(
          "Please enter valid mother's hobbies",
          2000
        );
      } else if (this.mother_work_place.valid == false) {
        this.apiService.presentToast(
          "Please enter valid mother's work place",
          2000
        );
      } else if (this.mother_work_phone_num.valid == false) {
        this.apiService.presentToast(
          "Please enter valid mother's work phone number",
          2000
        );
      } else if (this.mother_work_mob_num.valid == false) {
        this.apiService.presentToast(
          "Please enter valid mother's work mobile number",
          2000
        );
      } else if (this.father_qualification.valid == false) {
        this.apiService.presentToast(
          "Please enter valid father's qualification",
          2000
        );
      } else if (this.father_hobbies.valid == false) {
        this.apiService.presentToast(
          "Please enter valid father's hobbies",
          2000
        );
      } else if (this.father_work_place.valid == false) {
        this.apiService.presentToast(
          "Please enter valid father's work place",
          2000
        );
      } else if (this.father_work_phone_num.valid == false) {
        this.apiService.presentToast(
          "Please enter valid father's work phone number",
          2000
        );
      } else if (this.father_work_mob_num.valid == false) {
        this.apiService.presentToast(
          "Please enter valid father's work mobile number",
          2000
        );
      } else {
        this.value = value;

        this.isOtherInfoEnabled = true;
      }
    } else if (value === 'images') {
      if (this.sibling_name.valid == false) {
        this.apiService.presentToast('Please enter valid sibling name', 2000);
      } else if (this.sibling_age.valid == false) {
        this.apiService.presentToast("Please enter valid sibling's age", 2000);
      } else if (this.sibling_school.valid == false) {
        this.apiService.presentToast(
          "Please enter valid sibling's school",
          2000
        );
      } else if (this.emg_name.valid == false) {
        this.apiService.presentToast(
          "Please enter valid emergency contact's name",
          2000
        );
      } else if (this.emg_contact_rel.valid == false) {
        this.apiService.presentToast(
          "Please enter valid emergency contact's relation",
          2000
        );
      } else if (this.emg_contact_phone.valid == false) {
        this.apiService.presentToast(
          "Please enter valid emergency contact's phone number",
          2000
        );
      } else if (this.household_name.valid == false) {
        this.apiService.presentToast(
          "Please enter valid name of other member's of household ",
          2000
        );
      } else if (this.household_rel.valid == false) {
        this.apiService.presentToast(
          "Please enter valid relation of other member's of household",
          2000
        );
      } else if (this.household_num.valid == false) {
        this.apiService.presentToast(
          "Please enter valid number of other member's of household",
          2000
        );
      } else {
        this.isImagesEnabled = true;

        this.value = value;
      }
    }

    this.myContent.scrollToTop(700);
  }
  onSubmit(body) {
    this.presentLoading();
    console.log(body);
    console.log('body', body);
    const formData = new FormData();
    formData.append('branch_id', body['branch_id']);
    formData.append('program', body['program']);
    formData.append('timings', body['timings']);
    formData.append('child_name', body['child_name']);
    formData.append('pet_name', body['pet_name']);
    formData.append('gender', body['gender']);
    formData.append('d_o_b', body['d_o_b']);
    //formData.append('dob_words', body['dob_words']);
    formData.append('figures', '');
    formData.append('mobile_1', body['mobile_1']);
    formData.append('emailid', body['emailid']);
    if (body['address']) {
      var address = body['address'];
    } else {
      var address: any = '';
    }
    if (body['landmark']) {
      var landmark = body['landmark'];
    } else {
      var landmark: any = '';
    }
    if (body['mother_qua']) {
      var mother_qua = body['mother_qua'];
    } else {
      var mother_qua: any = '';
    }
    if (body['mother_hobbies']) {
      var mother_hobbies = body['mother_hobbies'];
    } else {
      var mother_hobbies: any = '';
    }
    if (body['mother_work_place']) {
      var mother_work_place = body['mother_work_place'];
    } else {
      var mother_work_place: any = '';
    }
    if (body['mother_work_phone_num']) {
      var mother_work_phone_num = body['mother_work_phone_num'];
    } else {
      var mother_work_phone_num: any = '';
    }
    if (body['mother_work_mob_num']) {
      var mother_work_mob_num = body['mother_work_mob_num'];
    } else {
      var mother_work_mob_num: any = '';
    }
    if (body['father_qualification']) {
      var father_qualification = body['father_qualification'];
    } else {
      var father_qualification: any = '';
    }
    if (body['father_hobbies']) {
      var father_hobbies = body['father_hobbies'];
    } else {
      var father_hobbies: any = '';
    }
    if (body['father_work_place']) {
      var father_work_place = body['father_work_place'];
    } else {
      var father_work_place: any = '';
    }
    if (body['father_work_phone_num']) {
      var father_work_phone_num = body['father_work_phone_num'];
    } else {
      var father_work_phone_num: any = '';
    }
    if (body['father_work_mob_num']) {
      var father_work_mob_num = body['father_work_mob_num'];
    } else {
      var father_work_mob_num: any = '';
    }
    if (body['sibling_name']) {
      var sibling_name = body['sibling_name'];
    } else {
      var sibling_name: any = '';
    }
    if (body['sibling_age']) {
      var sibling_age = body['sibling_age'];
    } else {
      var sibling_age: any = '';
    }
    if (body['sibling_school']) {
      var sibling_school = body['sibling_school'];
    } else {
      var sibling_school: any = '';
    }
    if (body['household_name']) {
      var household_name = body['household_name'];
    } else {
      var household_name: any = '';
    }
    if (body['household_rel']) {
      var household_rel = body['household_rel'];
    } else {
      var household_rel: any = '';
    }
    if (body['household_num']) {
      var household_num = body['household_num'];
    } else {
      var household_num: any = '';
    }
    formData.append('address', address);
    formData.append('landmark', landmark);
    formData.append('mother_qua', mother_qua);
    formData.append('mother_hobbies', mother_hobbies);
    formData.append('mother_work_place', mother_work_place);
    formData.append('mother_work_phone_num', mother_work_phone_num);
    formData.append('mother_work_mob_num', mother_work_mob_num);
    formData.append('father_qualification', father_qualification);
    formData.append('father_hobbies', father_hobbies);
    formData.append('father_work_place', father_work_place);
    formData.append('father_work_phone_num', father_work_phone_num);
    formData.append('father_work_mob_num', father_work_mob_num);

    formData.append('sibling_name', sibling_name);
    formData.append('sibling_age', sibling_age);
    formData.append('sibling_school', sibling_school);
    formData.append('emg_name', body['emg_name']);
    formData.append('emg_contact_rel', body['emg_contact_rel']);
    formData.append('emg_contact_phone', body['emg_contact_phone']);
    formData.append('household_name', household_name);
    formData.append('household_rel', household_rel);
    formData.append('household_num', household_num);

    if (this.isDataPresent) {
      formData.append('id', this.id);
      formData.append('userid', this.userid);
      formData.append('old_img[]', this.childioldmg);
      formData.append('old_img[]', this.motheroldimg);
      formData.append('old_img[]', this.fatheroldimg);
      formData.append('old_img[]', this.guardianoldimg);
      if (this.childimgBlob) {
        formData.append('image[]', this.childimgBlob, this.child_file_name);
      } else {
        formData.append('image[]', '');
      }

      if (this.motherimgBlob) {
        formData.append('image[]', this.motherimgBlob, this.mother_file_name);
      } else {
        formData.append('image[]', '');
      }

      if (this.fatherimgBlob) {
        formData.append('image[]', this.fatherimgBlob, this.father_file_name);
      } else {
        formData.append('image[]', '');
      }

      if (this.guardianimgBlob) {
        formData.append(
          'image[]',
          this.guardianimgBlob,
          this.guardian_file_name
        );
      } else {
        formData.append('image[]', '');
      }

      this.apiService.updateDaycareRegStep1(formData).subscribe(
        (data) => {
          console.log('data', data);
          this.loadingController.dismiss();
          this.presentAlert('Daycare registration updated successfully');
          console.log(data);
          this.childbase64Image = '';
          this.fatherbase64Image = '';
          this.motherbase64Image = '';
          this.guardianbase64Image = '';
          this.childimgBlob = null;
          this.fatherimgBlob = null;
          this.motherimgBlob = null;
          this.guardianimgBlob = null;
        },
        (err) => {
          console.log(err);
          this.loadingController.dismiss();
          // this.apiService.presentToast(err.error, 2000);
          this.apiService.presentToast("some fields are missing", 2000);

        }
      );
    } else {
      if (this.childimgBlob) {
        formData.append('image[]', this.childimgBlob, this.child_file_name);
      }
      if (this.motherimgBlob) {
        formData.append('image[]', this.motherimgBlob, this.mother_file_name);
      }
      if (this.fatherimgBlob) {
        formData.append('image[]', this.fatherimgBlob, this.father_file_name);
      }
      if (this.guardianimgBlob) {
        formData.append(
          'image[]',
          this.guardianimgBlob,
          this.guardian_file_name
        );
      }
      this.apiService.daycareRegistration(formData).subscribe(
        (data) => {
          console.log('data', data);
          this.loadingController.dismiss();
          this.presentAlert('Daycare registration submitted successfully');
          alert("Please Wait until your registration is approved. We will contact you")
          console.log(data);
          this.childbase64Image = '';
          this.fatherbase64Image = '';
          this.motherbase64Image = '';
          this.guardianbase64Image = '';
          this.childimgBlob = null;
          this.fatherimgBlob = null;
          this.motherimgBlob = null;
          this.guardianimgBlob = null;
        },
        (err) => {
          console.log(err);
          this.loadingController.dismiss();
          this.apiService.presentToast("some fields are missing", 2000);
          // this.apiService.presentToast(err.error, 2000);
        }
      );
    }
  }
  ionViewWillEnter() {
    if(this.menuCtrl.isEnabled){
      console.log('hi')
      this.menuCtrl.swipeGesture(false)
    }

    this.presentLoading().then(() => {
      this.storage.get('user').then((data) => {
        if (data) {
          this.isLoggedIn = true;

          var user = JSON.parse(data);
          this.userid = user.id;
          this.storage.get('userType').then((userType) => {
            if (userType == 'Daycare') {
              this.userType = 'Daycare';
              this.apiService.userDetails(user.id, userType).then((data) => {
                console.log('fetchDaycareStepOne', data.data);

                this.fetchDaycareStepOne = JSON.parse(data.data);
                if (this.fetchDaycareStepOne) {
                  if (
                    this.fetchDaycareStepOne.status == 'Active' &&
                    this.fetchDaycareStepOne.Approve_status == 'Active'
                  ) {
                    this.isApproved = true;
                  }

                  this.isDisabled = true;
                  this.id = this.fetchDaycareStepOne.id;
                  this.dayCareRegForm.patchValue({
                    branch_id: this.fetchDaycareStepOne.branch_id,
                    program: this.fetchDaycareStepOne.program,
                    timings: this.fetchDaycareStepOne.timings,
                    child_name: this.fetchDaycareStepOne.child_name,
                    pet_name: this.fetchDaycareStepOne.pet_name,
                    gender: this.fetchDaycareStepOne.gender,
                    d_o_b: new Date(this.fetchDaycareStepOne.dob).toISOString(),
                   // dob_words: this.fetchDaycareStepOne.dob_words,
                    // figures: this.fetchDaycareStepOne.figures,
                    mobile_1: this.fetchDaycareStepOne.home_phone,
                    emailid: this.fetchDaycareStepOne.emailid,
                    address: this.fetchDaycareStepOne.address,
                    landmark: this.fetchDaycareStepOne.landmark,
                    mother_qua: this.fetchDaycareStepOne.mother_qualification,
                    mother_hobbies: this.fetchDaycareStepOne.mother_hobbies,
                    mother_work_place:
                      this.fetchDaycareStepOne.mother_work_place,
                    mother_work_phone_num:
                      this.fetchDaycareStepOne.mother_work_phone,
                    mother_work_mob_num:
                      this.fetchDaycareStepOne.mother_mobile_number,
                    father_qualification:
                      this.fetchDaycareStepOne.father_qualifiaction,
                    father_hobbies: this.fetchDaycareStepOne.father_hobbies,
                    father_work_place:
                      this.fetchDaycareStepOne.father_work_place,
                    father_work_phone_num:
                      this.fetchDaycareStepOne.father_work_phone,
                    father_work_mob_num:
                      this.fetchDaycareStepOne.father_mobile_number,
                    sibling_name: this.fetchDaycareStepOne.child_name1,
                    sibling_age: this.fetchDaycareStepOne.child_age1,
                    sibling_school: this.fetchDaycareStepOne.child_school1,
                    emg_name: this.fetchDaycareStepOne.emg_name1,
                    emg_contact_rel: this.fetchDaycareStepOne.emg_relationship1,
                    emg_contact_phone: this.fetchDaycareStepOne.emg_mobile1,
                    household_name: this.fetchDaycareStepOne.other_name1,
                    household_rel: this.fetchDaycareStepOne.other_relationship1,
                    household_num: this.fetchDaycareStepOne.other_mobile1,
                  });
                  this.childimg = this.fetchDaycareStepOne.child_img;
                  this.motherimg = this.fetchDaycareStepOne.mother_img;
                  this.fatherimg = this.fetchDaycareStepOne.father_img;
                  this.guardianimg = this.fetchDaycareStepOne.guardian_img;
                  this.childioldmg = this.fetchDaycareStepOne.child_image;
                  this.motheroldimg = this.fetchDaycareStepOne.mother_image;
                  this.fatheroldimg = this.fetchDaycareStepOne.father_image;
                  this.guardianoldimg = this.fetchDaycareStepOne.guardian_image;
                  this.isDataPresent = true;
                  this.loadingController.dismiss();
                } else {
                  this.isDataPresent = false;
                  this.loadingController.dismiss();
                }
              });
            } else {
              this.isDataPresent = false;
              this.loadingController.dismiss();
            }
          });
        } else {
          this.loadingController.dismiss();
          this.isDataPresent = false;
          this.isLoggedIn = false;
          this.dayCareRegForm.reset();
        }
      });
      this.apiService.getBranches().then((data) => {
        this.branches = JSON.parse(data.data);
      });
    });
  }
  get branch_id() {
    return this.dayCareRegForm.get('branch_id');
  }
  get program() {
    return this.dayCareRegForm.get('program');
  }
  get timings() {
    return this.dayCareRegForm.get('timings');
  }
  get child_name() {
    return this.dayCareRegForm.get('child_name');
  }
  get pet_name() {
    return this.dayCareRegForm.get('pet_name');
  }
  get gender() {
    return this.dayCareRegForm.get('gender');
  }
  get d_o_b() {
    return this.dayCareRegForm.get('d_o_b');
  }
  // get dob_words() {
  //   return this.dayCareRegForm.get('dob_words');
  // }
  // get figures() {
  //   return this.dayCareRegForm.get('figures');
  // }
  get mobile_1() {
    return this.dayCareRegForm.get('mobile_1');
  }
  get emailid() {
    return this.dayCareRegForm.get('emailid');
  }
  get address() {
    return this.dayCareRegForm.get('address');
  }
  get landmark() {
    return this.dayCareRegForm.get('landmark');
  }
  get mother_qua() {
    return this.dayCareRegForm.get('mother_qua');
  }
  get mother_hobbies() {
    return this.dayCareRegForm.get('mother_hobbies');
  }
  get mother_work_place() {
    return this.dayCareRegForm.get('mother_work_place');
  }
  get mother_work_phone_num() {
    return this.dayCareRegForm.get('mother_work_phone_num');
  }
  get mother_work_mob_num() {
    return this.dayCareRegForm.get('mother_work_mob_num');
  }
  get father_qualification() {
    return this.dayCareRegForm.get('father_qualification');
  }
  get father_hobbies() {
    return this.dayCareRegForm.get('father_hobbies');
  }
  get father_work_place() {
    return this.dayCareRegForm.get('father_work_place');
  }
  get father_work_phone_num() {
    return this.dayCareRegForm.get('father_work_phone_num');
  }
  get father_work_mob_num() {
    return this.dayCareRegForm.get('father_work_mob_num');
  }
  get sibling_name() {
    return this.dayCareRegForm.get('sibling_name');
  }
  get sibling_age() {
    return this.dayCareRegForm.get('sibling_age');
  }
  get sibling_school() {
    return this.dayCareRegForm.get('sibling_school');
  }
  get emg_name() {
    return this.dayCareRegForm.get('emg_name');
  }
  get emg_contact_rel() {
    return this.dayCareRegForm.get('emg_contact_rel');
  }
  get emg_contact_phone() {
    return this.dayCareRegForm.get('emg_contact_phone');
  }
  get household_name() {
    return this.dayCareRegForm.get('household_name');
  }
  get household_rel() {
    return this.dayCareRegForm.get('household_rel');
  }
  get household_num() {
    return this.dayCareRegForm.get('household_num');
  }
  async presentActionSheet(type) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: 'camera-outline',
          handler: () => {
            if (type == 'child') {
              this.takePicture('child');
            } else if (type == 'mother') {
              this.takePicture('mother');
            } else if (type == 'father') {
              this.takePicture('father');
            } else if (type == 'guardian') {
              this.takePicture('guardian');
            }
          },
        },
        {
          text: 'Choose photo from Gallery',
          icon: 'images-outline',
          handler: () => {
            if (type == 'child') {
              this.openGallery('child');
            } else if (type == 'mother') {
              this.openGallery('mother');
            } else if (type == 'father') {
              this.openGallery('father');
            } else if (type == 'guardian') {
              this.openGallery('guardian');
            }
          },
        },
      ],
    });
    actionSheet.present();
  }
  takePicture(type) {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.file
          .resolveLocalFilesystemUrl(imageData)
          .then((entry: FileEntry) => {
            entry.file((file) => {
              console.log(file);
              if (type == 'child') {
                this.child_file_name = file.name;
                this.childbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              } else if (type == 'mother') {
                this.mother_file_name = file.name;
                this.motherbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              } else if (type == 'father') {
                this.father_file_name = file.name;
                this.fatherbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              } else if (type == 'guardian') {
                this.guardian_file_name = file.name;
                this.guardianbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              }

              this.cf.detectChanges();
              this.readFile(file, type);
            });
          });
      },
      (err) => {
        this.childbase64Image = null;
        this.motherbase64Image = null;
        this.fatherbase64Image = null;
        this.guardianbase64Image = null;
      }
    );
  }
  openGallery(type) {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.file
          .resolveLocalFilesystemUrl(imageData)
          .then((entry: FileEntry) => {
            entry.file((file) => {
              console.log(file);
              if (file.type == 'image/jpeg') {
                var filename = file.name;
                var file_ext = filename.split('.').slice(-1).join('.');
                var filename_wo_ext = filename
                  .split('.')
                  .slice(0, -1)
                  .join('.');
                this.modified_filename =
                  filename_wo_ext +
                  file.lastModified.toString() +
                  '.' +
                  file_ext;

                console.log('this.child_file_name', this.modified_filename);
              } else {
                this.modified_filename = file.name;
              }
              if (type == 'child') {
                this.child_file_name = this.modified_filename;

                this.childbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              } else if (type == 'mother') {
                this.mother_file_name = this.modified_filename;
                this.motherbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              } else if (type == 'father') {
                this.father_file_name = this.modified_filename;
                this.fatherbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              } else if (type == 'guardian') {
                this.guardian_file_name = this.modified_filename;
                this.guardianbase64Image = (<any>(
                  window
                )).Ionic.WebView.convertFileSrc(imageData);
              }
              this.cf.detectChanges();
              this.readFile(file, type);
            });
          });
      },
      (err) => {
        // Handle error
      }
    );
  }
  readFile(file: any, type) {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (type == 'child') {
        this.childimgBlob = new Blob([reader.result], {
          type: file.type,
        });
      } else if (type == 'mother') {
        this.motherimgBlob = new Blob([reader.result], {
          type: file.type,
        });
      } else if (type == 'father') {
        this.fatherimgBlob = new Blob([reader.result], {
          type: file.type,
        });
      } else if (type == 'guardian') {
        this.guardianimgBlob = new Blob([reader.result], {
          type: file.type,
        });
      }

      console.log('name', file.name);
    };
    reader.readAsArrayBuffer(file);
  }
  previousTab(value) {
    this.value = value;
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
            // this.router.navigate(['mobilelogin'])
            if (this.isLoggedIn) {
              if (this.userType == 'Daycare') {
                this.router.navigate(['childprofile']);
              } else {
                this.storage.set('type', 'login').then((_) => {
                  
                  this.router.navigate(['login']);
                });
              }
            } else {
              this.storage.set('type', 'login').then((_) => {
                this.router.navigate(['login']);
              });
            }
          },
        },
      ],
    });
    await alert.present();
  }
  toggle_accordion() {
    this.accordion_expanded = this.accordion_expanded === false;
  }
  goBack() {
    console.log(this.isLoggedIn,this.isApproved,this.userType)
    if (this.isLoggedIn) {
      if (this.isApproved) {
        this.router.navigate(['quicktour']);
      } else {
        if (this.userType == 'Daycare') {
          this.apiService.presentToast(
            'Please wait for your registration approval',
            3000
          );

        } else {
          this.router.navigate(['quicktour']);
        }
      }
    } else {
      this.router.navigate(['login']);
    }
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  doRefresh(event) {
    this.menuCtrl.enable(false);

    this.presentLoading().then(() => {
      this.storage.get('user').then((data) => {
        if (data) {
          this.isLoggedIn = true;

          var user = JSON.parse(data);
          this.userid = user.id;
          this.storage.get('userType').then((userType) => {
            console.log('userType')
            if (userType == 'Daycare') {
              this.apiService.userDetails(user.id, userType).then((data) => {
                event.target.complete();

                console.log('fetchDaycareStepOne', data.data);

                this.fetchDaycareStepOne = JSON.parse(data.data);
                if (this.fetchDaycareStepOne) {
                  if (
                    this.fetchDaycareStepOne.status == 'Active' &&
                    this.fetchDaycareStepOne.Approve_status == 'Active'
                  ) {
                    this.isApproved = true;
                  }

                  this.isDisabled = true;
                  this.id = this.fetchDaycareStepOne.id;
                  this.dayCareRegForm.patchValue({
                    branch_id: this.fetchDaycareStepOne.branch_id,
                    program: this.fetchDaycareStepOne.program,
                    timings: this.fetchDaycareStepOne.timings,
                    child_name: this.fetchDaycareStepOne.child_name,
                    pet_name: this.fetchDaycareStepOne.pet_name,
                    gender: this.fetchDaycareStepOne.gender,
                    d_o_b: new Date(this.fetchDaycareStepOne.dob).toISOString(),
                   // dob_words: this.fetchDaycareStepOne.dob_words,
                    // figures: this.fetchDaycareStepOne.figures,
                    mobile_1: this.fetchDaycareStepOne.home_phone,
                    emailid: this.fetchDaycareStepOne.emailid,
                    address: this.fetchDaycareStepOne.address,
                    landmark: this.fetchDaycareStepOne.landmark,
                    mother_qua: this.fetchDaycareStepOne.mother_qualification,
                    mother_hobbies: this.fetchDaycareStepOne.mother_hobbies,
                    mother_work_place:
                      this.fetchDaycareStepOne.mother_work_place,
                    mother_work_phone_num:
                      this.fetchDaycareStepOne.mother_work_phone,
                    mother_work_mob_num:
                      this.fetchDaycareStepOne.mother_mobile_number,
                    father_qualification:
                      this.fetchDaycareStepOne.father_qualifiaction,
                    father_hobbies: this.fetchDaycareStepOne.father_hobbies,
                    father_work_place:
                      this.fetchDaycareStepOne.father_work_place,
                    father_work_phone_num:
                      this.fetchDaycareStepOne.father_work_phone,
                    father_work_mob_num:
                      this.fetchDaycareStepOne.father_mobile_number,
                    sibling_name: this.fetchDaycareStepOne.child_name1,
                    sibling_age: this.fetchDaycareStepOne.child_age1,
                    sibling_school: this.fetchDaycareStepOne.child_school1,
                    emg_name: this.fetchDaycareStepOne.emg_name1,
                    emg_contact_rel: this.fetchDaycareStepOne.emg_relationship1,
                    emg_contact_phone: this.fetchDaycareStepOne.emg_mobile1,
                    household_name: this.fetchDaycareStepOne.other_name1,
                    household_rel: this.fetchDaycareStepOne.other_relationship1,
                    household_num: this.fetchDaycareStepOne.other_mobile1,
                  });
                  this.childimg = this.fetchDaycareStepOne.child_img;
                  this.motherimg = this.fetchDaycareStepOne.mother_img;
                  this.fatherimg = this.fetchDaycareStepOne.father_img;
                  this.guardianimg = this.fetchDaycareStepOne.guardian_img;
                  this.childioldmg = this.fetchDaycareStepOne.child_image;
                  this.motheroldimg = this.fetchDaycareStepOne.mother_image;
                  this.fatheroldimg = this.fetchDaycareStepOne.father_image;
                  this.guardianoldimg = this.fetchDaycareStepOne.guardian_image;
                  this.isDataPresent = true;
                  this.loadingController.dismiss();
                } else {
                  this.isDataPresent = false;
                  this.loadingController.dismiss();
                }
              });
            } else {
              this.isDataPresent = false;
              this.loadingController.dismiss();
            }
          });
        } else {
          event.target.complete();
          this.loadingController.dismiss();
          this.isDataPresent = false;
          this.isLoggedIn = false;
          this.dayCareRegForm.reset();
        }
      });
      event.target.complete();
      this.apiService.getBranches().then((data) => {
        this.branches = JSON.parse(data.data);
      });
    });
  }
}
