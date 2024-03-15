// import React from 'react';
import {View,Text,Image,ImageBackground,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
// import { View, FlatList, StyleSheet,Text,Image,ImageBackground,TouchableOpacity } from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../Screens/Posts';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



      
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


 
 
        return(
          
    
            <View style={{
                flex:1,
                width:"100%",
                // backgroundColor:"#C1A06Be6",
                backgroundColor:"fffff"
            }}>


                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingTop:40,
                    alignItems:"center",
                    justifyContent:"space-between",
                     paddingHorizontal:10
                }}>

                <View>
                   
                <Text style={{
                  fontFamily:"Bold",
                  fontSize:20,
                  alignSelf:"center",
                  color:"#044244"
                  
                  
              }}>DICHOTOMY</Text>
                </View>
                
                
                
                <View
                style={{
                  flexDirection:"row",
                  justifyContent:"space-evenly",
                 
                }}>

                <TouchableOpacity
                style={{
                 
                }}>
                <Icon name = "menu"
                          size={20}
                          color="#044244"
                          style={{
                              marginRight:-7,
                              marginTop:7
                          }}/>


                </TouchableOpacity>

              <TouchableOpacity
              style={{
                  marginHorizontal:10
                }}>
              <Image source={require('../images/p2.jpg')}
                          style={{alignSelf:"flex-start",marginLeft:7,width:30,height:30,   borderRadius:15,
                          borderWidth:3,
                          borderColor:"#044244",}}/>

              </TouchableOpacity>

              

              

                </View>
               


               

                </View>



            <View style={{
                 
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  marginVertical:5,
                  flex:1,
        
              }}>

                   <View style={{
                      flexDirection:"row",
                      justifyContent:"space-between",
                      backgroundColor:"#fffff",
                      borderTopLeftRadius:15,
                      marginLeft:10,
                      marginRight:25,
                       alignContent:"center",
                    
                      borderTopRightRadius:15
                  }}>

                  <View
                  style={
                    {
                      flexDirection:"row"
                    }
                  }>
                  <TouchableOpacity
                           onPress={()=>this.props.navigation.navigate('ProfileActivity')}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#044244":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginHorizontal:5
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
                            marginHorizontal:5
                     
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



                      <TouchableOpacity
                style={{
                 
                }}>
                <Icon name = "sort"
                          size={20}
                          color="#044244"
                          style={{
                              marginRight:-7,
                              marginTop:7
                          }}/>


                </TouchableOpacity>

                  
                  </View>


           



              <View >


      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item._id} // Assuming _id is a unique identifier for each post
      />
    </View>


              </View>

         


            </View>

         



       
        );
      };

      const styles = StyleSheet.create({
        container: {
          flex: 1,
         
        },
      });
      
      export default App;
      