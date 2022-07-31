import {createApp} from 'vue';
import './lib/rich.scss';
import './index.scss';
import './assets/page-loading.scss'
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css'


const app = createApp(App);
app.use(router);
app.mount('#app');

window.onload = () => {
    setTimeout(() => {
        const loadingWrapper = document.getElementById('loading-wrapper')
        loadingWrapper.classList.remove('page-loading')
        loadingWrapper.ontransitionend = () => {
            loadingWrapper.remove()
        }
    }, 0)

}