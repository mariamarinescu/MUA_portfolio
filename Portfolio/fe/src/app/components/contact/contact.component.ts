import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { IContactComponent } from '../../shared/models/shared/contact';
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

function nameValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = /([A-Z])/g.test(control.value);
  return valid ? null : { invalidName: { valid: false, value: control.value } };
}

function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = /^\d{10}/.test(control.value);
  return valid ? null : { invalidNumber: { valid: false, value: control.value } };
}

// @HostListener('click', [''])
//TODO: implement here admin login/logout menu button and secure it ("https://app.pluralsight.com/player?course=angular-security-json-web-tokens&author=paul-sheriff&name=d611f63b-f394-4663-9bbc-46f3f089a350&clip=2&mode=live")
//TODO: redirect to Login page if user couldn't login and redirect back to requested route if succeded("https://app.pluralsight.com/player?course=angular-security-json-web-tokens&author=paul-sheriff&name=d611f63b-f394-4663-9bbc-46f3f089a350&clip=8&mode=live")



@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.sass"]
})

export class ContactComponent implements IContactComponent {

  name: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  mobile: FormControl = new FormControl('');
  message: FormControl = new FormControl('');


  constructor(private http: HttpClient,
    private router: Router,
    private translate: TranslateService) { 
      translate.addLangs(['en', 'ro']);
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        console.log("onLangChange", event.translations)
      });
     translate.onDefaultLangChange.subscribe((event: LangChangeEvent)  => {
        console.log("onDefaultLangChange", event.translations)
      });
      translate.setDefaultLang('ro');
}


  onSubmit(): void {
    const modalSuccess = document.getElementById("modal-success");
    const modalFailure = document.getElementById("modal-failure");
    const closeModal = document.getElementById("close-modal");
    console.log(this.name.value, this.mobile.value, this.message.value, this.name.value)
    let sendEmail = firebase.functions().httpsCallable('sendEmail');
    sendEmail({ userName: this.name.value,userEmail: this.email.value,userMobile: this.mobile.value,userMessage: this.message.value})
    .then(() => {
      // console.log(this.contactForm.value);
      modalSuccess.style.display = "block";
      closeModal.onclick = () => {
        modalSuccess.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalSuccess) {
          modalSuccess.style.display = "none";
        }
      };
      console.log(`Email sent!`);
      return true;
    }).catch((error: any) => {
      modalFailure.style.display = "block";
      closeModal.onclick = () => {
        modalFailure.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalFailure) {
          modalFailure.style.display = "none";
        }
      };
      console.error(`An error occured: ${error} sending the email`);
      return false;
    })
  }
}


































    // this.name = new FormControl(''),
    // this.email = new FormControl(''),
    // this.phNumber = new FormControl(''),
    // this.message = new FormControl('')
    // this.contactForm = formBuilder.group({
    //   name: this.name,
    //   number: this.phNumber,
    //   email: this.email,
    //   message: this.message    
    // })

    // console.log(this.contactForm.value);
    // this.contactForm = this.createFormGroup();






  // ngOnInit(): void {
    // $('#name, #number, #message').change(function () {
    //   if ($("#email").val().length && $("#number").val().length && $("#message").val().length !== null) {
    //     $("#submit").prop('disabled', false);
    //   } else {
    //     $("#submit").prop('disabled', true);
    //   }
    // });
    // let name: FormControl;
    // let email: FormControl;
    // let phNumber: FormControl;
    // let message: FormControl;
    


  // }









  // createFormGroup() {
  //   return new FormGroup ({
  //     name: new FormControl('',[Validators.required,nameValidator]),
  //     email: new FormControl(''),
  //     mobile: new FormControl('',[Validators.required, phoneNumberValidator]),
  //     message: new FormControl('',[Validators.required])
  //   }) 



  // createFormGroup() {
  //   return new FormGroup({
  //     name: new FormControl(),
  //     mobile: new FormControl(),
  //     message: new FormControl()
  //   })
  // }
  // getName() {
  //   return this.contactForm.get('name').value

  // }
  // getMobile() {
  //   return this.contactForm.get('mobile').value

  // }
  // getMessage() {
  //    return this.contactForm.get('message').value

  // }
  // private userMessage = this.message;
  // private userMobile = this.getMobile();
  // private userName =this.getName();




  //  async onSubmit() {
  //     const uri: string ='https://script.google.com/macros/s/AKfycbz9RUgjLP_S8DqQDuC59zjeyYu3LIYYaFXug5Ir/exec?Mesaj=' + this.message.value + '&Nume+si+prenume=' + this.name.value + '&Nr.+de+telefon=' + this.mobile.value;
  //     let encoded = encodeURI(uri);
  //     // console.log(uri)
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("POST", encoded);
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         'Content-Type':  'text/plain;charset=utf-8'
  //       }),
  //       method: RequestMethod.Post
  //     };
  //     console.log(encoded)
  //    return await this.http.post(encoded, httpOptions)
  //    .subscribe(
  //      error => console.log(error)
  //    )



  // const options = new BaseRequestOptions();
  // const req = new Request(options.merge({
  // method: RequestMethod.Post,
  // url: encoded
  // }))




  // revert() {
  //   this.contactForm.reset();
  // }



  // save(contactForm: NgForm) {
  //     console.log(contactForm.form);
  //     console.log("Saved: " + JSON.stringify(this.contactForm.value));
  //   }


//   method="POST" 
// action="https://script.google.com/macros/s/AKfycbz9RUgjLP_S8DqQDuC59zjeyYu3LIYYaFXug5Ir/exec"
// [formGroup] = "contactForm"
  // save(contactForm: NgForm) {
  //   console.log(contactForm.form);
  //   console.log("Saved: " + JSON.stringify(this.contactForm.value));
  // }
//  addClass() {
//     document.body.classList.add("sent");
//   }


//   document.addEventListener("click", function(){
//     document.getElementById("sendLetter").innerHTML})
// //   sendLetter.addEventListener("click", addClass
// //   ))
// // }
