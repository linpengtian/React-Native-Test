import React from 'react';
import type { Node } from 'react';
import { Avatar } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Header: () => Node = () => {

	return (
		<View>
      <View style={styles.header}>
        <Avatar.Image size={40} source={require('../assets/images/avatar1.png')} />
        
        <TouchableOpacity style={{flex: 1, marginLeft: 8}}>
          <Text style={styles.selectedTitle}>For You</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{flex: 1, marginRight: 10}}>
          <Text style={styles.unSelectedTitle}>Following</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.searchButton}>
            <Image source={require('../assets/images/search.png')}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
	);
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectedTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#222222',
    fontFamily: 'Poppins-SemiBold',
  },
  unSelectedTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  searchButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 40,
    borderColor: '#F5F5F5',
    borderWidth: 1
  }
});

export default Header;