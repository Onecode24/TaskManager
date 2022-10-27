import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// For font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import  {faPencil} from "@fortawesome/free-solid-svg-icons";
import  {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import {faTasks} from "@fortawesome/free-solid-svg-icons"
import {faHourglassHalf} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faTasks);
library.add(faHourglassHalf);
library.add(faPencil)
library.add(faTrash)
library.add(faCheck)


const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia());
app.mount('#app')