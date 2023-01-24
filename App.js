import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './container/Home'
import TweetEditorHooks from './container/TweetEditorsWithHooks'


//import TweetEditor from './containers/TweetEditor'


const AppNavigator = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  tweetEditor: {
    screen: TweetEditorHooks,
    navigationOptions: {
      headerTitle: 'New Tweet'
    }
  }
}
)

export default createAppContainer(AppNavigator)
