<template>
  <div>
    <FallingMoney/>
    <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>发财 UI </h1>
        <h2>年轻人的第一个 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/baIder/rich-ui">GitHub</a>
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
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
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
      }

      > p {
        grid-area: text
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

  > .actions {
    padding: 8px 0;

    a {
      text-decoration: none;
      margin: 0 8px;
      background: $banner-a-background;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      transition: all 250ms;

      &.start {
        animation: animated-box-shadow 1s infinite;

        @keyframes animated-box-shadow {
          0% {
            box-shadow: 0 0 0 0 fade-out($banner-a-background, 0.3);

          }
          100% {
            box-shadow: 0 0 0 10px fade-out($banner-a-background, 1);
          }
        }

        &:hover {
          animation: animated-box-shadow-hover 500ms infinite;

          @keyframes animated-box-shadow-hover {
            0% {
              box-shadow: 0 0 0 0 fade-out($link-hover-color, 0.3);

            }
            100% {
              box-shadow: 0 0 0 10px fade-out($link-hover-color, 1);
            }
          }
        }
      }

      &:hover {
        background: $link-hover-color;
      }
    }
  }
}
</style>