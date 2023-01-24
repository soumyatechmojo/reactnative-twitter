// import { StyleSheet, Text, View } from 'react-native';
// import RegisterForm from './component/forms/RegisterForm';


// export default function App() {
//   return (
//     <View style={styles.container}>
//     <Text>Form Validation By Soumyadeep! </Text>
//      <RegisterForm />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'olive',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './container/Home'
//import TweetEditor from './containers/TweetEditor'
import TweetEditorHooks from './container/TweetEditorsWithHooks'

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
