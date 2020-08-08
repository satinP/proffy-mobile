import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

function TeacherItem() {

  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://radiopeaobrasil.com.br/wp-content/uploads/2019/03/albert-einstein-head.jpg' }}/>

        <View style={styles.profileInfo}>
          <Text style={styles.name} > Albert Einstein </Text>
          <Text style={styles.subject} > Física </Text>
        </View>
      </View>

      <Text style={styles.bio}> 
        Físico teórico alemão que desenvolveu a teoria da relatividade geral.
        {'\n'}{'\n'}
        Laureado com o Prêmio Nobel de Física de 1921.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>
            U$ 3.000
          </Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton  style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon}/> */}
            <Image source={unFavoriteIcon}/>
          </RectButton>

          <RectButton  style={styles.contactButton}>
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