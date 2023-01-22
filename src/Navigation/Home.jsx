import React from "react";


export default function Home() {
  const HomeApi = [
    {
      id: 1,
      background:
        "https://miro.medium.com/max/720/1*qUJmYvNxthHTvAErWMnP_A.gif",
      source: "https://unsplash.com/photos/1KTy5J74FVk",
      title: "Roseline Magaghula",
      heading: "The Aim of the Portfolio",
      description:
        "Lorem ipsum dolor sit amet. Est unde veritatis et architecto voluptas eos consequatur enim in accusantium iusto. Non itaque architecto ea soluta commodi ab iste eligendi sit quas itaque sit dignissimos voluptas id consequuntur. Qui iusto libero aut voluptatem ratione et atque maxime qui quia fugiat qui assumenda veritatis. Qui impedit illo ad quibusdam iusto non totam inventore non voluptatem earum et ipsum commodi. Et vero quisquam nam aliquid alias eos voluptas optio non quia voluptate rem omnis itaque sed omnis consequatur aut molestiae provident. Ad nemo sunt ea perferendis enim aut consequatur consequuntur quo veritatis recusandae nam unde consequatur ad voluptatem deleniti non deserunt autem. Et unde voluptas qui Quis minima 33 recusandae iusto. Nam internos perspiciatis sed vitae mollitia hic autem aspernatur hic odio officiis.Ut totam quia in officiis totam sed obcaecati iusto et galisum possimus qui omnis voluptatem. Qui error galisum vel doloremque soluta eos aliquam nisi est nulla internos ex omnis voluptatum est fugit enim a atque obcaecati.",
    },
  ];

  return (
    <div className="home_container">
      {HomeApi.map((item) => (
        <div className="home--container_card" key={item}>
          <div className="home--container_info">
            <svg 
              className="description-heading"
              style={{}}
              width="987" 
              height="462" 
              viewBox="0 0 987 462" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M63.6612 33.2834C63.2351 28.9865 61.4063 25.6484 58.1747 23.2692C54.9432 20.8899 50.5575 19.7003 45.0178 19.7003C41.2536 19.7003 38.0753 20.233 35.483 21.2983C32.8906 22.3281 30.902 23.7663 29.517 25.6129C28.1676 27.4595 27.4929 29.5547 27.4929 31.8984C27.4219 33.8516 27.8303 35.5561 28.718 37.0121C29.6413 38.468 30.902 39.7287 32.5 40.794C34.098 41.8239 35.9446 42.7294 38.0398 43.5107C40.1349 44.2564 42.3722 44.8956 44.7514 45.4283L54.5526 47.772C59.3111 48.8374 63.679 50.2578 67.6562 52.0334C71.6335 53.8089 75.0781 55.9929 77.9901 58.5852C80.902 61.1776 83.157 64.2315 84.755 67.7472C86.3885 71.2628 87.223 75.2933 87.2585 79.8388C87.223 86.5149 85.5185 92.3033 82.1449 97.2038C78.8068 102.069 73.9773 105.851 67.6562 108.55C61.3707 111.213 53.7891 112.545 44.9112 112.545C36.1044 112.545 28.4339 111.195 21.8999 108.496C15.4013 105.798 10.3232 101.803 6.66548 96.5114C3.04332 91.1847 1.14347 84.5973 0.965909 76.7493H23.2848C23.5334 80.407 24.581 83.4609 26.4276 85.9112C28.3097 88.326 30.8132 90.1548 33.9382 91.3977C37.0987 92.6051 40.6676 93.2088 44.6449 93.2088C48.5511 93.2088 51.9425 92.6406 54.8189 91.5043C57.7308 90.3679 59.9858 88.7876 61.5838 86.7635C63.1818 84.7393 63.9808 82.4134 63.9808 79.7855C63.9808 77.3352 63.2528 75.2756 61.7969 73.6065C60.3764 71.9375 58.2813 70.517 55.5114 69.3452C52.777 68.1733 49.4212 67.108 45.4439 66.1491L33.5653 63.1662C24.3679 60.929 17.1058 57.4311 11.7791 52.6726C6.45241 47.9141 3.80682 41.5043 3.84233 33.4432C3.80682 26.8381 5.56463 21.0675 9.11577 16.1314C12.7024 11.1953 17.6207 7.34233 23.8707 4.57244C30.1207 1.80255 37.223 0.41761 45.1776 0.41761C53.2741 0.41761 60.3409 1.80255 66.3778 4.57244C72.4503 7.34233 77.1733 11.1953 80.5469 16.1314C83.9205 21.0675 85.6605 26.7848 85.767 33.2834H63.6612ZM125.837 1.90909V111H102.773V1.90909H125.837ZM236.06 1.90909V111H216.138L168.677 42.3388H167.878V111H144.814V1.90909H165.055L212.143 70.517H213.102V1.90909H236.06ZM255.116 111V1.90909H328.625V20.9254H278.181V46.9197H324.843V65.9361H278.181V91.9837H328.838V111H255.116ZM342.807 20.9254V1.90909H432.402V20.9254H399.004V111H376.206V20.9254H342.807ZM447.157 111V1.90909H470.222V46.9197H517.044V1.90909H540.055V111H517.044V65.9361H470.222V111H447.157ZM559.071 111V1.90909H632.58V20.9254H582.136V46.9197H628.798V65.9361H582.136V91.9837H632.793V111H559.071ZM650.917 1.90909H679.362L709.404 75.2045H710.683L740.725 1.90909H769.17V111H746.798V39.995H745.892L717.661 110.467H702.426L674.195 39.7287H673.289V111H650.917V1.90909ZM788.173 111V1.90909H831.852C839.877 1.90909 846.571 3.09872 851.934 5.47798C857.296 7.85724 861.326 11.1598 864.025 15.3857C866.724 19.576 868.074 24.4055 868.074 29.8743C868.074 34.1357 867.221 37.8821 865.517 41.1136C863.812 44.3097 861.468 46.9375 858.485 48.9972C855.538 51.0213 852.164 52.4595 848.365 53.3118V54.3771C852.52 54.5547 856.408 55.7266 860.03 57.8928C863.688 60.0589 866.653 63.0952 868.926 67.0014C871.199 70.8722 872.335 75.4886 872.335 80.8509C872.335 86.6392 870.897 91.8061 868.02 96.3516C865.179 100.862 860.971 104.43 855.396 107.058C849.821 109.686 842.949 111 834.782 111H788.173ZM811.238 92.1435H830.041C836.468 92.1435 841.156 90.9183 844.103 88.468C847.051 85.9822 848.525 82.6797 848.525 78.5604C848.525 75.5419 847.797 72.8786 846.341 70.5703C844.885 68.2621 842.807 66.451 840.108 65.1371C837.445 63.8232 834.267 63.1662 830.574 63.1662H811.238V92.1435ZM811.238 47.5589H828.336C831.497 47.5589 834.302 47.0085 836.752 45.9077C839.238 44.7713 841.191 43.1733 842.612 41.1136C844.068 39.054 844.796 36.5859 844.796 33.7095C844.796 29.7678 843.393 26.5895 840.588 24.1747C837.818 21.7599 833.876 20.5526 828.762 20.5526H811.238V47.5589ZM906.146 111H881.43L919.09 1.90909H948.813L986.42 111H961.704L934.378 26.8381H933.525L906.146 111ZM904.601 68.12H962.982V86.1243H904.601V68.12ZM16.8324 462V455.409L140.824 257.682H17.6562V251.091H148.651V257.682L24.6591 455.409H149.474V462H16.8324ZM236.907 462L178.825 251.091H185.827L241.026 451.702H241.85L295.401 251.091H304.464L358.015 451.702H358.839L414.038 251.091H421.04L362.958 462H353.896L300.344 261.389H299.521L245.969 462H236.907ZM429.202 462H422.199L497.583 251.091H506.645L582.029 462H575.026L502.526 259.33H501.702L429.202 462ZM453.094 384.145H551.134V390.736H453.094V384.145ZM782.562 251.091V462H775.971L631.795 263.449H630.971V462H624.38V251.091H630.971L775.147 449.642H775.971V251.091H782.562ZM848.394 462V251.091H960.851V257.682H854.985V353.25H954.672V359.841H854.985V455.409H963.735V462H848.394Z" fill="#D9D9D9"/>
            </svg>

            <svg
              className="description--sub-heading"
              style={{}}
              viewBox="0 0 72 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.579545 5V0.636364H3.1044V0.994318H0.977983V2.63707H2.90625V2.99503H0.977983V5H0.579545ZM7.00355 0.636364H7.40199V3.52557C7.40199 3.82244 7.33239 4.08807 7.19318 4.32244C7.05398 4.5554 6.86009 4.73935 6.61151 4.87429C6.36435 5.00781 6.0767 5.07457 5.74858 5.07457C5.42188 5.07457 5.13423 5.0071 4.88565 4.87216C4.63707 4.73722 4.44318 4.55327 4.30398 4.32031C4.16477 4.08736 4.09517 3.82244 4.09517 3.52557V0.636364H4.49361V3.49787C4.49361 3.7294 4.54545 3.93608 4.64915 4.1179C4.75284 4.2983 4.89844 4.44034 5.08594 4.54403C5.27486 4.64773 5.49574 4.69957 5.74858 4.69957C6.00142 4.69957 6.2223 4.64773 6.41122 4.54403C6.60014 4.44034 6.74574 4.2983 6.84801 4.1179C6.9517 3.93608 7.00355 3.7294 7.00355 3.49787V0.636364ZM8.56001 5V0.636364H8.95845V4.64205H11.038V5H8.56001ZM11.935 5V0.636364H12.3335V4.64205H14.413V5H11.935ZM16.4877 2.6392V2.99716H14.6724V2.6392H16.4877ZM19.8883 1.72727C19.8642 1.48437 19.7569 1.29119 19.5666 1.14773C19.3762 1.00426 19.1369 0.932528 18.8485 0.932528C18.6454 0.932528 18.4664 0.96733 18.3116 1.03693C18.1582 1.10653 18.0375 1.20312 17.9494 1.3267C17.8627 1.44886 17.8194 1.58807 17.8194 1.74432C17.8194 1.85938 17.8443 1.96023 17.894 2.04688C17.9437 2.13352 18.0105 2.2081 18.0943 2.2706C18.1795 2.33168 18.2733 2.38423 18.3755 2.42827C18.4792 2.4723 18.5836 2.50923 18.6887 2.53906L19.149 2.67116C19.2882 2.70952 19.4274 2.75852 19.5666 2.81818C19.7058 2.87784 19.8329 2.95312 19.948 3.04403C20.0645 3.13352 20.1575 3.24361 20.2271 3.37429C20.2981 3.50355 20.3336 3.65909 20.3336 3.84091C20.3336 4.07386 20.2733 4.28338 20.1525 4.46946C20.0318 4.65554 19.8585 4.80327 19.6326 4.91264C19.4068 5.0206 19.1362 5.07457 18.8208 5.07457C18.524 5.07457 18.2662 5.02557 18.0474 4.92756C17.8287 4.82812 17.6568 4.69105 17.5318 4.51634C17.4068 4.34162 17.3365 4.1392 17.3208 3.90909H17.7299C17.7441 4.08097 17.801 4.22656 17.9004 4.34588C17.9998 4.4652 18.1291 4.55611 18.2882 4.61861C18.4473 4.67969 18.6248 4.71023 18.8208 4.71023C19.0382 4.71023 19.2314 4.67401 19.4004 4.60156C19.5708 4.5277 19.7044 4.42543 19.801 4.29474C19.899 4.16264 19.948 4.00923 19.948 3.83452C19.948 3.68679 19.9096 3.56321 19.8329 3.46378C19.7562 3.36293 19.649 3.27841 19.5112 3.21023C19.3748 3.14205 19.2164 3.08168 19.036 3.02912L18.514 2.87571C18.1717 2.77344 17.9061 2.6321 17.7172 2.4517C17.5282 2.27131 17.4338 2.04119 17.4338 1.76136C17.4338 1.52699 17.4963 1.32102 17.6213 1.14347C17.7477 0.964489 17.9181 0.825284 18.1326 0.725852C18.3485 0.625 18.5907 0.574574 18.8592 0.574574C19.1305 0.574574 19.3706 0.62429 19.5794 0.723722C19.7882 0.823153 19.9537 0.960227 20.0758 1.13494C20.1994 1.30824 20.2654 1.50568 20.274 1.72727H19.8883ZM21.0282 0.994318V0.636364H24.1923V0.994318H22.8095V5H22.411V0.994318H21.0282ZM24.5859 5H24.1683L25.7557 0.636364H26.1818L27.7692 5H27.3516L25.9837 1.15412H25.9538L24.5859 5ZM24.8864 3.32741H27.0511V3.68537H24.8864V3.32741ZM31.7296 2H31.329C31.2992 1.85085 31.2452 1.71307 31.1671 1.58665C31.0904 1.45881 30.9938 1.3473 30.8773 1.25213C30.7608 1.15696 30.6287 1.0831 30.481 1.03054C30.3333 0.977983 30.1735 0.951704 30.0016 0.951704C29.726 0.951704 29.4746 1.02344 29.2473 1.1669C29.0215 1.31037 28.8404 1.52131 28.704 1.79972C28.5691 2.0767 28.5016 2.41619 28.5016 2.81818C28.5016 3.22301 28.5691 3.56392 28.704 3.84091C28.8404 4.1179 29.0215 4.32812 29.2473 4.47159C29.4746 4.61364 29.726 4.68466 30.0016 4.68466C30.1735 4.68466 30.3333 4.65838 30.481 4.60582C30.6287 4.55327 30.7608 4.48011 30.8773 4.38636C30.9938 4.29119 31.0904 4.17969 31.1671 4.05185C31.2452 3.92401 31.2992 3.78551 31.329 3.63636H31.7296C31.6941 3.83665 31.6273 4.02344 31.5293 4.19673C31.4327 4.36861 31.3091 4.51918 31.1586 4.64844C31.0094 4.7777 30.8375 4.87855 30.6429 4.95099C30.4483 5.02344 30.2346 5.05966 30.0016 5.05966C29.6351 5.05966 29.3098 4.96804 29.0257 4.7848C28.7417 4.60014 28.5186 4.3402 28.3567 4.00497C28.1962 3.66974 28.1159 3.27415 28.1159 2.81818C28.1159 2.36222 28.1962 1.96662 28.3567 1.63139C28.5186 1.29616 28.7417 1.03693 29.0257 0.853693C29.3098 0.669034 29.6351 0.576704 30.0016 0.576704C30.2346 0.576704 30.4483 0.612926 30.6429 0.685369C30.8375 0.756392 31.0094 0.857244 31.1586 0.987926C31.3091 1.11719 31.4327 1.26776 31.5293 1.43963C31.6273 1.61151 31.6941 1.7983 31.7296 2ZM32.6655 5V0.636364H33.0639V2.98651H33.1023L35.233 0.636364H35.7571L33.8928 2.65412L35.7486 5H35.2628L33.6456 2.93111L33.0639 3.5831V5H32.6655ZM39.4751 5H38.1967V0.636364H39.5518C39.968 0.636364 40.3239 0.723011 40.6193 0.896307C40.9162 1.0696 41.1435 1.31818 41.3011 1.64205C41.4588 1.96591 41.5376 2.3544 41.5376 2.80753C41.5376 3.26491 41.4567 3.65767 41.2947 3.9858C41.1342 4.3125 40.8999 4.56321 40.5916 4.73793C40.2848 4.91264 39.9126 5 39.4751 5ZM38.5952 4.64205H39.4517C39.8267 4.64205 40.1406 4.56818 40.3935 4.42045C40.6463 4.27273 40.8359 4.06179 40.9624 3.78764C41.0888 3.51349 41.152 3.18679 41.152 2.80753C41.1506 2.43111 41.0881 2.10724 40.9645 1.83594C40.8423 1.56463 40.6605 1.35653 40.419 1.21165C40.179 1.06676 39.8821 0.994318 39.5284 0.994318H38.5952V4.64205ZM42.5034 5V0.636364H45.0346V0.994318H42.9018V2.63707H44.9004V2.99503H42.9018V4.64205H45.0772V5H42.5034ZM46.0723 0.636364L47.4359 4.48224H47.4743L48.8379 0.636364H49.2555L47.6681 5H47.242L45.6547 0.636364H46.0723ZM50.0034 5V0.636364H52.5346V0.994318H50.4018V2.63707H52.4004V2.99503H50.4018V4.64205H52.5772V5H50.0034ZM53.5659 5V0.636364H53.9643V4.64205H56.0439V5H53.5659ZM60.3484 2.81818C60.3484 3.27273 60.2674 3.66832 60.1055 4.00497C59.9435 4.3402 59.7205 4.60014 59.4364 4.7848C59.1538 4.96804 58.8285 5.05966 58.4606 5.05966C58.0927 5.05966 57.7667 4.96804 57.4826 4.7848C57.1999 4.60014 56.9776 4.3402 56.8157 4.00497C56.6552 3.66832 56.5749 3.27273 56.5749 2.81818C56.5749 2.36364 56.6552 1.96875 56.8157 1.63352C56.9776 1.29687 57.2006 1.03693 57.4847 0.853693C57.7688 0.669034 58.0941 0.576704 58.4606 0.576704C58.8285 0.576704 59.1538 0.669034 59.4364 0.853693C59.7205 1.03693 59.9435 1.29687 60.1055 1.63352C60.2674 1.96875 60.3484 2.36364 60.3484 2.81818ZM59.9606 2.81818C59.9606 2.42756 59.8952 2.09304 59.7646 1.81463C59.6339 1.5348 59.4556 1.32102 59.2298 1.1733C59.0039 1.02557 58.7475 0.951704 58.4606 0.951704C58.1751 0.951704 57.9194 1.02557 57.6935 1.1733C57.4677 1.32102 57.2887 1.53409 57.1566 1.8125C57.0259 2.09091 56.9606 2.42614 56.9606 2.81818C56.9606 3.20881 57.0259 3.54332 57.1566 3.82173C57.2873 4.10014 57.4656 4.31392 57.6914 4.46307C57.9173 4.6108 58.1737 4.68466 58.4606 4.68466C58.7475 4.68466 59.0039 4.6108 59.2298 4.46307C59.457 4.31534 59.636 4.10227 59.7667 3.82386C59.8974 3.54403 59.962 3.20881 59.9606 2.81818ZM61.312 5V0.636364H62.7203C63.03 0.636364 63.2885 0.696023 63.4959 0.815341C63.7047 0.933239 63.8617 1.09375 63.9668 1.29688C64.0733 1.5 64.1266 1.72869 64.1266 1.98295C64.1266 2.23722 64.074 2.46662 63.9689 2.67116C63.8638 2.87429 63.7076 3.03551 63.5002 3.15483C63.2928 3.27273 63.035 3.33168 62.7267 3.33168H61.6188V2.97372H62.7161C62.9448 2.97372 63.1344 2.93111 63.285 2.84588C63.4355 2.75923 63.5478 2.64134 63.6216 2.49219C63.6969 2.34304 63.7346 2.1733 63.7346 1.98295C63.7346 1.79261 63.6969 1.62287 63.6216 1.47372C63.5478 1.32457 63.4348 1.20739 63.2828 1.12216C63.1323 1.03693 62.9412 0.994318 62.7097 0.994318H61.7104V5H61.312ZM65.062 5V0.636364H67.5932V0.994318H65.4604V2.63707H67.459V2.99503H65.4604V4.64205H67.6358V5H65.062ZM68.6245 5V0.636364H70.0328C70.3425 0.636364 70.601 0.692472 70.8084 0.804688C71.0172 0.915483 71.1742 1.0696 71.2793 1.26705C71.3858 1.46307 71.4391 1.68821 71.4391 1.94247C71.4391 2.19673 71.3858 2.42116 71.2793 2.61577C71.1742 2.81037 71.0179 2.96236 70.8105 3.07173C70.6032 3.18111 70.3461 3.2358 70.0392 3.2358H68.8397V2.87145H70.0286C70.2559 2.87145 70.4448 2.83381 70.5953 2.75852C70.7473 2.68324 70.8603 2.57599 70.9341 2.43679C71.0094 2.29759 71.0471 2.13281 71.0471 1.94247C71.0471 1.75213 71.0094 1.58594 70.9341 1.44389C70.8588 1.30043 70.7452 1.18963 70.5932 1.11151C70.4426 1.03338 70.2523 0.994318 70.0222 0.994318H69.0229V5H68.6245ZM70.5485 3.03125L71.6223 5H71.1621L70.0989 3.03125H70.5485Z"
                fill="white"
              />
            </svg>
            {/*<svg
              style={{
                //position: "relative",
                //left: "30",
                //bottom: "725",
                width: "600",
                height: "110",
              }}
              viewBox="0 0 168 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.426136 1.79403V0.272727H7.59375V1.79403H4.92188V9H3.09801V1.79403H0.426136ZM8.77415 9V0.272727H10.6193V3.87358H14.3651V0.272727H16.206V9H14.3651V5.39489H10.6193V9H8.77415ZM17.7273 9V0.272727H23.608V1.79403H19.5724V3.87358H23.3054V5.39489H19.5724V7.47869H23.625V9H17.7273ZM29.3565 9H27.3793L30.392 0.272727H32.7699L35.7784 9H33.8011L31.6151 2.26705H31.5469L29.3565 9ZM29.233 5.5696H33.9034V7.00994H29.233V5.5696ZM38.674 0.272727V9H36.8288V0.272727H38.674ZM40.1921 0.272727H42.4677L44.8711 6.13636H44.9734L47.3768 0.272727H49.6523V9H47.8626V3.3196H47.7901L45.5316 8.95739H44.3129L42.0543 3.2983H41.9819V9H40.1921V0.272727ZM61.9698 4.63636C61.9698 5.58807 61.7894 6.39773 61.4286 7.06534C61.0707 7.73295 60.582 8.2429 59.9627 8.59517C59.3462 8.9446 58.6531 9.11932 57.8832 9.11932C57.1076 9.11932 56.4116 8.94318 55.7951 8.59091C55.1786 8.23864 54.6914 7.72869 54.3335 7.06108C53.9755 6.39347 53.7965 5.58523 53.7965 4.63636C53.7965 3.68466 53.9755 2.875 54.3335 2.20739C54.6914 1.53977 55.1786 1.03125 55.7951 0.681818C56.4116 0.329545 57.1076 0.153409 57.8832 0.153409C58.6531 0.153409 59.3462 0.329545 59.9627 0.681818C60.582 1.03125 61.0707 1.53977 61.4286 2.20739C61.7894 2.875 61.9698 3.68466 61.9698 4.63636ZM60.0991 4.63636C60.0991 4.01989 60.0067 3.5 59.8221 3.0767C59.6403 2.65341 59.3832 2.33239 59.0508 2.11364C58.7184 1.89489 58.3292 1.78551 57.8832 1.78551C57.4371 1.78551 57.0479 1.89489 56.7156 2.11364C56.3832 2.33239 56.1246 2.65341 55.94 3.0767C55.7582 3.5 55.6673 4.01989 55.6673 4.63636C55.6673 5.25284 55.7582 5.77273 55.94 6.19602C56.1246 6.61932 56.3832 6.94034 56.7156 7.15909C57.0479 7.37784 57.4371 7.48722 57.8832 7.48722C58.3292 7.48722 58.7184 7.37784 59.0508 7.15909C59.3832 6.94034 59.6403 6.61932 59.8221 6.19602C60.0067 5.77273 60.0991 5.25284 60.0991 4.63636ZM63.3366 9V0.272727H69.1151V1.79403H65.1818V3.87358H68.7315V5.39489H65.1818V9H63.3366ZM72.8011 1.79403V0.272727H79.9688V1.79403H77.2969V9H75.473V1.79403H72.8011ZM81.1491 9V0.272727H82.9943V3.87358H86.7401V0.272727H88.581V9H86.7401V5.39489H82.9943V9H81.1491ZM90.1023 9V0.272727H95.983V1.79403H91.9474V3.87358H95.6804V5.39489H91.9474V7.47869H96V9H90.1023ZM100.227 9V0.272727H103.67C104.332 0.272727 104.896 0.399148 105.362 0.651989C105.828 0.901989 106.183 1.25 106.428 1.69602C106.675 2.1392 106.798 2.65057 106.798 3.23011C106.798 3.80966 106.673 4.32102 106.423 4.7642C106.173 5.20739 105.811 5.55256 105.337 5.79972C104.865 6.04687 104.294 6.17045 103.624 6.17045H101.429V4.69176H103.325C103.68 4.69176 103.973 4.63068 104.203 4.50852C104.436 4.38352 104.609 4.21165 104.723 3.9929C104.839 3.77131 104.898 3.51705 104.898 3.23011C104.898 2.94034 104.839 2.6875 104.723 2.47159C104.609 2.25284 104.436 2.08381 104.203 1.96449C103.97 1.84233 103.675 1.78125 103.317 1.78125H102.072V9H100.227ZM116.017 4.63636C116.017 5.58807 115.836 6.39773 115.475 7.06534C115.118 7.73295 114.629 8.2429 114.01 8.59517C113.393 8.9446 112.7 9.11932 111.93 9.11932C111.154 9.11932 110.458 8.94318 109.842 8.59091C109.225 8.23864 108.738 7.72869 108.38 7.06108C108.022 6.39347 107.843 5.58523 107.843 4.63636C107.843 3.68466 108.022 2.875 108.38 2.20739C108.738 1.53977 109.225 1.03125 109.842 0.681818C110.458 0.329545 111.154 0.153409 111.93 0.153409C112.7 0.153409 113.393 0.329545 114.01 0.681818C114.629 1.03125 115.118 1.53977 115.475 2.20739C115.836 2.875 116.017 3.68466 116.017 4.63636ZM114.146 4.63636C114.146 4.01989 114.054 3.5 113.869 3.0767C113.687 2.65341 113.43 2.33239 113.098 2.11364C112.765 1.89489 112.376 1.78551 111.93 1.78551C111.484 1.78551 111.095 1.89489 110.762 2.11364C110.43 2.33239 110.172 2.65341 109.987 3.0767C109.805 3.5 109.714 4.01989 109.714 4.63636C109.714 5.25284 109.805 5.77273 109.987 6.19602C110.172 6.61932 110.43 6.94034 110.762 7.15909C111.095 7.37784 111.484 7.48722 111.93 7.48722C112.376 7.48722 112.765 7.37784 113.098 7.15909C113.43 6.94034 113.687 6.61932 113.869 6.19602C114.054 5.77273 114.146 5.25284 114.146 4.63636ZM117.384 9V0.272727H120.827C121.486 0.272727 122.048 0.390625 122.514 0.62642C122.983 0.859375 123.339 1.19034 123.584 1.61932C123.831 2.04545 123.955 2.54687 123.955 3.12358C123.955 3.70312 123.83 4.2017 123.58 4.61932C123.33 5.03409 122.967 5.35227 122.493 5.57386C122.021 5.79545 121.45 5.90625 120.78 5.90625H118.474V4.4233H120.482C120.834 4.4233 121.126 4.375 121.359 4.27841C121.592 4.18182 121.766 4.03693 121.879 3.84375C121.996 3.65057 122.054 3.41051 122.054 3.12358C122.054 2.83381 121.996 2.58949 121.879 2.39062C121.766 2.19176 121.591 2.04119 121.355 1.93892C121.122 1.83381 120.828 1.78125 120.473 1.78125H119.229V9H117.384ZM122.097 5.02841L124.266 9H122.229L120.107 5.02841H122.097ZM124.926 1.79403V0.272727H132.094V1.79403H129.422V9H127.598V1.79403H124.926ZM133.274 9V0.272727H139.053V1.79403H135.119V3.87358H138.669V5.39489H135.119V9H133.274ZM148.314 4.63636C148.314 5.58807 148.133 6.39773 147.772 7.06534C147.414 7.73295 146.926 8.2429 146.306 8.59517C145.69 8.9446 144.997 9.11932 144.227 9.11932C143.451 9.11932 142.755 8.94318 142.139 8.59091C141.522 8.23864 141.035 7.72869 140.677 7.06108C140.319 6.39347 140.14 5.58523 140.14 4.63636C140.14 3.68466 140.319 2.875 140.677 2.20739C141.035 1.53977 141.522 1.03125 142.139 0.681818C142.755 0.329545 143.451 0.153409 144.227 0.153409C144.997 0.153409 145.69 0.329545 146.306 0.681818C146.926 1.03125 147.414 1.53977 147.772 2.20739C148.133 2.875 148.314 3.68466 148.314 4.63636ZM146.443 4.63636C146.443 4.01989 146.35 3.5 146.166 3.0767C145.984 2.65341 145.727 2.33239 145.395 2.11364C145.062 1.89489 144.673 1.78551 144.227 1.78551C143.781 1.78551 143.392 1.89489 143.059 2.11364C142.727 2.33239 142.468 2.65341 142.284 3.0767C142.102 3.5 142.011 4.01989 142.011 4.63636C142.011 5.25284 142.102 5.77273 142.284 6.19602C142.468 6.61932 142.727 6.94034 143.059 7.15909C143.392 7.37784 143.781 7.48722 144.227 7.48722C144.673 7.48722 145.062 7.37784 145.395 7.15909C145.727 6.94034 145.984 6.61932 146.166 6.19602C146.35 5.77273 146.443 5.25284 146.443 4.63636ZM149.68 9V0.272727H151.526V7.47869H155.267V9H149.68ZM158.334 0.272727V9H156.489V0.272727H158.334ZM167.872 4.63636C167.872 5.58807 167.692 6.39773 167.331 7.06534C166.973 7.73295 166.484 8.2429 165.865 8.59517C165.249 8.9446 164.555 9.11932 163.786 9.11932C163.01 9.11932 162.314 8.94318 161.697 8.59091C161.081 8.23864 160.594 7.72869 160.236 7.06108C159.878 6.39347 159.699 5.58523 159.699 4.63636C159.699 3.68466 159.878 2.875 160.236 2.20739C160.594 1.53977 161.081 1.03125 161.697 0.681818C162.314 0.329545 163.01 0.153409 163.786 0.153409C164.555 0.153409 165.249 0.329545 165.865 0.681818C166.484 1.03125 166.973 1.53977 167.331 2.20739C167.692 2.875 167.872 3.68466 167.872 4.63636ZM166.001 4.63636C166.001 4.01989 165.909 3.5 165.724 3.0767C165.543 2.65341 165.286 2.33239 164.953 2.11364C164.621 1.89489 164.232 1.78551 163.786 1.78551C163.339 1.78551 162.95 1.89489 162.618 2.11364C162.286 2.33239 162.027 2.65341 161.842 3.0767C161.661 3.5 161.57 4.01989 161.57 4.63636C161.57 5.25284 161.661 5.77273 161.842 6.19602C162.027 6.61932 162.286 6.94034 162.618 7.15909C162.95 7.37784 163.339 7.48722 163.786 7.48722C164.232 7.48722 164.621 7.37784 164.953 7.15909C165.286 6.94034 165.543 6.61932 165.724 6.19602C165.909 5.77273 166.001 5.25284 166.001 4.63636Z"
                fill="black"
              />
            </svg>
            {/*<h2 className="description-heading">{item.heading}</h2>*/}
            {/*<p className="description-text">{item.description}</p>*/}
          </div>
          <div className="home--container_imgs" key={item}>
            <img
              alt="Woman in black and white"
              src={item.background}
              className="profile-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
