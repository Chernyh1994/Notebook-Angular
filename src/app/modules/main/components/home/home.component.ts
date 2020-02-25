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
      title: 'Java Script',
      picture: 'https://i.ya-webdesign.com/images/vector-javascript-14.png',
    },
    {
      title: 'Express',
      picture: 'https://expressjs.com/images/express-facebook-share.png'
    },
    {
      title: 'CSS 3',
      picture: 'https://browsergameita.com/images/css3-logo-png-3.png'
    },
    {
      title: 'HTM 5',
      picture: 'https://pngimage.net/wp-content/uploads/2020/02/html-css-php-logo-png-1.png'
    },
    {
      title: 'React.js',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png'
    },
    {
      title: 'Node.js',
      picture: 'https://destatic.blob.core.windows.net/images/nodejs-logo.png'
    },
    {
      title: 'Angluar 2+',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
    },
    {
      title: 'Nest.js',
      picture: 'https://miro.medium.com/max/600/0*B_aUE6i5uESa3rH0.'
    },
    {
      title: 'TypeScript',
      picture: 'https://cdn.auth0.com/blog/logos/Full_TypeScript_Logo.png'
    },
  ];

  ngOnInit(): void {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages(): void {
    this.limit += 5;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

}
