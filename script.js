'use strict'

// Header

let burgerContainer = document.getElementsByClassName('site-navigation__burger-container')[0];
let burger = document.getElementsByClassName('site-navigation__burger')[0];
let burgerNav = document.getElementsByClassName('site-navigation_burger')[0];


burgerContainer.addEventListener('click', () => {
   burgerContainer.classList.toggle("site-navigation__burger-container_active");
   burger.classList.toggle('site-navigation__burger_active');
   burgerNav.classList.toggle("site-navigation_burger_active");
});


// Popular product

let leftArrow = document.getElementsByClassName('popular-products__arrow_left')[0];
let rightArrow = document.getElementsByClassName('popular-products__arrow_right')[0];
let popularProductList = document.getElementsByClassName('popular-products__list')[0];
let popularProductItems = document.getElementsByClassName('item-popular');
let watchMoreBtn = document.getElementsByClassName('watch-more__btn')[0];
let insertContainer = document.getElementsByClassName('insert-container')[0];
let btnLikeContainer = document.getElementsByClassName('popular-header__btn_like');

let popularProductsLists = [
   `
      <li class="popular-products__item item-popular">
         <div class="item-popular__img-container">
            <img class="item-popular__img" src="img/popular-furniture1.jpg" alt="popular-furniture1">
         </div>
         <div class="item-popular__body">
            <div class="item-popular__header popular-header">
               <h1 class="popular-header__title">White Swan Chair</h1>
               <ul class="popular-header__list">
                  <li class="popular-header__item">
                  <button type="button" class="popular-header__btn popular-header__btn_like">
                  <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                     viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_16425_37)">
                        <path
                           d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                           fill="black" />
                     </g>
                     <defs>
                        <clipPath id="clip0_16425_37">
                           <rect width="10" height="9.99998" fill="none"
                              transform="translate(0.941406 0.618286)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <img class="popular-header__icon popular-header__icon_active-like"
                  src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
                  </li>
                  <li class="popular-header__item">
                     <button type="button" class="popular-header__btn popular-header__btn_share">
                        <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                           alt="share">
                     </button>
                  </li>
               </ul>
            </div>
            <div class="item-popular__pricing pricing-item">
               <p class="pricing-item__value">$40</p>
               <button type="button" class="pricing-item_btn">Buy Now</button>
            </div>
         </div>
      </li>

      <li class="popular-products__item item-popular">
         <div class="item-popular__img-container">
            <img class="item-popular__img" src="img/popular-furniture2.jpg" alt="popular-furniture1">
         </div>
         <div class="item-popular__body">
            <div class="item-popular__header popular-header">
               <h1 class="popular-header__title">White Swan Chair</h1>
               <ul class="popular-header__list">
                  <li class="popular-header__item">
                  <button type="button" class="popular-header__btn popular-header__btn_like">
                  <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                     viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_16425_37)">
                        <path
                           d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                           fill="black" />
                     </g>
                     <defs>
                        <clipPath id="clip0_16425_37">
                           <rect width="10" height="9.99998" fill="none"
                              transform="translate(0.941406 0.618286)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <img class="popular-header__icon popular-header__icon_active-like"
                  src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
                  </li>
                  <li class="popular-header__item">
                     <button type="button" class="popular-header__btn popular-header__btn_share">
                        <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                           alt="share">
                     </button>
                  </li>
               </ul>
            </div>
            <div class="item-popular__pricing pricing-item">
               <p class="pricing-item__value">$40</p>
               <button type="button" class="pricing-item_btn">Buy Now</button>
            </div>
         </div>
      </li>

      <li class="popular-products__item popular-products__item_last item-popular">
         <div class="item-popular__img-container item-popular__img-container_last">
            <img class="item-popular__img item-popular__img_last" src="img/popular-furniture3.jpg" alt="popular-furniture1">
         </div>
         <div class="item-popular__body">
            <div class="item-popular__header popular-header">
               <h1 class="popular-header__title">White Swan Chair</h1>
               <ul class="popular-header__list">
                  <li class="popular-header__item">
                     <button type="button" class="popular-header__btn popular-header__btn_like">
                     <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                     viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_16425_37)">
                        <path
                           d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                           fill="black" />
                     </g>
                     <defs>
                        <clipPath id="clip0_16425_37">
                           <rect width="10" height="9.99998" fill="none"
                              transform="translate(0.941406 0.618286)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <img class="popular-header__icon popular-header__icon_active-like"
                  src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
                     </button>
                  </li>
                  <li class="popular-header__item">
                     <button type="button" class="popular-header__btn popular-header__btn_share">
                        <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                           alt="share">
                     </button>
                  </li>
               </ul>
            </div>
            <div class="item-popular__pricing pricing-item">
               <p class="pricing-item__value">$40</p>
               <button type="button" class="pricing-item_btn">Buy Now</button>
            </div>
         </div>
      </li>
   `, `
   <li class="popular-products__item item-popular">
      <div class="item-popular__img-container">
         <img class="item-popular__img" src="img/popular-furniture2.jpg" alt="popular-furniture1">
      </div>
      <div class="item-popular__body">
         <div class="item-popular__header popular-header">
            <h1 class="popular-header__title">White Swan Chair 1</h1>
            <ul class="popular-header__list">
               <li class="popular-header__item">
                  <button type="button" class="popular-header__btn popular-header__btn_like">
                  <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                  viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16425_37)">
                     <path
                        d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                        fill="black" />
                  </g>
                  <defs>
                     <clipPath id="clip0_16425_37">
                        <rect width="10" height="9.99998" fill="none"
                           transform="translate(0.941406 0.618286)" />
                     </clipPath>
                  </defs>
               </svg>
               <img class="popular-header__icon popular-header__icon_active-like"
               src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
                  </button>
               </li>
               <li class="popular-header__item">
                  <button type="button" class="popular-header__btn popular-header__btn_share">
                     <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                        alt="share">
                  </button>
               </li>
            </ul>
         </div>
         <div class="item-popular__pricing pricing-item">
            <p class="pricing-item__value">$60</p>
            <button type="button" class="pricing-item_btn">Buy Now</button>
         </div>
      </div>
   </li>

   <li class="popular-products__item item-popular">
      <div class="item-popular__img-container">
         <img class="item-popular__img" src="img/popular-furniture3.jpg" alt="popular-furniture1">
      </div>
      <div class="item-popular__body">
         <div class="item-popular__header popular-header">
            <h1 class="popular-header__title">White Swan Chair 1</h1>
            <ul class="popular-header__list">
               <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_like">
               <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                  viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16425_37)">
                     <path
                        d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                        fill="black" />
                  </g>
                  <defs>
                     <clipPath id="clip0_16425_37">
                        <rect width="10" height="9.99998" fill="none"
                           transform="translate(0.941406 0.618286)" />
                     </clipPath>
                  </defs>
               </svg>
               <img class="popular-header__icon popular-header__icon_active-like"
               src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
            </button>
               <li class="popular-header__item">
                  <button type="button" class="popular-header__btn popular-header__btn_share">
                     <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                        alt="share">
                  </button>
               </li>
            </ul>
         </div>
         <div class="item-popular__pricing pricing-item">
            <p class="pricing-item__value">$35</p>
            <button type="button" class="pricing-item_btn">Buy Now</button>
         </div>
      </div>
   </li>

   <li class="popular-products__item popular-products__item_last item-popular">
      <div class="item-popular__img-container item-popular__img-container_last">
         <img class="item-popular__img item-popular__img_last" src="img/popular-furniture1.jpg" alt="popular-furniture1">
      </div>
      <div class="item-popular__body">
         <div class="item-popular__header popular-header">
            <h1 class="popular-header__title">White Swan Chair 1</h1>
            <ul class="popular-header__list">
               <li class="popular-header__item">
                  <button type="button" class="popular-header__btn popular-header__btn_like">
                  <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                  viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16425_37)">
                     <path
                        d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                        fill="black" />
                  </g>
                  <defs>
                     <clipPath id="clip0_16425_37">
                        <rect width="10" height="9.99998" fill="none"
                           transform="translate(0.941406 0.618286)" />
                     </clipPath>
                  </defs>
               </svg>
               <img class="popular-header__icon popular-header__icon_active-like"
               src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
                  </button>
               </li>
               <li class="popular-header__item">
                  <button type="button" class="popular-header__btn popular-header__btn_share">
                     <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                        alt="share">
                  </button>
               </li>
            </ul>
         </div>
         <div class="item-popular__pricing pricing-item">
            <p class="pricing-item__value">$40</p>
            <button type="button" class="pricing-item_btn">Buy Now</button>
         </div>
      </div>
   </li>
`, `
<li class="popular-products__item item-popular">
   <div class="item-popular__img-container">
      <img class="item-popular__img" src="img/popular-furniture1.jpg" alt="popular-furniture1">
   </div>
   <div class="item-popular__body">
      <div class="item-popular__header popular-header">
         <h1 class="popular-header__title">White Swan Chair 2</h1>
         <ul class="popular-header__list">
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_like">
               <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
               viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_37)">
                  <path
                     d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                     fill="black" />
               </g>
               <defs>
                  <clipPath id="clip0_16425_37">
                     <rect width="10" height="9.99998" fill="none"
                        transform="translate(0.941406 0.618286)" />
                  </clipPath>
               </defs>
            </svg>
            <img class="popular-header__icon popular-header__icon_active-like"
            src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
            </li>
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_share">
                  <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                     alt="share">
               </button>
            </li>
         </ul>
      </div>
      <div class="item-popular__pricing pricing-item">
         <p class="pricing-item__value">$90</p>
         <button type="button" class="pricing-item_btn">Buy Now</button>
      </div>
   </div>
</li>

<li class="popular-products__item item-popular">
   <div class="item-popular__img-container">
      <img class="item-popular__img" src="img/popular-furniture3.jpg" alt="popular-furniture1">
   </div>
   <div class="item-popular__body">
      <div class="item-popular__header popular-header">
         <h1 class="popular-header__title">White Swan Chair 2</h1>
         <ul class="popular-header__list">
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_like">
               <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
               viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_37)">
                  <path
                     d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                     fill="black" />
               </g>
               <defs>
                  <clipPath id="clip0_16425_37">
                     <rect width="10" height="9.99998" fill="none"
                        transform="translate(0.941406 0.618286)" />
                  </clipPath>
               </defs>
            </svg>
            <img class="popular-header__icon popular-header__icon_active-like"
            src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
            </li>
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_share">
                  <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                     alt="share">
               </button>
            </li>
         </ul>
      </div>
      <div class="item-popular__pricing pricing-item">
         <p class="pricing-item__value">$26</p>
         <button type="button" class="pricing-item_btn">Buy Now</button>
      </div>
   </div>
</li>

<li class="popular-products__item popular-products__item_last item-popular">
   <div class="item-popular__img-container item-popular__img-container_last">
      <img class="item-popular__img item-popular__img_last" src="img/popular-furniture2.jpg" alt="popular-furniture1">
   </div>
   <div class="item-popular__body">
      <div class="item-popular__header popular-header">
         <h1 class="popular-header__title">White Swan Chair 2</h1>
         <ul class="popular-header__list">
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_like">
               <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
               viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_37)">
                  <path
                     d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                     fill="black" />
               </g>
               <defs>
                  <clipPath id="clip0_16425_37">
                     <rect width="10" height="9.99998" fill="none"
                        transform="translate(0.941406 0.618286)" />
                  </clipPath>
               </defs>
            </svg>
            <img class="popular-header__icon popular-header__icon_active-like"
            src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
            </li>
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_share">
                  <img class="popular-header__icon" src="img/popular-share .svg" width="10px" height="10px"
                     alt="share">
               </button>
            </li>
         </ul>
      </div>
      <div class="item-popular__pricing pricing-item">
         <p class="pricing-item__value">$140</p>
         <button type="button" class="pricing-item_btn">Buy Now</button>
      </div>
   </div>
</li>
`
]

let popularProductsListMob2 = [`
      <li class="popular-products__item item-popular">
         <div class="item-popular__img-container">
            <img class="item-popular__img" src="img/popular-furniture1.jpg" alt="popular-furniture1">
         </div>
         <div class="item-popular__body item-popular__body_mob">
            <div class="item-popular__header popular-header popular-header_mob">
               <h1 class="popular-header__title popular-header__title_mob">White Swan Chair</h1>
               <ul class="popular-header__list popular-header__list_mob">
               <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_like">
                  <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                     viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_16425_37)">
                        <path
                           d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                           fill="black" />
                     </g>
                     <defs>
                        <clipPath id="clip0_16425_37">
                           <rect width="10" height="9.99998" fill="white"
                              transform="translate(0.941406 0.618286)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <img class="popular-header__icon popular-header__icon_active-like"
                     src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
            </li>
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_share">
                  <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
                     height="10px" alt="share">
               </button>
            </li>
               </ul>
            </div>
            <div class="item-popular__pricing pricing-item pricing-item_mob">
               <p class="pricing-item__value">$40</p>
               <button type="button" class="pricing-item_btn">Buy Now</button>
            </div>
         </div>
      </li>`,
   `<li class="popular-products__item item-popular">
         <div class="item-popular__img-container">
            <img class="item-popular__img" src="img/popular-furniture2.jpg" alt="popular-furniture1">
         </div>
         <div class="item-popular__body item-popular__body_mob">
            <div class="item-popular__header popular-header popular-header_mob">
               <h1 class="popular-header__title popular-header__title_mob">White Swan Chair</h1>
               <ul class="popular-header__list popular-header__list_mob">
               <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_like">
                  <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                     viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_16425_37)">
                        <path
                           d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                           fill="black" />
                     </g>
                     <defs>
                        <clipPath id="clip0_16425_37">
                           <rect width="10" height="9.99998" fill="white"
                              transform="translate(0.941406 0.618286)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <img class="popular-header__icon popular-header__icon_active-like"
                     src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
            </li>
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_share">
                  <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
                     height="10px" alt="share">
               </button>
            </li>
               </ul>
            </div>
            <div class="item-popular__pricing pricing-item pricing-item_mob">
               <p class="pricing-item__value">$40</p>
               <button type="button" class="pricing-item_btn">Buy Now</button>
            </div>
         </div>
      </li>`,
   `<li class="popular-products__item item-popular">
         <div class="item-popular__img-container">
            <img class="item-popular__img" src="img/popular-furniture3.jpg" alt="popular-furniture1">
         </div>
         <div class="item-popular__body item-popular__body_mob">
            <div class="item-popular__header popular-header popular-header_mob">
               <h1 class="popular-header__title popular-header__title_mob">White Swan Chair</h1>
               <ul class="popular-header__list popular-header__list_mob">
               <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_like">
                  <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                     viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_16425_37)">
                        <path
                           d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                           fill="black" />
                     </g>
                     <defs>
                        <clipPath id="clip0_16425_37">
                           <rect width="10" height="9.99998" fill="white"
                              transform="translate(0.941406 0.618286)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <img class="popular-header__icon popular-header__icon_active-like"
                     src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
               </button>
            </li>
            <li class="popular-header__item">
               <button type="button" class="popular-header__btn popular-header__btn_share">
                  <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
                     height="10px" alt="share">
               </button>
            </li>
               </ul>
            </div>
            <div class="item-popular__pricing pricing-item pricing-item_mob">
               <p class="pricing-item__value">$40</p>
               <button type="button" class="pricing-item_btn">Buy Now</button>
            </div>
         </div>
      </li>`,
   `<li class="popular-products__item item-popular">
      <div class="item-popular__img-container">
         <img class="item-popular__img" src="img/popular-furniture2.jpg" alt="popular-furniture1">
      </div>
      <div class="item-popular__body item-popular__body_mob">
         <div class="item-popular__header popular-header popular-header_mob">
            <h1 class="popular-header__title popular-header__title_mob">White Swan Chair 1</h1>
            <ul class="popular-header__list popular-header__list_mob">
            <li class="popular-header__item">
            <button type="button" class="popular-header__btn popular-header__btn_like">
               <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                  viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16425_37)">
                     <path
                        d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                        fill="black" />
                  </g>
                  <defs>
                     <clipPath id="clip0_16425_37">
                        <rect width="10" height="9.99998" fill="white"
                           transform="translate(0.941406 0.618286)" />
                     </clipPath>
                  </defs>
               </svg>
               <img class="popular-header__icon popular-header__icon_active-like"
                  src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
            </button>
         </li>
         <li class="popular-header__item">
            <button type="button" class="popular-header__btn popular-header__btn_share">
               <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
                  height="10px" alt="share">
            </button>
         </li>
            </ul>
         </div>
         <div class="item-popular__pricing pricing-item pricing-item_mob">
            <p class="pricing-item__value">$60</p>
            <button type="button" class="pricing-item_btn">Buy Now</button>
         </div>
      </div>
   </li>`,
   `<li class="popular-products__item item-popular">
      <div class="item-popular__img-container">
         <img class="item-popular__img" src="img/popular-furniture3.jpg" alt="popular-furniture1">
      </div>
      <div class="item-popular__body item-popular__body_mob">
         <div class="item-popular__header popular-header popular-header_mob">
            <h1 class="popular-header__title popular-header__title_mob">White Swan Chair 1</h1>
            <ul class="popular-header__list popular-header__list_mob">
            <li class="popular-header__item">
            <button type="button" class="popular-header__btn popular-header__btn_like">
               <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                  viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16425_37)">
                     <path
                        d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                        fill="black" />
                  </g>
                  <defs>
                     <clipPath id="clip0_16425_37">
                        <rect width="10" height="9.99998" fill="white"
                           transform="translate(0.941406 0.618286)" />
                     </clipPath>
                  </defs>
               </svg>
               <img class="popular-header__icon popular-header__icon_active-like"
                  src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
            </button>
         </li>
         <li class="popular-header__item">
            <button type="button" class="popular-header__btn popular-header__btn_share">
               <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
                  height="10px" alt="share">
            </button>
         </li>
            </ul>
         </div>
         <div class="item-popular__pricing pricing-item pricing-item_mob">
            <p class="pricing-item__value">$35</p>
            <button type="button" class="pricing-item_btn">Buy Now</button>
         </div>
      </div>
   </li>`,
   `<li class="popular-products__item item-popular">
      <div class="item-popular__img-container">
         <img class="item-popular__img" src="img/popular-furniture1.jpg" alt="popular-furniture1">
      </div>
      <div class="item-popular__body item-popular__body_mob">
         <div class="item-popular__header popular-header popular-header_mob">
            <h1 class="popular-header__title popular-header__title_mob">White Swan Chair 1</h1>
            <ul class="popular-header__list popular-header__list_mob">
            <li class="popular-header__item">
            <button type="button" class="popular-header__btn popular-header__btn_like">
               <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
                  viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16425_37)">
                     <path
                        d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                        fill="black" />
                  </g>
                  <defs>
                     <clipPath id="clip0_16425_37">
                        <rect width="10" height="9.99998" fill="white"
                           transform="translate(0.941406 0.618286)" />
                     </clipPath>
                  </defs>
               </svg>
               <img class="popular-header__icon popular-header__icon_active-like"
                  src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
            </button>
         </li>
         <li class="popular-header__item">
            <button type="button" class="popular-header__btn popular-header__btn_share">
               <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
                  height="10px" alt="share">
            </button>
         </li>
            </ul>
         </div>
         <div class="item-popular__pricing pricing-item pricing-item_mob">
            <p class="pricing-item__value">$40</p>
            <button type="button" class="pricing-item_btn">Buy Now</button>
         </div>
      </div>
   </li>`,
   `<li class="popular-products__item item-popular">
   <div class="item-popular__img-container">
      <img class="item-popular__img" src="img/popular-furniture3.jpg" alt="popular-furniture1">
   </div>
   <div class="item-popular__body item-popular__body_mob">
      <div class="item-popular__header popular-header popular-header_mob">
         <h1 class="popular-header__title popular-header__title_mob">White Swan Chair 2</h1>
         <ul class="popular-header__list popular-header__list_mob">
         <li class="popular-header__item">
         <button type="button" class="popular-header__btn popular-header__btn_like">
            <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
               viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_37)">
                  <path
                     d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                     fill="black" />
               </g>
               <defs>
                  <clipPath id="clip0_16425_37">
                     <rect width="10" height="9.99998" fill="white"
                        transform="translate(0.941406 0.618286)" />
                  </clipPath>
               </defs>
            </svg>
            <img class="popular-header__icon popular-header__icon_active-like"
               src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
         </button>
      </li>
      <li class="popular-header__item">
         <button type="button" class="popular-header__btn popular-header__btn_share">
            <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
               height="10px" alt="share">
         </button>
      </li>
         </ul>
      </div>
      <div class="item-popular__pricing pricing-item pricing-item_mob">
         <p class="pricing-item__value">$90</p>
         <button type="button" class="pricing-item_btn">Buy Now</button>
      </div>
   </div>
</li>`,
   `<li class="popular-products__item item-popular">
   <div class="item-popular__img-container">
      <img class="item-popular__img" src="img/popular-furniture2.jpg" alt="popular-furniture1">
   </div>
   <div class="item-popular__body item-popular__body_mob">
      <div class="item-popular__header popular-header popular-header_mob">
         <h1 class="popular-header__title popular-header__title_mob">White Swan Chair 2</h1>
         <ul class="popular-header__list popular-header__list_mob">
         <li class="popular-header__item">
         <button type="button" class="popular-header__btn popular-header__btn_like">
            <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
               viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_37)">
                  <path
                     d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                     fill="black" />
               </g>
               <defs>
                  <clipPath id="clip0_16425_37">
                     <rect width="10" height="9.99998" fill="white"
                        transform="translate(0.941406 0.618286)" />
                  </clipPath>
               </defs>
            </svg>
            <img class="popular-header__icon popular-header__icon_active-like"
               src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
         </button>
      </li>
      <li class="popular-header__item">
         <button type="button" class="popular-header__btn popular-header__btn_share">
            <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
               height="10px" alt="share">
         </button>
      </li>
         </ul>
      </div>
      <div class="item-popular__pricing pricing-item pricing-item_mob">
         <p class="pricing-item__value">$26</p>
         <button type="button" class="pricing-item_btn">Buy Now</button>
      </div>
   </div>
</li>`,
   `<li class="popular-products__item  popular-products__item_mob-last item-popular">
   <div class="item-popular__img-container item-popular__img-container_mob-last">
      <img class="item-popular__img item-popular__img_mob-last" src="img/popular-furniture1.jpg" alt="popular-furniture1">
   </div>
   <div class="item-popular__body item-popular__body_mob">
      <div class="item-popular__header popular-header popular-header_mob">
         <h1 class="popular-header__title popular-header__title_mob">White Swan Chair 2</h1>
         <ul class="popular-header__list popular-header__list_mob">
         <li class="popular-header__item">
         <button type="button" class="popular-header__btn popular-header__btn_like">
            <svg class="popular-header__icon popular-header__icon_like" width="11" height="11"
               viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_37)">
                  <path
                     d="M5.9414 10.0619C5.79903 10.0619 5.66178 10.0104 5.55482 9.91667C5.15084 9.56343 4.76136 9.23148 4.41773 8.93866L4.41598 8.93713C3.40852 8.0786 2.53854 7.33718 1.93323 6.60682C1.25658 5.79032 0.941406 5.01617 0.941406 4.17045C0.941406 3.34877 1.22316 2.59071 1.73471 2.03583C2.25236 1.47438 2.96266 1.16516 3.73498 1.16516C4.31222 1.16516 4.84086 1.34766 5.30617 1.70753C5.54101 1.88919 5.75387 2.11151 5.9414 2.37083C6.129 2.11151 6.34179 1.88919 6.57669 1.70753C7.04201 1.34766 7.57065 1.16516 8.14789 1.16516C8.92014 1.16516 9.63051 1.47438 10.1482 2.03583C10.6597 2.59071 10.9414 3.34877 10.9414 4.17045C10.9414 5.01617 10.6263 5.79032 9.94964 6.60674C9.34433 7.33718 8.47443 8.07852 7.46712 8.93698C7.12288 9.23026 6.73279 9.56274 6.3279 9.91682C6.22101 10.0104 6.08368 10.0619 5.9414 10.0619ZM3.73498 1.75094C3.12822 1.75094 2.57081 1.9931 2.16531 2.43286C1.75378 2.87925 1.52711 3.49632 1.52711 4.17045C1.52711 4.88174 1.79147 5.51788 2.3842 6.23305C2.95709 6.92435 3.80921 7.65052 4.79585 8.49135L4.79768 8.49288C5.1426 8.78684 5.53361 9.12009 5.94056 9.47592C6.34995 9.1194 6.74157 8.78561 7.08718 8.4912C8.07373 7.65036 8.92578 6.92435 9.49867 6.23305C10.0913 5.51788 10.3557 4.88174 10.3557 4.17045C10.3557 3.49632 10.129 2.87925 9.71748 2.43286C9.31206 1.9931 8.75458 1.75094 8.14789 1.75094C7.7034 1.75094 7.29531 1.89224 6.93497 2.17087C6.61385 2.41928 6.39016 2.7333 6.25901 2.95303C6.19156 3.06602 6.07285 3.13346 5.9414 3.13346C5.80994 3.13346 5.69123 3.06602 5.62379 2.95303C5.49271 2.7333 5.26902 2.41928 4.94782 2.17087C4.58749 1.89224 4.17939 1.75094 3.73498 1.75094Z"
                     fill="black" />
               </g>
               <defs>
                  <clipPath id="clip0_16425_37">
                     <rect width="10" height="9.99998" fill="white"
                        transform="translate(0.941406 0.618286)" />
                  </clipPath>
               </defs>
            </svg>
            <img class="popular-header__icon popular-header__icon_active-like"
               src="/img/popular-heart_active.svg" width="11px" height="11px" alt="">
         </button>
      </li>
      <li class="popular-header__item">
         <button type="button" class="popular-header__btn popular-header__btn_share">
            <img class="popular-header__icon" src="img/popular-share .svg" width="10px"
               height="10px" alt="share">
         </button>
      </li>
         </ul>
      </div>
      <div class="item-popular__pricing pricing-item pricing-item_mob">
         <p class="pricing-item__value">$140</p>
         <button type="button" class="pricing-item_btn">Buy Now</button>
      </div>
   </div>
</li>
`]

