import React from 'react';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicial from './componentes/Telas/TelaInicial';
import LiveScreen from './componentes/Telas/LiveScreen';
import TelaPerfil from './componentes/Telas/TelaPerfil';
import GameScreen from './componentes/Telas/GameScreen';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    paddingBottom: 12,
  }
}

const TabNavScreen = () => {
  return(
    <TabNav.Navigator 
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "TelaInicial":
                iconName = "home";
                break;
            case "LiveScreen":
                iconName = "video-camera";
                break;
            case "TelaPerfil":
                iconName = "user";
                break;
            
              default:
                iconName = "home";
                break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#ffffff" />
            </TabBarIconContainer>
          )
        }
      }) }
    >
      <TabNav.Screen name="TelaInicial" component={TelaInicial} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="TelaPerfil" component={TelaPerfil} />
    </TabNav.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? "#819ee5" : "#343434")};
  padding: 2px 16px;
  border-radius: 32px;
`