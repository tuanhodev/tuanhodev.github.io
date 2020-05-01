
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
      { key: 'Php', class: 'is-php', },
      { key: 'Javascript', class: 'is-javascript', },
      { key: 'Vim', class: 'is-vim', },
      { key: 'Laravel', class: 'is-laravel', },
      { key: 'Vuejs', class: 'is-vuejs', },
      { key: 'Alpinejs', class: 'is-alpinejs', },
      { key: 'Bootstrap', class: 'is-bootstrap', },
      { key: 'Tailwindcss', class: 'is-tailwindcss', },
      { key: 'Gimp', class: 'is-gimp', },
    ]
  }
}

function cardsData50100() {
  return {
    cards: [
      { key: 'Php', class: 'post-list', },
      { key: 'Javascript', class: 'post-list', },
      { key: 'Vim', class: 'post-list', },
      { key: 'Laravel', class: 'post-list', },
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
        class="bg-top-panner-right absolute top-0 right-0 w-96 h-96 mr-6 lg:mr-16 lg:mt-20 opacity-25">
        <img
          class="w-full h-full"
          src="assets/images/panner/top-panner-bg-right.svg" alt="">
      </div>
      <div 
        class="bg-top-panner-left absolute bottom-0 left-0 w-72 h-72
        lg:w-96 lg:h-96 ml-6 lg:ml-12 mt-20 opacity-25">
        <img
          class="w-full h-full"
          src="assets/images/panner/top-panner-bg-left.svg" alt="">
      </div>
      <!-- end background left right on top header -->

      <!-- Brand left on top header -->
      <div class="absolute inset-y-auto inset-x-0 w-full">
        <div class="w-full flex justify-between py-4 px-6 lg:px-12">

          <div class="brand w-1/2 lg:w-1/4 flex justify-start items-center
            text-themeOnPrimary uppercase font-bold text-lg"
            >
            <div class="avatar w-10 h-10 object-cover mr-3">
              <img class="w-full h-full rounded-full" src="assets/images/avatar.svg" />
            </div>
            <p class="title-transform cursor-default">AnhTuan Dev</p>
          </div>
          
          <nav class="w-full space-x-3 flex justify-end">
            <a href="/" 
              class="btn flex px-4 py-1 items-center rounded-full text-lg
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
        flex flex-col lg:flex-row items-center">

        <div class="box-user w-full lg:w-2/5 flex justify-center lg:justify-end pr-6">
          <div class="w-48 h-48">
            <img
              class="w-full h-full"
              src="assets/images/panner/bg-avatar.svg">
          </div>
        </div>

        <div class="relative w-full lg:pl-6 text-center lg:text-left">
          <h2 class="text-3xl tex-medium uppercase">Tôi là một nhà phát triển web</h2> 
          <p class="text-xl break-words">Full stack toàn thời gian</p>
          <p class="text-xl break-words">PHP JAVASCRIPT LARAVEL VUEJS BOOTSTRAP</p>
        </div>

      </div>
    `,
  }
}

