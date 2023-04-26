import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import nachos from "./Nachos"

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={nachos}
      renderItem={({item})=>{
        return <Text>{item.name}</Text>
      }}
      keyExtractor={(item)=>item}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 60,
		backgroundColor: 'beige',
		borderWidth: 1,
		padding: 5,
		display: "flex",
		flexDirection: "column",
    height: "50%",
    textAlign: 'center',
  },
  item: {
		marginTop: 20,
		backgroundColor: 'beige',
		borderWidth: 1,
		padding: 5,
		borderColor: 'red',
		display: "flex",
		flexDirection: "column",
		width: "100%",
    textAlign: 'center',
		justifyContent: 'space-between'
	},
});
