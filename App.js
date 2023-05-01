import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import nachos from "./Nachos"

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList style={{width: "100%"}}
      data={nachos}
      renderItem={({item})=>{
      return <View style={{padding: 10, fontSize: 24, borderBottomWidth: 5, borderBottomColor: "#f4cc61"}}><Text style={{padding: 10, fontSize: 24, color: "#f1a514"}}>{item.name} -{item.category}</Text></View>
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
		backgroundColor: '#ffecb3',
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
