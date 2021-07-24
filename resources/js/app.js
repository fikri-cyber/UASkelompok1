/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('jquery');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
import Swal from 'sweetalert2'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faChalkboardTeacher, faBookOpen, faClipboard, faSchool, faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUsers, faChalkboardTeacher, faBookOpen, faClipboard, faSchool, faTwitter, faInstagram, faFacebook, faTrash, faEdit, faInfoCircle)

 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


window.toast = toast;
window.Swal = Swal;
window.Form = Form;

Vue.use(VueRouter,VueAxios,Axios);


import App from './components/App.vue';
import TambahMahasiswa from './components/mahasiswa/TambahMahasiswa.vue';
import MahasiswaDashboard from './components/mahasiswa/MahasiswaDashboard.vue';
import UpdateMahasiswa from './components/mahasiswa/UpdateMahasiswa.vue';
import DetailMahasiswa from './components/mahasiswa/DetailMahasiswa.vue';
import NilaiMahasiswa from './components/nilai/NilaiMahasiswa.vue';
import NilaiSatuMahasiswa from './components/nilai/NilaiSatuMahasiswa.vue';
import EditNilaiMahasiswa from './components/nilai/EditNilaiMahasiswa.vue';
import MataKuliah from './components/matakuliah/MataKuliah.vue';
import Dosen from './components/dosen/Dosen.vue';
import IPK from './components/nilai/IPK.vue';


const routes = [
    {
        path: '/dashboard',
        component: MahasiswaDashboard
    },
    {
        path: '/create',
        component: TambahMahasiswa
    },
    {
        path: '/edit/:id',
        component: UpdateMahasiswa
    },
    {
        path: '/detail/:id',
        component: DetailMahasiswa
    },
    {
        path: '/nilaisiswas',
        component: NilaiMahasiswa
    },
    {
        path: '/nilaisiswa/:id',
        component: IPK
    },
    {
        path: '/editnilai/:nis/:kelas/:semester/:kode',
        component: EditNilaiMahasiswa
    },
    {
        name: 'matpel',
        path: '/matpel',
        component: MataKuliah
    },
    {
        name: 'dataguru',
        path: '/dosen',
        component: Dosen
    }
    

]

const router = new VueRouter({ mode: 'history', routes: routes });
// const app = new Vue({
//     el: '#app',
//     components: { App },
//     router,
// });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });
