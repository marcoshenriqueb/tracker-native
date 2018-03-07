import { StackNavigator } from 'react-navigation';
import LoginScreen from './../screens/login';
import DashboardScreen from './../screens/dashboard';

const MainNav = StackNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen },
},
{
  initialRouteName: 'Login',
  headerMode: 'none',
});

export default MainNav;
