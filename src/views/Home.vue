<template>
  <div>
    <FallingMoney/>
    <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>发财UI </h1>
        <h2>年轻人的第一个 UI 框架</h2>
        <p class="actions">
          <a class="github" href="https://github.com/baIder/rich-ui">GitHub</a>
          <router-link class="start" to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="rich-home-features-icon">
            <use href="#Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="rich-home-features-icon">
            <use href="#typescript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="rich-home-features-icon">
            <use href="#linggan"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import FallingMoney from '../components/FallingMoney.vue'

export default {
  name: 'Home',
  components: {TopNav, FallingMoney}
};
</script>

<style lang="scss" scoped>
@import "../assets/helper.scss";

.topNavAndBanner {
  //background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  background: linear-gradient(145deg, rgba(250, 251, 255, 0.9) 0%, rgba(226, 230, 253, 0.9) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
        color: $features-font-color;
      }

      > p {
        grid-area: text;
        color: $sub-features-font-color;
      }
    }
  }
}

.banner {
  padding: 100px 0;
  color: $banner-font-color;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 64px;
    font-weight: 800;
    letter-spacing: 8px;
    text-shadow: 3px 3px 3px fade_out(black, 0.7) !important;
  }

  > h2 {
    font-size: 32px;
    font-weight: 600;
    text-shadow: 2px 2px 2px fade_out(black, 0.7) !important;
  }

  > .actions {
    padding: 32px 0 0 0;

    a {
      text-decoration: none;
      margin: 0 8px;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      transition: all 250ms;
      font-weight: 500;

      &.start {
        color: white;
        background: linear-gradient(90deg, #f3a455 0%, #f08429 100%);;
        animation: animated-box-shadow 1s infinite;
        font-weight: 600;
        letter-spacing: 2px;

        @keyframes animated-box-shadow {
          0% {
            box-shadow: 0 0 0 0 fade-out(#f08429, 0.3);

          }
          100% {
            box-shadow: 0 0 0 10px fade-out(#f08429, 1);
          }
        }

        &:hover {
          animation: animated-box-shadow-hover 500ms infinite;

          @keyframes animated-box-shadow-hover {
            0% {
              box-shadow: 0 0 0 0 fade-out(#f08429, 0.3);

            }
            100% {
              box-shadow: 0 0 0 10px fade-out(#f08429, 1);
            }
          }
        }
      }

      &.github {
        background: white;

        letter-spacing: 1px;
        outline: 2px solid fade-out(#737474, 0.5);
        color: #464646;

        &:hover {
          outline: 2px solid transparent;
          color: white;
          background: $link-hover-color;
        }

      }
    }
  }
}
</style>