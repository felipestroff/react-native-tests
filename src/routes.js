import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Project from './pages/project';

console.log(Project);

const NavStack = createStackNavigator({
    Main,
    Project
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    }
});

const Routes = createAppContainer(NavStack);

export default Routes;