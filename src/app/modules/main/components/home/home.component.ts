import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
   }

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
    resize: true,
    initLayout: true,
    fitWidth: true,
  };

  masonryImages;
  limit = 5;
  dummyPictures = [
    {
      picture: 'https://pngimage.net/wp-content/uploads/2018/06/logo-js-png-9.png',
    },
    {
      picture: 'https://expressjs.com/images/express-facebook-share.png'
    },
    {
      picture: 'https://browsergameita.com/images/css3-logo-png-3.png'
    },
    {
      picture: 'https://pngimage.net/wp-content/uploads/2020/02/html-css-php-logo-png-1.png'
    },
    {
      picture: 'https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png'
    },
    {
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
    },
    {
      picture: 'https://cdn-images-1.medium.com/max/1600/1*VKY-Ldkt-iHobItql7G_5w.png'
    },
    {
      picture: 'https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png'
    },
    {
      picture: 'https://cdn.auth0.com/blog/logos/Full_TypeScript_Logo.png'
    },
  ];

  ngOnInit() {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 5;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

}
