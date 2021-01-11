import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3500,
      },
    });
  }
}
