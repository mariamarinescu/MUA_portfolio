import { AbstractControlOptions } from "@angular/forms";


export interface ILoginComponent {
    userEmail: AbstractControlOptions;
    userPassword: AbstractControlOptions;
  
    onSubmit(userEmail:string, userPassword:string):Promise<any>;
    ngOnInit():void
  }
