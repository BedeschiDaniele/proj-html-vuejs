var app = new Vue (
  {
    el: '.root',
    data: {
      indeximg: 0,
      navbar:[
        {
        menu: 'Home ',
        arrow: 'fas fa-chevron-down',
        },
        {
        menu: 'Pages ',
        arrow: 'fas fa-chevron-down',
        },
        {
        menu: 'Courses ',
        arrow: '<i class="fas fa-chevron-down"></i>',
        },
        {
        menu: 'Features ',
        arrow: 'fas fa-chevron-down',
        },
        {
        menu: 'Blog ',
        arrow: 'fas fa-chevron-down',
        },
        {
        menu: 'Shop ',
        arrow: 'fas fa-chevron-down',
        }
      ],
      icons: [
        {
          icon: "fab fa-twitter",
        },
        {
          icon: "fab fa-facebook-f",
        },
        {
          icon: "fab fa-instagram",
        },
        {
          icon: "fab fa-linkedin",
        },
      ],
      webSiteLogo:'img/dark-logo.png'
   },
   methods : {
     nextImg: function () {
     },
     prevImg: function () {
     }
   }
  }
);
