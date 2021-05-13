import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Layout from '~/layouts/Default.vue';
import '~/theme.scss';
import '@fontsource/work-sans';
import { configureVue } from 'pinelab-storefront-client';
import AsyncImage from '../../lib/buefy-components/AsyncImage';
import QuantityInput from '../../lib/buefy-components/QuantityInput';

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  Vue.component('AsyncImage', AsyncImage);
  Vue.component('QuantityInput', QuantityInput);
  Vue.component('Layout', Layout);
  configureVue(Vue, { router, head, isClient });
}
