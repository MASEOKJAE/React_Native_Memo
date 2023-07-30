import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

// 가장 먼저 선언되어 있는 Screen이 default screen으로 자동 설정 => Home (Default Screen)
// screen을 사용할 때는 선언해준 이름을 사용한다. "Home:" 이렇게 작성했다면 "Home" 사용
const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);