liker()

let clickCounter = 0;

rightArrow.addEventListener('click', () => {
   [...popularProductItems].map(item => item.remove());
   clickCounter++;
   if (clickCounter === 3) clickCounter = 0;
   renderPopularProducts(clickCounter);
   liker()
});

leftArrow.addEventListener('click', () => {
   [...popularProductItems].map(item => item.remove());
   clickCounter--;
   if (clickCounter === -1) clickCounter = popularProductsLists.length - 1;
   renderPopularProducts(clickCounter);
   liker()
});

watchMoreBtn.addEventListener('click', () => {
   console.log(popularProductItems.length)
   if (popularProductItems.length > 3) {
      // console.log(Array.from(popularProductItems))
      [...popularProductItems].slice(3).map(item => item.remove())
      watchMoreBtn.textContent = "Watch more";
      liker()
   } else {
      [...popularProductsListMob2].slice(3).forEach(item => {
         popularProductItems[popularProductItems.length - 1].insertAdjacentHTML('afterend', item);
      });
      watchMoreBtn.textContent = "Hide";
      liker()
   }
});

function renderPopularProducts(index) {
   popularProductList.insertAdjacentHTML('beforeend', popularProductsLists[index]);
}

function liker() {
   let isActive = false;

   [...btnLikeContainer].forEach((item, index) => item.addEventListener('click', () => {
      if (!isActive) {
         document.getElementsByClassName('popular-header__icon_like')[index].style.display = 'none';
         document.getElementsByClassName('popular-header__icon_active-like')[index].style.display = 'block';
         isActive = true;
      } else {
         document.getElementsByClassName('popular-header__icon_like')[index].style.display = 'block';
         document.getElementsByClassName('popular-header__icon_active-like')[index].style.display = 'none';
         isActive = false;
      }
   }));
}


//  Product range

let productBtns = document.getElementsByClassName('product-range__btn');
let productRangeList = document.getElementsByClassName('body-product__list');
let productRangeBody = document.getElementsByClassName('product-range__body')[0];
let productBodyItem = document.getElementsByClassName('body-product__item');
let productBodyText = document.getElementsByClassName('body-product__text');
let productArrowsContainer = document.getElementsByClassName('product-range__item-container');
let productArrows = document.getElementsByClassName('product-range__arrow-btn');
let productItems = document.getElementsByClassName('product-range__item');

productClicker()

for (let i = 0; i < productBtns.length; i++) {
   productBtns[i].addEventListener('click', () => {
      [...productBtns].map(item => item.classList.remove('product-range__btn_selected'))
      productBtns[i].classList.add("product-range__btn_selected");

      productRangeList.length > 1 ? productRangeList.map(item => item.remove()) : productRangeList[0].remove();
      renderProductList(i)
      productClicker()
      productRangeList = document.getElementsByClassName('body-product__list')
   }
   )
}

function productClicker() {

   let currentIcon = -1;

   [...productBodyItem].map((item, index) => item.addEventListener('click', () => {

      if (currentIcon !== index) {
         productClear()
         currentIcon = index;
      }

      item.classList.toggle('body-product__item_active');
      productBodyText[index].classList.toggle('body-product__text_active');
      document.getElementsByClassName('body-product__icon')[index].classList.toggle('body-product__icon_active')
   }));

}

function productClear() {
   [...productBodyItem].map(item => {
      item.classList.remove('body-product__item_active');
      [...productBodyText].map(item => item.classList.remove('body-product__text_active'));
      [...document.getElementsByClassName('body-product__icon')].map(item => item.classList.remove('body-product__icon_active'));
   })
}

if (document.documentElement.clientWidth < 768) {
   [...productBtns].map(item => item.classList.remove('product-range__btn_selected'))

   let currentBtn = -1;

   [...productArrowsContainer].forEach((item, i) => {
      item.addEventListener('click', () => {
         let width = getWidth();

         let insertElement = document.getElementsByClassName('insert');

         item.classList.toggle('product-range__item_selected');

         [...productBtns].map(item => item.classList.remove('product-range__btn_selected'));
         productBtns[i].classList.add("product-range__btn_selected");

         productArrows[i].classList.toggle('product-range__arrow-btn_clicked');

         if (insertElement.length == 0 && width < 767) {
            renderProductListMobile(i);
            productClicker()
            currentBtn = i;
         } else if (insertElement.length > 0 && currentBtn !== i) {
            [...insertElement].map(item => item.remove());
            [...productArrows].map(item => item.classList.remove('product-range__arrow-btn_clicked'));
            productArrows[i].classList.toggle('product-range__arrow-btn_clicked');
            renderProductListMobile(i);
            productClicker()
            currentBtn = i;
         } else if (insertElement.length > 0 && currentBtn === i) {
            [...insertElement].map(item => item.remove());
            [...productArrows].map(item => item.classList.remove('product-range__arrow-btn_clicked'));
         }

         [...productBodyItem].map(item => item.classList.toggle('body-product__item_mob'))
      })
   })
}

function getWidth() {
   return document.documentElement.clientWidth
}

