import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  formLogin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onClickPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    let value = this.formLogin.value
    if(value.username === 'admin' && value.password === 'admin'){
      this.router.navigateByUrl('/home');
    }
  }
}
