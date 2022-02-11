import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-paper';


const SectionTitle = ({image, name, nickName, ago}): Node => {
  return (
    <View style={styles.sectionHeader}>
      <Avatar.Image size={40} source={image} />
      <View style={{flex: 1, marginLeft: 10}}>
        <Text style={styles.headerTitle}>
          {name} <Image source={require('../assets/images/verify.png')}></Image>
        </Text>
        <Text style={styles.headerDetail}>
          @{nickName} {'\u2022'}  {ago}
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={require('../assets/images/more.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

const SectionBottom = ({like, chat, archives}): Node => {
  return (
    <View style={styles.sectionBottom}>
      <Image source={require('../assets/images/heart.svg')}/>
      <Text style={{...styles.normalText, marginLeft: 8, height: 18, textAlignVertical: 'center'}}>
        {like}
      </Text>
      <Image style={{marginLeft: 20}} source={require('../assets/images/chat.svg')}/>
      <Text style={{...styles.normalText, marginLeft: 8, height: 18, textAlignVertical: 'center'}}>
        {chat}
      </Text>
      <Image style={{marginLeft: 20}} source={require('../assets/images/archive.svg')}/>
      <Text style={{...styles.normalText, marginLeft: 8, height: 18, textAlignVertical: 'center'}}>
        {archives}
      </Text>
      <TouchableOpacity style={{marginLeft: 'auto'}}>
        <Image source={require('../assets/images/send.svg')}/>
      </TouchableOpacity>
    </View>
  );
};

const Main: () => Node = () => {
  
  return (
    <View style={{marginBottom: 30}}>

      <View style={styles.sectionContainer}>
        <SectionTitle 
          image={require('../assets/images/avatar1.png')} 
          name="Nail Smith"
          nickName="nailsmith"
          ago="1hr"/>

        <View style={styles.tagsContainer}>
          <Image source={require('../assets/images/trending.svg')}/>
          <Image source={require('../assets/images/habits.svg')}/>
        </View>
        
        <Text style={styles.boldText}>Shifts in the Paradigm</Text>

        <View>
          <View style={styles.picContainer}>
            <Image style={styles.pic} source={require('../assets/images/pic1.png')} />
          </View>
          <View style={{...styles.imageContent, position: 'absolute', bottom: 16, left: 12}}>
            <Image source={require('../assets/images/user.svg')}/>
            <Text style={{...styles.normalText, marginLeft: 4, height: 18, textAlignVertical: 'center', color: 'white'}}>468</Text>
            <Image style={{marginLeft: 10}} source={require('../assets/images/archive2.svg')}/>
            <Text style={{...styles.normalText, marginLeft: 4, height: 18, textAlignVertical: 'center', color: 'white'}}>689</Text>
          </View>
        </View>
        
      </View>

      <View style={styles.sectionContainer}>
        <SectionTitle 
          image={require('../assets/images/avatar2.png')} 
          name="Jennifer Aniston"
          nickName="jennis_jsm"
          ago="2hr"/>
        
        <Text style={{...styles.normalText, marginTop: 12}}>
          Hello <Text style={{color: '#BD6EFF'}}>@Helen</Text> Its is the best topics for you.
          Whether its a driving tour, What's up? 😋 
        </Text>

        <View style={styles.picContainer}>
          <Image style={styles.pic} source={require('../assets/images/pic2.png')}/>
        </View>

        <SectionBottom like="468" chat="2.2k" archives="8.6k"/>

      </View>

      <View style={styles.sectionContainer}>
        <SectionTitle 
          image={require('../assets/images/avatar3.png')} 
          name="Arron Finch"
          nickName="arronfinch78"
          ago="6hr"/>

        <View style={styles.tagsContainer}>
          <Image source={require('../assets/images/news.svg')}/>
          <Image source={require('../assets/images/sports.svg')}/>
        </View>
        
        <Text style={styles.boldText}>Australian government cancels Novak Djokovic’s visa ahead of the Australian.</Text>

        <View>
          <View style={styles.picContainer}>
            <Image style={styles.pic} source={require('../assets/images/pic3.png')} />
          </View>
          <View style={{...styles.imageContent, position: 'absolute', bottom: 16, left: 12}}>
            <Image source={require('../assets/images/user.svg')}/>
            <Text style={{...styles.normalText, marginLeft: 4, height: 18, textAlignVertical: 'center', color: 'white'}}>468</Text>
            <Image style={{marginLeft: 10}} source={require('../assets/images/archive2.svg')}/>
            <Text style={{...styles.normalText, marginLeft: 4, height: 18, textAlignVertical: 'center', color: 'white'}}>689</Text>
          </View>
        </View>
        
      </View>

      <View style={styles.sectionContainer}>
        <SectionTitle 
          image={require('../assets/images/avatar4.png')} 
          name="Tommy Hens"
          nickName="tommy_hens"
          ago="2hr"/>
        
        <Text style={{...styles.normalText, marginTop: 12}}>
          I had moments when I thought this project would never happen . However 14 years later, a global recession, some mistakes and a lot of hard work and persistence.
        </Text>

        <SectionBottom like="368" chat="4.2k" archives="8.6k"/>

      </View>

      <View style={styles.sectionContainer}>
        <SectionTitle 
          image={require('../assets/images/avatar5.png')} 
          name="Tyler Kutt"
          nickName="tylerkutt_01"
          ago="1hr"/>
        
        <View style={styles.tagsContainer}>
          <Image source={require('../assets/images/pool.svg')}/>
        </View>

        <Text style={{...styles.normalText, marginTop: 12}}>
          What design tool do you use the most?
        </Text>

        <SectionBottom like="468" chat="2.2k" archives="8.4k"/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#222222'
  }, 
  headerDetail: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#8B8E97'
  },
  tagsContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  boldText: {
    fontSize: 18,
    color: '#222222',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
  },
  normalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#222222',
  },
  picContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  pic: {
    resizeMode: 'contain',
    flex: 1,
    borderRadius: 6,
  },
  sectionBottom: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
  },
  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Main;