function renderProductList(i) {
   if (i == 0) {
      productRangeBody.insertAdjacentHTML("beforeend",
         ` <ul class="body-product__list">
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_249)">
               <path d="M4.91992 12.0491H11.0605C11.6004 12.0491 12.0933 12.2532 12.4668 12.5879C12.8403 12.2531 13.3332 12.0491 13.873 12.0491H20.0137V4.50853C20.0137 4.12204 19.7044 3.80043 19.318 3.79907C19.3121 3.79907 19.5579 3.79907 5.62305 3.79907C5.22292 3.79907 4.91992 4.1271 4.91992 4.50853V12.0491Z" fill="#666666"/>
               <path d="M13.1699 14.1584V15.7991H20.0137C20.0137 14.7605 20.0137 14.5472 20.0137 13.4553H13.873C13.4853 13.4553 13.1699 13.7707 13.1699 14.1584Z" fill="#666666"/>
               <path d="M22.194 8.67515C21.7606 8.68865 21.4199 9.05221 21.4199 9.4858C21.4199 9.59708 21.4199 16.9016 21.4199 16.5022C21.4199 16.8905 21.1051 17.2053 20.7168 17.2053C20.1547 17.2053 3.68303 17.2053 4.2168 17.2053C3.82848 17.2053 3.51367 16.8905 3.51367 16.5022C3.51367 16.2428 3.51367 9.41816 3.51367 9.4858C3.51367 9.05221 3.17303 8.68865 2.73962 8.67515C1.49041 8.63624 0.466797 9.63561 0.466797 10.8772V18.0959C0.466797 19.2609 1.41119 20.2053 2.57617 20.2053H3.51367V20.9823C3.51367 21.3609 3.80463 21.6867 4.18281 21.7045C4.58659 21.7236 4.91992 21.4018 4.91992 21.0022V20.2053H20.0137V20.9823C20.0137 21.3609 20.3046 21.6867 20.6828 21.7045C21.0866 21.7236 21.4199 21.4018 21.4199 21.0022V20.2053H22.3574C23.5224 20.2053 24.4668 19.2609 24.4668 18.0959V10.9168C24.4668 9.61879 23.4352 8.63647 22.194 8.67515Z" fill="#666666"/>
               <path d="M11.7637 14.1584C11.7637 13.7707 11.4482 13.4553 11.0605 13.4553H4.91992V15.7991H11.7637V14.1584Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_249">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Living Room</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_260)">
               <path d="M0.472656 24.7522H10.3586V19.083H0.472656V24.7522ZM2.63481 20.5511H8.24331V21.9567H2.63481V20.5511Z" fill="#666666"/>
               <path d="M0.472656 17.6774H10.3586V12.1019H0.472656V17.6774ZM2.63481 13.5975H8.24331V15.0031H2.63481V13.5975Z" fill="#666666"/>
               <path d="M11.7637 24.7522H24.4608V12.1019H11.7637V24.7522ZM20.1972 13.5975H21.6028V15.0378H20.1972V13.5975ZM17.386 13.5975H18.7916V15.0378H17.386V13.5975ZM14.5749 13.5975H15.9805V15.0378H14.5749V13.5975ZM14.5749 16.2952H21.6028V21.9411H14.5749V16.2952Z" fill="#666666"/>
               <path d="M20.1972 3.99271V0.752197H15.9805V3.99506L11.7637 6.8062V9.29071H24.4608V6.80385L20.1972 3.99271Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_260">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Kitchen</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_273)">
               <path d="M20.0874 10.3104C20.3683 10.3104 20.596 10.0827 20.596 9.80181V8.17036C20.596 7.88946 20.3683 7.66177 20.0874 7.66177L19.3636 7.66618L16.9883 10.3104H20.0874Z" fill="#666666"/>
               <path d="M4.84257 10.3102H7.96608L5.54964 7.66168H4.84257C4.56167 7.66168 4.33398 7.88937 4.33398 8.17027V9.80159C4.33398 10.0825 4.56167 10.3102 4.84257 10.3102Z" fill="#666666"/>
               <path d="M12.7573 12.933L17.4705 7.66177H7.46094L12.2516 12.935C12.3874 13.0845 12.6227 13.0836 12.7573 12.933Z" fill="#666666"/>
               <path d="M14.0849 20.351H13.2093V14.4323C12.9993 14.5536 12.7593 14.6198 12.5117 14.6208C12.5098 14.6208 12.508 14.6208 12.5061 14.6208C12.2567 14.6208 12.0146 14.5545 11.8029 14.4323V20.351H10.8477C10.4594 20.351 10.1445 20.6658 10.1445 21.0541C10.1445 21.4425 10.4594 21.7573 10.8477 21.7573H14.0849C14.4733 21.7573 14.7881 21.4425 14.7881 21.0541C14.7881 20.6658 14.4732 20.351 14.0849 20.351Z" fill="#666666"/>
               <path d="M6.39649 12.2667H1.87315V3.93151C1.87315 3.54317 1.55831 3.22833 1.16997 3.22833C0.781632 3.22833 0.466797 3.54317 0.466797 3.93151V21.1104C0.466797 21.4988 0.781632 21.8136 1.16997 21.8136C1.55831 21.8136 1.87315 21.4988 1.87315 21.1104V15.8581H6.98585V21.1104C6.98585 21.4988 7.30068 21.8136 7.68902 21.8136C8.07736 21.8136 8.3922 21.4988 8.3922 21.1104V14.2624C8.3922 13.1619 7.49691 12.2667 6.39649 12.2667Z" fill="#666666"/>
               <path d="M23.7639 3.22833C23.3756 3.22833 23.0607 3.54317 23.0607 3.93151V12.2667H18.6422C17.5417 12.2667 16.6465 13.162 16.6465 14.2624V21.1104C16.6465 21.4988 16.9613 21.8136 17.3497 21.8136C17.738 21.8136 18.0528 21.4988 18.0528 21.1104V15.8569H23.0608V21.1104C23.0608 21.4988 23.3756 21.8136 23.764 21.8136C24.1523 21.8136 24.4671 21.4988 24.4671 21.1104V3.93151C24.4671 3.54317 24.1523 3.22833 23.7639 3.22833Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_273">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.520996)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Dining Room</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16598_285)">
               <path d="M24.4668 7.20276V2.51526C24.4668 1.61062 23.7308 0.874634 22.8262 0.874634H14.3887C13.484 0.874634 12.748 1.61062 12.748 2.51526V7.20276C12.748 8.1074 13.484 8.84338 14.3887 8.84338H16.3007L15.9491 10.2496H12.0137L11.8709 7.10699C11.8195 5.97787 10.8939 5.09338 9.76366 5.09338H5.88873C4.75848 5.09338 3.83289 5.97787 3.78152 7.10699L3.63869 10.2496H1.16992C0.781609 10.2496 0.466797 10.5644 0.466797 10.9528V23.1403C0.466797 23.5286 0.781609 23.8434 1.16992 23.8434C1.55823 23.8434 1.87305 23.5286 1.87305 23.1403V14.4684H3.47102C3.5222 15.0472 3.76516 15.5869 4.17442 16.0152C4.59058 16.4506 5.12955 16.7196 5.71684 16.7917V17.984C5.71684 18.8091 6.32913 19.4935 7.12309 19.6076V21.2974L4.3518 22.0892C4.04987 22.1754 3.8418 22.4513 3.8418 22.7653V24.1715C3.8418 24.5598 4.15661 24.8746 4.54492 24.8746C4.93323 24.8746 5.24805 24.5598 5.24805 24.1715V23.2956L7.12305 22.7599V23.7028C7.12305 24.0911 7.43786 24.4059 7.82617 24.4059C8.21448 24.4059 8.5293 24.0911 8.5293 23.7028V22.7599L10.4043 23.2957V24.1715C10.4043 24.5598 10.7191 24.8746 11.1074 24.8746C11.4957 24.8746 11.8105 24.5598 11.8105 24.1715V22.7653C11.8105 22.4513 11.6025 22.1754 11.3006 22.0892L8.5293 21.2974V19.6077C9.32327 19.4936 9.93555 18.8091 9.93555 17.9841V16.7918C10.5228 16.7196 11.0618 16.4507 11.478 16.0152C11.8872 15.587 12.1302 15.0473 12.1814 14.4684H13.6855V23.1403C13.6855 23.5286 14.0004 23.8434 14.3887 23.8434C14.777 23.8434 15.0918 23.5286 15.0918 23.1403V21.0309H23.0605V23.1403C23.0605 23.5286 23.3754 23.8434 23.7637 23.8434C24.152 23.8434 24.4668 23.5286 24.4668 23.1403V10.9528C24.4668 10.5644 24.152 10.2496 23.7637 10.2496H21.2658L20.9142 8.84338H22.8262C23.7308 8.84338 24.4668 8.1074 24.4668 7.20276ZM3.51081 13.0621H1.87305V11.6559H3.57475L3.51081 13.0621ZM8.5293 17.984C8.5293 18.1132 8.42416 18.2184 8.29492 18.2184H7.35742C7.22819 18.2184 7.12305 18.1132 7.12305 17.984V16.8121H8.5293V17.984ZM10.4613 15.0436C10.238 15.2772 9.93714 15.4059 9.61403 15.4059H6.03836C5.71525 15.4059 5.41436 15.2772 5.19114 15.0436C4.96788 14.81 4.85303 14.5035 4.8677 14.1808L5.18631 7.17079C5.20342 6.79448 5.51195 6.49963 5.88869 6.49963H9.76361C10.1404 6.49963 10.4489 6.79448 10.466 7.17084L10.7846 14.1808C10.7994 14.5036 10.6845 14.81 10.4613 15.0436ZM23.0605 19.6246H15.0918V14.4684H23.0605V19.6246ZM23.0605 11.6559V13.0621H12.1415L12.0776 11.6559H23.0605ZM17.3986 10.2496L17.7501 8.84338H19.4647L19.8162 10.2496H17.3986ZM14.3887 7.43713C14.2594 7.43713 14.1543 7.33199 14.1543 7.20276V2.51526C14.1543 2.38602 14.2594 2.28088 14.3887 2.28088H22.8262C22.9554 2.28088 23.0605 2.38602 23.0605 2.51526V7.20276C23.0605 7.33199 22.9554 7.43713 22.8262 7.43713H14.3887Z" fill="#666"/>
               <path d="M17.6699 17.2809H20.4824C20.8707 17.2809 21.1855 16.9661 21.1855 16.5778C21.1855 16.1894 20.8707 15.8746 20.4824 15.8746H17.6699C17.2816 15.8746 16.9668 16.1894 16.9668 16.5778C16.9668 16.9661 17.2816 17.2809 17.6699 17.2809Z" fill="#666"/>
               </g>
               <defs>
               <clipPath id="clip0_16598_285">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.874634)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Office</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_295)">
               <path d="M2.45861 13.5139H22.4752C23.3002 13.5139 23.9689 12.8451 23.9689 12.0201C23.9689 11.1951 23.3002 10.5264 22.4752 10.5264H2.45861C1.63361 10.5264 0.964844 11.1951 0.964844 12.0201C0.964797 12.8451 1.63361 13.5139 2.45861 13.5139Z" fill="#666666"/>
               <path d="M13.9606 7.30438C13.5246 7.30438 13.1699 7.65904 13.1699 8.09502V9.12004H19.2889V8.09502C19.2889 7.65904 18.9343 7.30438 18.4983 7.30438H13.9606Z" fill="#666666"/>
               <path d="M4.23733 8.09508C4.23733 6.88369 5.22283 5.89819 6.43422 5.89819H10.972C11.5484 5.89819 12.0734 6.12169 12.4657 6.48619C12.858 6.12169 13.383 5.89819 13.9595 5.89819H18.4972C19.7086 5.89819 20.6941 6.88369 20.6941 8.09508V9.12009H22.9764V4.27697C22.9764 3.45197 22.3076 2.7832 21.4826 2.7832H3.44884C2.62384 2.7832 1.95508 3.45197 1.95508 4.27697V9.12009H4.23733V8.09508Z" fill="#666666"/>
               <path d="M6.43517 7.30438C5.99919 7.30438 5.64453 7.65904 5.64453 8.09502V9.12004H11.7635V8.09502C11.7635 7.65904 11.4089 7.30438 10.9729 7.30438H6.43517Z" fill="#666666"/>
               <path d="M0.466797 14.9201V21.3897H1.87305V18.8257H23.0605V21.3897H24.4668V14.9201H0.466797Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_295">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.0864258)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Bed Room</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_307)">
               <path d="M24.0918 8.05127H0.841797C0.634338 8.05127 0.466797 7.88373 0.466797 7.67627V6.17554C0.466797 5.96808 0.634338 5.80054 0.841797 5.80054H24.0918C24.2993 5.80054 24.4668 5.96808 24.4668 6.17554V7.67627C24.4668 7.88373 24.2993 8.05127 24.0918 8.05127ZM1.2168 7.30127H23.7168V6.55054H1.2168V7.30127Z" fill="#666666"/>
               <path d="M1.2168 19.683C1.00934 19.683 0.841797 19.5155 0.841797 19.308V7.7431C0.841797 7.53564 1.00934 7.3681 1.2168 7.3681C1.42426 7.3681 1.5918 7.53564 1.5918 7.7431V19.308C1.5918 19.5155 1.42426 19.683 1.2168 19.683Z" fill="#666666"/>
               <path d="M2.3418 19.683C2.13434 19.683 1.9668 19.5155 1.9668 19.308V7.7431C1.9668 7.53564 2.13434 7.3681 2.3418 7.3681C2.54926 7.3681 2.7168 7.53564 2.7168 7.7431V19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
               <path d="M22.5918 19.683C22.3843 19.683 22.2168 19.5155 22.2168 19.308V7.7431C22.2168 7.53564 22.3843 7.3681 22.5918 7.3681C22.7993 7.3681 22.9668 7.53564 22.9668 7.7431V19.308C22.9668 19.5155 22.7993 19.683 22.5918 19.683Z" fill="#666666"/>
               <path d="M23.7168 19.683C23.5093 19.683 23.3418 19.5155 23.3418 19.308V7.7431C23.3418 7.53564 23.5093 7.3681 23.7168 7.3681C23.9243 7.3681 24.0918 7.53564 24.0918 7.7431V19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
               <path d="M2.3418 19.683H1.2168C1.00934 19.683 0.841797 19.5155 0.841797 19.308C0.841797 19.1006 1.00934 18.933 1.2168 18.933H2.3418C2.54926 18.933 2.7168 19.1006 2.7168 19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
               <path d="M23.7168 19.683H22.5918C22.3843 19.683 22.2168 19.5155 22.2168 19.308C22.2168 19.1006 22.3843 18.933 22.5918 18.933H23.7168C23.9243 18.933 24.0918 19.1006 24.0918 19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
               <path d="M22.5918 13.3058H2.3418C2.13434 13.3058 1.9668 13.1381 1.9668 12.9308C1.9668 12.7234 2.13434 12.5558 2.3418 12.5558H22.5918C22.7993 12.5558 22.9668 12.7234 22.9668 12.9308C22.9668 13.1381 22.7993 13.3058 22.5918 13.3058Z" fill="#666666"/>
               <path d="M22.5918 14.4316H2.3418C2.13434 14.4316 1.9668 14.2639 1.9668 14.0566C1.9668 13.8491 2.13434 13.6816 2.3418 13.6816H22.5918C22.7993 13.6816 22.9668 13.8491 22.9668 14.0566C22.9668 14.2639 22.7993 14.4316 22.5918 14.4316Z" fill="#666666"/>
               <path d="M3.8418 13.3066C3.63434 13.3066 3.4668 13.1389 3.4668 12.9316C3.4668 11.8976 4.30762 11.0566 5.34143 11.0566C5.54871 11.0566 5.71643 11.2241 5.71643 11.4316C5.71643 11.6389 5.54871 11.8066 5.34143 11.8066C4.72162 11.8066 4.2168 12.3112 4.2168 12.9316C4.2168 13.1389 4.04907 13.3066 3.8418 13.3066Z" fill="#666666"/>
               <path d="M7.59143 13.3066C7.38397 13.3066 7.21643 13.1389 7.21643 12.9316C7.21643 12.3112 6.71161 11.8066 6.0918 11.8066C5.88452 11.8066 5.7168 11.6389 5.7168 11.4316C5.7168 11.2241 5.88452 11.0566 6.0918 11.0566C7.12561 11.0566 7.96643 11.8976 7.96643 12.9316C7.96643 13.1389 7.79889 13.3066 7.59143 13.3066Z" fill="#666666"/>
               <path d="M4.2168 12.3147C4.00934 12.3147 3.8418 12.147 3.8418 11.9397V9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658C4.42407 9.55658 4.5918 9.72412 4.5918 9.93158V11.9397C4.5918 12.147 4.42407 12.3147 4.2168 12.3147Z" fill="#666666"/>
               <path d="M7.21484 12.3147C7.00739 12.3147 6.83984 12.147 6.83984 11.9397V9.93158C6.83984 9.72412 7.00739 9.55658 7.21484 9.55658C7.42212 9.55658 7.58984 9.72412 7.58984 9.93158V11.9397C7.58984 12.147 7.42212 12.3147 7.21484 12.3147Z" fill="#666666"/>
               <path d="M4.9668 10.6823C4.75934 10.6823 4.5918 10.5146 4.5918 10.3073V9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658C5.17426 8.80658 5.3418 8.97412 5.3418 9.18158V10.3073C5.3418 10.5146 5.17426 10.6823 4.9668 10.6823Z" fill="#666666"/>
               <path d="M6.4668 9.55658H4.9668C4.75934 9.55658 4.5918 9.38885 4.5918 9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658H6.4668C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158C6.8418 9.38885 6.67426 9.55658 6.4668 9.55658Z" fill="#666666"/>
               <path d="M6.4668 10.6823C6.25934 10.6823 6.0918 10.5146 6.0918 10.3073V9.18158C6.0918 8.97412 6.25934 8.80658 6.4668 8.80658C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158V10.3073C6.8418 10.5146 6.67426 10.6823 6.4668 10.6823Z" fill="#666666"/>
               <path d="M4.96753 10.3066H4.2168C4.00934 10.3066 3.8418 10.1389 3.8418 9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658H4.96753C5.17499 9.55658 5.34253 9.72412 5.34253 9.93158C5.34253 10.1389 5.17499 10.3066 4.96753 10.3066Z" fill="#666666"/>
               <path d="M7.21533 10.3066H6.4668C6.25934 10.3066 6.0918 10.1389 6.0918 9.93158C6.0918 9.72412 6.25934 9.55658 6.4668 9.55658H7.21533C7.42261 9.55658 7.59033 9.72412 7.59033 9.93158C7.59033 10.1389 7.42261 10.3066 7.21533 10.3066Z" fill="#666666"/>
               <path d="M6.09131 11.8066H5.33984C5.13239 11.8066 4.96484 11.6389 4.96484 11.4316C4.96484 11.2241 5.13239 11.0566 5.33984 11.0566H6.09131C6.29877 11.0566 6.46631 11.2241 6.46631 11.4316C6.46631 11.6389 6.29877 11.8066 6.09131 11.8066Z" fill="#666666"/>
               <path d="M8.7168 13.3066C8.50934 13.3066 8.3418 13.1389 8.3418 12.9316C8.3418 11.8976 9.18262 11.0566 10.2164 11.0566C10.4237 11.0566 10.5914 11.2241 10.5914 11.4316C10.5914 11.6389 10.4237 11.8066 10.2164 11.8066C9.59662 11.8066 9.0918 12.3112 9.0918 12.9316C9.0918 13.1389 8.92407 13.3066 8.7168 13.3066Z" fill="#666666"/>
               <path d="M12.4664 13.3066C12.259 13.3066 12.0914 13.1389 12.0914 12.9316C12.0914 12.3112 11.5866 11.8066 10.9668 11.8066C10.7595 11.8066 10.5918 11.6389 10.5918 11.4316C10.5918 11.2241 10.7595 11.0566 10.9668 11.0566C12.0006 11.0566 12.8414 11.8976 12.8414 12.9316C12.8414 13.1389 12.6739 13.3066 12.4664 13.3066Z" fill="#666666"/>
               <path d="M9.0918 12.3147C8.88434 12.3147 8.7168 12.147 8.7168 11.9397V9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658C9.29907 9.55658 9.4668 9.72412 9.4668 9.93158V11.9397C9.4668 12.147 9.29907 12.3147 9.0918 12.3147Z" fill="#666666"/>
               <path d="M12.0898 12.3147C11.8824 12.3147 11.7148 12.147 11.7148 11.9397V9.93158C11.7148 9.72412 11.8824 9.55658 12.0898 9.55658C12.2971 9.55658 12.4648 9.72412 12.4648 9.93158V11.9397C12.4648 12.147 12.2971 12.3147 12.0898 12.3147Z" fill="#666666"/>
               <path d="M9.8418 10.6823C9.63434 10.6823 9.4668 10.5146 9.4668 10.3073V9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658C10.0493 8.80658 10.2168 8.97412 10.2168 9.18158V10.3073C10.2168 10.5146 10.0493 10.6823 9.8418 10.6823Z" fill="#666666"/>
               <path d="M11.3418 9.55658H9.8418C9.63434 9.55658 9.4668 9.38885 9.4668 9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658H11.3418C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158C11.7168 9.38885 11.5493 9.55658 11.3418 9.55658Z" fill="#666666"/>
               <path d="M11.3418 10.6823C11.1343 10.6823 10.9668 10.5146 10.9668 10.3073V9.18158C10.9668 8.97412 11.1343 8.80658 11.3418 8.80658C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158V10.3073C11.7168 10.5146 11.5493 10.6823 11.3418 10.6823Z" fill="#666666"/>
               <path d="M9.84253 10.3066H9.0918C8.88434 10.3066 8.7168 10.1389 8.7168 9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658H9.84253C10.05 9.55658 10.2175 9.72412 10.2175 9.93158C10.2175 10.1389 10.05 10.3066 9.84253 10.3066Z" fill="#666666"/>
               <path d="M12.0903 10.3066H11.3418C11.1343 10.3066 10.9668 10.1389 10.9668 9.93158C10.9668 9.72412 11.1343 9.55658 11.3418 9.55658H12.0903C12.2976 9.55658 12.4653 9.72412 12.4653 9.93158C12.4653 10.1389 12.2976 10.3066 12.0903 10.3066Z" fill="#666666"/>
               <path d="M10.9663 11.8066H10.2148C10.0074 11.8066 9.83984 11.6389 9.83984 11.4316C9.83984 11.2241 10.0074 11.0566 10.2148 11.0566H10.9663C11.1738 11.0566 11.3413 11.2241 11.3413 11.4316C11.3413 11.6389 11.1738 11.8066 10.9663 11.8066Z" fill="#666666"/>
               <path d="M12.4746 18.9323C12.2672 18.9323 12.0996 18.7646 12.0996 18.5573C12.0996 17.9366 12.6048 17.4316 13.2253 17.4316C13.4328 17.4316 13.6003 17.5991 13.6003 17.8066C13.6003 18.0139 13.4328 18.1816 13.2253 18.1816C13.0181 18.1816 12.8496 18.3499 12.8496 18.5573C12.8496 18.7646 12.6817 18.9323 12.4746 18.9323Z" fill="#666666"/>
               <path d="M16.2266 18.9323C16.0193 18.9323 15.8516 18.7646 15.8516 18.5573C15.8516 18.3502 15.6837 18.1823 15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073C15.1016 17.5999 15.2693 17.4323 15.4766 17.4323C16.0969 17.4323 16.6016 17.937 16.6016 18.5573C16.6016 18.7646 16.434 18.9323 16.2266 18.9323Z" fill="#666666"/>
               <path d="M16.2257 19.683H12.4746C12.2672 19.683 12.0996 19.5155 12.0996 19.308C12.0996 19.1006 12.2672 18.933 12.4746 18.933H16.2261C16.4335 18.933 16.6011 19.1006 16.6011 19.308C16.6011 19.5155 16.4332 19.683 16.2257 19.683Z" fill="#666666"/>
               <path d="M15.5061 18.1816H13.1953C12.988 18.1816 12.8203 18.0139 12.8203 17.8066C12.8203 17.5991 12.988 17.4316 13.1953 17.4316H15.5061C15.7136 17.4316 15.8811 17.5991 15.8811 17.8066C15.8811 18.0139 15.7136 18.1816 15.5061 18.1816Z" fill="#666666"/>
               <path d="M13.2246 18.1816C13.0172 18.1816 12.8496 18.0139 12.8496 17.8066V15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823C13.4321 15.1823 13.5996 15.3499 13.5996 15.5573V17.8066C13.5996 18.0139 13.4321 18.1816 13.2246 18.1816Z" fill="#666666"/>
               <path d="M15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073V15.5573C15.1016 15.3499 15.2693 15.1823 15.4766 15.1823C15.684 15.1823 15.8516 15.3499 15.8516 15.5573V17.8073C15.8516 18.0146 15.684 18.1823 15.4766 18.1823Z" fill="#666666"/>
               <path d="M12.4746 19.683C12.2672 19.683 12.0996 19.5155 12.0996 19.308V18.5573C12.0996 18.3499 12.2672 18.1823 12.4746 18.1823C12.6821 18.1823 12.8496 18.3499 12.8496 18.5573V19.308C12.8496 19.5155 12.6817 19.683 12.4746 19.683Z" fill="#666666"/>
               <path d="M16.2266 19.683C16.0193 19.683 15.8516 19.5155 15.8516 19.308V18.5573C15.8516 18.3499 16.0193 18.1823 16.2266 18.1823C16.434 18.1823 16.6016 18.3499 16.6016 18.5573V19.308C16.6016 19.5155 16.434 19.683 16.2266 19.683Z" fill="#666666"/>
               <path d="M15.4761 15.9323H13.2246C13.0172 15.9323 12.8496 15.7646 12.8496 15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823H15.4761C15.6835 15.1823 15.8511 15.3499 15.8511 15.5573C15.8511 15.7646 15.6835 15.9323 15.4761 15.9323Z" fill="#666666"/>
               <path d="M15.8507 17.0573H12.8496C12.6422 17.0573 12.4746 16.8896 12.4746 16.6823C12.4746 16.4749 12.6422 16.3073 12.8496 16.3073H15.8507C16.0582 16.3073 16.2257 16.4749 16.2257 16.6823C16.2257 16.8896 16.0582 17.0573 15.8507 17.0573Z" fill="#666666"/>
               <path d="M17.3496 18.9323C17.1422 18.9323 16.9746 18.7646 16.9746 18.5573C16.9746 17.9366 17.4798 17.4316 18.1003 17.4316C18.3078 17.4316 18.4753 17.5991 18.4753 17.8066C18.4753 18.0139 18.3078 18.1816 18.1003 18.1816C17.8931 18.1816 17.7246 18.3499 17.7246 18.5573C17.7246 18.7646 17.5567 18.9323 17.3496 18.9323Z" fill="#666666"/>
               <path d="M21.1016 18.9323C20.8943 18.9323 20.7266 18.7646 20.7266 18.5573C20.7266 18.3502 20.5587 18.1823 20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073C19.9766 17.5999 20.1443 17.4323 20.3516 17.4323C20.9719 17.4323 21.4766 17.937 21.4766 18.5573C21.4766 18.7646 21.309 18.9323 21.1016 18.9323Z" fill="#666666"/>
               <path d="M21.1007 19.683H17.3496C17.1422 19.683 16.9746 19.5155 16.9746 19.308C16.9746 19.1006 17.1422 18.933 17.3496 18.933H21.1011C21.3085 18.933 21.4761 19.1006 21.4761 19.308C21.4761 19.5155 21.3082 19.683 21.1007 19.683Z" fill="#666666"/>
               <path d="M20.3811 18.1816H18.0703C17.863 18.1816 17.6953 18.0139 17.6953 17.8066C17.6953 17.5991 17.863 17.4316 18.0703 17.4316H20.3811C20.5886 17.4316 20.7561 17.5991 20.7561 17.8066C20.7561 18.0139 20.5886 18.1816 20.3811 18.1816Z" fill="#666666"/>
               <path d="M18.0996 18.1816C17.8922 18.1816 17.7246 18.0139 17.7246 17.8066V15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823C18.3071 15.1823 18.4746 15.3499 18.4746 15.5573V17.8066C18.4746 18.0139 18.3071 18.1816 18.0996 18.1816Z" fill="#666666"/>
               <path d="M20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073V15.5573C19.9766 15.3499 20.1443 15.1823 20.3516 15.1823C20.559 15.1823 20.7266 15.3499 20.7266 15.5573V17.8073C20.7266 18.0146 20.559 18.1823 20.3516 18.1823Z" fill="#666666"/>
               <path d="M17.3496 19.683C17.1422 19.683 16.9746 19.5155 16.9746 19.308V18.5573C16.9746 18.3499 17.1422 18.1823 17.3496 18.1823C17.5571 18.1823 17.7246 18.3499 17.7246 18.5573V19.308C17.7246 19.5155 17.5567 19.683 17.3496 19.683Z" fill="#666666"/>
               <path d="M21.1016 19.683C20.8943 19.683 20.7266 19.5155 20.7266 19.308V18.5573C20.7266 18.3499 20.8943 18.1823 21.1016 18.1823C21.309 18.1823 21.4766 18.3499 21.4766 18.5573V19.308C21.4766 19.5155 21.309 19.683 21.1016 19.683Z" fill="#666666"/>
               <path d="M20.3511 15.9323H18.0996C17.8922 15.9323 17.7246 15.7646 17.7246 15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823H20.3511C20.5585 15.1823 20.7261 15.3499 20.7261 15.5573C20.7261 15.7646 20.5585 15.9323 20.3511 15.9323Z" fill="#666666"/>
               <path d="M20.7257 17.0573H17.7246C17.5172 17.0573 17.3496 16.8896 17.3496 16.6823C17.3496 16.4749 17.5172 16.3073 17.7246 16.3073H20.7257C20.9332 16.3073 21.1007 16.4749 21.1007 16.6823C21.1007 16.8896 20.9332 17.0573 20.7257 17.0573Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_307">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.738037)"/>
               </clipPath>
               </defs>
            </svg>  
            <p class="body-product__text">Hallway</p>
         </li>
      </ul>`);
   } else {
      productRangeBody.insertAdjacentHTML("beforeend",
         ` <ul class="body-product__list">
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_249)">
               <path d="M4.91992 12.0491H11.0605C11.6004 12.0491 12.0933 12.2532 12.4668 12.5879C12.8403 12.2531 13.3332 12.0491 13.873 12.0491H20.0137V4.50853C20.0137 4.12204 19.7044 3.80043 19.318 3.79907C19.3121 3.79907 19.5579 3.79907 5.62305 3.79907C5.22292 3.79907 4.91992 4.1271 4.91992 4.50853V12.0491Z" fill="#666666"/>
               <path d="M13.1699 14.1584V15.7991H20.0137C20.0137 14.7605 20.0137 14.5472 20.0137 13.4553H13.873C13.4853 13.4553 13.1699 13.7707 13.1699 14.1584Z" fill="#666666"/>
               <path d="M22.194 8.67515C21.7606 8.68865 21.4199 9.05221 21.4199 9.4858C21.4199 9.59708 21.4199 16.9016 21.4199 16.5022C21.4199 16.8905 21.1051 17.2053 20.7168 17.2053C20.1547 17.2053 3.68303 17.2053 4.2168 17.2053C3.82848 17.2053 3.51367 16.8905 3.51367 16.5022C3.51367 16.2428 3.51367 9.41816 3.51367 9.4858C3.51367 9.05221 3.17303 8.68865 2.73962 8.67515C1.49041 8.63624 0.466797 9.63561 0.466797 10.8772V18.0959C0.466797 19.2609 1.41119 20.2053 2.57617 20.2053H3.51367V20.9823C3.51367 21.3609 3.80463 21.6867 4.18281 21.7045C4.58659 21.7236 4.91992 21.4018 4.91992 21.0022V20.2053H20.0137V20.9823C20.0137 21.3609 20.3046 21.6867 20.6828 21.7045C21.0866 21.7236 21.4199 21.4018 21.4199 21.0022V20.2053H22.3574C23.5224 20.2053 24.4668 19.2609 24.4668 18.0959V10.9168C24.4668 9.61879 23.4352 8.63647 22.194 8.67515Z" fill="#666666"/>
               <path d="M11.7637 14.1584C11.7637 13.7707 11.4482 13.4553 11.0605 13.4553H4.91992V15.7991H11.7637V14.1584Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_249">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_260)">
               <path d="M0.472656 24.7522H10.3586V19.083H0.472656V24.7522ZM2.63481 20.5511H8.24331V21.9567H2.63481V20.5511Z" fill="#666666"/>
               <path d="M0.472656 17.6774H10.3586V12.1019H0.472656V17.6774ZM2.63481 13.5975H8.24331V15.0031H2.63481V13.5975Z" fill="#666666"/>
               <path d="M11.7637 24.7522H24.4608V12.1019H11.7637V24.7522ZM20.1972 13.5975H21.6028V15.0378H20.1972V13.5975ZM17.386 13.5975H18.7916V15.0378H17.386V13.5975ZM14.5749 13.5975H15.9805V15.0378H14.5749V13.5975ZM14.5749 16.2952H21.6028V21.9411H14.5749V16.2952Z" fill="#666666"/>
               <path d="M20.1972 3.99271V0.752197H15.9805V3.99506L11.7637 6.8062V9.29071H24.4608V6.80385L20.1972 3.99271Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_260">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_273)">
               <path d="M20.0874 10.3104C20.3683 10.3104 20.596 10.0827 20.596 9.80181V8.17036C20.596 7.88946 20.3683 7.66177 20.0874 7.66177L19.3636 7.66618L16.9883 10.3104H20.0874Z" fill="#666666"/>
               <path d="M4.84257 10.3102H7.96608L5.54964 7.66168H4.84257C4.56167 7.66168 4.33398 7.88937 4.33398 8.17027V9.80159C4.33398 10.0825 4.56167 10.3102 4.84257 10.3102Z" fill="#666666"/>
               <path d="M12.7573 12.933L17.4705 7.66177H7.46094L12.2516 12.935C12.3874 13.0845 12.6227 13.0836 12.7573 12.933Z" fill="#666666"/>
               <path d="M14.0849 20.351H13.2093V14.4323C12.9993 14.5536 12.7593 14.6198 12.5117 14.6208C12.5098 14.6208 12.508 14.6208 12.5061 14.6208C12.2567 14.6208 12.0146 14.5545 11.8029 14.4323V20.351H10.8477C10.4594 20.351 10.1445 20.6658 10.1445 21.0541C10.1445 21.4425 10.4594 21.7573 10.8477 21.7573H14.0849C14.4733 21.7573 14.7881 21.4425 14.7881 21.0541C14.7881 20.6658 14.4732 20.351 14.0849 20.351Z" fill="#666666"/>
               <path d="M6.39649 12.2667H1.87315V3.93151C1.87315 3.54317 1.55831 3.22833 1.16997 3.22833C0.781632 3.22833 0.466797 3.54317 0.466797 3.93151V21.1104C0.466797 21.4988 0.781632 21.8136 1.16997 21.8136C1.55831 21.8136 1.87315 21.4988 1.87315 21.1104V15.8581H6.98585V21.1104C6.98585 21.4988 7.30068 21.8136 7.68902 21.8136C8.07736 21.8136 8.3922 21.4988 8.3922 21.1104V14.2624C8.3922 13.1619 7.49691 12.2667 6.39649 12.2667Z" fill="#666666"/>
               <path d="M23.7639 3.22833C23.3756 3.22833 23.0607 3.54317 23.0607 3.93151V12.2667H18.6422C17.5417 12.2667 16.6465 13.162 16.6465 14.2624V21.1104C16.6465 21.4988 16.9613 21.8136 17.3497 21.8136C17.738 21.8136 18.0528 21.4988 18.0528 21.1104V15.8569H23.0608V21.1104C23.0608 21.4988 23.3756 21.8136 23.764 21.8136C24.1523 21.8136 24.4671 21.4988 24.4671 21.1104V3.93151C24.4671 3.54317 24.1523 3.22833 23.7639 3.22833Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_273">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.520996)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16598_285)">
               <path d="M24.4668 7.20276V2.51526C24.4668 1.61062 23.7308 0.874634 22.8262 0.874634H14.3887C13.484 0.874634 12.748 1.61062 12.748 2.51526V7.20276C12.748 8.1074 13.484 8.84338 14.3887 8.84338H16.3007L15.9491 10.2496H12.0137L11.8709 7.10699C11.8195 5.97787 10.8939 5.09338 9.76366 5.09338H5.88873C4.75848 5.09338 3.83289 5.97787 3.78152 7.10699L3.63869 10.2496H1.16992C0.781609 10.2496 0.466797 10.5644 0.466797 10.9528V23.1403C0.466797 23.5286 0.781609 23.8434 1.16992 23.8434C1.55823 23.8434 1.87305 23.5286 1.87305 23.1403V14.4684H3.47102C3.5222 15.0472 3.76516 15.5869 4.17442 16.0152C4.59058 16.4506 5.12955 16.7196 5.71684 16.7917V17.984C5.71684 18.8091 6.32913 19.4935 7.12309 19.6076V21.2974L4.3518 22.0892C4.04987 22.1754 3.8418 22.4513 3.8418 22.7653V24.1715C3.8418 24.5598 4.15661 24.8746 4.54492 24.8746C4.93323 24.8746 5.24805 24.5598 5.24805 24.1715V23.2956L7.12305 22.7599V23.7028C7.12305 24.0911 7.43786 24.4059 7.82617 24.4059C8.21448 24.4059 8.5293 24.0911 8.5293 23.7028V22.7599L10.4043 23.2957V24.1715C10.4043 24.5598 10.7191 24.8746 11.1074 24.8746C11.4957 24.8746 11.8105 24.5598 11.8105 24.1715V22.7653C11.8105 22.4513 11.6025 22.1754 11.3006 22.0892L8.5293 21.2974V19.6077C9.32327 19.4936 9.93555 18.8091 9.93555 17.9841V16.7918C10.5228 16.7196 11.0618 16.4507 11.478 16.0152C11.8872 15.587 12.1302 15.0473 12.1814 14.4684H13.6855V23.1403C13.6855 23.5286 14.0004 23.8434 14.3887 23.8434C14.777 23.8434 15.0918 23.5286 15.0918 23.1403V21.0309H23.0605V23.1403C23.0605 23.5286 23.3754 23.8434 23.7637 23.8434C24.152 23.8434 24.4668 23.5286 24.4668 23.1403V10.9528C24.4668 10.5644 24.152 10.2496 23.7637 10.2496H21.2658L20.9142 8.84338H22.8262C23.7308 8.84338 24.4668 8.1074 24.4668 7.20276ZM3.51081 13.0621H1.87305V11.6559H3.57475L3.51081 13.0621ZM8.5293 17.984C8.5293 18.1132 8.42416 18.2184 8.29492 18.2184H7.35742C7.22819 18.2184 7.12305 18.1132 7.12305 17.984V16.8121H8.5293V17.984ZM10.4613 15.0436C10.238 15.2772 9.93714 15.4059 9.61403 15.4059H6.03836C5.71525 15.4059 5.41436 15.2772 5.19114 15.0436C4.96788 14.81 4.85303 14.5035 4.8677 14.1808L5.18631 7.17079C5.20342 6.79448 5.51195 6.49963 5.88869 6.49963H9.76361C10.1404 6.49963 10.4489 6.79448 10.466 7.17084L10.7846 14.1808C10.7994 14.5036 10.6845 14.81 10.4613 15.0436ZM23.0605 19.6246H15.0918V14.4684H23.0605V19.6246ZM23.0605 11.6559V13.0621H12.1415L12.0776 11.6559H23.0605ZM17.3986 10.2496L17.7501 8.84338H19.4647L19.8162 10.2496H17.3986ZM14.3887 7.43713C14.2594 7.43713 14.1543 7.33199 14.1543 7.20276V2.51526C14.1543 2.38602 14.2594 2.28088 14.3887 2.28088H22.8262C22.9554 2.28088 23.0605 2.38602 23.0605 2.51526V7.20276C23.0605 7.33199 22.9554 7.43713 22.8262 7.43713H14.3887Z" fill="#666"/>
               <path d="M17.6699 17.2809H20.4824C20.8707 17.2809 21.1855 16.9661 21.1855 16.5778C21.1855 16.1894 20.8707 15.8746 20.4824 15.8746H17.6699C17.2816 15.8746 16.9668 16.1894 16.9668 16.5778C16.9668 16.9661 17.2816 17.2809 17.6699 17.2809Z" fill="#666"/>
               </g>
               <defs>
               <clipPath id="clip0_16598_285">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.874634)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_295)">
               <path d="M2.45861 13.5139H22.4752C23.3002 13.5139 23.9689 12.8451 23.9689 12.0201C23.9689 11.1951 23.3002 10.5264 22.4752 10.5264H2.45861C1.63361 10.5264 0.964844 11.1951 0.964844 12.0201C0.964797 12.8451 1.63361 13.5139 2.45861 13.5139Z" fill="#666666"/>
               <path d="M13.9606 7.30438C13.5246 7.30438 13.1699 7.65904 13.1699 8.09502V9.12004H19.2889V8.09502C19.2889 7.65904 18.9343 7.30438 18.4983 7.30438H13.9606Z" fill="#666666"/>
               <path d="M4.23733 8.09508C4.23733 6.88369 5.22283 5.89819 6.43422 5.89819H10.972C11.5484 5.89819 12.0734 6.12169 12.4657 6.48619C12.858 6.12169 13.383 5.89819 13.9595 5.89819H18.4972C19.7086 5.89819 20.6941 6.88369 20.6941 8.09508V9.12009H22.9764V4.27697C22.9764 3.45197 22.3076 2.7832 21.4826 2.7832H3.44884C2.62384 2.7832 1.95508 3.45197 1.95508 4.27697V9.12009H4.23733V8.09508Z" fill="#666666"/>
               <path d="M6.43517 7.30438C5.99919 7.30438 5.64453 7.65904 5.64453 8.09502V9.12004H11.7635V8.09502C11.7635 7.65904 11.4089 7.30438 10.9729 7.30438H6.43517Z" fill="#666666"/>
               <path d="M0.466797 14.9201V21.3897H1.87305V18.8257H23.0605V21.3897H24.4668V14.9201H0.466797Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_295">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.0864258)"/>
               </clipPath>
               </defs>
            </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
            <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_307)">
               <path d="M24.0918 8.05127H0.841797C0.634338 8.05127 0.466797 7.88373 0.466797 7.67627V6.17554C0.466797 5.96808 0.634338 5.80054 0.841797 5.80054H24.0918C24.2993 5.80054 24.4668 5.96808 24.4668 6.17554V7.67627C24.4668 7.88373 24.2993 8.05127 24.0918 8.05127ZM1.2168 7.30127H23.7168V6.55054H1.2168V7.30127Z" fill="#666666"/>
               <path d="M1.2168 19.683C1.00934 19.683 0.841797 19.5155 0.841797 19.308V7.7431C0.841797 7.53564 1.00934 7.3681 1.2168 7.3681C1.42426 7.3681 1.5918 7.53564 1.5918 7.7431V19.308C1.5918 19.5155 1.42426 19.683 1.2168 19.683Z" fill="#666666"/>
               <path d="M2.3418 19.683C2.13434 19.683 1.9668 19.5155 1.9668 19.308V7.7431C1.9668 7.53564 2.13434 7.3681 2.3418 7.3681C2.54926 7.3681 2.7168 7.53564 2.7168 7.7431V19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
               <path d="M22.5918 19.683C22.3843 19.683 22.2168 19.5155 22.2168 19.308V7.7431C22.2168 7.53564 22.3843 7.3681 22.5918 7.3681C22.7993 7.3681 22.9668 7.53564 22.9668 7.7431V19.308C22.9668 19.5155 22.7993 19.683 22.5918 19.683Z" fill="#666666"/>
               <path d="M23.7168 19.683C23.5093 19.683 23.3418 19.5155 23.3418 19.308V7.7431C23.3418 7.53564 23.5093 7.3681 23.7168 7.3681C23.9243 7.3681 24.0918 7.53564 24.0918 7.7431V19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
               <path d="M2.3418 19.683H1.2168C1.00934 19.683 0.841797 19.5155 0.841797 19.308C0.841797 19.1006 1.00934 18.933 1.2168 18.933H2.3418C2.54926 18.933 2.7168 19.1006 2.7168 19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
               <path d="M23.7168 19.683H22.5918C22.3843 19.683 22.2168 19.5155 22.2168 19.308C22.2168 19.1006 22.3843 18.933 22.5918 18.933H23.7168C23.9243 18.933 24.0918 19.1006 24.0918 19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
               <path d="M22.5918 13.3058H2.3418C2.13434 13.3058 1.9668 13.1381 1.9668 12.9308C1.9668 12.7234 2.13434 12.5558 2.3418 12.5558H22.5918C22.7993 12.5558 22.9668 12.7234 22.9668 12.9308C22.9668 13.1381 22.7993 13.3058 22.5918 13.3058Z" fill="#666666"/>
               <path d="M22.5918 14.4316H2.3418C2.13434 14.4316 1.9668 14.2639 1.9668 14.0566C1.9668 13.8491 2.13434 13.6816 2.3418 13.6816H22.5918C22.7993 13.6816 22.9668 13.8491 22.9668 14.0566C22.9668 14.2639 22.7993 14.4316 22.5918 14.4316Z" fill="#666666"/>
               <path d="M3.8418 13.3066C3.63434 13.3066 3.4668 13.1389 3.4668 12.9316C3.4668 11.8976 4.30762 11.0566 5.34143 11.0566C5.54871 11.0566 5.71643 11.2241 5.71643 11.4316C5.71643 11.6389 5.54871 11.8066 5.34143 11.8066C4.72162 11.8066 4.2168 12.3112 4.2168 12.9316C4.2168 13.1389 4.04907 13.3066 3.8418 13.3066Z" fill="#666666"/>
               <path d="M7.59143 13.3066C7.38397 13.3066 7.21643 13.1389 7.21643 12.9316C7.21643 12.3112 6.71161 11.8066 6.0918 11.8066C5.88452 11.8066 5.7168 11.6389 5.7168 11.4316C5.7168 11.2241 5.88452 11.0566 6.0918 11.0566C7.12561 11.0566 7.96643 11.8976 7.96643 12.9316C7.96643 13.1389 7.79889 13.3066 7.59143 13.3066Z" fill="#666666"/>
               <path d="M4.2168 12.3147C4.00934 12.3147 3.8418 12.147 3.8418 11.9397V9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658C4.42407 9.55658 4.5918 9.72412 4.5918 9.93158V11.9397C4.5918 12.147 4.42407 12.3147 4.2168 12.3147Z" fill="#666666"/>
               <path d="M7.21484 12.3147C7.00739 12.3147 6.83984 12.147 6.83984 11.9397V9.93158C6.83984 9.72412 7.00739 9.55658 7.21484 9.55658C7.42212 9.55658 7.58984 9.72412 7.58984 9.93158V11.9397C7.58984 12.147 7.42212 12.3147 7.21484 12.3147Z" fill="#666666"/>
               <path d="M4.9668 10.6823C4.75934 10.6823 4.5918 10.5146 4.5918 10.3073V9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658C5.17426 8.80658 5.3418 8.97412 5.3418 9.18158V10.3073C5.3418 10.5146 5.17426 10.6823 4.9668 10.6823Z" fill="#666666"/>
               <path d="M6.4668 9.55658H4.9668C4.75934 9.55658 4.5918 9.38885 4.5918 9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658H6.4668C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158C6.8418 9.38885 6.67426 9.55658 6.4668 9.55658Z" fill="#666666"/>
               <path d="M6.4668 10.6823C6.25934 10.6823 6.0918 10.5146 6.0918 10.3073V9.18158C6.0918 8.97412 6.25934 8.80658 6.4668 8.80658C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158V10.3073C6.8418 10.5146 6.67426 10.6823 6.4668 10.6823Z" fill="#666666"/>
               <path d="M4.96753 10.3066H4.2168C4.00934 10.3066 3.8418 10.1389 3.8418 9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658H4.96753C5.17499 9.55658 5.34253 9.72412 5.34253 9.93158C5.34253 10.1389 5.17499 10.3066 4.96753 10.3066Z" fill="#666666"/>
               <path d="M7.21533 10.3066H6.4668C6.25934 10.3066 6.0918 10.1389 6.0918 9.93158C6.0918 9.72412 6.25934 9.55658 6.4668 9.55658H7.21533C7.42261 9.55658 7.59033 9.72412 7.59033 9.93158C7.59033 10.1389 7.42261 10.3066 7.21533 10.3066Z" fill="#666666"/>
               <path d="M6.09131 11.8066H5.33984C5.13239 11.8066 4.96484 11.6389 4.96484 11.4316C4.96484 11.2241 5.13239 11.0566 5.33984 11.0566H6.09131C6.29877 11.0566 6.46631 11.2241 6.46631 11.4316C6.46631 11.6389 6.29877 11.8066 6.09131 11.8066Z" fill="#666666"/>
               <path d="M8.7168 13.3066C8.50934 13.3066 8.3418 13.1389 8.3418 12.9316C8.3418 11.8976 9.18262 11.0566 10.2164 11.0566C10.4237 11.0566 10.5914 11.2241 10.5914 11.4316C10.5914 11.6389 10.4237 11.8066 10.2164 11.8066C9.59662 11.8066 9.0918 12.3112 9.0918 12.9316C9.0918 13.1389 8.92407 13.3066 8.7168 13.3066Z" fill="#666666"/>
               <path d="M12.4664 13.3066C12.259 13.3066 12.0914 13.1389 12.0914 12.9316C12.0914 12.3112 11.5866 11.8066 10.9668 11.8066C10.7595 11.8066 10.5918 11.6389 10.5918 11.4316C10.5918 11.2241 10.7595 11.0566 10.9668 11.0566C12.0006 11.0566 12.8414 11.8976 12.8414 12.9316C12.8414 13.1389 12.6739 13.3066 12.4664 13.3066Z" fill="#666666"/>
               <path d="M9.0918 12.3147C8.88434 12.3147 8.7168 12.147 8.7168 11.9397V9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658C9.29907 9.55658 9.4668 9.72412 9.4668 9.93158V11.9397C9.4668 12.147 9.29907 12.3147 9.0918 12.3147Z" fill="#666666"/>
               <path d="M12.0898 12.3147C11.8824 12.3147 11.7148 12.147 11.7148 11.9397V9.93158C11.7148 9.72412 11.8824 9.55658 12.0898 9.55658C12.2971 9.55658 12.4648 9.72412 12.4648 9.93158V11.9397C12.4648 12.147 12.2971 12.3147 12.0898 12.3147Z" fill="#666666"/>
               <path d="M9.8418 10.6823C9.63434 10.6823 9.4668 10.5146 9.4668 10.3073V9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658C10.0493 8.80658 10.2168 8.97412 10.2168 9.18158V10.3073C10.2168 10.5146 10.0493 10.6823 9.8418 10.6823Z" fill="#666666"/>
               <path d="M11.3418 9.55658H9.8418C9.63434 9.55658 9.4668 9.38885 9.4668 9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658H11.3418C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158C11.7168 9.38885 11.5493 9.55658 11.3418 9.55658Z" fill="#666666"/>
               <path d="M11.3418 10.6823C11.1343 10.6823 10.9668 10.5146 10.9668 10.3073V9.18158C10.9668 8.97412 11.1343 8.80658 11.3418 8.80658C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158V10.3073C11.7168 10.5146 11.5493 10.6823 11.3418 10.6823Z" fill="#666666"/>
               <path d="M9.84253 10.3066H9.0918C8.88434 10.3066 8.7168 10.1389 8.7168 9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658H9.84253C10.05 9.55658 10.2175 9.72412 10.2175 9.93158C10.2175 10.1389 10.05 10.3066 9.84253 10.3066Z" fill="#666666"/>
               <path d="M12.0903 10.3066H11.3418C11.1343 10.3066 10.9668 10.1389 10.9668 9.93158C10.9668 9.72412 11.1343 9.55658 11.3418 9.55658H12.0903C12.2976 9.55658 12.4653 9.72412 12.4653 9.93158C12.4653 10.1389 12.2976 10.3066 12.0903 10.3066Z" fill="#666666"/>
               <path d="M10.9663 11.8066H10.2148C10.0074 11.8066 9.83984 11.6389 9.83984 11.4316C9.83984 11.2241 10.0074 11.0566 10.2148 11.0566H10.9663C11.1738 11.0566 11.3413 11.2241 11.3413 11.4316C11.3413 11.6389 11.1738 11.8066 10.9663 11.8066Z" fill="#666666"/>
               <path d="M12.4746 18.9323C12.2672 18.9323 12.0996 18.7646 12.0996 18.5573C12.0996 17.9366 12.6048 17.4316 13.2253 17.4316C13.4328 17.4316 13.6003 17.5991 13.6003 17.8066C13.6003 18.0139 13.4328 18.1816 13.2253 18.1816C13.0181 18.1816 12.8496 18.3499 12.8496 18.5573C12.8496 18.7646 12.6817 18.9323 12.4746 18.9323Z" fill="#666666"/>
               <path d="M16.2266 18.9323C16.0193 18.9323 15.8516 18.7646 15.8516 18.5573C15.8516 18.3502 15.6837 18.1823 15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073C15.1016 17.5999 15.2693 17.4323 15.4766 17.4323C16.0969 17.4323 16.6016 17.937 16.6016 18.5573C16.6016 18.7646 16.434 18.9323 16.2266 18.9323Z" fill="#666666"/>
               <path d="M16.2257 19.683H12.4746C12.2672 19.683 12.0996 19.5155 12.0996 19.308C12.0996 19.1006 12.2672 18.933 12.4746 18.933H16.2261C16.4335 18.933 16.6011 19.1006 16.6011 19.308C16.6011 19.5155 16.4332 19.683 16.2257 19.683Z" fill="#666666"/>
               <path d="M15.5061 18.1816H13.1953C12.988 18.1816 12.8203 18.0139 12.8203 17.8066C12.8203 17.5991 12.988 17.4316 13.1953 17.4316H15.5061C15.7136 17.4316 15.8811 17.5991 15.8811 17.8066C15.8811 18.0139 15.7136 18.1816 15.5061 18.1816Z" fill="#666666"/>
               <path d="M13.2246 18.1816C13.0172 18.1816 12.8496 18.0139 12.8496 17.8066V15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823C13.4321 15.1823 13.5996 15.3499 13.5996 15.5573V17.8066C13.5996 18.0139 13.4321 18.1816 13.2246 18.1816Z" fill="#666666"/>
               <path d="M15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073V15.5573C15.1016 15.3499 15.2693 15.1823 15.4766 15.1823C15.684 15.1823 15.8516 15.3499 15.8516 15.5573V17.8073C15.8516 18.0146 15.684 18.1823 15.4766 18.1823Z" fill="#666666"/>
               <path d="M12.4746 19.683C12.2672 19.683 12.0996 19.5155 12.0996 19.308V18.5573C12.0996 18.3499 12.2672 18.1823 12.4746 18.1823C12.6821 18.1823 12.8496 18.3499 12.8496 18.5573V19.308C12.8496 19.5155 12.6817 19.683 12.4746 19.683Z" fill="#666666"/>
               <path d="M16.2266 19.683C16.0193 19.683 15.8516 19.5155 15.8516 19.308V18.5573C15.8516 18.3499 16.0193 18.1823 16.2266 18.1823C16.434 18.1823 16.6016 18.3499 16.6016 18.5573V19.308C16.6016 19.5155 16.434 19.683 16.2266 19.683Z" fill="#666666"/>
               <path d="M15.4761 15.9323H13.2246C13.0172 15.9323 12.8496 15.7646 12.8496 15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823H15.4761C15.6835 15.1823 15.8511 15.3499 15.8511 15.5573C15.8511 15.7646 15.6835 15.9323 15.4761 15.9323Z" fill="#666666"/>
               <path d="M15.8507 17.0573H12.8496C12.6422 17.0573 12.4746 16.8896 12.4746 16.6823C12.4746 16.4749 12.6422 16.3073 12.8496 16.3073H15.8507C16.0582 16.3073 16.2257 16.4749 16.2257 16.6823C16.2257 16.8896 16.0582 17.0573 15.8507 17.0573Z" fill="#666666"/>
               <path d="M17.3496 18.9323C17.1422 18.9323 16.9746 18.7646 16.9746 18.5573C16.9746 17.9366 17.4798 17.4316 18.1003 17.4316C18.3078 17.4316 18.4753 17.5991 18.4753 17.8066C18.4753 18.0139 18.3078 18.1816 18.1003 18.1816C17.8931 18.1816 17.7246 18.3499 17.7246 18.5573C17.7246 18.7646 17.5567 18.9323 17.3496 18.9323Z" fill="#666666"/>
               <path d="M21.1016 18.9323C20.8943 18.9323 20.7266 18.7646 20.7266 18.5573C20.7266 18.3502 20.5587 18.1823 20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073C19.9766 17.5999 20.1443 17.4323 20.3516 17.4323C20.9719 17.4323 21.4766 17.937 21.4766 18.5573C21.4766 18.7646 21.309 18.9323 21.1016 18.9323Z" fill="#666666"/>
               <path d="M21.1007 19.683H17.3496C17.1422 19.683 16.9746 19.5155 16.9746 19.308C16.9746 19.1006 17.1422 18.933 17.3496 18.933H21.1011C21.3085 18.933 21.4761 19.1006 21.4761 19.308C21.4761 19.5155 21.3082 19.683 21.1007 19.683Z" fill="#666666"/>
               <path d="M20.3811 18.1816H18.0703C17.863 18.1816 17.6953 18.0139 17.6953 17.8066C17.6953 17.5991 17.863 17.4316 18.0703 17.4316H20.3811C20.5886 17.4316 20.7561 17.5991 20.7561 17.8066C20.7561 18.0139 20.5886 18.1816 20.3811 18.1816Z" fill="#666666"/>
               <path d="M18.0996 18.1816C17.8922 18.1816 17.7246 18.0139 17.7246 17.8066V15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823C18.3071 15.1823 18.4746 15.3499 18.4746 15.5573V17.8066C18.4746 18.0139 18.3071 18.1816 18.0996 18.1816Z" fill="#666666"/>
               <path d="M20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073V15.5573C19.9766 15.3499 20.1443 15.1823 20.3516 15.1823C20.559 15.1823 20.7266 15.3499 20.7266 15.5573V17.8073C20.7266 18.0146 20.559 18.1823 20.3516 18.1823Z" fill="#666666"/>
               <path d="M17.3496 19.683C17.1422 19.683 16.9746 19.5155 16.9746 19.308V18.5573C16.9746 18.3499 17.1422 18.1823 17.3496 18.1823C17.5571 18.1823 17.7246 18.3499 17.7246 18.5573V19.308C17.7246 19.5155 17.5567 19.683 17.3496 19.683Z" fill="#666666"/>
               <path d="M21.1016 19.683C20.8943 19.683 20.7266 19.5155 20.7266 19.308V18.5573C20.7266 18.3499 20.8943 18.1823 21.1016 18.1823C21.309 18.1823 21.4766 18.3499 21.4766 18.5573V19.308C21.4766 19.5155 21.309 19.683 21.1016 19.683Z" fill="#666666"/>
               <path d="M20.3511 15.9323H18.0996C17.8922 15.9323 17.7246 15.7646 17.7246 15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823H20.3511C20.5585 15.1823 20.7261 15.3499 20.7261 15.5573C20.7261 15.7646 20.5585 15.9323 20.3511 15.9323Z" fill="#666666"/>
               <path d="M20.7257 17.0573H17.7246C17.5172 17.0573 17.3496 16.8896 17.3496 16.6823C17.3496 16.4749 17.5172 16.3073 17.7246 16.3073H20.7257C20.9332 16.3073 21.1007 16.4749 21.1007 16.6823C21.1007 16.8896 20.9332 17.0573 20.7257 17.0573Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_307">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.738037)"/>
               </clipPath>
               </defs>
            </svg>  
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
      </ul>`);
   }
}

