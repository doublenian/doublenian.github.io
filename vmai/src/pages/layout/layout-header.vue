<template>
  <header class=" absolute z-10 w-full pt-2">
    <div class=" w-full flex justify-end mb-4 header-tool px-6">
      <div class=" w-16 h-6 flex justify-center items-center">中文</div>
      <div
        class="w-16 h-6 mx-2 flex justify-center items-center bg-black text-primary"
      >
        英文
      </div>
      <div
        class="w-16 h-6 border flex justify-center items-center rounded border border-black"
      >
        搜索
      </div>
    </div>
    <div class="wrap">
      <!-- <div id="hamburger" v-on:click="display_menu()">
        <span></span>
        <span></span>
        <span></span>
      </div> -->
      <img
        class="logo cursor-pointer"
        src="@/assets/images/v-mai.png"
        alt="logo"
        @click="$router.push({ path: '/' })"
      />
      <nav id="menu">
        <li
          class="drop"
          v-for="(item, index) in twoLevelMenu"
          :key="'menu' + index"
        >
          <a
            @mouseenter="display_drop_menu(item)"
            @mouseleave="hide_drop_menu(item)"
            :class="[item.showActive ? 'menuActive' : '']"
            :href="item.linker"
            >{{ item.titleZh }}
            <i class="el-icon-caret-bottom" v-if="item.children.length > 0"></i
          ></a>
          <ul
            v-if="item.children.length > 0"
            class="drop_menu"
            @mouseenter="display_drop_menu(item)"
            @mouseleave="hide_drop_menu(item)"
            :class="[item.showActive ? 'display' : '']"
          >
            <a
              class="submenu"
              @click="clickSubMenu(item, sub)"
              v-for="(sub, subIndex) in item.children"
              :key="'menu' + index + 'sub' + subIndex"
              >{{ sub.titleZh }}</a
            >
          </ul>
        </li>
      </nav>
    </div>
  </header>
</template>
<script>
import { getCategory } from '@/api'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      menuList: []
    }
  },
  computed: {
    ...mapGetters(['twoLevelMenu'])
  },
  async created() {
    await this.$store.dispatch('category/queryTwoLevel')
    console.log('======threeLevelMenu=====')
    console.log(this.twoLevelMenu)
  },
  mounted() {},
  methods: {
    clickSubMenu(item, sub) {
      if (item.title.zh === '作品案例') {
        this.$router.push({
          path: `/campus/${sub.id}`
          // query: {
          //   id: sub.id
          // }
        })
      }
      if (item.title.zh === '关于维迈') {
        if (sub.title.zh === '集团简介') {
          this.$router.push({
            path: '/company-profile'
          })
        }
        if (sub.title.zh === '企业宣传片') {
          this.$router.push({
            path: '/company-promotion'
          })
        }
        if (sub.title.zh === '荣誉资质') {
          this.$router.push({
            path: '/certfication'
          })
        }
      }
    },
    display_menu: function() {
      var body = document.getElementsByTagName('body')[0]
      !body.classList.contains('display_menu')
        ? body.classList.add('display_menu')
        : body.classList.remove('display_menu')
    },
    hide_drop_menu(item) {
      item.showActive = false
    },
    display_drop_menu: function(item) {
      item.showActive = true
      // var drop_menu = event.target.parentElement.getElementsByClassName(
      //   'drop_menu'
      // )[0]
      // var drop_menus = document.getElementsByClassName('drop_menu')

      // Array.from(drop_menus).forEach(function(e) {
      //   if (e != drop_menu) {
      //     e.classList.remove('display')
      //   }
      // })
      // var lis = document.getElementById('menu').getElementsByTagName('li')
      // Array.from(lis).forEach(function(e) {
      //   e.style.marginTop = 0
      // })
      // !drop_menu.classList.contains('display')
      //   ? drop_menu.classList.add('display')
      //   : drop_menu.classList.remove('display')
      // if (window.innerWidth < 660 && drop_menu.classList.contains('display')) {
      //   event.target.parentElement.nextSibling.nextSibling.style.marginTop =
      //     drop_menu.clientHeight + 'px'
      // }
    }
  }
}
</script>
<style lang="less">
@cblue : #cd9528;
@cgrey : #000001;
@cwhite : #ffffff;
@ccream : #FAFBFC;
@cgrey_green: #cd9528;
@clightgrey : #DAD9D7;

