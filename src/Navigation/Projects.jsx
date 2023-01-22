import React from "react";

const Contact = () => {
  const projectsApis = [
    {
      id: 1,
      title: "My Projects",
      header: "Qu'est-ce que le Lorem Ipsum?",
      description:
        "Lorem ipsum dolor sit amet. Est unde veritatis et architecto voluptas eos consequatur enim in accusantium iusto. Non itaque architecto ea soluta commodi ab iste eligendi sit quas itaque sit dignissimos voluptas id consequuntur. Qui iusto libero aut voluptatem ratione et atque maxime qui quia fugiat qui assumenda veritatis. Qui impedit illo ad quibusdam iusto non totam inventore non voluptatem earum et ipsum commodi. Et vero quisquam nam aliquid alias eos voluptas optio non quia voluptate rem omnis itaque sed omnis consequatur aut molestiae provident. Ad nemo sunt ea perferendis enim aut consequatur consequuntur quo veritatis recusandae nam unde consequatur ad voluptatem deleniti non deserunt autem. Et unde voluptas qui Quis minima 33 recusandae iusto. Nam internos perspiciatis sed vitae mollitia hic autem aspernatur hic odio officiis.Ut totam quia in officiis totam sed obcaecati iusto et galisum possimus qui omnis voluptatem. Qui error galisum vel doloremque soluta eos aliquam nisi est nulla internos ex omnis voluptatum est fugit enim a atque obcaecati.",
      background:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      heading: "Project Name",
      content:
        "Lorem ipsum dolor sit amet. Est unde veritatis et architecto voluptas eos consequatur enim in accusantium iusto. Non itaque architecto ea soluta commodi ab iste eligendi sit quas itaque sit dignissimos voluptas id consequuntur. Qui iusto libero aut voluptatem ratione et atque maxime qui quia fugiat qui assumenda veritatis. Qui impedit illo ad quibusdam iusto non totam inventore non voluptatem earum et ipsum commodi. Et vero quisquam nam aliquid alias eos voluptas optio non quia voluptate rem omnis itaque sed omnis consequatur aut molestiae provident. Ad nemo sunt ea perferendis enim aut consequatur consequuntur quo veritatis recusandae nam unde consequatur ad voluptatem deleniti non deserunt autem. Et unde voluptas qui Quis minima 33 recusandae iusto. Nam internos perspiciatis sed vitae mollitia hic autem aspernatur hic odio officiis.Ut totam quia in officiis totam sed obcaecati iusto et galisum possimus qui omnis voluptatem. Qui error galisum vel doloremque soluta eos aliquam nisi est nulla internos ex omnis voluptatum est fugit enim a atque obcaecati.",
    },
  ];

  const projectApi = [
    {
      id: 2,
      background:
        "https://images.unsplash.com/photo-1556244573-c3686c0f0e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      heading: "Project Name",
      content:
        "Lorem ipsum dolor sit amet. Est unde veritatis et architecto voluptas eos consequatur enim in accusantium iusto. Non itaque architecto ea soluta commodi ab iste eligendi sit quas itaque sit dignissimos voluptas id consequuntur. Qui iusto libero aut voluptatem ratione et atque maxime qui quia fugiat qui assumenda veritatis. Qui impedit illo ad quibusdam iusto non totam inventore non voluptatem earum et ipsum commodi. Et vero quisquam nam aliquid alias eos voluptas optio non quia voluptate rem omnis itaque sed omnis consequatur aut molestiae provident. Ad nemo sunt ea perferendis enim aut consequatur consequuntur quo veritatis recusandae nam unde consequatur ad voluptatem deleniti non deserunt autem. Et unde voluptas qui Quis minima 33 recusandae iusto. Nam internos perspiciatis sed vitae mollitia hic autem aspernatur hic odio officiis.Ut totam quia in officiis totam sed obcaecati iusto et galisum possimus qui omnis voluptatem. Qui error galisum vel doloremque soluta eos aliquam nisi est nulla internos ex omnis voluptatum est fugit enim a atque obcaecati.",
    },
  ];

  const projectoApio = [
    {
      id: 3,
      background:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Project Name",
      content:
        "Lorem ipsum dolor sit amet. Est unde veritatis et architecto voluptas eos consequatur enim in accusantium iusto. Non itaque architecto ea soluta commodi ab iste eligendi sit quas itaque sit dignissimos voluptas id consequuntur. Qui iusto libero aut voluptatem ratione et atque maxime qui quia fugiat qui assumenda veritatis. Qui impedit illo ad quibusdam iusto non totam inventore non voluptatem earum et ipsum commodi. Et vero quisquam nam aliquid alias eos voluptas optio non quia voluptate rem omnis itaque sed omnis consequatur aut molestiae provident. Ad nemo sunt ea perferendis enim aut consequatur consequuntur quo veritatis recusandae nam unde consequatur ad voluptatem deleniti non deserunt autem. Et unde voluptas qui Quis minima 33 recusandae iusto. Nam internos perspiciatis sed vitae mollitia hic autem aspernatur hic odio officiis.Ut totam quia in officiis totam sed obcaecati iusto et galisum possimus qui omnis voluptatem. Qui error galisum vel doloremque soluta eos aliquam nisi est nulla internos ex omnis voluptatum est fugit enim a atque obcaecati.",
    },
  ];

  return (
    <div className="project_container">
      {projectsApis.map((item) => (
        <div className="project--container_card" key={item}>
          <div className="title--section">
            <svg
              className="project-heading"
              style={{}}
              viewBox="0 0 65 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.52841 0.90909H10.1136L18.125 20.4545H18.4659L26.4773 0.90909H34.0625V30H28.0966V11.0653H27.8551L20.3267 29.858H16.2642L8.7358 10.9943H8.49432V30H2.52841V0.90909ZM37.4254 0.90909H44.3146L50.9482 13.4375H51.2322L57.8658 0.90909H64.755L54.1442 19.7159V30H48.0362V19.7159L37.4254 0.90909ZM0.758523 45V36.2727H4.2017C4.86364 36.2727 5.42756 36.3991 5.89347 36.652C6.35938 36.902 6.71449 37.25 6.95881 37.696C7.20597 38.1392 7.32955 38.6506 7.32955 39.2301C7.32955 39.8097 7.20455 40.321 6.95455 40.7642C6.70455 41.2074 6.34233 41.5526 5.8679 41.7997C5.39631 42.0469 4.82528 42.1705 4.15483 42.1705H1.96023V40.6918H3.85653C4.21165 40.6918 4.50426 40.6307 4.73438 40.5085C4.96733 40.3835 5.14063 40.2116 5.25426 39.9929C5.37074 39.7713 5.42898 39.517 5.42898 39.2301C5.42898 38.9403 5.37074 38.6875 5.25426 38.4716C5.14063 38.2528 4.96733 38.0838 4.73438 37.9645C4.50142 37.8423 4.20597 37.7812 3.84801 37.7812H2.60369V45H0.758523ZM8.52805 45V36.2727H11.9712C12.6303 36.2727 13.1928 36.3906 13.6587 36.6264C14.1275 36.8594 14.484 37.1903 14.7283 37.6193C14.9755 38.0455 15.0991 38.5469 15.0991 39.1236C15.0991 39.7031 14.9741 40.2017 14.7241 40.6193C14.4741 41.0341 14.1119 41.3523 13.6374 41.5739C13.1658 41.7955 12.5948 41.9062 11.9244 41.9062H9.61896V40.4233H11.6261C11.9783 40.4233 12.271 40.375 12.5039 40.2784C12.7369 40.1818 12.9102 40.0369 13.0238 39.8438C13.1403 39.6506 13.1985 39.4105 13.1985 39.1236C13.1985 38.8338 13.1403 38.5895 13.0238 38.3906C12.9102 38.1918 12.7354 38.0412 12.4996 37.9389C12.2667 37.8338 11.9727 37.7812 11.6175 37.7812H10.3732V45H8.52805ZM13.2411 41.0284L15.4102 45H13.3732L11.2511 41.0284H13.2411ZM24.4229 40.6364C24.4229 41.5881 24.2425 42.3977 23.8817 43.0653C23.5238 43.733 23.0352 44.2429 22.4158 44.5952C21.7994 44.9446 21.1062 45.1193 20.3363 45.1193C19.5607 45.1193 18.8647 44.9432 18.2482 44.5909C17.6317 44.2386 17.1445 43.7287 16.7866 43.0611C16.4286 42.3935 16.2496 41.5852 16.2496 40.6364C16.2496 39.6847 16.4286 38.875 16.7866 38.2074C17.1445 37.5398 17.6317 37.0312 18.2482 36.6818C18.8647 36.3295 19.5607 36.1534 20.3363 36.1534C21.1062 36.1534 21.7994 36.3295 22.4158 36.6818C23.0352 37.0312 23.5238 37.5398 23.8817 38.2074C24.2425 38.875 24.4229 39.6847 24.4229 40.6364ZM22.5522 40.6364C22.5522 40.0199 22.4599 39.5 22.2752 39.0767C22.0934 38.6534 21.8363 38.3324 21.5039 38.1136C21.1715 37.8949 20.7823 37.7855 20.3363 37.7855C19.8903 37.7855 19.5011 37.8949 19.1687 38.1136C18.8363 38.3324 18.5778 38.6534 18.3931 39.0767C18.2113 39.5 18.1204 40.0199 18.1204 40.6364C18.1204 41.2528 18.2113 41.7727 18.3931 42.196C18.5778 42.6193 18.8363 42.9403 19.1687 43.1591C19.5011 43.3778 19.8903 43.4872 20.3363 43.4872C20.7823 43.4872 21.1715 43.3778 21.5039 43.1591C21.8363 42.9403 22.0934 42.6193 22.2752 42.196C22.4599 41.7727 22.5522 41.2528 22.5522 40.6364ZM29.2841 36.2727H31.108V42.358C31.108 42.9205 30.9815 43.4091 30.7287 43.8239C30.4787 44.2386 30.1307 44.5582 29.6847 44.7827C29.2386 45.0071 28.7202 45.1193 28.1293 45.1193C27.6037 45.1193 27.1264 45.027 26.6974 44.8423C26.2713 44.6548 25.9332 44.3707 25.6832 43.9901C25.4332 43.6065 25.3097 43.125 25.3125 42.5455H27.1491C27.1548 42.7756 27.2017 42.973 27.2898 43.1378C27.3807 43.2997 27.5043 43.4247 27.6605 43.5128C27.8196 43.598 28.0071 43.6406 28.223 43.6406C28.4503 43.6406 28.642 43.5923 28.7983 43.4957C28.9574 43.3963 29.0781 43.2514 29.1605 43.0611C29.2429 42.8707 29.2841 42.6364 29.2841 42.358V36.2727ZM32.6335 45V36.2727H38.5142V37.794H34.4787V39.8736H38.2116V41.3949H34.4787V43.4787H38.5312V45H32.6335ZM47.6815 39.3281H45.815C45.7809 39.0866 45.7113 38.8722 45.6062 38.6847C45.5011 38.4943 45.3661 38.3324 45.2013 38.1989C45.0366 38.0653 44.8462 37.9631 44.6303 37.892C44.4173 37.821 44.1857 37.7855 43.9357 37.7855C43.484 37.7855 43.0906 37.8977 42.7553 38.1222C42.4201 38.3437 42.1602 38.6676 41.9755 39.0938C41.7908 39.517 41.6985 40.0312 41.6985 40.6364C41.6985 41.2585 41.7908 41.7812 41.9755 42.2045C42.163 42.6278 42.4244 42.9474 42.7596 43.1634C43.0948 43.3793 43.4826 43.4872 43.9229 43.4872C44.1701 43.4872 44.3988 43.4545 44.609 43.3892C44.8221 43.3239 45.011 43.2287 45.1758 43.1037C45.3406 42.9759 45.4769 42.821 45.5849 42.6392C45.6957 42.4574 45.7724 42.25 45.815 42.017L47.6815 42.0256C47.6332 42.4261 47.5124 42.8125 47.3192 43.1847C47.1289 43.554 46.8718 43.8849 46.5479 44.1776C46.2269 44.4673 45.8434 44.6974 45.3974 44.8679C44.9542 45.0355 44.4528 45.1193 43.8931 45.1193C43.1147 45.1193 42.4187 44.9432 41.805 44.5909C41.1942 44.2386 40.7113 43.7287 40.3562 43.0611C40.0039 42.3935 39.8278 41.5852 39.8278 40.6364C39.8278 39.6847 40.0067 38.875 40.3647 38.2074C40.7227 37.5398 41.2085 37.0312 41.8221 36.6818C42.4357 36.3295 43.1261 36.1534 43.8931 36.1534C44.3988 36.1534 44.8675 36.2244 45.2994 36.3665C45.734 36.5085 46.119 36.7159 46.4542 36.9886C46.7894 37.2585 47.0621 37.5895 47.2724 37.9815C47.4854 38.3736 47.6218 38.8224 47.6815 39.3281ZM48.6722 37.794V36.2727H55.8398V37.794H53.168V45H51.3441V37.794H48.6722ZM61.7546 38.7827C61.7205 38.4389 61.5742 38.1719 61.3157 37.9815C61.0572 37.7912 60.7063 37.696 60.2631 37.696C59.962 37.696 59.7077 37.7386 59.5004 37.8239C59.293 37.9062 59.1339 38.0213 59.0231 38.169C58.9151 38.3168 58.8612 38.4844 58.8612 38.6719C58.8555 38.8281 58.8881 38.9645 58.9592 39.081C59.033 39.1974 59.1339 39.2983 59.2617 39.3835C59.3896 39.4659 59.5373 39.5384 59.7049 39.6009C59.8725 39.6605 60.0515 39.7116 60.2418 39.7543L61.0259 39.9418C61.4066 40.027 61.756 40.1406 62.0742 40.2827C62.3924 40.4247 62.668 40.5994 62.9009 40.8068C63.1339 41.0142 63.3143 41.2585 63.4421 41.5398C63.5728 41.821 63.6396 42.1435 63.6424 42.5071C63.6396 43.0412 63.5032 43.5043 63.2333 43.8963C62.9663 44.2855 62.5799 44.5881 62.0742 44.804C61.5714 45.017 60.9648 45.1236 60.2546 45.1236C59.5501 45.1236 58.9364 45.0156 58.4137 44.7997C57.8938 44.5838 57.4876 44.2642 57.195 43.8409C56.9052 43.4148 56.7532 42.8878 56.739 42.2599H58.5245C58.5444 42.5526 58.6282 42.7969 58.7759 42.9929C58.9265 43.1861 59.1268 43.3324 59.3768 43.4318C59.6296 43.5284 59.9151 43.5767 60.2333 43.5767C60.5458 43.5767 60.8171 43.5312 61.0472 43.4403C61.2802 43.3494 61.4606 43.223 61.5884 43.0611C61.7163 42.8991 61.7802 42.7131 61.7802 42.5028C61.7802 42.3068 61.7219 42.142 61.6055 42.0085C61.4918 41.875 61.3242 41.7614 61.1026 41.6676C60.8839 41.5739 60.6154 41.4886 60.2972 41.4119L59.3469 41.1733C58.6112 40.9943 58.0302 40.7145 57.604 40.3338C57.1779 39.9531 56.9663 39.4403 56.9691 38.7955C56.9663 38.267 57.1069 37.8054 57.391 37.4105C57.6779 37.0156 58.0714 36.7074 58.5714 36.4858C59.0714 36.2642 59.6396 36.1534 60.2759 36.1534C60.9237 36.1534 61.489 36.2642 61.9719 36.4858C62.4577 36.7074 62.8356 37.0156 63.1055 37.4105C63.3754 37.8054 63.5146 38.2628 63.5231 38.7827H61.7546Z"
                fill="#D9D9D9"
              />
            </svg>
            {/*<h1 key={item.id} className="project-heading">
              {item.title}
            </h1>*/}
            <h1 className="description--heading">{item.header}</h1>
            <p className="project--description">{item.description}</p>
          </div>
          <div className="project--section_zero" key={item}>
            <img
              src={item.background}
              className="project--img_zero"
              alt="Screen with code"
            />
            <div className="section--zero_content">
              <svg
                className="section--zero_heading"
                style={{}}
                viewBox="0 0 108 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.01705 12H0.380682L4.39773 0.363636H7.56818L11.5795 12H8.94318L6.02841 3.02273H5.9375L3.01705 12ZM2.85227 7.42614H9.07955V9.34659H2.85227V7.42614ZM12.9801 12V0.363636H15.4403V9.97159H20.429V12H12.9801ZM29.321 4.125C29.2415 3.84848 29.1297 3.60417 28.9858 3.39205C28.8419 3.17614 28.6657 2.99432 28.4574 2.84659C28.2528 2.69508 28.018 2.57955 27.7528 2.5C27.4915 2.42045 27.2017 2.38068 26.8835 2.38068C26.2888 2.38068 25.7661 2.52841 25.3153 2.82386C24.8684 3.11932 24.5199 3.54924 24.2699 4.11364C24.0199 4.67424 23.8949 5.35985 23.8949 6.17045C23.8949 6.98106 24.018 7.67045 24.2642 8.23864C24.5104 8.80682 24.8589 9.24053 25.3097 9.53977C25.7604 9.83523 26.2926 9.98295 26.9062 9.98295C27.4631 9.98295 27.9384 9.88447 28.3324 9.6875C28.7301 9.48674 29.0331 9.20455 29.2415 8.84091C29.4536 8.47727 29.5597 8.04735 29.5597 7.55114L30.0597 7.625H27.0597V5.77273H31.929V7.23864C31.929 8.26136 31.7131 9.14015 31.2812 9.875C30.8494 10.6061 30.2547 11.1705 29.4972 11.5682C28.7396 11.9621 27.8722 12.1591 26.8949 12.1591C25.804 12.1591 24.8456 11.9186 24.0199 11.4375C23.1941 10.9527 22.5502 10.2652 22.0881 9.375C21.6297 8.48106 21.4006 7.42045 21.4006 6.19318C21.4006 5.25 21.5369 4.40909 21.8097 3.67045C22.0862 2.92803 22.4725 2.29924 22.9688 1.78409C23.465 1.26894 24.0426 0.876893 24.7017 0.607954C25.3608 0.339015 26.0748 0.204545 26.8438 0.204545C27.5028 0.204545 28.1165 0.301136 28.6847 0.494318C29.2528 0.683712 29.7566 0.952651 30.196 1.30114C30.6392 1.64962 31.0009 2.06439 31.2812 2.54545C31.5616 3.02273 31.7415 3.54924 31.821 4.125H29.321ZM44.4702 6.18182C44.4702 7.45076 44.2296 8.5303 43.7486 9.42045C43.2713 10.3106 42.6198 10.9905 41.794 11.4602C40.9721 11.9261 40.0478 12.1591 39.0213 12.1591C37.9872 12.1591 37.0592 11.9242 36.2372 11.4545C35.4152 10.9848 34.7656 10.3049 34.2884 9.41477C33.8111 8.52462 33.5724 7.44697 33.5724 6.18182C33.5724 4.91288 33.8111 3.83333 34.2884 2.94318C34.7656 2.05303 35.4152 1.375 36.2372 0.909091C37.0592 0.439394 37.9872 0.204545 39.0213 0.204545C40.0478 0.204545 40.9721 0.439394 41.794 0.909091C42.6198 1.375 43.2713 2.05303 43.7486 2.94318C44.2296 3.83333 44.4702 4.91288 44.4702 6.18182ZM41.9759 6.18182C41.9759 5.35985 41.8527 4.66667 41.6065 4.10227C41.3641 3.53788 41.0213 3.10985 40.5781 2.81818C40.1349 2.52652 39.616 2.38068 39.0213 2.38068C38.4266 2.38068 37.9077 2.52652 37.4645 2.81818C37.0213 3.10985 36.6766 3.53788 36.4304 4.10227C36.188 4.66667 36.0668 5.35985 36.0668 6.18182C36.0668 7.00379 36.188 7.69697 36.4304 8.26136C36.6766 8.82576 37.0213 9.25379 37.4645 9.54545C37.9077 9.83712 38.4266 9.98295 39.0213 9.98295C39.616 9.98295 40.1349 9.83712 40.5781 9.54545C41.0213 9.25379 41.3641 8.82576 41.6065 8.26136C41.8527 7.69697 41.9759 7.00379 41.9759 6.18182ZM46.2926 12V0.363636H50.8835C51.7623 0.363636 52.5123 0.520833 53.1335 0.835227C53.7585 1.14583 54.2339 1.58712 54.5597 2.15909C54.8892 2.72727 55.054 3.39583 55.054 4.16477C55.054 4.9375 54.8873 5.60227 54.554 6.15909C54.2206 6.71212 53.7377 7.13636 53.1051 7.43182C52.4763 7.72727 51.715 7.875 50.821 7.875H47.7472V5.89773H50.4233C50.893 5.89773 51.2831 5.83333 51.5938 5.70455C51.9044 5.57576 52.1354 5.38258 52.2869 5.125C52.4422 4.86742 52.5199 4.54735 52.5199 4.16477C52.5199 3.77841 52.4422 3.45265 52.2869 3.1875C52.1354 2.92235 51.9025 2.72159 51.5881 2.58523C51.2775 2.44508 50.8854 2.375 50.4119 2.375H48.7528V12H46.2926ZM52.5767 6.70455L55.4688 12H52.7528L49.9233 6.70455H52.5767ZM59.2528 0.363636V12H56.7926V0.363636H59.2528ZM60.8338 2.39205V0.363636H70.3906V2.39205H66.8281V12H64.3963V2.39205H60.8338ZM71.9645 12V0.363636H74.4247V5.16477H79.419V0.363636H81.8736V12H79.419V7.19318H74.4247V12H71.9645ZM83.902 0.363636H86.9361L90.1406 8.18182H90.277L93.4815 0.363636H96.5156V12H94.1293V4.42614H94.0327L91.0213 11.9432H89.3963L86.3849 4.39773H86.2884V12H83.902V0.363636ZM104.855 3.71023C104.81 3.25189 104.615 2.89583 104.27 2.64205C103.925 2.38826 103.457 2.26136 102.866 2.26136C102.465 2.26136 102.126 2.31818 101.849 2.43182C101.573 2.54167 101.361 2.69508 101.213 2.89205C101.069 3.08902 100.997 3.3125 100.997 3.5625C100.99 3.77083 101.033 3.95265 101.128 4.10795C101.226 4.26326 101.361 4.39773 101.531 4.51136C101.702 4.62121 101.899 4.7178 102.122 4.80114C102.346 4.88068 102.584 4.94886 102.838 5.00568L103.884 5.25568C104.391 5.36932 104.857 5.52083 105.281 5.71023C105.705 5.89962 106.073 6.13258 106.384 6.40909C106.694 6.68561 106.935 7.01136 107.105 7.38636C107.279 7.76136 107.368 8.19129 107.372 8.67614C107.368 9.38826 107.187 10.0057 106.827 10.5284C106.471 11.0473 105.955 11.4508 105.281 11.7386C104.611 12.0227 103.802 12.1648 102.855 12.1648C101.916 12.1648 101.098 12.0208 100.401 11.733C99.7074 11.4451 99.1657 11.0189 98.7756 10.4545C98.3892 9.88636 98.1866 9.18371 98.1676 8.34659H100.548C100.575 8.73674 100.687 9.0625 100.884 9.32386C101.084 9.58144 101.351 9.77652 101.685 9.90909C102.022 10.0379 102.402 10.1023 102.827 10.1023C103.243 10.1023 103.605 10.0417 103.912 9.92045C104.223 9.79924 104.463 9.63068 104.634 9.41477C104.804 9.19886 104.889 8.95076 104.889 8.67045C104.889 8.40909 104.812 8.18939 104.656 8.01136C104.505 7.83333 104.281 7.68182 103.986 7.55682C103.694 7.43182 103.336 7.31818 102.912 7.21591L101.645 6.89773C100.664 6.65909 99.8892 6.28598 99.321 5.77841C98.7528 5.27083 98.4706 4.58712 98.4744 3.72727C98.4706 3.02273 98.6581 2.4072 99.0369 1.88068C99.4195 1.35417 99.9441 0.943182 100.611 0.647727C101.277 0.352272 102.035 0.204545 102.884 0.204545C103.747 0.204545 104.501 0.352272 105.145 0.647727C105.793 0.943182 106.296 1.35417 106.656 1.88068C107.016 2.4072 107.202 3.01705 107.213 3.71023H104.855Z"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="section--zero_text">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
      {projectApi.map((projects) => (
        <div className="project--section_one" key={projects}>
          <div className="section--one_content">
            <img
              src={projects.background}
              className="project--img_one"
              alt="Screen with code"
            />
            <div className="section--text_container">
              <svg
                className="section--one_heading"
                style={{}}
                viewBox="0 0 108 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.01705 12H0.380682L4.39773 0.363636H7.56818L11.5795 12H8.94318L6.02841 3.02273H5.9375L3.01705 12ZM2.85227 7.42614H9.07955V9.34659H2.85227V7.42614ZM12.9801 12V0.363636H15.4403V9.97159H20.429V12H12.9801ZM29.321 4.125C29.2415 3.84848 29.1297 3.60417 28.9858 3.39205C28.8419 3.17614 28.6657 2.99432 28.4574 2.84659C28.2528 2.69508 28.018 2.57955 27.7528 2.5C27.4915 2.42045 27.2017 2.38068 26.8835 2.38068C26.2888 2.38068 25.7661 2.52841 25.3153 2.82386C24.8684 3.11932 24.5199 3.54924 24.2699 4.11364C24.0199 4.67424 23.8949 5.35985 23.8949 6.17045C23.8949 6.98106 24.018 7.67045 24.2642 8.23864C24.5104 8.80682 24.8589 9.24053 25.3097 9.53977C25.7604 9.83523 26.2926 9.98295 26.9062 9.98295C27.4631 9.98295 27.9384 9.88447 28.3324 9.6875C28.7301 9.48674 29.0331 9.20455 29.2415 8.84091C29.4536 8.47727 29.5597 8.04735 29.5597 7.55114L30.0597 7.625H27.0597V5.77273H31.929V7.23864C31.929 8.26136 31.7131 9.14015 31.2812 9.875C30.8494 10.6061 30.2547 11.1705 29.4972 11.5682C28.7396 11.9621 27.8722 12.1591 26.8949 12.1591C25.804 12.1591 24.8456 11.9186 24.0199 11.4375C23.1941 10.9527 22.5502 10.2652 22.0881 9.375C21.6297 8.48106 21.4006 7.42045 21.4006 6.19318C21.4006 5.25 21.5369 4.40909 21.8097 3.67045C22.0862 2.92803 22.4725 2.29924 22.9688 1.78409C23.465 1.26894 24.0426 0.876893 24.7017 0.607954C25.3608 0.339015 26.0748 0.204545 26.8438 0.204545C27.5028 0.204545 28.1165 0.301136 28.6847 0.494318C29.2528 0.683712 29.7566 0.952651 30.196 1.30114C30.6392 1.64962 31.0009 2.06439 31.2812 2.54545C31.5616 3.02273 31.7415 3.54924 31.821 4.125H29.321ZM44.4702 6.18182C44.4702 7.45076 44.2296 8.5303 43.7486 9.42045C43.2713 10.3106 42.6198 10.9905 41.794 11.4602C40.9721 11.9261 40.0478 12.1591 39.0213 12.1591C37.9872 12.1591 37.0592 11.9242 36.2372 11.4545C35.4152 10.9848 34.7656 10.3049 34.2884 9.41477C33.8111 8.52462 33.5724 7.44697 33.5724 6.18182C33.5724 4.91288 33.8111 3.83333 34.2884 2.94318C34.7656 2.05303 35.4152 1.375 36.2372 0.909091C37.0592 0.439394 37.9872 0.204545 39.0213 0.204545C40.0478 0.204545 40.9721 0.439394 41.794 0.909091C42.6198 1.375 43.2713 2.05303 43.7486 2.94318C44.2296 3.83333 44.4702 4.91288 44.4702 6.18182ZM41.9759 6.18182C41.9759 5.35985 41.8527 4.66667 41.6065 4.10227C41.3641 3.53788 41.0213 3.10985 40.5781 2.81818C40.1349 2.52652 39.616 2.38068 39.0213 2.38068C38.4266 2.38068 37.9077 2.52652 37.4645 2.81818C37.0213 3.10985 36.6766 3.53788 36.4304 4.10227C36.188 4.66667 36.0668 5.35985 36.0668 6.18182C36.0668 7.00379 36.188 7.69697 36.4304 8.26136C36.6766 8.82576 37.0213 9.25379 37.4645 9.54545C37.9077 9.83712 38.4266 9.98295 39.0213 9.98295C39.616 9.98295 40.1349 9.83712 40.5781 9.54545C41.0213 9.25379 41.3641 8.82576 41.6065 8.26136C41.8527 7.69697 41.9759 7.00379 41.9759 6.18182ZM46.2926 12V0.363636H50.8835C51.7623 0.363636 52.5123 0.520833 53.1335 0.835227C53.7585 1.14583 54.2339 1.58712 54.5597 2.15909C54.8892 2.72727 55.054 3.39583 55.054 4.16477C55.054 4.9375 54.8873 5.60227 54.554 6.15909C54.2206 6.71212 53.7377 7.13636 53.1051 7.43182C52.4763 7.72727 51.715 7.875 50.821 7.875H47.7472V5.89773H50.4233C50.893 5.89773 51.2831 5.83333 51.5938 5.70455C51.9044 5.57576 52.1354 5.38258 52.2869 5.125C52.4422 4.86742 52.5199 4.54735 52.5199 4.16477C52.5199 3.77841 52.4422 3.45265 52.2869 3.1875C52.1354 2.92235 51.9025 2.72159 51.5881 2.58523C51.2775 2.44508 50.8854 2.375 50.4119 2.375H48.7528V12H46.2926ZM52.5767 6.70455L55.4688 12H52.7528L49.9233 6.70455H52.5767ZM59.2528 0.363636V12H56.7926V0.363636H59.2528ZM60.8338 2.39205V0.363636H70.3906V2.39205H66.8281V12H64.3963V2.39205H60.8338ZM71.9645 12V0.363636H74.4247V5.16477H79.419V0.363636H81.8736V12H79.419V7.19318H74.4247V12H71.9645ZM83.902 0.363636H86.9361L90.1406 8.18182H90.277L93.4815 0.363636H96.5156V12H94.1293V4.42614H94.0327L91.0213 11.9432H89.3963L86.3849 4.39773H86.2884V12H83.902V0.363636ZM104.855 3.71023C104.81 3.25189 104.615 2.89583 104.27 2.64205C103.925 2.38826 103.457 2.26136 102.866 2.26136C102.465 2.26136 102.126 2.31818 101.849 2.43182C101.573 2.54167 101.361 2.69508 101.213 2.89205C101.069 3.08902 100.997 3.3125 100.997 3.5625C100.99 3.77083 101.033 3.95265 101.128 4.10795C101.226 4.26326 101.361 4.39773 101.531 4.51136C101.702 4.62121 101.899 4.7178 102.122 4.80114C102.346 4.88068 102.584 4.94886 102.838 5.00568L103.884 5.25568C104.391 5.36932 104.857 5.52083 105.281 5.71023C105.705 5.89962 106.073 6.13258 106.384 6.40909C106.694 6.68561 106.935 7.01136 107.105 7.38636C107.279 7.76136 107.368 8.19129 107.372 8.67614C107.368 9.38826 107.187 10.0057 106.827 10.5284C106.471 11.0473 105.955 11.4508 105.281 11.7386C104.611 12.0227 103.802 12.1648 102.855 12.1648C101.916 12.1648 101.098 12.0208 100.401 11.733C99.7074 11.4451 99.1657 11.0189 98.7756 10.4545C98.3892 9.88636 98.1866 9.18371 98.1676 8.34659H100.548C100.575 8.73674 100.687 9.0625 100.884 9.32386C101.084 9.58144 101.351 9.77652 101.685 9.90909C102.022 10.0379 102.402 10.1023 102.827 10.1023C103.243 10.1023 103.605 10.0417 103.912 9.92045C104.223 9.79924 104.463 9.63068 104.634 9.41477C104.804 9.19886 104.889 8.95076 104.889 8.67045C104.889 8.40909 104.812 8.18939 104.656 8.01136C104.505 7.83333 104.281 7.68182 103.986 7.55682C103.694 7.43182 103.336 7.31818 102.912 7.21591L101.645 6.89773C100.664 6.65909 99.8892 6.28598 99.321 5.77841C98.7528 5.27083 98.4706 4.58712 98.4744 3.72727C98.4706 3.02273 98.6581 2.4072 99.0369 1.88068C99.4195 1.35417 99.9441 0.943182 100.611 0.647727C101.277 0.352272 102.035 0.204545 102.884 0.204545C103.747 0.204545 104.501 0.352272 105.145 0.647727C105.793 0.943182 106.296 1.35417 106.656 1.88068C107.016 2.4072 107.202 3.01705 107.213 3.71023H104.855Z"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="section--one_text">{projects.content}</p>
            </div>
          </div>
        </div>
      ))}
      {projectoApio.map((project) => (
        <div className="project--section_two" key={project}>
          <img
            src={project.background}
            className="project--img_zero"
            alt="Screen with code"
          />
          <div className="section--two_content">
            <svg
              className="section--zero_heading"
              style={{}}
              viewBox="0 0 108 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.01705 12H0.380682L4.39773 0.363636H7.56818L11.5795 12H8.94318L6.02841 3.02273H5.9375L3.01705 12ZM2.85227 7.42614H9.07955V9.34659H2.85227V7.42614ZM12.9801 12V0.363636H15.4403V9.97159H20.429V12H12.9801ZM29.321 4.125C29.2415 3.84848 29.1297 3.60417 28.9858 3.39205C28.8419 3.17614 28.6657 2.99432 28.4574 2.84659C28.2528 2.69508 28.018 2.57955 27.7528 2.5C27.4915 2.42045 27.2017 2.38068 26.8835 2.38068C26.2888 2.38068 25.7661 2.52841 25.3153 2.82386C24.8684 3.11932 24.5199 3.54924 24.2699 4.11364C24.0199 4.67424 23.8949 5.35985 23.8949 6.17045C23.8949 6.98106 24.018 7.67045 24.2642 8.23864C24.5104 8.80682 24.8589 9.24053 25.3097 9.53977C25.7604 9.83523 26.2926 9.98295 26.9062 9.98295C27.4631 9.98295 27.9384 9.88447 28.3324 9.6875C28.7301 9.48674 29.0331 9.20455 29.2415 8.84091C29.4536 8.47727 29.5597 8.04735 29.5597 7.55114L30.0597 7.625H27.0597V5.77273H31.929V7.23864C31.929 8.26136 31.7131 9.14015 31.2812 9.875C30.8494 10.6061 30.2547 11.1705 29.4972 11.5682C28.7396 11.9621 27.8722 12.1591 26.8949 12.1591C25.804 12.1591 24.8456 11.9186 24.0199 11.4375C23.1941 10.9527 22.5502 10.2652 22.0881 9.375C21.6297 8.48106 21.4006 7.42045 21.4006 6.19318C21.4006 5.25 21.5369 4.40909 21.8097 3.67045C22.0862 2.92803 22.4725 2.29924 22.9688 1.78409C23.465 1.26894 24.0426 0.876893 24.7017 0.607954C25.3608 0.339015 26.0748 0.204545 26.8438 0.204545C27.5028 0.204545 28.1165 0.301136 28.6847 0.494318C29.2528 0.683712 29.7566 0.952651 30.196 1.30114C30.6392 1.64962 31.0009 2.06439 31.2812 2.54545C31.5616 3.02273 31.7415 3.54924 31.821 4.125H29.321ZM44.4702 6.18182C44.4702 7.45076 44.2296 8.5303 43.7486 9.42045C43.2713 10.3106 42.6198 10.9905 41.794 11.4602C40.9721 11.9261 40.0478 12.1591 39.0213 12.1591C37.9872 12.1591 37.0592 11.9242 36.2372 11.4545C35.4152 10.9848 34.7656 10.3049 34.2884 9.41477C33.8111 8.52462 33.5724 7.44697 33.5724 6.18182C33.5724 4.91288 33.8111 3.83333 34.2884 2.94318C34.7656 2.05303 35.4152 1.375 36.2372 0.909091C37.0592 0.439394 37.9872 0.204545 39.0213 0.204545C40.0478 0.204545 40.9721 0.439394 41.794 0.909091C42.6198 1.375 43.2713 2.05303 43.7486 2.94318C44.2296 3.83333 44.4702 4.91288 44.4702 6.18182ZM41.9759 6.18182C41.9759 5.35985 41.8527 4.66667 41.6065 4.10227C41.3641 3.53788 41.0213 3.10985 40.5781 2.81818C40.1349 2.52652 39.616 2.38068 39.0213 2.38068C38.4266 2.38068 37.9077 2.52652 37.4645 2.81818C37.0213 3.10985 36.6766 3.53788 36.4304 4.10227C36.188 4.66667 36.0668 5.35985 36.0668 6.18182C36.0668 7.00379 36.188 7.69697 36.4304 8.26136C36.6766 8.82576 37.0213 9.25379 37.4645 9.54545C37.9077 9.83712 38.4266 9.98295 39.0213 9.98295C39.616 9.98295 40.1349 9.83712 40.5781 9.54545C41.0213 9.25379 41.3641 8.82576 41.6065 8.26136C41.8527 7.69697 41.9759 7.00379 41.9759 6.18182ZM46.2926 12V0.363636H50.8835C51.7623 0.363636 52.5123 0.520833 53.1335 0.835227C53.7585 1.14583 54.2339 1.58712 54.5597 2.15909C54.8892 2.72727 55.054 3.39583 55.054 4.16477C55.054 4.9375 54.8873 5.60227 54.554 6.15909C54.2206 6.71212 53.7377 7.13636 53.1051 7.43182C52.4763 7.72727 51.715 7.875 50.821 7.875H47.7472V5.89773H50.4233C50.893 5.89773 51.2831 5.83333 51.5938 5.70455C51.9044 5.57576 52.1354 5.38258 52.2869 5.125C52.4422 4.86742 52.5199 4.54735 52.5199 4.16477C52.5199 3.77841 52.4422 3.45265 52.2869 3.1875C52.1354 2.92235 51.9025 2.72159 51.5881 2.58523C51.2775 2.44508 50.8854 2.375 50.4119 2.375H48.7528V12H46.2926ZM52.5767 6.70455L55.4688 12H52.7528L49.9233 6.70455H52.5767ZM59.2528 0.363636V12H56.7926V0.363636H59.2528ZM60.8338 2.39205V0.363636H70.3906V2.39205H66.8281V12H64.3963V2.39205H60.8338ZM71.9645 12V0.363636H74.4247V5.16477H79.419V0.363636H81.8736V12H79.419V7.19318H74.4247V12H71.9645ZM83.902 0.363636H86.9361L90.1406 8.18182H90.277L93.4815 0.363636H96.5156V12H94.1293V4.42614H94.0327L91.0213 11.9432H89.3963L86.3849 4.39773H86.2884V12H83.902V0.363636ZM104.855 3.71023C104.81 3.25189 104.615 2.89583 104.27 2.64205C103.925 2.38826 103.457 2.26136 102.866 2.26136C102.465 2.26136 102.126 2.31818 101.849 2.43182C101.573 2.54167 101.361 2.69508 101.213 2.89205C101.069 3.08902 100.997 3.3125 100.997 3.5625C100.99 3.77083 101.033 3.95265 101.128 4.10795C101.226 4.26326 101.361 4.39773 101.531 4.51136C101.702 4.62121 101.899 4.7178 102.122 4.80114C102.346 4.88068 102.584 4.94886 102.838 5.00568L103.884 5.25568C104.391 5.36932 104.857 5.52083 105.281 5.71023C105.705 5.89962 106.073 6.13258 106.384 6.40909C106.694 6.68561 106.935 7.01136 107.105 7.38636C107.279 7.76136 107.368 8.19129 107.372 8.67614C107.368 9.38826 107.187 10.0057 106.827 10.5284C106.471 11.0473 105.955 11.4508 105.281 11.7386C104.611 12.0227 103.802 12.1648 102.855 12.1648C101.916 12.1648 101.098 12.0208 100.401 11.733C99.7074 11.4451 99.1657 11.0189 98.7756 10.4545C98.3892 9.88636 98.1866 9.18371 98.1676 8.34659H100.548C100.575 8.73674 100.687 9.0625 100.884 9.32386C101.084 9.58144 101.351 9.77652 101.685 9.90909C102.022 10.0379 102.402 10.1023 102.827 10.1023C103.243 10.1023 103.605 10.0417 103.912 9.92045C104.223 9.79924 104.463 9.63068 104.634 9.41477C104.804 9.19886 104.889 8.95076 104.889 8.67045C104.889 8.40909 104.812 8.18939 104.656 8.01136C104.505 7.83333 104.281 7.68182 103.986 7.55682C103.694 7.43182 103.336 7.31818 102.912 7.21591L101.645 6.89773C100.664 6.65909 99.8892 6.28598 99.321 5.77841C98.7528 5.27083 98.4706 4.58712 98.4744 3.72727C98.4706 3.02273 98.6581 2.4072 99.0369 1.88068C99.4195 1.35417 99.9441 0.943182 100.611 0.647727C101.277 0.352272 102.035 0.204545 102.884 0.204545C103.747 0.204545 104.501 0.352272 105.145 0.647727C105.793 0.943182 106.296 1.35417 106.656 1.88068C107.016 2.4072 107.202 3.01705 107.213 3.71023H104.855Z"
                fill="#D9D9D9"
              />
            </svg>
            <p className="section--zero_text">{project.content}</p>
          </div>
        </div>
      ))}
      {/*<div className="other--projects_container">
        <h2 className="other--projects_heading">OTHER PROJECTS</h2>
        <div className="project--boxes">
          <div className="project--box"></div>
          <div className="project--box_one"></div>
          <div className="project--box_two"></div>
        </div>
      </div>*/}
    </div>
  );
};

export default Contact;