function renderProductListMobile(i) {

   if (i == 0) {
      productItems[i].insertAdjacentHTML("beforeend",
         `<div class="insert">
            <ul class="body-product__list body-product__list_insert">
               <li class="body-product__item">
               <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_249)">
               <path d="M4.91992 12.0491H11.0605C11.6004 12.0491 12.0933 12.2532 12.4668 12.5879C12.8403 12.2531 13.3332 12.0491 13.873 12.0491H20.0137V4.50853C20.0137 4.12204 19.7044 3.80043 19.318 3.79907C19.3121 3.79907 19.5579 3.79907 5.62305 3.79907C5.22292 3.79907 4.91992 4.1271 4.91992 4.50853V12.0491Z" fill="#666666"/>
               <path d="M13.1699 14.1584V15.7991H20.0137C20.0137 14.7605 20.0137 14.5472 20.0137 13.4553H13.873C13.4853 13.4553 13.1699 13.7707 13.1699 14.1584Z" fill="#666666"/>
               <path d="M22.194 8.67515C21.7606 8.68865 21.4199 9.05221 21.4199 9.4858C21.4199 9.59708 21.4199 16.9016 21.4199 16.5022C21.4199 16.8905 21.1051 17.2053 20.7168 17.2053C20.1547 17.2053 3.68303 17.2053 4.2168 17.2053C3.82848 17.2053 3.51367 16.8905 3.51367 16.5022C3.51367 16.2428 3.51367 9.41816 3.51367 9.4858C3.51367 9.05221 3.17303 8.68865 2.73962 8.67515C1.49041 8.63624 0.466797 9.63561 0.466797 10.8772V18.0959C0.466797 19.2609 1.41119 20.2053 2.57617 20.2053H3.51367V20.9823C3.51367 21.3609 3.80463 21.6867 4.18281 21.7045C4.58659 21.7236 4.91992 21.4018 4.91992 21.0022V20.2053H20.0137V20.9823C20.0137 21.3609 20.3046 21.6867 20.6828 21.7045C21.0866 21.7236 21.4199 21.4018 21.4199 21.0022V20.2053H22.3574C23.5224 20.2053 24.4668 19.2609 24.4668 18.0959V10.9168C24.4668 9.61879 23.4352 8.63647 22.194 8.67515Z" fill="#666666"/>
               <path d="M11.7637 14.1584C11.7637 13.7707 11.4482 13.4553 11.0605 13.4553H4.91992V15.7991H11.7637V14.1584Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_249">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
               </clipPath>
               </defs>
            </svg>
                  <p class="body-product__text">Living Room</p>
               </li>
               <li class="body-product__item">
               <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_260)">
               <path d="M0.472656 24.7522H10.3586V19.083H0.472656V24.7522ZM2.63481 20.5511H8.24331V21.9567H2.63481V20.5511Z" fill="#666666"/>
               <path d="M0.472656 17.6774H10.3586V12.1019H0.472656V17.6774ZM2.63481 13.5975H8.24331V15.0031H2.63481V13.5975Z" fill="#666666"/>
               <path d="M11.7637 24.7522H24.4608V12.1019H11.7637V24.7522ZM20.1972 13.5975H21.6028V15.0378H20.1972V13.5975ZM17.386 13.5975H18.7916V15.0378H17.386V13.5975ZM14.5749 13.5975H15.9805V15.0378H14.5749V13.5975ZM14.5749 16.2952H21.6028V21.9411H14.5749V16.2952Z" fill="#666666"/>
               <path d="M20.1972 3.99271V0.752197H15.9805V3.99506L11.7637 6.8062V9.29071H24.4608V6.80385L20.1972 3.99271Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_260">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
               </clipPath>
               </defs>
            </svg>
                  <p class="body-product__text">Kitchen</p>
               </li>
               <li class="body-product__item">
               <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_273)">
               <path d="M20.0874 10.3104C20.3683 10.3104 20.596 10.0827 20.596 9.80181V8.17036C20.596 7.88946 20.3683 7.66177 20.0874 7.66177L19.3636 7.66618L16.9883 10.3104H20.0874Z" fill="#666666"/>
               <path d="M4.84257 10.3102H7.96608L5.54964 7.66168H4.84257C4.56167 7.66168 4.33398 7.88937 4.33398 8.17027V9.80159C4.33398 10.0825 4.56167 10.3102 4.84257 10.3102Z" fill="#666666"/>
               <path d="M12.7573 12.933L17.4705 7.66177H7.46094L12.2516 12.935C12.3874 13.0845 12.6227 13.0836 12.7573 12.933Z" fill="#666666"/>
               <path d="M14.0849 20.351H13.2093V14.4323C12.9993 14.5536 12.7593 14.6198 12.5117 14.6208C12.5098 14.6208 12.508 14.6208 12.5061 14.6208C12.2567 14.6208 12.0146 14.5545 11.8029 14.4323V20.351H10.8477C10.4594 20.351 10.1445 20.6658 10.1445 21.0541C10.1445 21.4425 10.4594 21.7573 10.8477 21.7573H14.0849C14.4733 21.7573 14.7881 21.4425 14.7881 21.0541C14.7881 20.6658 14.4732 20.351 14.0849 20.351Z" fill="#666666"/>
               <path d="M6.39649 12.2667H1.87315V3.93151C1.87315 3.54317 1.55831 3.22833 1.16997 3.22833C0.781632 3.22833 0.466797 3.54317 0.466797 3.93151V21.1104C0.466797 21.4988 0.781632 21.8136 1.16997 21.8136C1.55831 21.8136 1.87315 21.4988 1.87315 21.1104V15.8581H6.98585V21.1104C6.98585 21.4988 7.30068 21.8136 7.68902 21.8136C8.07736 21.8136 8.3922 21.4988 8.3922 21.1104V14.2624C8.3922 13.1619 7.49691 12.2667 6.39649 12.2667Z" fill="#666666"/>
               <path d="M23.7639 3.22833C23.3756 3.22833 23.0607 3.54317 23.0607 3.93151V12.2667H18.6422C17.5417 12.2667 16.6465 13.162 16.6465 14.2624V21.1104C16.6465 21.4988 16.9613 21.8136 17.3497 21.8136C17.738 21.8136 18.0528 21.4988 18.0528 21.1104V15.8569H23.0608V21.1104C23.0608 21.4988 23.3756 21.8136 23.764 21.8136C24.1523 21.8136 24.4671 21.4988 24.4671 21.1104V3.93151C24.4671 3.54317 24.1523 3.22833 23.7639 3.22833Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_273">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.520996)"/>
               </clipPath>
               </defs>
            </svg>
                  <p class="body-product__text">Dining Room</p>
               </li>
               <li class="body-product__item">
                     <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_16598_285)">
                        <path d="M24.4668 7.20276V2.51526C24.4668 1.61062 23.7308 0.874634 22.8262 0.874634H14.3887C13.484 0.874634 12.748 1.61062 12.748 2.51526V7.20276C12.748 8.1074 13.484 8.84338 14.3887 8.84338H16.3007L15.9491 10.2496H12.0137L11.8709 7.10699C11.8195 5.97787 10.8939 5.09338 9.76366 5.09338H5.88873C4.75848 5.09338 3.83289 5.97787 3.78152 7.10699L3.63869 10.2496H1.16992C0.781609 10.2496 0.466797 10.5644 0.466797 10.9528V23.1403C0.466797 23.5286 0.781609 23.8434 1.16992 23.8434C1.55823 23.8434 1.87305 23.5286 1.87305 23.1403V14.4684H3.47102C3.5222 15.0472 3.76516 15.5869 4.17442 16.0152C4.59058 16.4506 5.12955 16.7196 5.71684 16.7917V17.984C5.71684 18.8091 6.32913 19.4935 7.12309 19.6076V21.2974L4.3518 22.0892C4.04987 22.1754 3.8418 22.4513 3.8418 22.7653V24.1715C3.8418 24.5598 4.15661 24.8746 4.54492 24.8746C4.93323 24.8746 5.24805 24.5598 5.24805 24.1715V23.2956L7.12305 22.7599V23.7028C7.12305 24.0911 7.43786 24.4059 7.82617 24.4059C8.21448 24.4059 8.5293 24.0911 8.5293 23.7028V22.7599L10.4043 23.2957V24.1715C10.4043 24.5598 10.7191 24.8746 11.1074 24.8746C11.4957 24.8746 11.8105 24.5598 11.8105 24.1715V22.7653C11.8105 22.4513 11.6025 22.1754 11.3006 22.0892L8.5293 21.2974V19.6077C9.32327 19.4936 9.93555 18.8091 9.93555 17.9841V16.7918C10.5228 16.7196 11.0618 16.4507 11.478 16.0152C11.8872 15.587 12.1302 15.0473 12.1814 14.4684H13.6855V23.1403C13.6855 23.5286 14.0004 23.8434 14.3887 23.8434C14.777 23.8434 15.0918 23.5286 15.0918 23.1403V21.0309H23.0605V23.1403C23.0605 23.5286 23.3754 23.8434 23.7637 23.8434C24.152 23.8434 24.4668 23.5286 24.4668 23.1403V10.9528C24.4668 10.5644 24.152 10.2496 23.7637 10.2496H21.2658L20.9142 8.84338H22.8262C23.7308 8.84338 24.4668 8.1074 24.4668 7.20276ZM3.51081 13.0621H1.87305V11.6559H3.57475L3.51081 13.0621ZM8.5293 17.984C8.5293 18.1132 8.42416 18.2184 8.29492 18.2184H7.35742C7.22819 18.2184 7.12305 18.1132 7.12305 17.984V16.8121H8.5293V17.984ZM10.4613 15.0436C10.238 15.2772 9.93714 15.4059 9.61403 15.4059H6.03836C5.71525 15.4059 5.41436 15.2772 5.19114 15.0436C4.96788 14.81 4.85303 14.5035 4.8677 14.1808L5.18631 7.17079C5.20342 6.79448 5.51195 6.49963 5.88869 6.49963H9.76361C10.1404 6.49963 10.4489 6.79448 10.466 7.17084L10.7846 14.1808C10.7994 14.5036 10.6845 14.81 10.4613 15.0436ZM23.0605 19.6246H15.0918V14.4684H23.0605V19.6246ZM23.0605 11.6559V13.0621H12.1415L12.0776 11.6559H23.0605ZM17.3986 10.2496L17.7501 8.84338H19.4647L19.8162 10.2496H17.3986ZM14.3887 7.43713C14.2594 7.43713 14.1543 7.33199 14.1543 7.20276V2.51526C14.1543 2.38602 14.2594 2.28088 14.3887 2.28088H22.8262C22.9554 2.28088 23.0605 2.38602 23.0605 2.51526V7.20276C23.0605 7.33199 22.9554 7.43713 22.8262 7.43713H14.3887Z" fill="#666"/>
                        <path d="M17.6699 17.2809H20.4824C20.8707 17.2809 21.1855 16.9661 21.1855 16.5778C21.1855 16.1894 20.8707 15.8746 20.4824 15.8746H17.6699C17.2816 15.8746 16.9668 16.1894 16.9668 16.5778C16.9668 16.9661 17.2816 17.2809 17.6699 17.2809Z" fill="#666"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_16598_285">
                        <rect width="24" height="24" fill="white" transform="translate(0.466797 0.874634)"/>
                        </clipPath>
                        </defs>
                     </svg>
                  <p class="body-product__text">Office</p>
               </li>
               <li class="body-product__item">
               <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_295)">
               <path d="M2.45861 13.5139H22.4752C23.3002 13.5139 23.9689 12.8451 23.9689 12.0201C23.9689 11.1951 23.3002 10.5264 22.4752 10.5264H2.45861C1.63361 10.5264 0.964844 11.1951 0.964844 12.0201C0.964797 12.8451 1.63361 13.5139 2.45861 13.5139Z" fill="#666666"/>
               <path d="M13.9606 7.30438C13.5246 7.30438 13.1699 7.65904 13.1699 8.09502V9.12004H19.2889V8.09502C19.2889 7.65904 18.9343 7.30438 18.4983 7.30438H13.9606Z" fill="#666666"/>
               <path d="M4.23733 8.09508C4.23733 6.88369 5.22283 5.89819 6.43422 5.89819H10.972C11.5484 5.89819 12.0734 6.12169 12.4657 6.48619C12.858 6.12169 13.383 5.89819 13.9595 5.89819H18.4972C19.7086 5.89819 20.6941 6.88369 20.6941 8.09508V9.12009H22.9764V4.27697C22.9764 3.45197 22.3076 2.7832 21.4826 2.7832H3.44884C2.62384 2.7832 1.95508 3.45197 1.95508 4.27697V9.12009H4.23733V8.09508Z" fill="#666666"/>
               <path d="M6.43517 7.30438C5.99919 7.30438 5.64453 7.65904 5.64453 8.09502V9.12004H11.7635V8.09502C11.7635 7.65904 11.4089 7.30438 10.9729 7.30438H6.43517Z" fill="#666666"/>
               <path d="M0.466797 14.9201V21.3897H1.87305V18.8257H23.0605V21.3897H24.4668V14.9201H0.466797Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_295">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.0864258)"/>
               </clipPath>
               </defs>
            </svg>
                  <p class="body-product__text">Bed Room</p>
               </li>
               <li class="body-product__item">
               <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_16425_307)">
               <path d="M24.0918 8.05127H0.841797C0.634338 8.05127 0.466797 7.88373 0.466797 7.67627V6.17554C0.466797 5.96808 0.634338 5.80054 0.841797 5.80054H24.0918C24.2993 5.80054 24.4668 5.96808 24.4668 6.17554V7.67627C24.4668 7.88373 24.2993 8.05127 24.0918 8.05127ZM1.2168 7.30127H23.7168V6.55054H1.2168V7.30127Z" fill="#666666"/>
               <path d="M1.2168 19.683C1.00934 19.683 0.841797 19.5155 0.841797 19.308V7.7431C0.841797 7.53564 1.00934 7.3681 1.2168 7.3681C1.42426 7.3681 1.5918 7.53564 1.5918 7.7431V19.308C1.5918 19.5155 1.42426 19.683 1.2168 19.683Z" fill="#666666"/>
               <path d="M2.3418 19.683C2.13434 19.683 1.9668 19.5155 1.9668 19.308V7.7431C1.9668 7.53564 2.13434 7.3681 2.3418 7.3681C2.54926 7.3681 2.7168 7.53564 2.7168 7.7431V19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
               <path d="M22.5918 19.683C22.3843 19.683 22.2168 19.5155 22.2168 19.308V7.7431C22.2168 7.53564 22.3843 7.3681 22.5918 7.3681C22.7993 7.3681 22.9668 7.53564 22.9668 7.7431V19.308C22.9668 19.5155 22.7993 19.683 22.5918 19.683Z" fill="#666666"/>
               <path d="M23.7168 19.683C23.5093 19.683 23.3418 19.5155 23.3418 19.308V7.7431C23.3418 7.53564 23.5093 7.3681 23.7168 7.3681C23.9243 7.3681 24.0918 7.53564 24.0918 7.7431V19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
               <path d="M2.3418 19.683H1.2168C1.00934 19.683 0.841797 19.5155 0.841797 19.308C0.841797 19.1006 1.00934 18.933 1.2168 18.933H2.3418C2.54926 18.933 2.7168 19.1006 2.7168 19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
               <path d="M23.7168 19.683H22.5918C22.3843 19.683 22.2168 19.5155 22.2168 19.308C22.2168 19.1006 22.3843 18.933 22.5918 18.933H23.7168C23.9243 18.933 24.0918 19.1006 24.0918 19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
               <path d="M22.5918 13.3058H2.3418C2.13434 13.3058 1.9668 13.1381 1.9668 12.9308C1.9668 12.7234 2.13434 12.5558 2.3418 12.5558H22.5918C22.7993 12.5558 22.9668 12.7234 22.9668 12.9308C22.9668 13.1381 22.7993 13.3058 22.5918 13.3058Z" fill="#666666"/>
               <path d="M22.5918 14.4316H2.3418C2.13434 14.4316 1.9668 14.2639 1.9668 14.0566C1.9668 13.8491 2.13434 13.6816 2.3418 13.6816H22.5918C22.7993 13.6816 22.9668 13.8491 22.9668 14.0566C22.9668 14.2639 22.7993 14.4316 22.5918 14.4316Z" fill="#666666"/>
               <path d="M3.8418 13.3066C3.63434 13.3066 3.4668 13.1389 3.4668 12.9316C3.4668 11.8976 4.30762 11.0566 5.34143 11.0566C5.54871 11.0566 5.71643 11.2241 5.71643 11.4316C5.71643 11.6389 5.54871 11.8066 5.34143 11.8066C4.72162 11.8066 4.2168 12.3112 4.2168 12.9316C4.2168 13.1389 4.04907 13.3066 3.8418 13.3066Z" fill="#666666"/>
               <path d="M7.59143 13.3066C7.38397 13.3066 7.21643 13.1389 7.21643 12.9316C7.21643 12.3112 6.71161 11.8066 6.0918 11.8066C5.88452 11.8066 5.7168 11.6389 5.7168 11.4316C5.7168 11.2241 5.88452 11.0566 6.0918 11.0566C7.12561 11.0566 7.96643 11.8976 7.96643 12.9316C7.96643 13.1389 7.79889 13.3066 7.59143 13.3066Z" fill="#666666"/>
               <path d="M4.2168 12.3147C4.00934 12.3147 3.8418 12.147 3.8418 11.9397V9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658C4.42407 9.55658 4.5918 9.72412 4.5918 9.93158V11.9397C4.5918 12.147 4.42407 12.3147 4.2168 12.3147Z" fill="#666666"/>
               <path d="M7.21484 12.3147C7.00739 12.3147 6.83984 12.147 6.83984 11.9397V9.93158C6.83984 9.72412 7.00739 9.55658 7.21484 9.55658C7.42212 9.55658 7.58984 9.72412 7.58984 9.93158V11.9397C7.58984 12.147 7.42212 12.3147 7.21484 12.3147Z" fill="#666666"/>
               <path d="M4.9668 10.6823C4.75934 10.6823 4.5918 10.5146 4.5918 10.3073V9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658C5.17426 8.80658 5.3418 8.97412 5.3418 9.18158V10.3073C5.3418 10.5146 5.17426 10.6823 4.9668 10.6823Z" fill="#666666"/>
               <path d="M6.4668 9.55658H4.9668C4.75934 9.55658 4.5918 9.38885 4.5918 9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658H6.4668C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158C6.8418 9.38885 6.67426 9.55658 6.4668 9.55658Z" fill="#666666"/>
               <path d="M6.4668 10.6823C6.25934 10.6823 6.0918 10.5146 6.0918 10.3073V9.18158C6.0918 8.97412 6.25934 8.80658 6.4668 8.80658C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158V10.3073C6.8418 10.5146 6.67426 10.6823 6.4668 10.6823Z" fill="#666666"/>
               <path d="M4.96753 10.3066H4.2168C4.00934 10.3066 3.8418 10.1389 3.8418 9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658H4.96753C5.17499 9.55658 5.34253 9.72412 5.34253 9.93158C5.34253 10.1389 5.17499 10.3066 4.96753 10.3066Z" fill="#666666"/>
               <path d="M7.21533 10.3066H6.4668C6.25934 10.3066 6.0918 10.1389 6.0918 9.93158C6.0918 9.72412 6.25934 9.55658 6.4668 9.55658H7.21533C7.42261 9.55658 7.59033 9.72412 7.59033 9.93158C7.59033 10.1389 7.42261 10.3066 7.21533 10.3066Z" fill="#666666"/>
               <path d="M6.09131 11.8066H5.33984C5.13239 11.8066 4.96484 11.6389 4.96484 11.4316C4.96484 11.2241 5.13239 11.0566 5.33984 11.0566H6.09131C6.29877 11.0566 6.46631 11.2241 6.46631 11.4316C6.46631 11.6389 6.29877 11.8066 6.09131 11.8066Z" fill="#666666"/>
               <path d="M8.7168 13.3066C8.50934 13.3066 8.3418 13.1389 8.3418 12.9316C8.3418 11.8976 9.18262 11.0566 10.2164 11.0566C10.4237 11.0566 10.5914 11.2241 10.5914 11.4316C10.5914 11.6389 10.4237 11.8066 10.2164 11.8066C9.59662 11.8066 9.0918 12.3112 9.0918 12.9316C9.0918 13.1389 8.92407 13.3066 8.7168 13.3066Z" fill="#666666"/>
               <path d="M12.4664 13.3066C12.259 13.3066 12.0914 13.1389 12.0914 12.9316C12.0914 12.3112 11.5866 11.8066 10.9668 11.8066C10.7595 11.8066 10.5918 11.6389 10.5918 11.4316C10.5918 11.2241 10.7595 11.0566 10.9668 11.0566C12.0006 11.0566 12.8414 11.8976 12.8414 12.9316C12.8414 13.1389 12.6739 13.3066 12.4664 13.3066Z" fill="#666666"/>
               <path d="M9.0918 12.3147C8.88434 12.3147 8.7168 12.147 8.7168 11.9397V9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658C9.29907 9.55658 9.4668 9.72412 9.4668 9.93158V11.9397C9.4668 12.147 9.29907 12.3147 9.0918 12.3147Z" fill="#666666"/>
               <path d="M12.0898 12.3147C11.8824 12.3147 11.7148 12.147 11.7148 11.9397V9.93158C11.7148 9.72412 11.8824 9.55658 12.0898 9.55658C12.2971 9.55658 12.4648 9.72412 12.4648 9.93158V11.9397C12.4648 12.147 12.2971 12.3147 12.0898 12.3147Z" fill="#666666"/>
               <path d="M9.8418 10.6823C9.63434 10.6823 9.4668 10.5146 9.4668 10.3073V9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658C10.0493 8.80658 10.2168 8.97412 10.2168 9.18158V10.3073C10.2168 10.5146 10.0493 10.6823 9.8418 10.6823Z" fill="#666666"/>
               <path d="M11.3418 9.55658H9.8418C9.63434 9.55658 9.4668 9.38885 9.4668 9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658H11.3418C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158C11.7168 9.38885 11.5493 9.55658 11.3418 9.55658Z" fill="#666666"/>
               <path d="M11.3418 10.6823C11.1343 10.6823 10.9668 10.5146 10.9668 10.3073V9.18158C10.9668 8.97412 11.1343 8.80658 11.3418 8.80658C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158V10.3073C11.7168 10.5146 11.5493 10.6823 11.3418 10.6823Z" fill="#666666"/>
               <path d="M9.84253 10.3066H9.0918C8.88434 10.3066 8.7168 10.1389 8.7168 9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658H9.84253C10.05 9.55658 10.2175 9.72412 10.2175 9.93158C10.2175 10.1389 10.05 10.3066 9.84253 10.3066Z" fill="#666666"/>
               <path d="M12.0903 10.3066H11.3418C11.1343 10.3066 10.9668 10.1389 10.9668 9.93158C10.9668 9.72412 11.1343 9.55658 11.3418 9.55658H12.0903C12.2976 9.55658 12.4653 9.72412 12.4653 9.93158C12.4653 10.1389 12.2976 10.3066 12.0903 10.3066Z" fill="#666666"/>
               <path d="M10.9663 11.8066H10.2148C10.0074 11.8066 9.83984 11.6389 9.83984 11.4316C9.83984 11.2241 10.0074 11.0566 10.2148 11.0566H10.9663C11.1738 11.0566 11.3413 11.2241 11.3413 11.4316C11.3413 11.6389 11.1738 11.8066 10.9663 11.8066Z" fill="#666666"/>
               <path d="M12.4746 18.9323C12.2672 18.9323 12.0996 18.7646 12.0996 18.5573C12.0996 17.9366 12.6048 17.4316 13.2253 17.4316C13.4328 17.4316 13.6003 17.5991 13.6003 17.8066C13.6003 18.0139 13.4328 18.1816 13.2253 18.1816C13.0181 18.1816 12.8496 18.3499 12.8496 18.5573C12.8496 18.7646 12.6817 18.9323 12.4746 18.9323Z" fill="#666666"/>
               <path d="M16.2266 18.9323C16.0193 18.9323 15.8516 18.7646 15.8516 18.5573C15.8516 18.3502 15.6837 18.1823 15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073C15.1016 17.5999 15.2693 17.4323 15.4766 17.4323C16.0969 17.4323 16.6016 17.937 16.6016 18.5573C16.6016 18.7646 16.434 18.9323 16.2266 18.9323Z" fill="#666666"/>
               <path d="M16.2257 19.683H12.4746C12.2672 19.683 12.0996 19.5155 12.0996 19.308C12.0996 19.1006 12.2672 18.933 12.4746 18.933H16.2261C16.4335 18.933 16.6011 19.1006 16.6011 19.308C16.6011 19.5155 16.4332 19.683 16.2257 19.683Z" fill="#666666"/>
               <path d="M15.5061 18.1816H13.1953C12.988 18.1816 12.8203 18.0139 12.8203 17.8066C12.8203 17.5991 12.988 17.4316 13.1953 17.4316H15.5061C15.7136 17.4316 15.8811 17.5991 15.8811 17.8066C15.8811 18.0139 15.7136 18.1816 15.5061 18.1816Z" fill="#666666"/>
               <path d="M13.2246 18.1816C13.0172 18.1816 12.8496 18.0139 12.8496 17.8066V15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823C13.4321 15.1823 13.5996 15.3499 13.5996 15.5573V17.8066C13.5996 18.0139 13.4321 18.1816 13.2246 18.1816Z" fill="#666666"/>
               <path d="M15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073V15.5573C15.1016 15.3499 15.2693 15.1823 15.4766 15.1823C15.684 15.1823 15.8516 15.3499 15.8516 15.5573V17.8073C15.8516 18.0146 15.684 18.1823 15.4766 18.1823Z" fill="#666666"/>
               <path d="M12.4746 19.683C12.2672 19.683 12.0996 19.5155 12.0996 19.308V18.5573C12.0996 18.3499 12.2672 18.1823 12.4746 18.1823C12.6821 18.1823 12.8496 18.3499 12.8496 18.5573V19.308C12.8496 19.5155 12.6817 19.683 12.4746 19.683Z" fill="#666666"/>
               <path d="M16.2266 19.683C16.0193 19.683 15.8516 19.5155 15.8516 19.308V18.5573C15.8516 18.3499 16.0193 18.1823 16.2266 18.1823C16.434 18.1823 16.6016 18.3499 16.6016 18.5573V19.308C16.6016 19.5155 16.434 19.683 16.2266 19.683Z" fill="#666666"/>
               <path d="M15.4761 15.9323H13.2246C13.0172 15.9323 12.8496 15.7646 12.8496 15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823H15.4761C15.6835 15.1823 15.8511 15.3499 15.8511 15.5573C15.8511 15.7646 15.6835 15.9323 15.4761 15.9323Z" fill="#666666"/>
               <path d="M15.8507 17.0573H12.8496C12.6422 17.0573 12.4746 16.8896 12.4746 16.6823C12.4746 16.4749 12.6422 16.3073 12.8496 16.3073H15.8507C16.0582 16.3073 16.2257 16.4749 16.2257 16.6823C16.2257 16.8896 16.0582 17.0573 15.8507 17.0573Z" fill="#666666"/>
               <path d="M17.3496 18.9323C17.1422 18.9323 16.9746 18.7646 16.9746 18.5573C16.9746 17.9366 17.4798 17.4316 18.1003 17.4316C18.3078 17.4316 18.4753 17.5991 18.4753 17.8066C18.4753 18.0139 18.3078 18.1816 18.1003 18.1816C17.8931 18.1816 17.7246 18.3499 17.7246 18.5573C17.7246 18.7646 17.5567 18.9323 17.3496 18.9323Z" fill="#666666"/>
               <path d="M21.1016 18.9323C20.8943 18.9323 20.7266 18.7646 20.7266 18.5573C20.7266 18.3502 20.5587 18.1823 20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073C19.9766 17.5999 20.1443 17.4323 20.3516 17.4323C20.9719 17.4323 21.4766 17.937 21.4766 18.5573C21.4766 18.7646 21.309 18.9323 21.1016 18.9323Z" fill="#666666"/>
               <path d="M21.1007 19.683H17.3496C17.1422 19.683 16.9746 19.5155 16.9746 19.308C16.9746 19.1006 17.1422 18.933 17.3496 18.933H21.1011C21.3085 18.933 21.4761 19.1006 21.4761 19.308C21.4761 19.5155 21.3082 19.683 21.1007 19.683Z" fill="#666666"/>
               <path d="M20.3811 18.1816H18.0703C17.863 18.1816 17.6953 18.0139 17.6953 17.8066C17.6953 17.5991 17.863 17.4316 18.0703 17.4316H20.3811C20.5886 17.4316 20.7561 17.5991 20.7561 17.8066C20.7561 18.0139 20.5886 18.1816 20.3811 18.1816Z" fill="#666666"/>
               <path d="M18.0996 18.1816C17.8922 18.1816 17.7246 18.0139 17.7246 17.8066V15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823C18.3071 15.1823 18.4746 15.3499 18.4746 15.5573V17.8066C18.4746 18.0139 18.3071 18.1816 18.0996 18.1816Z" fill="#666666"/>
               <path d="M20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073V15.5573C19.9766 15.3499 20.1443 15.1823 20.3516 15.1823C20.559 15.1823 20.7266 15.3499 20.7266 15.5573V17.8073C20.7266 18.0146 20.559 18.1823 20.3516 18.1823Z" fill="#666666"/>
               <path d="M17.3496 19.683C17.1422 19.683 16.9746 19.5155 16.9746 19.308V18.5573C16.9746 18.3499 17.1422 18.1823 17.3496 18.1823C17.5571 18.1823 17.7246 18.3499 17.7246 18.5573V19.308C17.7246 19.5155 17.5567 19.683 17.3496 19.683Z" fill="#666666"/>
               <path d="M21.1016 19.683C20.8943 19.683 20.7266 19.5155 20.7266 19.308V18.5573C20.7266 18.3499 20.8943 18.1823 21.1016 18.1823C21.309 18.1823 21.4766 18.3499 21.4766 18.5573V19.308C21.4766 19.5155 21.309 19.683 21.1016 19.683Z" fill="#666666"/>
               <path d="M20.3511 15.9323H18.0996C17.8922 15.9323 17.7246 15.7646 17.7246 15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823H20.3511C20.5585 15.1823 20.7261 15.3499 20.7261 15.5573C20.7261 15.7646 20.5585 15.9323 20.3511 15.9323Z" fill="#666666"/>
               <path d="M20.7257 17.0573H17.7246C17.5172 17.0573 17.3496 16.8896 17.3496 16.6823C17.3496 16.4749 17.5172 16.3073 17.7246 16.3073H20.7257C20.9332 16.3073 21.1007 16.4749 21.1007 16.6823C21.1007 16.8896 20.9332 17.0573 20.7257 17.0573Z" fill="#666666"/>
               </g>
               <defs>
               <clipPath id="clip0_16425_307">
               <rect width="24" height="24" fill="white" transform="translate(0.466797 0.738037)"/>
               </clipPath>
               </defs>
            </svg>  
                  <p class="body-product__text">Hallway</p>
               </li>
            </ul>
         </div>`
      );
   } else {
      productItems[i].insertAdjacentHTML("beforeend",
         `<div class="insert">
      <ul class="body-product__list body-product__list_insert">
         <li class="body-product__item">
         <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_16425_249)">
         <path d="M4.91992 12.0491H11.0605C11.6004 12.0491 12.0933 12.2532 12.4668 12.5879C12.8403 12.2531 13.3332 12.0491 13.873 12.0491H20.0137V4.50853C20.0137 4.12204 19.7044 3.80043 19.318 3.79907C19.3121 3.79907 19.5579 3.79907 5.62305 3.79907C5.22292 3.79907 4.91992 4.1271 4.91992 4.50853V12.0491Z" fill="#666666"/>
         <path d="M13.1699 14.1584V15.7991H20.0137C20.0137 14.7605 20.0137 14.5472 20.0137 13.4553H13.873C13.4853 13.4553 13.1699 13.7707 13.1699 14.1584Z" fill="#666666"/>
         <path d="M22.194 8.67515C21.7606 8.68865 21.4199 9.05221 21.4199 9.4858C21.4199 9.59708 21.4199 16.9016 21.4199 16.5022C21.4199 16.8905 21.1051 17.2053 20.7168 17.2053C20.1547 17.2053 3.68303 17.2053 4.2168 17.2053C3.82848 17.2053 3.51367 16.8905 3.51367 16.5022C3.51367 16.2428 3.51367 9.41816 3.51367 9.4858C3.51367 9.05221 3.17303 8.68865 2.73962 8.67515C1.49041 8.63624 0.466797 9.63561 0.466797 10.8772V18.0959C0.466797 19.2609 1.41119 20.2053 2.57617 20.2053H3.51367V20.9823C3.51367 21.3609 3.80463 21.6867 4.18281 21.7045C4.58659 21.7236 4.91992 21.4018 4.91992 21.0022V20.2053H20.0137V20.9823C20.0137 21.3609 20.3046 21.6867 20.6828 21.7045C21.0866 21.7236 21.4199 21.4018 21.4199 21.0022V20.2053H22.3574C23.5224 20.2053 24.4668 19.2609 24.4668 18.0959V10.9168C24.4668 9.61879 23.4352 8.63647 22.194 8.67515Z" fill="#666666"/>
         <path d="M11.7637 14.1584C11.7637 13.7707 11.4482 13.4553 11.0605 13.4553H4.91992V15.7991H11.7637V14.1584Z" fill="#666666"/>
         </g>
         <defs>
         <clipPath id="clip0_16425_249">
         <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
         </clipPath>
         </defs>
      </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
         <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_16425_260)">
         <path d="M0.472656 24.7522H10.3586V19.083H0.472656V24.7522ZM2.63481 20.5511H8.24331V21.9567H2.63481V20.5511Z" fill="#666666"/>
         <path d="M0.472656 17.6774H10.3586V12.1019H0.472656V17.6774ZM2.63481 13.5975H8.24331V15.0031H2.63481V13.5975Z" fill="#666666"/>
         <path d="M11.7637 24.7522H24.4608V12.1019H11.7637V24.7522ZM20.1972 13.5975H21.6028V15.0378H20.1972V13.5975ZM17.386 13.5975H18.7916V15.0378H17.386V13.5975ZM14.5749 13.5975H15.9805V15.0378H14.5749V13.5975ZM14.5749 16.2952H21.6028V21.9411H14.5749V16.2952Z" fill="#666666"/>
         <path d="M20.1972 3.99271V0.752197H15.9805V3.99506L11.7637 6.8062V9.29071H24.4608V6.80385L20.1972 3.99271Z" fill="#666666"/>
         </g>
         <defs>
         <clipPath id="clip0_16425_260">
         <rect width="24" height="24" fill="white" transform="translate(0.466797 0.752197)"/>
         </clipPath>
         </defs>
      </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
         <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_16425_273)">
         <path d="M20.0874 10.3104C20.3683 10.3104 20.596 10.0827 20.596 9.80181V8.17036C20.596 7.88946 20.3683 7.66177 20.0874 7.66177L19.3636 7.66618L16.9883 10.3104H20.0874Z" fill="#666666"/>
         <path d="M4.84257 10.3102H7.96608L5.54964 7.66168H4.84257C4.56167 7.66168 4.33398 7.88937 4.33398 8.17027V9.80159C4.33398 10.0825 4.56167 10.3102 4.84257 10.3102Z" fill="#666666"/>
         <path d="M12.7573 12.933L17.4705 7.66177H7.46094L12.2516 12.935C12.3874 13.0845 12.6227 13.0836 12.7573 12.933Z" fill="#666666"/>
         <path d="M14.0849 20.351H13.2093V14.4323C12.9993 14.5536 12.7593 14.6198 12.5117 14.6208C12.5098 14.6208 12.508 14.6208 12.5061 14.6208C12.2567 14.6208 12.0146 14.5545 11.8029 14.4323V20.351H10.8477C10.4594 20.351 10.1445 20.6658 10.1445 21.0541C10.1445 21.4425 10.4594 21.7573 10.8477 21.7573H14.0849C14.4733 21.7573 14.7881 21.4425 14.7881 21.0541C14.7881 20.6658 14.4732 20.351 14.0849 20.351Z" fill="#666666"/>
         <path d="M6.39649 12.2667H1.87315V3.93151C1.87315 3.54317 1.55831 3.22833 1.16997 3.22833C0.781632 3.22833 0.466797 3.54317 0.466797 3.93151V21.1104C0.466797 21.4988 0.781632 21.8136 1.16997 21.8136C1.55831 21.8136 1.87315 21.4988 1.87315 21.1104V15.8581H6.98585V21.1104C6.98585 21.4988 7.30068 21.8136 7.68902 21.8136C8.07736 21.8136 8.3922 21.4988 8.3922 21.1104V14.2624C8.3922 13.1619 7.49691 12.2667 6.39649 12.2667Z" fill="#666666"/>
         <path d="M23.7639 3.22833C23.3756 3.22833 23.0607 3.54317 23.0607 3.93151V12.2667H18.6422C17.5417 12.2667 16.6465 13.162 16.6465 14.2624V21.1104C16.6465 21.4988 16.9613 21.8136 17.3497 21.8136C17.738 21.8136 18.0528 21.4988 18.0528 21.1104V15.8569H23.0608V21.1104C23.0608 21.4988 23.3756 21.8136 23.764 21.8136C24.1523 21.8136 24.4671 21.4988 24.4671 21.1104V3.93151C24.4671 3.54317 24.1523 3.22833 23.7639 3.22833Z" fill="#666666"/>
         </g>
         <defs>
         <clipPath id="clip0_16425_273">
         <rect width="24" height="24" fill="white" transform="translate(0.466797 0.520996)"/>
         </clipPath>
         </defs>
      </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
               <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16598_285)">
                  <path d="M24.4668 7.20276V2.51526C24.4668 1.61062 23.7308 0.874634 22.8262 0.874634H14.3887C13.484 0.874634 12.748 1.61062 12.748 2.51526V7.20276C12.748 8.1074 13.484 8.84338 14.3887 8.84338H16.3007L15.9491 10.2496H12.0137L11.8709 7.10699C11.8195 5.97787 10.8939 5.09338 9.76366 5.09338H5.88873C4.75848 5.09338 3.83289 5.97787 3.78152 7.10699L3.63869 10.2496H1.16992C0.781609 10.2496 0.466797 10.5644 0.466797 10.9528V23.1403C0.466797 23.5286 0.781609 23.8434 1.16992 23.8434C1.55823 23.8434 1.87305 23.5286 1.87305 23.1403V14.4684H3.47102C3.5222 15.0472 3.76516 15.5869 4.17442 16.0152C4.59058 16.4506 5.12955 16.7196 5.71684 16.7917V17.984C5.71684 18.8091 6.32913 19.4935 7.12309 19.6076V21.2974L4.3518 22.0892C4.04987 22.1754 3.8418 22.4513 3.8418 22.7653V24.1715C3.8418 24.5598 4.15661 24.8746 4.54492 24.8746C4.93323 24.8746 5.24805 24.5598 5.24805 24.1715V23.2956L7.12305 22.7599V23.7028C7.12305 24.0911 7.43786 24.4059 7.82617 24.4059C8.21448 24.4059 8.5293 24.0911 8.5293 23.7028V22.7599L10.4043 23.2957V24.1715C10.4043 24.5598 10.7191 24.8746 11.1074 24.8746C11.4957 24.8746 11.8105 24.5598 11.8105 24.1715V22.7653C11.8105 22.4513 11.6025 22.1754 11.3006 22.0892L8.5293 21.2974V19.6077C9.32327 19.4936 9.93555 18.8091 9.93555 17.9841V16.7918C10.5228 16.7196 11.0618 16.4507 11.478 16.0152C11.8872 15.587 12.1302 15.0473 12.1814 14.4684H13.6855V23.1403C13.6855 23.5286 14.0004 23.8434 14.3887 23.8434C14.777 23.8434 15.0918 23.5286 15.0918 23.1403V21.0309H23.0605V23.1403C23.0605 23.5286 23.3754 23.8434 23.7637 23.8434C24.152 23.8434 24.4668 23.5286 24.4668 23.1403V10.9528C24.4668 10.5644 24.152 10.2496 23.7637 10.2496H21.2658L20.9142 8.84338H22.8262C23.7308 8.84338 24.4668 8.1074 24.4668 7.20276ZM3.51081 13.0621H1.87305V11.6559H3.57475L3.51081 13.0621ZM8.5293 17.984C8.5293 18.1132 8.42416 18.2184 8.29492 18.2184H7.35742C7.22819 18.2184 7.12305 18.1132 7.12305 17.984V16.8121H8.5293V17.984ZM10.4613 15.0436C10.238 15.2772 9.93714 15.4059 9.61403 15.4059H6.03836C5.71525 15.4059 5.41436 15.2772 5.19114 15.0436C4.96788 14.81 4.85303 14.5035 4.8677 14.1808L5.18631 7.17079C5.20342 6.79448 5.51195 6.49963 5.88869 6.49963H9.76361C10.1404 6.49963 10.4489 6.79448 10.466 7.17084L10.7846 14.1808C10.7994 14.5036 10.6845 14.81 10.4613 15.0436ZM23.0605 19.6246H15.0918V14.4684H23.0605V19.6246ZM23.0605 11.6559V13.0621H12.1415L12.0776 11.6559H23.0605ZM17.3986 10.2496L17.7501 8.84338H19.4647L19.8162 10.2496H17.3986ZM14.3887 7.43713C14.2594 7.43713 14.1543 7.33199 14.1543 7.20276V2.51526C14.1543 2.38602 14.2594 2.28088 14.3887 2.28088H22.8262C22.9554 2.28088 23.0605 2.38602 23.0605 2.51526V7.20276C23.0605 7.33199 22.9554 7.43713 22.8262 7.43713H14.3887Z" fill="#666"/>
                  <path d="M17.6699 17.2809H20.4824C20.8707 17.2809 21.1855 16.9661 21.1855 16.5778C21.1855 16.1894 20.8707 15.8746 20.4824 15.8746H17.6699C17.2816 15.8746 16.9668 16.1894 16.9668 16.5778C16.9668 16.9661 17.2816 17.2809 17.6699 17.2809Z" fill="#666"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_16598_285">
                  <rect width="24" height="24" fill="white" transform="translate(0.466797 0.874634)"/>
                  </clipPath>
                  </defs>
               </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
         <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_16425_295)">
         <path d="M2.45861 13.5139H22.4752C23.3002 13.5139 23.9689 12.8451 23.9689 12.0201C23.9689 11.1951 23.3002 10.5264 22.4752 10.5264H2.45861C1.63361 10.5264 0.964844 11.1951 0.964844 12.0201C0.964797 12.8451 1.63361 13.5139 2.45861 13.5139Z" fill="#666666"/>
         <path d="M13.9606 7.30438C13.5246 7.30438 13.1699 7.65904 13.1699 8.09502V9.12004H19.2889V8.09502C19.2889 7.65904 18.9343 7.30438 18.4983 7.30438H13.9606Z" fill="#666666"/>
         <path d="M4.23733 8.09508C4.23733 6.88369 5.22283 5.89819 6.43422 5.89819H10.972C11.5484 5.89819 12.0734 6.12169 12.4657 6.48619C12.858 6.12169 13.383 5.89819 13.9595 5.89819H18.4972C19.7086 5.89819 20.6941 6.88369 20.6941 8.09508V9.12009H22.9764V4.27697C22.9764 3.45197 22.3076 2.7832 21.4826 2.7832H3.44884C2.62384 2.7832 1.95508 3.45197 1.95508 4.27697V9.12009H4.23733V8.09508Z" fill="#666666"/>
         <path d="M6.43517 7.30438C5.99919 7.30438 5.64453 7.65904 5.64453 8.09502V9.12004H11.7635V8.09502C11.7635 7.65904 11.4089 7.30438 10.9729 7.30438H6.43517Z" fill="#666666"/>
         <path d="M0.466797 14.9201V21.3897H1.87305V18.8257H23.0605V21.3897H24.4668V14.9201H0.466797Z" fill="#666666"/>
         </g>
         <defs>
         <clipPath id="clip0_16425_295">
         <rect width="24" height="24" fill="white" transform="translate(0.466797 0.0864258)"/>
         </clipPath>
         </defs>
      </svg>
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
         <li class="body-product__item">
         <svg class="body-product__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_16425_307)">
         <path d="M24.0918 8.05127H0.841797C0.634338 8.05127 0.466797 7.88373 0.466797 7.67627V6.17554C0.466797 5.96808 0.634338 5.80054 0.841797 5.80054H24.0918C24.2993 5.80054 24.4668 5.96808 24.4668 6.17554V7.67627C24.4668 7.88373 24.2993 8.05127 24.0918 8.05127ZM1.2168 7.30127H23.7168V6.55054H1.2168V7.30127Z" fill="#666666"/>
         <path d="M1.2168 19.683C1.00934 19.683 0.841797 19.5155 0.841797 19.308V7.7431C0.841797 7.53564 1.00934 7.3681 1.2168 7.3681C1.42426 7.3681 1.5918 7.53564 1.5918 7.7431V19.308C1.5918 19.5155 1.42426 19.683 1.2168 19.683Z" fill="#666666"/>
         <path d="M2.3418 19.683C2.13434 19.683 1.9668 19.5155 1.9668 19.308V7.7431C1.9668 7.53564 2.13434 7.3681 2.3418 7.3681C2.54926 7.3681 2.7168 7.53564 2.7168 7.7431V19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
         <path d="M22.5918 19.683C22.3843 19.683 22.2168 19.5155 22.2168 19.308V7.7431C22.2168 7.53564 22.3843 7.3681 22.5918 7.3681C22.7993 7.3681 22.9668 7.53564 22.9668 7.7431V19.308C22.9668 19.5155 22.7993 19.683 22.5918 19.683Z" fill="#666666"/>
         <path d="M23.7168 19.683C23.5093 19.683 23.3418 19.5155 23.3418 19.308V7.7431C23.3418 7.53564 23.5093 7.3681 23.7168 7.3681C23.9243 7.3681 24.0918 7.53564 24.0918 7.7431V19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
         <path d="M2.3418 19.683H1.2168C1.00934 19.683 0.841797 19.5155 0.841797 19.308C0.841797 19.1006 1.00934 18.933 1.2168 18.933H2.3418C2.54926 18.933 2.7168 19.1006 2.7168 19.308C2.7168 19.5155 2.54926 19.683 2.3418 19.683Z" fill="#666666"/>
         <path d="M23.7168 19.683H22.5918C22.3843 19.683 22.2168 19.5155 22.2168 19.308C22.2168 19.1006 22.3843 18.933 22.5918 18.933H23.7168C23.9243 18.933 24.0918 19.1006 24.0918 19.308C24.0918 19.5155 23.9243 19.683 23.7168 19.683Z" fill="#666666"/>
         <path d="M22.5918 13.3058H2.3418C2.13434 13.3058 1.9668 13.1381 1.9668 12.9308C1.9668 12.7234 2.13434 12.5558 2.3418 12.5558H22.5918C22.7993 12.5558 22.9668 12.7234 22.9668 12.9308C22.9668 13.1381 22.7993 13.3058 22.5918 13.3058Z" fill="#666666"/>
         <path d="M22.5918 14.4316H2.3418C2.13434 14.4316 1.9668 14.2639 1.9668 14.0566C1.9668 13.8491 2.13434 13.6816 2.3418 13.6816H22.5918C22.7993 13.6816 22.9668 13.8491 22.9668 14.0566C22.9668 14.2639 22.7993 14.4316 22.5918 14.4316Z" fill="#666666"/>
         <path d="M3.8418 13.3066C3.63434 13.3066 3.4668 13.1389 3.4668 12.9316C3.4668 11.8976 4.30762 11.0566 5.34143 11.0566C5.54871 11.0566 5.71643 11.2241 5.71643 11.4316C5.71643 11.6389 5.54871 11.8066 5.34143 11.8066C4.72162 11.8066 4.2168 12.3112 4.2168 12.9316C4.2168 13.1389 4.04907 13.3066 3.8418 13.3066Z" fill="#666666"/>
         <path d="M7.59143 13.3066C7.38397 13.3066 7.21643 13.1389 7.21643 12.9316C7.21643 12.3112 6.71161 11.8066 6.0918 11.8066C5.88452 11.8066 5.7168 11.6389 5.7168 11.4316C5.7168 11.2241 5.88452 11.0566 6.0918 11.0566C7.12561 11.0566 7.96643 11.8976 7.96643 12.9316C7.96643 13.1389 7.79889 13.3066 7.59143 13.3066Z" fill="#666666"/>
         <path d="M4.2168 12.3147C4.00934 12.3147 3.8418 12.147 3.8418 11.9397V9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658C4.42407 9.55658 4.5918 9.72412 4.5918 9.93158V11.9397C4.5918 12.147 4.42407 12.3147 4.2168 12.3147Z" fill="#666666"/>
         <path d="M7.21484 12.3147C7.00739 12.3147 6.83984 12.147 6.83984 11.9397V9.93158C6.83984 9.72412 7.00739 9.55658 7.21484 9.55658C7.42212 9.55658 7.58984 9.72412 7.58984 9.93158V11.9397C7.58984 12.147 7.42212 12.3147 7.21484 12.3147Z" fill="#666666"/>
         <path d="M4.9668 10.6823C4.75934 10.6823 4.5918 10.5146 4.5918 10.3073V9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658C5.17426 8.80658 5.3418 8.97412 5.3418 9.18158V10.3073C5.3418 10.5146 5.17426 10.6823 4.9668 10.6823Z" fill="#666666"/>
         <path d="M6.4668 9.55658H4.9668C4.75934 9.55658 4.5918 9.38885 4.5918 9.18158C4.5918 8.97412 4.75934 8.80658 4.9668 8.80658H6.4668C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158C6.8418 9.38885 6.67426 9.55658 6.4668 9.55658Z" fill="#666666"/>
         <path d="M6.4668 10.6823C6.25934 10.6823 6.0918 10.5146 6.0918 10.3073V9.18158C6.0918 8.97412 6.25934 8.80658 6.4668 8.80658C6.67426 8.80658 6.8418 8.97412 6.8418 9.18158V10.3073C6.8418 10.5146 6.67426 10.6823 6.4668 10.6823Z" fill="#666666"/>
         <path d="M4.96753 10.3066H4.2168C4.00934 10.3066 3.8418 10.1389 3.8418 9.93158C3.8418 9.72412 4.00934 9.55658 4.2168 9.55658H4.96753C5.17499 9.55658 5.34253 9.72412 5.34253 9.93158C5.34253 10.1389 5.17499 10.3066 4.96753 10.3066Z" fill="#666666"/>
         <path d="M7.21533 10.3066H6.4668C6.25934 10.3066 6.0918 10.1389 6.0918 9.93158C6.0918 9.72412 6.25934 9.55658 6.4668 9.55658H7.21533C7.42261 9.55658 7.59033 9.72412 7.59033 9.93158C7.59033 10.1389 7.42261 10.3066 7.21533 10.3066Z" fill="#666666"/>
         <path d="M6.09131 11.8066H5.33984C5.13239 11.8066 4.96484 11.6389 4.96484 11.4316C4.96484 11.2241 5.13239 11.0566 5.33984 11.0566H6.09131C6.29877 11.0566 6.46631 11.2241 6.46631 11.4316C6.46631 11.6389 6.29877 11.8066 6.09131 11.8066Z" fill="#666666"/>
         <path d="M8.7168 13.3066C8.50934 13.3066 8.3418 13.1389 8.3418 12.9316C8.3418 11.8976 9.18262 11.0566 10.2164 11.0566C10.4237 11.0566 10.5914 11.2241 10.5914 11.4316C10.5914 11.6389 10.4237 11.8066 10.2164 11.8066C9.59662 11.8066 9.0918 12.3112 9.0918 12.9316C9.0918 13.1389 8.92407 13.3066 8.7168 13.3066Z" fill="#666666"/>
         <path d="M12.4664 13.3066C12.259 13.3066 12.0914 13.1389 12.0914 12.9316C12.0914 12.3112 11.5866 11.8066 10.9668 11.8066C10.7595 11.8066 10.5918 11.6389 10.5918 11.4316C10.5918 11.2241 10.7595 11.0566 10.9668 11.0566C12.0006 11.0566 12.8414 11.8976 12.8414 12.9316C12.8414 13.1389 12.6739 13.3066 12.4664 13.3066Z" fill="#666666"/>
         <path d="M9.0918 12.3147C8.88434 12.3147 8.7168 12.147 8.7168 11.9397V9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658C9.29907 9.55658 9.4668 9.72412 9.4668 9.93158V11.9397C9.4668 12.147 9.29907 12.3147 9.0918 12.3147Z" fill="#666666"/>
         <path d="M12.0898 12.3147C11.8824 12.3147 11.7148 12.147 11.7148 11.9397V9.93158C11.7148 9.72412 11.8824 9.55658 12.0898 9.55658C12.2971 9.55658 12.4648 9.72412 12.4648 9.93158V11.9397C12.4648 12.147 12.2971 12.3147 12.0898 12.3147Z" fill="#666666"/>
         <path d="M9.8418 10.6823C9.63434 10.6823 9.4668 10.5146 9.4668 10.3073V9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658C10.0493 8.80658 10.2168 8.97412 10.2168 9.18158V10.3073C10.2168 10.5146 10.0493 10.6823 9.8418 10.6823Z" fill="#666666"/>
         <path d="M11.3418 9.55658H9.8418C9.63434 9.55658 9.4668 9.38885 9.4668 9.18158C9.4668 8.97412 9.63434 8.80658 9.8418 8.80658H11.3418C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158C11.7168 9.38885 11.5493 9.55658 11.3418 9.55658Z" fill="#666666"/>
         <path d="M11.3418 10.6823C11.1343 10.6823 10.9668 10.5146 10.9668 10.3073V9.18158C10.9668 8.97412 11.1343 8.80658 11.3418 8.80658C11.5493 8.80658 11.7168 8.97412 11.7168 9.18158V10.3073C11.7168 10.5146 11.5493 10.6823 11.3418 10.6823Z" fill="#666666"/>
         <path d="M9.84253 10.3066H9.0918C8.88434 10.3066 8.7168 10.1389 8.7168 9.93158C8.7168 9.72412 8.88434 9.55658 9.0918 9.55658H9.84253C10.05 9.55658 10.2175 9.72412 10.2175 9.93158C10.2175 10.1389 10.05 10.3066 9.84253 10.3066Z" fill="#666666"/>
         <path d="M12.0903 10.3066H11.3418C11.1343 10.3066 10.9668 10.1389 10.9668 9.93158C10.9668 9.72412 11.1343 9.55658 11.3418 9.55658H12.0903C12.2976 9.55658 12.4653 9.72412 12.4653 9.93158C12.4653 10.1389 12.2976 10.3066 12.0903 10.3066Z" fill="#666666"/>
         <path d="M10.9663 11.8066H10.2148C10.0074 11.8066 9.83984 11.6389 9.83984 11.4316C9.83984 11.2241 10.0074 11.0566 10.2148 11.0566H10.9663C11.1738 11.0566 11.3413 11.2241 11.3413 11.4316C11.3413 11.6389 11.1738 11.8066 10.9663 11.8066Z" fill="#666666"/>
         <path d="M12.4746 18.9323C12.2672 18.9323 12.0996 18.7646 12.0996 18.5573C12.0996 17.9366 12.6048 17.4316 13.2253 17.4316C13.4328 17.4316 13.6003 17.5991 13.6003 17.8066C13.6003 18.0139 13.4328 18.1816 13.2253 18.1816C13.0181 18.1816 12.8496 18.3499 12.8496 18.5573C12.8496 18.7646 12.6817 18.9323 12.4746 18.9323Z" fill="#666666"/>
         <path d="M16.2266 18.9323C16.0193 18.9323 15.8516 18.7646 15.8516 18.5573C15.8516 18.3502 15.6837 18.1823 15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073C15.1016 17.5999 15.2693 17.4323 15.4766 17.4323C16.0969 17.4323 16.6016 17.937 16.6016 18.5573C16.6016 18.7646 16.434 18.9323 16.2266 18.9323Z" fill="#666666"/>
         <path d="M16.2257 19.683H12.4746C12.2672 19.683 12.0996 19.5155 12.0996 19.308C12.0996 19.1006 12.2672 18.933 12.4746 18.933H16.2261C16.4335 18.933 16.6011 19.1006 16.6011 19.308C16.6011 19.5155 16.4332 19.683 16.2257 19.683Z" fill="#666666"/>
         <path d="M15.5061 18.1816H13.1953C12.988 18.1816 12.8203 18.0139 12.8203 17.8066C12.8203 17.5991 12.988 17.4316 13.1953 17.4316H15.5061C15.7136 17.4316 15.8811 17.5991 15.8811 17.8066C15.8811 18.0139 15.7136 18.1816 15.5061 18.1816Z" fill="#666666"/>
         <path d="M13.2246 18.1816C13.0172 18.1816 12.8496 18.0139 12.8496 17.8066V15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823C13.4321 15.1823 13.5996 15.3499 13.5996 15.5573V17.8066C13.5996 18.0139 13.4321 18.1816 13.2246 18.1816Z" fill="#666666"/>
         <path d="M15.4766 18.1823C15.2693 18.1823 15.1016 18.0146 15.1016 17.8073V15.5573C15.1016 15.3499 15.2693 15.1823 15.4766 15.1823C15.684 15.1823 15.8516 15.3499 15.8516 15.5573V17.8073C15.8516 18.0146 15.684 18.1823 15.4766 18.1823Z" fill="#666666"/>
         <path d="M12.4746 19.683C12.2672 19.683 12.0996 19.5155 12.0996 19.308V18.5573C12.0996 18.3499 12.2672 18.1823 12.4746 18.1823C12.6821 18.1823 12.8496 18.3499 12.8496 18.5573V19.308C12.8496 19.5155 12.6817 19.683 12.4746 19.683Z" fill="#666666"/>
         <path d="M16.2266 19.683C16.0193 19.683 15.8516 19.5155 15.8516 19.308V18.5573C15.8516 18.3499 16.0193 18.1823 16.2266 18.1823C16.434 18.1823 16.6016 18.3499 16.6016 18.5573V19.308C16.6016 19.5155 16.434 19.683 16.2266 19.683Z" fill="#666666"/>
         <path d="M15.4761 15.9323H13.2246C13.0172 15.9323 12.8496 15.7646 12.8496 15.5573C12.8496 15.3499 13.0172 15.1823 13.2246 15.1823H15.4761C15.6835 15.1823 15.8511 15.3499 15.8511 15.5573C15.8511 15.7646 15.6835 15.9323 15.4761 15.9323Z" fill="#666666"/>
         <path d="M15.8507 17.0573H12.8496C12.6422 17.0573 12.4746 16.8896 12.4746 16.6823C12.4746 16.4749 12.6422 16.3073 12.8496 16.3073H15.8507C16.0582 16.3073 16.2257 16.4749 16.2257 16.6823C16.2257 16.8896 16.0582 17.0573 15.8507 17.0573Z" fill="#666666"/>
         <path d="M17.3496 18.9323C17.1422 18.9323 16.9746 18.7646 16.9746 18.5573C16.9746 17.9366 17.4798 17.4316 18.1003 17.4316C18.3078 17.4316 18.4753 17.5991 18.4753 17.8066C18.4753 18.0139 18.3078 18.1816 18.1003 18.1816C17.8931 18.1816 17.7246 18.3499 17.7246 18.5573C17.7246 18.7646 17.5567 18.9323 17.3496 18.9323Z" fill="#666666"/>
         <path d="M21.1016 18.9323C20.8943 18.9323 20.7266 18.7646 20.7266 18.5573C20.7266 18.3502 20.5587 18.1823 20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073C19.9766 17.5999 20.1443 17.4323 20.3516 17.4323C20.9719 17.4323 21.4766 17.937 21.4766 18.5573C21.4766 18.7646 21.309 18.9323 21.1016 18.9323Z" fill="#666666"/>
         <path d="M21.1007 19.683H17.3496C17.1422 19.683 16.9746 19.5155 16.9746 19.308C16.9746 19.1006 17.1422 18.933 17.3496 18.933H21.1011C21.3085 18.933 21.4761 19.1006 21.4761 19.308C21.4761 19.5155 21.3082 19.683 21.1007 19.683Z" fill="#666666"/>
         <path d="M20.3811 18.1816H18.0703C17.863 18.1816 17.6953 18.0139 17.6953 17.8066C17.6953 17.5991 17.863 17.4316 18.0703 17.4316H20.3811C20.5886 17.4316 20.7561 17.5991 20.7561 17.8066C20.7561 18.0139 20.5886 18.1816 20.3811 18.1816Z" fill="#666666"/>
         <path d="M18.0996 18.1816C17.8922 18.1816 17.7246 18.0139 17.7246 17.8066V15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823C18.3071 15.1823 18.4746 15.3499 18.4746 15.5573V17.8066C18.4746 18.0139 18.3071 18.1816 18.0996 18.1816Z" fill="#666666"/>
         <path d="M20.3516 18.1823C20.1443 18.1823 19.9766 18.0146 19.9766 17.8073V15.5573C19.9766 15.3499 20.1443 15.1823 20.3516 15.1823C20.559 15.1823 20.7266 15.3499 20.7266 15.5573V17.8073C20.7266 18.0146 20.559 18.1823 20.3516 18.1823Z" fill="#666666"/>
         <path d="M17.3496 19.683C17.1422 19.683 16.9746 19.5155 16.9746 19.308V18.5573C16.9746 18.3499 17.1422 18.1823 17.3496 18.1823C17.5571 18.1823 17.7246 18.3499 17.7246 18.5573V19.308C17.7246 19.5155 17.5567 19.683 17.3496 19.683Z" fill="#666666"/>
         <path d="M21.1016 19.683C20.8943 19.683 20.7266 19.5155 20.7266 19.308V18.5573C20.7266 18.3499 20.8943 18.1823 21.1016 18.1823C21.309 18.1823 21.4766 18.3499 21.4766 18.5573V19.308C21.4766 19.5155 21.309 19.683 21.1016 19.683Z" fill="#666666"/>
         <path d="M20.3511 15.9323H18.0996C17.8922 15.9323 17.7246 15.7646 17.7246 15.5573C17.7246 15.3499 17.8922 15.1823 18.0996 15.1823H20.3511C20.5585 15.1823 20.7261 15.3499 20.7261 15.5573C20.7261 15.7646 20.5585 15.9323 20.3511 15.9323Z" fill="#666666"/>
         <path d="M20.7257 17.0573H17.7246C17.5172 17.0573 17.3496 16.8896 17.3496 16.6823C17.3496 16.4749 17.5172 16.3073 17.7246 16.3073H20.7257C20.9332 16.3073 21.1007 16.4749 21.1007 16.6823C21.1007 16.8896 20.9332 17.0573 20.7257 17.0573Z" fill="#666666"/>
         </g>
         <defs>
         <clipPath id="clip0_16425_307">
         <rect width="24" height="24" fill="white" transform="translate(0.466797 0.738037)"/>
         </clipPath>
         </defs>
      </svg>  
            <p class="body-product__text">Some furniture ${i}</p>
         </li>
      </ul>
   </div>`
      );
   }
}
