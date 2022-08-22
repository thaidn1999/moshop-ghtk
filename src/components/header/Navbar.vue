<script setup>
import { ref } from "vue";
import { useStaffStore } from "../../stores/staff";
const useStaff = useStaffStore();
import AccountDropdown from "./AccountDropdown.vue";
const isShow = ref(false);
const username = localStorage.getItem("userName");
const ReloadPage = async () => {
  useStaff.clearStaff();
  await useStaff.getStaff(useStaff.date, useStaff.date);
};
</script>
<template>
  <div>
    <nav
      class="navbar bg-moshop-color text-white font-bold flex items-center justify-between sm:justify-start flex-wrap"
    >
      <div class="header-logo h-12 pl-[15px]" @click="ReloadPage">
        <RouterLink
          to="/home"
          class="flex py-[5px] h-full items-center text-[31px] font-bold mr-3 whitespace-nowrap hover:text-white"
        >
          moshop
        </RouterLink>
      </div>
      <button
        type="button"
        class="navbar-toggler sm:hidden block mr-[10%]"
        @click="isShow = !isShow"
      >
        <span class="navbar-toggler-icon">
          <span class="ico ico-menu ico-list-tab ico-menu-large">
            <img src="/src/assets/images/toggle.png" />
          </span>
        </span>
      </button>
      <div class="header-menu hidden sm:block">
        <ul class="list-item-menu">
          <li>
            <div class="relative" @click="isShow = !isShow">
              <div
                class="h-[22px] px-1 py-[3px] flex items-center border-l-[3px] border-solid border-white"
              >
                <div
                  v-tooltip="`${username}`"
                  class="max-w-[186px] px-2 overflow-hidden text-ellipsis text-[17px]"
                >
                  {{ username }}
                </div>
                <div class="w-[14px]">
                  <svg
                    width="15"
                    height="18"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="angle-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    class="svg-inline--fa fa-angle-down fa-w-8 fa-3x"
                  >
                    <path
                      fill="#fff"
                      d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
                    ></path>
                  </svg>
                </div>
              </div>

              <AccountDropdown v-if="isShow" />
            </div>
          </li>
          <li class="xl:ml-4 md:ml-12 lg:ml-16">
            <a href="#" v-tooltip="'Tổng quan'" class="item-link px-4 lg:px-6">
              <svg
                fill="none"
                height="25"
                viewBox="0 0 16 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  fill="currentColor"
                  height="6.66667"
                  rx="2"
                  width="4"
                  y="13.3333"
                ></rect>
                <rect
                  fill="currentColor"
                  height="12.381"
                  rx="2"
                  width="4"
                  x="6"
                  y="7.61905"
                ></rect>
                <rect
                  fill="currentColor"
                  height="20"
                  rx="2"
                  width="4"
                  x="12"
                ></rect>
              </svg>
              <span class="item-title hidden xl:block">Tổng quan</span>
            </a>
          </li>
          <li>
            <a href="#" v-tooltip="'Chats'" class="item-link px-4 lg:px-6">
              <svg
                fill="none"
                height="26"
                viewBox="0 0 25 26"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4063 13.7813H8.59375C8.1625 13.7813 7.8125 14.1313 7.8125 14.5625C7.8125 14.9938 8.1625 15.3438 8.59375 15.3438H16.4063C16.8375 15.3438 17.1875 14.9938 17.1875 14.5625C17.1875 14.1313 16.8375 13.7813 16.4063 13.7813ZM17.9688 9.09375H7.03125C6.6 9.09375 6.25 9.44375 6.25 9.875C6.25 10.3063 6.6 10.6563 7.03125 10.6563H17.9688C18.4 10.6563 18.75 10.3063 18.75 9.875C18.75 9.44375 18.4 9.09375 17.9688 9.09375ZM12.5 0.5C5.5969 0.5 0 5.39685 0 11.4375C0 14.8899 1.83203 17.9633 4.6875 19.968V25.5L10.1633 22.1773C10.9211 22.3024 11.7008 22.375 12.5 22.375C19.4039 22.375 25 17.4781 25 11.4375C25 5.39685 19.4039 0.5 12.5 0.5ZM12.5 20.8125C11.5875 20.8125 10.7063 20.7063 9.85935 20.5258L6.18121 22.7367L6.23043 19.1133C3.41095 17.4172 1.5625 14.6141 1.5625 11.4375C1.5625 6.26017 6.45935 2.0625 12.5 2.0625C18.5406 2.0625 23.4375 6.26017 23.4375 11.4375C23.4375 16.6148 18.5406 20.8125 12.5 20.8125Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="item-title hidden xl:block">Chats</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              v-tooltip="'Kho và sản phẩm'"
              class="item-link px-4 lg:px-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <span class="item-title hidden xl:block">Kho & sản phẩm</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        class="header-menu_end sm:block"
        :class="isShow ? 'block' : 'hidden'"
      >
        <ul class="list-item-menu list-item-mobile">
          <li>
            <a
              href="#"
              v-tooltip="'Nhân viên'"
              class="item-link px-4 lg:px-6 bg-white text-moshop-color"
            >
              <svg
                fill="none"
                height="24"
                viewBox="0 0 25 24"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 15.2422C25 12.7031 23.2422 10.5156 20.7813 9.65625C21.9141 8.71875 22.6562 7.3125 22.6562 5.75C22.6562 2.9375 20.3906 0.671875 17.5781 0.671875C15.625 0.671875 13.9063 1.72656 13.0469 3.44531C12.8906 3.40625 12.6953 3.40625 12.5 3.40625C12.3047 3.40625 12.1094 3.40625 11.9531 3.44531C11.0938 1.72656 9.375 0.671875 7.42188 0.671875C4.60938 0.671875 2.34375 2.9375 2.34375 5.75C2.34375 7.3125 3.08594 8.75781 4.21875 9.65625C1.75781 10.5547 0 12.7031 0 15.2422V18.6406H4.25781C4.02344 19.3437 3.90625 20.0859 3.90625 20.8672V23.3281H21.0938V20.8672C21.0938 20.0859 20.9766 19.3437 20.7422 18.6406H25V15.2422ZM17.5781 2.23438C19.5312 2.23438 21.0938 3.79688 21.0938 5.75C21.0938 7.42969 19.9219 8.83594 18.3594 9.1875C18.3203 6.76562 16.7969 4.69531 14.6484 3.83594C15.2734 2.85938 16.3672 2.23438 17.5781 2.23438ZM16.7969 9.26562C16.7969 11.6484 14.8828 13.5625 12.5 13.5625C10.1172 13.5625 8.20312 11.6484 8.20312 9.26562C8.20312 6.88281 10.1172 4.96875 12.5 4.96875C14.8828 4.96875 16.7969 6.88281 16.7969 9.26562ZM7.42188 2.23438C8.63281 2.23438 9.72656 2.85938 10.3516 3.83594C8.20312 4.69531 6.67969 6.76562 6.64062 9.1875C5.07812 8.83594 3.90625 7.42969 3.90625 5.75C3.90625 3.79688 5.46875 2.23438 7.42188 2.23438ZM1.5625 17.0781V15.2422C1.5625 12.8203 3.78906 10.8281 6.5625 10.8281H6.875C7.22656 12.1172 8.00781 13.2109 9.02344 13.9531C7.34375 14.5 5.9375 15.6328 5.03906 17.0781H1.5625ZM19.5312 21.7656H5.46875V20.8672C5.46875 17.7031 8.16406 15.125 11.4844 15.125H13.5156C16.8359 15.125 19.5312 17.7031 19.5312 20.8672V21.7656ZM23.4375 17.0781H20C19.1016 15.6328 17.6953 14.5391 16.0156 13.9531C17.0312 13.1719 17.8125 12.0781 18.1641 10.8281H18.4766C21.2109 10.8281 23.4766 12.8203 23.4766 15.2422V17.0781H23.4375Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="item-title hidden xl:block">Nhân viên</span></a
            >
          </li>
          <li>
            <a href="#" v-tooltip="'Đơn hàng'" class="item-link px-4 lg:px-6">
              <svg
                fill="none"
                height="26"
                viewBox="0 0 25 26"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M12.2719 10.1047C11.9672 9.80001 11.4719 9.79845 11.1657 10.1031L8.5938 12.6766L7.58443 11.6656C7.27974 11.3609 6.78443 11.3609 6.47974 11.6656C6.17505 11.9703 6.17505 12.4656 6.47974 12.7703L8.04224 14.3328C8.1938 14.4859 8.3938 14.5625 8.5938 14.5625C8.7938 14.5625 8.99381 14.4859 9.14693 14.3344L12.2719 11.2094C12.5766 10.9047 12.5766 10.4094 12.2719 10.1047Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12.2719 16.3547C11.9672 16.05 11.4719 16.0484 11.1657 16.3531L8.5938 18.9266L7.58443 17.9172C7.27974 17.6125 6.78443 17.6125 6.47974 17.9172C6.17505 18.2219 6.17505 18.7172 6.47974 19.0219L8.04224 20.5844C8.1938 20.7359 8.3938 20.8125 8.5938 20.8125C8.7938 20.8125 8.99381 20.7359 9.14693 20.5844L12.2719 17.4594C12.5766 17.1547 12.5766 16.6594 12.2719 16.3547Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.9688 11.4375H14.8438C14.4125 11.4375 14.0625 11.7875 14.0625 12.2188C14.0625 12.65 14.4125 13 14.8438 13H17.9688C18.4 13 18.75 12.65 18.75 12.2188C18.75 11.7875 18.4 11.4375 17.9688 11.4375Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.9688 17.6875H14.8438C14.4125 17.6875 14.0625 18.0375 14.0625 18.4688C14.0625 18.9 14.4125 19.25 14.8438 19.25H17.9688C18.4 19.25 18.75 18.9 18.75 18.4688C18.75 18.0375 18.4 17.6875 17.9688 17.6875Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M20.3125 3.625H17.1875V2.84375C17.1875 2.4125 16.8375 2.0625 16.4062 2.0625H14.7109C14.3875 1.15312 13.5188 0.5 12.5 0.5C11.4812 0.5 10.6125 1.15312 10.2891 2.0625H8.59375C8.1625 2.0625 7.8125 2.4125 7.8125 2.84375V3.625H4.6875C3.82656 3.625 3.125 4.32656 3.125 5.1875V23.9375C3.125 24.7984 3.82656 25.5 4.6875 25.5H20.3125C21.1734 25.5 21.875 24.7984 21.875 23.9375V5.1875C21.875 4.32656 21.1734 3.625 20.3125 3.625ZM9.375 3.625H10.9375C11.3687 3.625 11.7188 3.275 11.7188 2.84375C11.7188 2.4125 12.0688 2.0625 12.5 2.0625C12.9312 2.0625 13.2812 2.4125 13.2812 2.84375C13.2812 3.275 13.6313 3.625 14.0625 3.625H15.625V5.1875H9.375V3.625ZM20.3125 23.9375H4.6875V5.1875H7.8125V5.96875C7.8125 6.4 8.1625 6.75 8.59375 6.75H16.4062C16.8375 6.75 17.1875 6.4 17.1875 5.96875V5.1875H20.3125V23.9375Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      fill="white"
                      height="25"
                      transform="translate(0 0.5)"
                      width="25"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span class="item-title hidden xl:block">Đơn hàng</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              v-tooltip="'Đăng đơn'"
              class="flex items-center h-12 px-4 lg:px-6 text-[1.03rem] bg-red post-item-mobile hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span class="item-title hidden md:block">Đăng đơn</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
ul li {
  cursor: pointer;
  text-align: center;
}
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
}
.list-item-menu {
  display: flex;
  flex-grow: 1;
  align-items: center;
}
.item-link {
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 1.03rem;
}
.item-link:hover {
  background-color: white;
  color: #069255;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s linear;
}
.item-title {
  line-height: 1;
  margin-top: 4px;
  margin-left: 8px;
}
.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: 50%/100% 100% no-repeat;
}
@media screen and (max-width: 639.99px) {
  .header-menu_end {
    z-index: 9999;
    width: 100%;
    margin: 0;
    background: #fff;
  }
  .list-item-mobile {
    display: block;
    flex-direction: column;
    color: #069255;
  }
  li a {
    padding: 0 20px !important;
  }
  .post-item-mobile {
    color: #fff;
  }
  .post-item-mobile span {
    display: block;
  }
}
</style>
