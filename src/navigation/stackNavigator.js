import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabNavigator from './topTabNavigator';
import HomeScreen from '../screens/Home/homeScreen';
import EntertainmentScreen from '../screens/Entertainment/entetainmentScreen';
import SportsScreen from '../screens/Sports/sportsScreen';
import HealthScreen from '../screens/Health/healthScreen,';

const Stack = createStackNavigator();

const StackNavigator = ()=>{
    return(
        <Fragment>
            <Stack.Navigator>
                <Stack.Screen name="main" component={TopTabNavigator}/>
            </Stack.Navigator>
        </Fragment>
    )
}

export default StackNavigator;