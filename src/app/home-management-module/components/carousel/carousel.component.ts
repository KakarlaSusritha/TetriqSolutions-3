import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  imageUrl:any='https://tetriqsolutions.com';

  ngOnInit() {
  }
  // tslint:disable-next-line: member-ordering
  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123456'.split('').map((x, i) => {
     const num = i+1;
     //console.log("num",num);
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `${this.imageUrl}/assets/main/images/${num}.jpg`,
      title: `${num}`
    };
  });

  // click(i) {
  //   alert(`${i}`);
  // }


}
