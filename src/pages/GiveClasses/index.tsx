import React from 'react';
import { View, ImageBackground,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses() {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container} >
      <ImageBackground style={styles.content} resizeMode="contain" 
        source={giveClassesBgImage}>
        <Text style={styles.title}>
          Quer ser um Proffy?
        </Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;