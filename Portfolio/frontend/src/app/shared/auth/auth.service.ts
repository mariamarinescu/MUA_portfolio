

import { Injectable, NgZone } from '@angular/core';
import { User } from "../../shared/models/user.model";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { IAuthService } from '../models/shared/auth-service';
import { Error } from '../models/shared/error';


@Injectable({
  providedIn: 'root'
})


export class AuthService implements IAuthService{
  userData: any;
  NgZone: NgZone;
  user;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        this.user = user.email;
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
    
  };
currentUSerEmail() {
return this.user;
}


SignIn(email:string, password:string): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.ngZone.run(() => {
            this.router.navigate(['admin/meniu']);
          })
        }).catch((error: Error) => {
          if(error.message === "permission-denied") {
            alert('Email-ul scris gresit sau poate parola. Mai incerca odata! Sau poate nu esti tu adminul acestei pagini si aici este eroarea.')
          } else if(error.message === "internal" || error.message === "unknown" || error.message === "canceled") {
            alert('Ne pare rau, pentru moment acest serviciu este indisponibil. Incerca mai tarziu!')
          }
          console.error(`An error occurred trying to sign in:`)
          console.error(error.message);
        });
      },500);
    });
  }
  
  




  ForgotPassword(passwordResetEmail: string ): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        alert(`Parola a fost resetata. Un email a fost trimis la urmatoarea adresa de email : ${passwordResetEmail} .Verifica inbox sau spam folder.`);
      }).catch((error: Error) => {
        if(error.message === "permission-denied") {
          alert('Email-ul scris gresit sau poate parola. Mai incerca odata!')
        } else if(error.message === "internal" || error.message === "unknown" || error.message === "canceled") {
          alert('Ne pare rau, pentru moment acest serviciu este indisponibil. Incerca mai tarziu!')
        }
        console.error('Error occured while trying to perform password recovery. Please try again! Error:');
        console.error(error);
      })
  }

  SignOut(): Promise<void>  {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/pagina-principala']);
    }).catch((error: Error) => {
      console.error(`An error occurred trying to sign-out: ${error} Please try again!`);
      alert('A aparut o eroare! Mai incerca odata!');
    })
  }

 get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ? true : false);
  }
}










  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData = {
  //     uid: user.uid,
  //     email: user.email
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }































// import { Injectable, NgZone } from "@angular/core";
// import { Router } from "@angular/router";
// import { auth } from "firebase/app";
// import { AngularFireAuth } from "@angular/fire/auth";
// import { User } from "firebase";

// @Injectable({
//   providedIn: "root"
// })
// export class AuthService {
// user: User;
//   constructor(
//     private afAuth: AngularFireAuth,
//     public router: Router
//     // public ngZone: NgZone
//   ) { 
//     this.afAuth.authState.subscribe(user => {
//       if (user) {
//         this.user = user;
//         localStorage.setItem("user", JSON.stringify(this.user));
//         // JSON.parse(localStorage.getItem("user"));
//       } else {
//         localStorage.setItem("user", null);
//         // JSON.parse(localStorage.getItem("user"));
//       }
//     });
//   }

//   async login(email: string, password: string) {

//     try {
//       await this.afAuth.auth.signInWithEmailAndPassword(email, password);
//       this.router.navigate(['admin/meniu']);
//     } catch (e) {
//       alert(`Error logging in - ${e.message}!`)
//     }
//   }

//   async logout() {
//     await this.afAuth.auth.signOut();
//     localStorage.removeItem('user');
//     this.router.navigate(['home'])
//   }


//   get isLoggedIn(): boolean {
//     const  user  =  JSON.parse(localStorage.getItem('user'));
//     return  user  !==  null;
// }




















  // login(email: string, password: string) {
  //   return this.afAuth.auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(result => {
  //       this.ngZone.run(() => this.router.navigate(["admin/meniu"]));
  //     })
  //     .catch(error => {
  //       console.error(error.message);
  //     });
  // }
  // forgotPassword(passwordResetEmail) {
  //   return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  //   .then(() => {
  //     window.alert('Password reset email sent, check your inbox.');
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }
  // logout() {
  //   return this.afAuth.auth.signOut().then(() => {
  //     localStorage.removeItem("user");
  //     this.router.navigate(["admin/login"]);
  //   });
  //   this.router.navigate(["admin/login"]);
  // }
  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   return user !== null ? true : false;
  // }












  //   const  user  =  JSON.parse(localStorage.getItem('user'));
  //  if(user){
  //    return true;
  //  } else {
  //    return false;
  //  }

  //    isLoggedIn() {
  //     return this.afAuth.authState.pipe(first()).toPromise()
  // }
  // async checkIfIsLoggedIn() {
  //   const checkUser = await this.isLoggedIn()
  //   if (checkUser) {
  //     return true;
  //   }
  //     return false;
  // }

  // get isNotLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user == null;
  // }

