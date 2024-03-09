import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/Home'
import Switchprofile from './components/switchprofile/switchprofile'
import Medicine from './components/medicine/medicine'
import { LogBox } from 'react-native';
const App = () => {

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <View>
   {/* <Home/> */}
   {/* <Switchprofile/> */}
   <Medicine/>
    </View>
  )
}

export default App