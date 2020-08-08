import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ( {teacher, favorited} ) => {

  const [isFavorited, setIsFavorited] = useState(favorited);

  function handlePressWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

   

    let favoritesArray = [];
      
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://radiopeaobrasil.com.br/wp-content/uploads/2019/03/albert-einstein-head.jpg' }}/>

        <View style={styles.profileInfo}>
          <Text style={styles.name} > {teacher.name} </Text>
          <Text style={styles.subject} > {teacher.subject} </Text>
        </View>
      </View>

      <Text style={styles.bio}> 
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>
            {teacher.cost}
          </Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton  
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton, 
              isFavorited ? styles.favorited : {}
            ]}>
            { isFavorited ? 
              <Image source={unFavoriteIcon}/>
              :
              <Image source={heartOutlineIcon}/>
            }
          </RectButton>

          <RectButton  style={styles.contactButton}
            onPress={handlePressWhatsapp}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
          
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;