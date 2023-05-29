import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CatVotes } from '../../screens/CatVotes';
import { Message } from '../../screens/Message';
import { User } from '../../screens/User';
import { FooterMenu } from '../../components/FooterMenu';
const Tab = createBottomTabNavigator();

export const BottomMenuNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <FooterMenu {...props} />}
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Tab.Screen name="CatVotes" component={CatVotes} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
