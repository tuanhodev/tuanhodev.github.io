
function social() {
  return {
    brands: [
      { key: `<img class="w-8 h-8" src="assets/images/brands/twitter.svg">` },
      { key: `<img class="w-8 h-8" src="assets/images/brands/github.svg">` },
      { key: `<img class="w-8 h-8" src="assets/images/brands/discord.svg">` },
    ]
  }
}

function cardsData() {
  return {
    cards: [
      { key: 'Php', class: 'is-php',
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logophp.svg">
        `
      },
      { key: 'Javascript', class: 'is-javascript', 
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logojavascript.svg">
        `
      },
      { key: 'Vim', class: 'is-vim', 
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logovim.png">
        `
      },
      { key: 'Vuejs', class: 'is-vuejs', 
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logovuejs.png">
        `
      },
      { key: 'Laravel', class: 'is-laravel',
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logolaravel.svg">
        `
      },
      { key: 'Alpinejs', class: 'is-alpinejs', 
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logoalpinejs.svg">
        `
      },
      { key: 'Bootstrap', class: 'is-bootstrap', 
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logobootstrap.svg">
        `
      },
      { key: 'Tailwindcss', class: 'is-tailwindcss',
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logotailwindcss.svg">
        `
      },
      /**
      { key: 'Gimp', class: 'is-gimp', 
        logo: `
          <img class="w-full h-full image-in-card" src="assets/images/brands/logogimp.svg">
        `
      },
      **/
    ]
  }
}

function cardsData50100() {
  return {
    cards: [
      { key: 'Vim', class: 'bg-teal-500', title: 'Vim là gì ?',
        logo: 'assets/images/brands/logovim.png',
        text: `
          Vim là một bản sao, với một số bổ sung, của trình soạn thảo vi của Bill Joy cho Unix.
          Nó được viết bởi Bram Moolenaar dựa trên mã nguồn của một port 
          của Stevie editor lên Amiga và phát hành lần đầu vào năm 1991...
        `
      },
      { key: 'Laravel', class: 'bg-orange-300', title: 'Laravel là gì ?',
        logo:'assets/images/brands/logolaravel.svg',
        text: `
          Anh-Laravel là một khung web PHP mã nguồn mở, miễn phí, được tạo bởi Taylor Otwell
          và dành cho việc phát triển các ứng dụng web theo mô hình kiến trúc của bộ điều khiển xem view mô hình và dựa trên Symfony...
        `
      },
      { key: 'Laravel', class: 'bg-indigo-300', title: 'So sánh một ứng dụng đơn giản trong Vue.js và Alpine.js',
        logo: 'assets/images/brands/logoalpinejs.svg',
        text: `
          Vue.js là một trong những khung Javascript phổ biến nhất trên thế giới hiện tại, 
          được phát hành lần đầu vào năm 2014 và với phiên bản 3. 
          Alpine hoàn toàn không cần xây dựng(buld)...
        `
      },
    ]
  }
}

function headerModuleData() {
  return {
    headerModuleOne: {
      title: "Vài thành phần được xây dựng bằng Tailwindcss", 
      description:
      `
        Tailwindcss tạo sự thoải mái trong khi viết mã, cung cấp cho bạn những tiện ích cấp thấp. 
        <br />
        Giúp ta kiểm soát mã và không phải phụ thuộc vào các khung css.
      `,
    },
    headerModuleTwo: {
      title: 'Thành phần kết hợp Tailwindcss && Alpinejs', 
      description: 
      `
        Tương tự như Tailwindcss làm được với Css
        <br/>
        Alpine rất nhẹ, với chỉ 3,4kb bạn sẽ thấy như đang ở nhà.
      `,
    },
  }
}

