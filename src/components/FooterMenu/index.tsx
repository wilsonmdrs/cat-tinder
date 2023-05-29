import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MessageIcon, PawnIcon, UserIcon } from '../../../assets';
import CustomIcon from '../CustomIcon';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const menuItems = [
  { id: '001', icon: <PawnIcon />, size: 24 },
  { id: '002', icon: <MessageIcon />, size: 24 },
  { id: '003', icon: <UserIcon />, size: 24 },
];
type MenuItem = (typeof menuItems)[0];
export const FooterMenu: React.FC<BottomTabBarProps> = ({ navigation }) => {
  const [iconSelected, setIconSelected] = useState('001');

  const toggleIcon = (id: string) => {
    setIconSelected(id);
    if (id === '001') navigation.navigate('CatVotes');
    if (id === '002') navigation.navigate('Message');
    if (id === '003') navigation.navigate('User');
  };

  return (
    <View style={styles.optionsContainer}>
      <View style={styles.options}>
        {menuItems.map((item: MenuItem) => (
          <TouchableOpacity
            key={item.id}
            style={styles.buttonIcon}
            onPress={() => toggleIcon(item.id)}
          >
            <CustomIcon
              icon={item.icon}
              size={item.size}
              color={iconSelected === item.id ? '#FD267D' : '#434141'}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
