import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import nachos from "./Nachos"
import history from "./History"
import recipes from "./Recipe"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

<Ionicons name="ios-add-circle-outline" size={32} />

function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList style={{width: "100%"}}
      data={history}
      renderItem={({item})=>{
      return <View style={{padding: 10, fontSize: 24, borderBottomWidth: 5, borderBottomColor: "#f4cc61"}}><Text style={{padding: 10, fontSize: 24, color: "#f1a514"}}>{item.name}</Text></View>
      }}
      keyExtractor={(item)=>item}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <FlatList style={{width: "100%"}}
      data={recipes}
      renderItem={({item})=>{
      return <View style={{padding: 10, fontSize: 24, borderBottomWidth: 5, borderBottomColor: "#f4cc61"}}><Text style={{padding: 10, fontSize: 24, color: "#f1a514"}}>{item.name}</Text></View>
      }}
      keyExtractor={(item)=>item}
      />
    </View>
  );
}

function NachosList() {
  return (
  <View style={styles.container}>
      <FlatList style={{width: "100%"}}
      data={nachos}
      renderItem={({item})=>{
      return <View style={{padding: 10, fontSize: 24, borderBottomWidth: 5, borderBottomColor: "#f4cc61"}}><Text style={{padding: 10, fontSize: 24, color: "#f1a514"}}>{item.name} -{item.category}</Text></View>
      }}
      keyExtractor={(item)=>item}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'History') {
            iconName = focused
              ? 'hourglass' // Set focused icon
              : 'hourglass-outline'; // Set the not focused icon
          } else if (route.name === 'Recipe') {
            iconName = focused ? 'pizza' : 'pizza-outline';
          } else if (route.name === 'Nachos') {
            iconName = focused ? 'triangle' : 'triangle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange', // Active/focussed color
        tabBarInactiveTintColor: 'tan' // Inactive color
      })}>
        <Tab.Screen name="History" component={HomeScreen} />
        <Tab.Screen name="Nachos" component={NachosList} />
        <Tab.Screen name="Recipe" component={SettingsScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
