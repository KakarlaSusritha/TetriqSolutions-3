import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToServices(){
    this.router.navigate(['/', 'home']);
    // window.scroll({ 
    //   top: 684, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });
  }

  goToAboutUs(){
    this.router.navigate(['/', 'home']);
    // window.scroll({ 
    //   top: 2019, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });
  }

  goToHome(){
    this.router.navigate(['/', 'home']);
    // window.scroll({ 
    //   top: 0, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });
  }
  goContactus(){
    this.router.navigate(['/', 'home']);
    // window.scroll({ 
    //   top: 2737, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });
  }
  goToCareer() {
    this.router.navigate(['/', 'career']);
  }
  navigation(name, i){

   if(name == 'Services') {
   this.goToServices();
   }
   if( name == 'Contact us') {
    this.goContactus();
  }
   if(name == 'About us') {
   this.goToAboutUs();
   } 
   if (name == 'Careers') {
     this.goToCareer();
   }
    if (name == 'Home') {
   this.goToHome();
   }
   

  }
}
