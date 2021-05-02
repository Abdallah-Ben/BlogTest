import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen';
import AddPost from './src/screens/AddPost'
import {Provider} from './src/context/BlogContext'
import EditPost from './src/screens/EditPost'


const navigator = createStackNavigator({
  Index : IndexScreen,
  Show : ShowScreen,
  AddPost : AddPost,
  Edit : EditPost
},{
  initialRouteName : 'Index', 
  defaultNavigationOptions :{
    title : 'Blogs'
  }
});

const App =  createAppContainer(navigator);

export default () =>{
  return  <Provider> 
    <App/>  
  </Provider>
}