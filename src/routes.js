import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Search from './pages/search';
//import Pet from './pages/pet';

const NavStack = createStackNavigator({
    Main,
    Search,
    //Pet
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#FFFFFF'
        },
        headerTintColor: '#003226'
    }
});

const Routes = createAppContainer(NavStack);

export default Routes;