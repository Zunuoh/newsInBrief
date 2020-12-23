import React, {Fragment} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/Home/homeScreen';
import EntertainmentScreen from '../screens/Entertainment/entetainmentScreen';
import SportsScreen from '../screens/Sports/sportsScreen';
import HealthScreen from '../screens/Health/healthScreen,';
import Header from '../screens/Header/headerScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation})=>{
    return(
        <Fragment>
            <Header name="Header" navigation={navigation}/>
           <Tab.Navigator tabBarOptions={{
          activeTintColor: "#ccc",
          inactiveTintColor: "#ccc",
          style:{
              backgroundColor:"#0C204E"
              
          }
        }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Entertainment" component={EntertainmentScreen}/>
            <Tab.Screen name="Sports" component={SportsScreen}/>
            <Tab.Screen name="Health" component={HealthScreen}/>
           </Tab.Navigator>
        </Fragment>
    )
}

export default TopTabNavigator;