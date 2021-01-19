import * as React from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { Audio } from 'expo-av';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function AudioPlay({url}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
        <TouchableHighlight style={{justifyContent:"center", alignItems: "center", width: windowWidth, height:windowWidth, backgroundColor: "#000"}}
        onPress={playSound}>
            <AntDesign name="play" size={100} color="#fff" />
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
}); 