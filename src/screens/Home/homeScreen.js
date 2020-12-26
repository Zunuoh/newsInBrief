import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import newsAPI from '../../axios/axios'
import NewsCard from '../../../components/newscard';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ()=>{
    const[news, setNews] = useState([]);
    const[loading, setLoading] = useState(false);
   

useEffect(()=>{
    getNewsFromAPI()
}, [])

const newsResponse = async() =>{
    const response = await newsAPI.get('everything?q=bitcoin&apiKey=6737ee12d7e84595a1a27282d5c6f9c9')
    console.log(response.data)
}

function getNewsFromAPI(){
    newsAPI.get('everything?q=bitcoin&apiKey=6737ee12d7e84595a1a27282d5c6f9c9')
    .then(function(response){
        console.log(response.data)
        setNews(response.data.articles.slice(0,20));
        // console.log(news)
    })
    .catch(function(error){
       console.log(error) 
    })    
}

if(!news){
    return null
}


    return(
        <View style={{flex:1, padding:20, backgroundColor:"#0C204E"}}>
           
             <View style={{}}>
                    <Text style={{fontSize:40, color:"white"}}>LATEST NEWS</Text>
                </View>
            <ScrollView>
              {news && news.map(newN=>{
                  return(
                      <View key={newN.id}>
                          
    
                <View style={{flexDirection:"row", borderBottomWidth:1, borderBottomColor:"white", height:150}}>
                    <View style={{paddingTop:20}}>
                        <Image source={require('../../../assets/blouse3.jpeg')} style={{width:100, height:120}}/>
                    </View>
                    <View style={{paddingTop:20, paddingLeft:20}}>
                        <Text style={{color:"white", fontSize:20}}>{newN.description}</Text>
                    </View>
    
                </View>
                      </View>
                   
                  )
              })}

            </ScrollView>


            
        </View>
        
    )
}

export default HomeScreen;