import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../PageHeader';

function TeacherList() {

  return (
    <View style={styles.container} >
     <PageHeader title='Proffys Disponíveis' />
    </View>
  );
}

export default TeacherList;