

// import HomeIcon from 'material-ui/svg-icons/action/home';
// import MovieIcon from 'material-ui/svg-icons/action/theaters';
// import BookIcon from 'material-ui/svg-icons/communication/import-contacts';
// import Divider from 'material-ui/Divider';
// import UserIcon from 'material-ui/svg-icons/social/person';

import Products from './Containers/Products/Products';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Products,
      exact: true,
    }
  ]
  
  export default routes