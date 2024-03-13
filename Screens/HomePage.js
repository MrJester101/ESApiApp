import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../Screens/Posts';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';




export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }

 
    render(){
     
       

        return(
    
            <View style={{
                flex:1,
                width:"100%",
                backgroundColor:"#ffffff"
            }}>


                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingTop:40,
                    alignItems:"center",
                    justifyContent:"space-between",
                     paddingHorizontal:10
                }}>
                
                
                <Text style={{
                  fontFamily:"Bold",
                  fontSize:20,
                  alignSelf:"center",
                  color:"#044244"
                  
                  
              }}>DICHOTOMY</Text>
               


                <TouchableOpacity>
                <Icon name = "dots-three-vertical"
                          size={20}
                          color="#044244"
                          style={{
                              marginRight:-7,
                              marginTop:7
                          }}/>

                </TouchableOpacity>

                </View>



            <View style={{
                  backgroundColor:"#eaeaea",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  flex:1,
        
              }}>

              <View
              style={{
                flexDirection:"row",
                backgroundColor:"#ffffff",
                alignItems:"center",
                paddingHorizontal:10,
                paddingVertical:10
               
              }}>

              <TouchableOpacity>
              <Image source={require('../images/p2.jpg')}
                          style={{alignSelf:"flex-start",marginLeft:7,width:50,height:50,   borderRadius:25,
                          borderWidth:3,
                          borderColor:"#044244",}}/>

              </TouchableOpacity>

              

                 <View style={{
                      flexDirection:"row",
                      justifyContent:"space-evenly",
                      backgroundColor:"#eaeaea",
                      borderTopLeftRadius:15,
                      marginHorizontal:25, 
                       alignContent:"center",
                      borderTopRightRadius:15
                  }}>
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


              </View>


           



            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              
               flex:1,
              
            
               
            }}
          >

                       <Posts
                        onPress={()=>this.props.navigation.navigate('SamplePosts')}
                        name="TheUncomplicated"
                        time="08 mins ago"
                        question="What's your view on the following Ram Mandir inauguration ?"
                        profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                        photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      
                        option1="Oportunity to capitalize"
                        option2="Waste of Money"
                        option3="Political Agenda"
                        option4="Cultural Restoration"
                        // props=postData
                      />



                   
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="@LoneWol080"
                        time="45 min ago"
                        question="Politics and religion should not be mixed together? What is your saying?"
                        profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                        photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      
                        option1="Yes"
                        option2="No"
                        option3="LMKIC"
                     
                       
                      />

                    

        
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Mr.Jester"
                        time="24 mins ago"
                        question="Are you afraid of posting pictures due to growth of deepfake technology?"
                        profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                        photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      
                        option1="Yes"
                        option2="Not Exactly"
                        option3="Litle Much"
                      />

                

                

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Splash')}
                        name="CricketGeek"
                        time="1 h ago"
                        question="Do you think virat kohli will surpass the legacy of Sachin Tendulkar in next 5 years ?"
                        profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                        photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      
                      />

               

                 
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        question="Change in criminal laws that increases jail terms in hit-and-run cases to up to 10 years,Do you support these changes ?"
                        time="3 h ago"
                        name="User241"
                        profile='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
                       photo='https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'
      
                      />

                   

                


                  </ScrollView>


              </View>

         


            </View>

            // </LinearGradient>



       
        )
        
    }
    
}