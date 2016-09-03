/**
 * @file webpack.npm.base.conf.js
 * entry point
 */

import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Home from './Home';
import Homecontent from './demos/homeContent';
import Paginations from './demos/paginations';
import Loading from './demos/loading';
import Popover from './demos/popover';
import Autocomplete from './demos/autocomplete';
import EchartsDemo from './demos/echarts';
import TagDemo from './demos/tag';
import datepicker from './demos/datepicker';
import Select from './demos/select.vue';
import Toaster from './demos/toaster';

Vue.use(Router);
Vue.use(VueResource);
Vue.config.devtools = true;

const router = new Router();

router.map({
    '/': {
        component: Home,
        subRoutes: {
            '/': {
                component(resolve) {
                    resolve(Homecontent);
                }
            },
            '/component/paginations': {
                component(resolve) {
                    resolve(Paginations);
                }
            },
            '/component/popover': {
                component(resolve) {
                    resolve(Popover);
                }
            },
            '/component/autocomplete': {
                component(resolve) {
                    resolve(Autocomplete);
                }
            },
            '/component/echarts': {
                component(resolve) {
                    resolve(EchartsDemo);
                }
            },
            '/component/tag': {
                component(resolve) {
                    resolve(TagDemo);
                }
            },
            '/component/datepicker': {
                component(resolve) {
                    resolve(datepicker);
                }
            },
            '/component/select': {
                component(resolve) {
                    resolve(Select);
                }
            },
            '/component/loading': {
                component(resolve) {
                    resolve(Loading);
                }
            },
            '/component/toaster': {
                component(resolve) {
                    resolve(Toaster);
                }
            }
        }
    }
});

router.start(App, '#app');