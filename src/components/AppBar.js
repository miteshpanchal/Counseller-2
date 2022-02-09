import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform,View } from 'react-native';
import { DrawerActions } from "react-navigation";
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function AppBar() {
    return (
        <View>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={()=>console.log("clicked")}
          />
          <Appbar.Content title="Mitesh Panchal" />
        </Appbar.Header>
        
      </View>
     )
    
    }


