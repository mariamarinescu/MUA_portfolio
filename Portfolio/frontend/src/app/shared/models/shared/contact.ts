import { FormControl } from "@angular/forms";

export interface IContactComponent {
    name: FormControl;
    email: FormControl;
    mobile: FormControl;
    message: FormControl;
    
    onSubmit(): void
  }

