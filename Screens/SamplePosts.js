import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet,Text,Image,ImageBackground,TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from '@expo/vector-icons/Entypo';
import {ScrollView,TextInput} from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import Posts from '../Screens/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Make GET request to fetch posts
    axios.get('http://10.0.0.15:8080/searchDocument')
      .then(response => {
        // Set the fetched posts in state
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  

  // Render each post item
  const renderItem = ({ item }) => (
    <Posts
      name="Suyash"
      question={item.question}
      profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      // time={item.time}
      time="4 hours ago"
      option1={item.option1.text}
      option2={item.option2.text}
      option3={item.option3.text}
      option4={item.option4.text}
    />
  );


  state={
    popularSelected:true
}
onTabPressed=()=>{
    this.setState({popularSelected:!this.state.popularSelected})
}


  return (
    <LinearGradient
    colors={['#4B39EF', '#FF5963', '#EE8B60']}
    // colors={['#000000', '#000000', '#000000']}
    start={[0, 0]}
    end={[1, 0]}
    style={{
      flex: 1,
      width: '100%',
    //   paddingHorizontal: 10,
    }}
  >




    <View style={{
        flex:1,
        width:"100%",
        backgroundColor:"#fffff"
    }}>


        <View style={{
            flexDirection:"row",
            width:"100%",
            paddingTop:40,
            alignItems:"center",
             paddingHorizontal:10
        }}>
            <View style={{
               width:"20%",
               height:50,
               alignItems:"flex-end",
            }}>
                <Image source={require('../images/p2.jpg')}
                  style={{alignSelf:"flex-start",marginLeft:7,width:50,height:50,   borderRadius:25,
                  borderWidth:3,
                  borderColor:"#044244",}}/>
            </View>

            <View style={{
               width:"60%",
            height:50,
               alignItems:"flex-end",
            }}>
               
                   </View>



            <View style={{
                width:"20%",
                alignItems:"flex-end",
            }}>
                <Icon name = "dots-three-vertical"
                  size={22}
                  color="#d2d2d2"
                  style={{
                      marginRight:-7,
                      marginTop:7
                  }}/>
            </View>





        </View>


      <Text style={{
          fontFamily:"Bold",
          fontSize:25,
          alignSelf:"center",
          color:"#FFF",
          paddingTop:7,
          paddingBottom:7
      }}>DICHOTOMY</Text>


 


    <View style={{
          backgroundColor:"#eaeaea",
          borderTopLeftRadius:40,
          borderTopRightRadius:40,
          flex:1,
        //   borderWidth:15,
        //   borderColor:"#fff",
        //   paddingHorizontal:15
      }}>


    <View style={{
              flexDirection:"row",
              paddingTop:20,
              backgroundColor:"#fff",
              borderTopLeftRadius:20,
              paddingHorizontal:15,
              borderTopRightRadius:20
          }}>
              <TouchableOpacity
                   onPress={()=>this.props.navigation.navigate('SocialLogin')}
                style={{
                    borderBottomColor:this.state.popularSelected ? "#044244":"#FFF",
                    borderBottomWidth:4,
                    paddingVertical:6
                }}
              >
                

               <Image  source={require('../images/trending.png')}
               style={{
                height:30,
                width:30,

               }}>

               </Image>
               <Text style={{
                color:"#000000",
                fontSize:10,

               }}>
                Trending
               </Text>

              </TouchableOpacity>


              <TouchableOpacity
                onPress={this.onTabPressed}
                style={{
                    borderBottomColor:this.state.popularSelected ? "#FFF":"#044244",
                    borderBottomWidth:4,
                    paddingVertical:6,
                    marginLeft:30
                }}
              >
                 <Image  source={require('../images/film.png')}
               style={{
                height:30,
                width:30,

               }}>

               </Image>
               <Text style={{
                color:"#000000",
                fontSize:10,

               }}>
                Cinema
               </Text>
                  
              </TouchableOpacity>
          </View>

       <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item._id} // Assuming _id is a unique identifier for each post
      />
    </View>


         



    


      </View>


      

 


    </View>

   

   
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

export default App;