@body_height_8: calc((100vh - 113px) / 8);
@body_height_4: calc((100vh - 113px) / 4);

ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.wrap {
  // max-width: 1024px;
  min-width: 320px;
}
header {
  // display: flex;
  // z-index: 1;
  // padding: 10px 0;
  // width: 100%;
  // top: 0;
  // justify-content: center;
  // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  // transition: 0.33s;
}
header .wrap {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
header img {
  width: 140px;
  margin-top: -50%;
}
header #menu {
  display: flex;
  flex-direction: row;
}
header #menu li {
  position: relative;
  user-select: none;
  margin-left: 20px;
  i {
    width: 12px;
    height: 12px;
    // background-color: @cgrey;
  }
  .submenu {
    color: white;
    font-size: 14px;
  }
  a {
    color: @cgrey;
    cursor: pointer;
    font-size: 1.15em;
    display: block;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: none;
    // border-bottom: 2px solid @cwhite;
    transition: 0.15s;
    background: none;
    position: relative;
    i {
      color: transparent;
    }
    &.menuActive {
      border-bottom-color: @cblue;
      background-color: #000001;
      color: @cblue;
      i {
        color: @cblue;
      }
    }
    &:hover {
      border-bottom-color: @cblue;
      background-color: #000001;
      color: @cblue;

      i {
        color: @cblue;
      }
    }
  }
}
header .drop_menu {
  position: absolute;
  display: block;
  padding-top: 4px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #cd9528;
  }
  top: 100%;
  transform: scaleY(0);
  width: 120px;
  transform-origin: top;
  background-color: #414243;
  transition: 0.25s;
  padding-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  a {
    // margin-left: 20px;
    display: block;
    transition: 0.45s;
    opacity: 0;
    text-align: center;
    width: 100%;
    height: 40px;
  }
}

header .drop_menu.display {
  transform: scaleY(1);
  a {
    opacity: 1;
    color: yellow;
  }
}
header #hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: 3%;
  top: 30px;
  display: none;
  transform: translateY(-50%);
}
header #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: @cgrey;
  display: block;
  transition: 0.33s;
  &:nth-child(1) {
    width: 12px;
  }
  &:nth-child(2) {
    width: 24px;
  }
  &:nth-child(3) {
    width: 12px;
  }
}
.display_menu header #hamburger {
  span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 1px);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
  span:nth-child(3) {
    transform: rotate(45deg) translate(6px, -9px);
  }
}

// @media screen and (max-width: 660px) {
//   body {
//     padding-top: 70px;
//   }
//   header .wrap {
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     padding: 0;
//   }
//   header img {
//     width: 120px;
//   }
//   header #hamburger {
//     display: block;
//   }
//   header #menu {
//     width: 100%;
//     display: block;
//     height: 0;
//     transform-origin: 50% 0;
//     transition: 0.33s ease;
//     flex-direction: column;
//   }
//   .display_menu header #menu {
//     height: calc(100vh - 64px);
//     li {
//       height: @body_height_8;
//       border-bottom: 1px solid @clightgrey;
//       transition: 0.25s ease;
//       opacity: 1;
//       display: block;
//       a {
//       }
//     }
//   }
//   header #menu li {
//     height: 0;
//     opacity: 0;
//     margin-left: 0;
//     transition: 0.25s ease;
//     a {
//       left: 0;
//       line-height: @body_height_8;
//       padding-left: 20px;
//       border: none;
//       height: 100%;
//       width: 100%;
//       display: block;
//       color: white;
//       &:hover {
//         color: @cwhite;
//         background-color: @cblue;
//         i {
//           background-color: @cwhite;
//         }
//       }
//     }
//     i {
//       position: absolute;
//       right: 20px;
//       top: 50%;
//       transform: translateY(-50%);
//       background-color: @cgrey;
//     }
//   }
//   .header-tool {
//     display: none;
//   }
//   header .drop_menu {
//     top: @body_height_8;
//     box-shadow: none;
//     left: 0;
//     padding-bottom: 0;
//     width: 100%;
//     a {
//       width: 100%;
//       padding: 0 !important;
//       padding-left: 40px !important;
//       margin: 0;
//       border-bottom: 1px solid @clightgrey !important;
//     }
//   }
// }
// @media screen and(max-width: 660px) and(max-height: 500px) {
//   .display_menu header {
//     max-height: 100vh;
//     overflow-y: scroll;
//   }
//   .display_menu header #menu {
//     li {
//       height: @body_height_4;
//     }
//   }
//   header #menu li {
//     a {
//       line-height: @body_height_4;
//     }
//   }
//   header .drop_menu {
//     top: @body_height_4;
//   }
// }
i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}
</style>
