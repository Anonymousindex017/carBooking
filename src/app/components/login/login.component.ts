import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // useForm: FormGroup = new FormGroup(
  //   {
  //     useeName: new FormControl(''),
  //     password: new FormControl('')
  //   }
  // )
  userName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  rout = inject(this.router);
  
onlogin(){
  if(this.userName.value == "user" && this.password.value== "123456"){
    alert("Login Success");
    this.rout.nevigateByUrl(['/layout/dashboard']);
  }
  else{
    alert("Login Failed");
  }
}

}
