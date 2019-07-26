<template>
  <div id="app">
    <div class="yus-doc-row">
      <header class="main-header">
        <span>自定义主题</span>
        <div class="main-header__right">
          <div class="version">v1.0.0</div>
          <a class="github" href="https://github.com/Webang/yus-vue">
            <svg
              t="1559543964086"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1105"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="32"
              height="32"
            >
              <path
                style="fill:white;stroke:red;stroke-width:2"
                d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z"
                p-id="1106"
              ></path>
            </svg>
          </a>
        </div>
      </header>
    </div>
    <div class="main-content yus-doc-row">
      <div class="yus-doc-simulator">
        <iframe class="frame" :src="frameUrl" frameborder="0"></iframe>
      </div>
      <div class="yus-doc-view">
        <ul class="theme-list">
          <li v-for="(item, index) in themeList" :key="index">{{ item }}</li>
        </ul>
        <div class="theme-details">
          <ul>
            <li v-for="(item, index) in themeContent" :key="index">
              <span class="prop-label">{{ item.label }}</span>
              <input
                class="prop-input"
                :value="item.value"
                :data-index="index"
                @change="handleChange"
                type="color"
              >
              <span class="prop-value">{{ item.value }}</span>
            </li>
          </ul>
          <button @click="handleSaveTheme">保存主题</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mdConfig from './mdConfig';
import menuComponent from '../menu-component';
import axios from 'axios';

const uppercamelize = require('uppercamelcase');
const rootUrl = `${window.location.origin}/mobile.html#/`;

export default {
  data() {
    return {
      mdConfig,
      menuComponent,
      frameUrl: rootUrl,
      themeList: [],
      themeContent: [],
      currentThemeId: ''
    };
  },
  watch: {
    $route(route) {
      this.frameUrl = `${rootUrl}${route.name}`;
    }
  },
  mounted() {
    axios('/theme').then(res => {
      this.themeList = res.data;
      this.currentThemeId = this.themeList[1].split('.')[0];
      this.getTheme(this.currentThemeId);
    })
  },
  methods: {
    uppercamelize,
    getTheme(themeId) {
      axios(`/theme/${themeId}`).then(res => {
        this.themeContent = res.data;
      })
    },
    handleChange(event) {
      const target = event.target;
      const index = +event.target.getAttribute('data-index');
      this.themeContent[index]['value'] = event.target.value;
    },
    saveTheme(themeId) {
      let content = JSON.stringify(this.themeContent);
      content = encodeURIComponent(content);
      axios.post(`/theme/${themeId}?content=${content}`).then(res => {
      })
    },
    handleSaveTheme() {
      this.saveTheme(this.currentThemeId);
    }
  }
};
</script>

<style lang="scss" scoped>
.theme-details {
  padding: 20px;
  .prop-value {
    margin-left: 10px;
  }
  .prop-input {
    margin-left: 10px;
  }
}
</style>
