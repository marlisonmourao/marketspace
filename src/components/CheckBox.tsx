import { StyleSheet, TouchableOpacity, View, TouchableOpacityProps } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { Text } from 'native-base';

type Props = TouchableOpacityProps & {
  checked?: boolean
  title: String;
}

export function CheckBox({ checked = false, title, ...rest }: Props) {
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
    >

      {
        checked ?
      <View style={styles.subContainer}>
        <Feather name="check" size={13} color="white" />
      </View>
      :
      <View style={styles.EmpatyContainer}/>
      }
      
      <Text
        fontFamily="body"
        fontSize="md"
        color="gray.200"
        ml={'8px'}
      >
        {title}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 11,
    alignItems: 'center',
  },
  subContainer: {
    height: 18,
    width: 18,
    backgroundColor: '#647AC7',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  EmpatyContainer: {
    height: 18,
    width: 18,
    borderWidth: 1,
    borderColor: '#9F9BA1',
    backgroundColor: '#EDECEE',
    borderRadius: 1,
  }
})