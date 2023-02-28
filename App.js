
import { StyleSheet, Text, View } from 'react-native';
import Contact from './components/Contact';
import ContactScreen from './ContactScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ContactScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   marginVertical:50
  
  },
});

//  npx create-expo-app --template