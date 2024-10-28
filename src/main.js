import { createApp } from 'vue'
import './style.css'
import App from './Test.vue'

const app = createApp(App);

app.config.errorHandler = (err) => {
    console.log(err);
}

app.mount('#app');