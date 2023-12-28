// Service worker logic goes here

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('maniraj_ca-1').then((cache) => {
        return cache.addAll([
            '/',
            './index.html',
            './trial.html',
            './about.html',
            './contact.html',
            './portfolio.html',
            './assets/css/contact.css',
            './assets/css/index.css',
            './assets/css/about.css',
            './assets/css/style.css',
            './assets/css/portfolio.css',
            './assets/js/about.js',
            './assets/js/index.js',
            './assets/js/main.js',
            './assets/js/contact.js',
            './assets/js/con.php',
            './assets/js/portfolio.js',
            './assets/medias/Maniraj_G_Parthasarathy-Resume.pdf',
            './assets/medias/img/Maniraj_UIX.jpg',
            './assets/medias/img/VectorLineMe.svg',
            './assets/medias/img/mockups/thumbnail/Jagamart.jpg',
            './assets/medias/img/mockups/thumbnail/TheOrdinary.jpg',
            './assets/medias/img/mockups/thumbnail/ManirajBrandBook.jpg',
            './assets/medias/img/mockups/thumbnail/PluckyCover.jpg',
            './assets/medias/img/mockups/thumbnail/AdvancedIcon.jpg',
            './assets/medias/img/mockups/thumbnail/MusicMastro.jpg',
            './assets/medias/img/mockups/thumbnail/ApexConstruction.jpg',
            './assets/medias/img/ManirajGP.png',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study8.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study16.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study17.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study9.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study15.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study14.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study10.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study11.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study13.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study12.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study23.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study22.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study2.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study20.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study21.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study3.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study7.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study25.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study19.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study18.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study24.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study6.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study4.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study26.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study27.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study5.jpg',
            './assets/medias/img/portfolio/case_study/the_ordinary_app/TheOrdinary_MobileApp_UI-UX_Case_Study.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines4.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines5.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines7.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines6.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines13.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines2.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines3.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines12.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines10.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines11.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines8.jpg',
            './assets/medias/img/portfolio/graphic-design/personal-brandbook/ManirajDesign_Brand-Guidelines9.jpg',
            './assets/medias/img/Artboard-1.png',
            './assets/medias/icons/Circle_icon.svg',
            './assets/medias/icons/photoshop_5611079.png',
            './assets/medias/icons/Artboard 1@0.5x.webp',
            './assets/medias/icons/personalbrand/ManirajName.svg',
            './assets/medias/icons/personalbrand/ManirajLogo.svg',
            './assets/medias/icons/personalbrand/ManirajLogo-WhiteTypo.svg',
            './assets/medias/icons/personalbrand/Manirajicon.svg',
            './assets/medias/icons/photoshop_5968520.png',
            './assets/medias/icons/illustrator_5611037.png',
            './assets/medias/icons/portfolio.svg',
            './assets/medias/icons/after-effects_5968428.png',
            './assets/medias/icons/xd_5611129.png',
            './assets/medias/icons/indesign_5611049.png',
            './assets/medias/icons/figma_5968705.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  