import Vue from "vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAngleRight,
  faPlus,
  faRotateRight,
  faTrashCan,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faAngleRight, faPlus, faRotateRight, faTrashCan, faCircleNotch);

/* add font awesome icon component */
Vue.component("fa-icon", FontAwesomeIcon);
