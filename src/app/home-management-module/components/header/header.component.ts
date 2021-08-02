import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
    
  }
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 100;
  }
  goToServices(){
    this.router.navigate(['/', 'services']);
    
  }

  goToAboutUs(){
    this.router.navigate(['/', 'aboutus']);
    // window.scroll({ 
    //   top: 2019, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });
  }

  goToHome(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    this.router.navigate(['/', 'home']);
    // window.scroll({ 
    //   top: 0, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });
  }
  goContactus(){
    this.router.navigate(['/', 'contactus']);
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
