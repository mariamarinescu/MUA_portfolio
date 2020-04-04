
import { NgZone } from '@angular/core';

export interface IAuthService {
    userData: any;
    NgZone: NgZone;
  
    SignIn(email: string, password: string): void;
    ForgotPassword(passwordResetEmail: string ): Promise<void>;
    SignOut(): Promise<void>;
    readonly isLoggedIn: boolean ;
  }