function topHeaderData() {
  return {
    topHeader: `
      <!-- background left right on top header -->
      <div 
        class="bg-top-panner-right absolute top-0 right-0 w-56 h-56 mr-6 lg:w-96 lg:h-96 lg:mr-16 mt-10 lg:mt-32 opacity-25">
        <img class="w-full h-full" src="assets/images/panner/top-panner-bg-right.svg" alt="">
      </div>
      <div 
        class="bg-top-panner-left absolute bottom-0 left-0 w-72 h-72
        lg:w-96 lg:h-96 ml-6 lg:ml-12 mt-20 opacity-25">
        <img class="w-full h-full" src="assets/images/panner/top-panner-bg-left.svg" alt="">
      </div>
      <!-- end background left right on top header -->

      <!-- Brand left on top header -->
      <div class="absolute inset-y-auto inset-x-0 w-full">
        <div class="w-full flex justify-between py-4 px-6 lg:px-12">

          <div class="brand w-1/2 lg:w-1/4 flex justify-start items-center
            text-themeOnPrimary uppercase font-bold text-lg"
            >
            <div class="avatar w-10 h-10 object-cover mr-3">
              <img class="w-full h-full rounded-full" src="assets/images/avatar.png" />
            </div>
            <p class="hidden lg:flex title-transform cursor-default">Tuấn Hồ Dev</p>
            <p class="lg:hidden title-transform cursor-default">THD</p>
          </div>
          
          <nav class="w-full space-x-3 flex justify-end">
            <a href="/" 
              class="hidden lg:flex btn flex px-4 py-1 items-center rounded-full text-lg
              font-medium text-themeOnPrimary hover:bg-themeHoverSecondary"
              ><img class="w-4 h-4 mr-1" src="assets/icons/dark/home.svg">Home
            </a>
            <a href="/pages/about"
              class="btn flex px-4 py-1 items-center rounded-full text-lg font-medium 
              text-themeOnPrimary hover:bg-themeHoverSecondary"
              ><img class="w-4 h-4 mr-1" src="assets/icons/dark/briefcase.svg">About
            </a>
          </nav>

        </div>
      </div>

      <!-- user portfolio -->
      <div class="w-full h-full text-themeOnPrimary text-lg px-6 lg:pb-12 lg:px-12 
        flex flex-col lg:flex-row justify-center items-center">

        <div class="mb-6 box-user w-full lg:w-2/5 flex justify-center lg:justify-end pr-6">
          <div class="w-48 h-48 lg:w-64 lg:h-64 flex justify-center items-center p-8 lg:p-16 z-50"
            style="
              background: url(assets/images/panner/bg-avatar.svg);
              background-size: contain;
              background-repeat: no-repeat;
            ">
            <div class="avatar-user rounded-full shadow-md bg-white hover:bg-themePrimary p-1"
              ><img class="w-full h-full rounded-full" src="assets/images/avatar.png" />
            </div>
          </div>
        </div>

        <div
          x-data="modalUserData()"
          @keydown.escape="modalUser()"
          class="z-50 w-full lg:pl-6 text-center lg:text-left">
          <p class="text-xl break-words">Tôi là một nhà phát triển web</p>
          <h2 class="text-4xl tex-bold uppercase">Php Full stack</h2> 
          <p class="text-xl break-words">Text editor yêu thích của tôi là Vim</p>
          <p class="text-xl break-words">Tôi đang thấy thoải mái cùng</p>
          <p class="text-xl break-words uppercase">PHP &rarr; Laravel  
          <br/>
          JAVASCRIPT &rarr; Vuejs &rarr; Tailwindcss</p>

          <div 
            @click="modalUser()"
            class="btn bg-themeSecondary text-center text-themeOnPrimary font-medium
            px-4 py-1 w-1/4 mt-8 lg:mx-0 mx-auto rounded-full flex items-center justify-center">
            <p class="hidden lg:flex"> Gọi Cho Tôi </p>
            <span class="material-icons text-md lg:hidden">call</span>
          </div>

          <template x-if="isModal"
            @click.away="isModal = false">
            <div 
              x-transition:enter="modal-enter"
              x-transition:enter-start="modal-enter-start"
              x-transition:enter-end="modal-enter-end"
              x-transition:leave="modal-leave"
              x-transition:leave-start="modal-leave-start"
              x-transition:leave-end="modal-leave-end"
              class="overflow-hidden bg-white fixed inset-y-0 inset-x-0 w-full h-screen flex justify-center lg:p-12 modal">
              <div @click="isModal = false" class="absolute inset-x-0 inset-y-0 w-full h-full bg-black-25"></div>

              <div class="z-50 bg-gray-300 w-full lg:w-1/3 shadow-md">
                <!-- avatar modal -->
                <div class="w-full flex justify-center items-center mb-6 lg:mb-12 bg-themePrimary p-6 lg:p-12 shadow-md">
                  <img class="w-64 h-64 rounded-full p-1 bg-white" src="assets/images/avatar.png" />
                </div>
                <!-- body modal -->
                <div  class="text-xl mb-8 lg:mb-16 text-themeOnSecondary w-full leading-normal text-center">
                  <h3 class="text-medium text-3xl">Hồ Anh Tuấn</h3>
                  Chung cư B Gò Dầu
                  <br/>
                  Đường Tân Sơn Nhì, P.Tân Sơn Nhì
                  <br/>
                  Q.Tân Phú, Thành Phố Hồ Chí Minh.
                  <br/>
                  Email: tuan.ho.designer@gmail.com
                  <br/>
                  Phone: 0925 664 424
                </div>
                <!-- footer modal -->
                <div class="w-full px-6 flex justify-center">
                  <div @click="isModal = false" class="px-4 py-1 rounded-full bg-themeSecondary text-OnSecondary">close</div>
                </div>

              </div>
            </div>
          </template>

        </div>

      </div>

    `,
  }

}

function modalUserData() {
  return {
    isModal: false,
    modalUser() {
      this.isModal = !this.isModal;
      console.log('vua click', this.isModal);
    }
  }
}

