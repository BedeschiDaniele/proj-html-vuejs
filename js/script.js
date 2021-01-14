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
      webSiteLogo:'img/dark-logo.png',
      imgFooter: [
        {
          img: "img/man2.jpg",
          alt: "man2.jpg"
        },
        {
          img: "img/artist-event-03-250x300.jpg",
          alt: "artist-event-03-250x300"
        },
        {
          img: "img/artist-event-02-250x300.jpg",
          alt:"artist-event-03-250x300"
        }
      ],
      navbarExplore:[
        {
        menu: 'Start here',
        },
        {
        menu: 'Success story',
        },
        {
        menu: 'Blog',
        },
        {
        menu: 'Courses',
        },
        {
        menu: 'Contact us',
        }
      ],
      navbarInformation:[
        {
        menu: 'Membership',
        },
        {
        menu: 'Purchase guide',
        },
        {
        menu: 'Privacy policy',
        },
        {
        menu: 'Terms of services',
        }
      ],
      iconsFooter: [
        {
          icon: "fab fa-facebook-square",
        },
        {
          icon: "fab fa-twitter",
        },
        {
          icon: "fab fa-instagram",
        },
        {
          icon: "fab fa-linkedin",
        },
      ]
   }
  }
);
