/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/starter/starter.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
// import Alerts from '../views/ui-components/alert.jsx';
import LogInPage from '../views/ui-components/LogIn.jsx';
import BootstrapDocs from '../views/ui-components/bootstrapDocs.jsx';
import RegisterPage from '../views/ui-components/Register.jsx';
import AddLogement from '../views/ui-components/AddLogement.jsx';

var ThemeRoutes = [
  {
    path: '/starter/starter',
    name: 'Dashboard',
    icon: 'mdi mdi-adjust',
    component: FirstDashboard
  },
  {
    path: '/ui-components/AddLogement',
    name: 'Ajouter Logement',
    icon: 'mdi mdi-comment-processing-outline',
    component: AddLogement
  },
  {
    path: '/ui-components/LogInPage',
    name: 'Connexion',
    icon: 'mdi mdi-arrange-send-backward',
    component: LogInPage
  },
  {
    path: '/ui-components/RegisterPage',
    name: 'Inscription',
    icon: 'mdi mdi-toggle-switch',
    component: RegisterPage
  },
 
  {
    path: '/ui-components/bootstrapDocs',
    name: 'BootstrapDocs',

    icon: 'mdi mdi-react',
    component: BootstrapDocs
  },
  {
    path: '/',
    pathTo: '/starter/starter',
    name: 'Dashboard',
    redirect: true
  }
  
];
export default ThemeRoutes;


 // {
  //   path: '/ui-components/card',
  //   name: 'Contact',
  //   icon: 'mdi mdi-credit-card-multiple',
  //   component: Cards
  // },
  // {
  //   path: '/ui-components/layout',
  //   name: 'Layout',
  //   icon: 'mdi mdi-apps',
  //   component: LayoutComponent
  // },
  // {
  //   path: '/ui-components/pagination',
  //   name: 'Pagination',

  //   icon: 'mdi mdi-priority-high',
  //   component: PaginationComponent
  // },
  // {
  //   path: '/ui-components/popover',
  //   name: 'Popover',

  //   icon: 'mdi mdi-pencil-circle',
  //   component: PopoverComponent
  // },
  // {
  //   path: '/ui-components/tooltip',
  //   name: 'Toltips',

  //   icon: 'mdi mdi-image-filter-vintage',
  //   component: TooltipComponent
  // },