import { boot } from 'quasar/wrappers';
import VueGoogleMaps from '@fawmi/vue-google-maps';

export default boot(({ app }) => {
  // using the app google maps
  app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD5e_PkPf1-6puljGYhpJ5WPG6OF5B22wU', //importing the specific key
      map_id: 'aade96f206662cf8',
    },
  });
});
