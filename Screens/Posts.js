import React from 'react';
import {View,Text,Image,ImagBackground,Divider, ImageBackground,StyleSheet} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
import {TouchableOpacity} from 'react-native-gesture-handler';

// import { Icon } from '@gluestack-ui/themed';
// 




export default class Posts extends React.Component{
    state={
        liked:false
    }
    onLike=()=>{
        this.setState({liked:!this.state.liked})
    }
    render(){
        const style=StyleSheet.create({
            options:{
                paddingVertical:6,
                height:40,
                borderRadius:15,
                borderColor:"#044244",
                margin:5,
            
               flex:1,
               borderBottomWidth:8,
               borderEndWidth:5,
               borderStartWidth:5,
            //    borderTopWidth:1
            }



        })

        const {name,question,profile,photo,time,onPress,option1,option2,option3,option4} = this.props

        return(
            <View style={{flex:1}}>
               

             <View style={{
                   flexDirection:"column",
                   width:"100%",
                   paddingHorizontal:15,
            
                   backgroundColor:"#fff"
               }}>

               <View style={{
                   flexDirection:"row",
                   paddingTop:5,
                   justifyContent:"space-between",
                   backgroundColor:"#fff",
                   
                            
                }}>
                <View style={{
                    flexDirection:"row"
                }}>
                <View >
                    <TouchableOpacity>
                    <Image
                    source={{ uri: profile }}         
                    style={{
                    width:35,
                    height:35,
                    borderRadius:22.5
                    }}
                    />

                    </TouchableOpacity>
                           
                               
                    </View>


                    <View 
                    style={{
                        marginHorizontal:15
                    }}>
                        
                     <TouchableOpacity
                                onPress={this.onLike}
                             
                            >
                             

                             <Text style={{
                            fontFamily:"Bold",
                            fontSize:14,
                            color:"#044244"
                        }}>{name}</Text>
                     </TouchableOpacity>


                

                        <Text style={{
                            fontFamily:"Medium",
                            fontSize:12,
                            color:"#9ca1a2"
                        }}>
                            {time}
                        </Text>

            
                    </View>


                </View>
                   

                    <View style={{
                        width:"30%",
                        alignSelf:"flex-end",
                        flexDirection:"row",
                        justifyContent:'space-evenly'

                    }}>
                     <TouchableOpacity
                                onPress={this.onLike}
                                style={{
                                    flex:1,
                      
                                borderRadius:8,
                                paddingVertical:3,
                                paddingHorizontal:10,
                                marginLeft:10,
                                marginVertical:3,
                                alignItems:"center",
                                backgroundColor:"#eaeaea",
                                  
                                
                                }}
                            >
                             

                              <Text style={{
                                   fontFamily:"Bold",
                                   fontSize:12,
                                 
                                   alignSelf:"center",
                                   color:"#044244" 
                                   }}>
                                   Follow
                                   </Text>
                         
                    </TouchableOpacity>


                    <View style={{
                        width:"10%",
                        // marginTop:7,
                        paddingTop:5,
                        alignItems:"center"
                    }}>
                    <TouchableOpacity>
                        <Icon
                            name="dots-three-vertical"
                            color="#044244"
                            size={15}
                        />

                    </TouchableOpacity>
                        
                    </View>


                    </View>


                   


               </View>

              <TouchableOpacity style={{
                        // width:"90%",
                        flex:1,
                        alignItems:"flex-start",
                        paddingHorizontal:2,
                        backgroundColor:"#fff"
                    }}
                    onPress={onPress}>
                         <Text style={{
                           fontFamily:"Bold",
                           fontSize:20,
                           color:"#044244"
                            }}>{question}</Text>
                    </TouchableOpacity>



                   
                
               
            
            
            
            
            </View>



              

               {photo &&(  <View style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20,
                   paddingHorizontal:15,
                   backgroundColor:"#fff"
               }}>
                    <ImageBackground 
                    source={{ uri: photo }}
                    style={{
                        width:"100%",
                        // height:220,
                        height:"100%",
                        minHeight:200,
                        maxHeight:300
                    }}
                    imageStyle={{
                        borderRadius:15
                    }}
                    >
                    
                    </ImageBackground>
               </View>
               )
                }

                <View style={{
                    backgroundColor:"#fff"

                }}> 
                    
                    { (option1 || option2 || option3 || option4) && (
                 <View style={{
                    backgroundColor:"#ffff",
                    padding:10,
                    margin:20,
                    borderWidth:5,
                    borderRadius:15,
                    borderColor:"#EAEAEA"
                    
                    }}> 

                    <Text
                    style={{
                        fontSize:12,
                        color:"#151516",
                        alignSelf:"flex-end",
                        fontFamily:"Regular"
                    }}>
                        22.5k Interactions
                    </Text>
                 
                 {option1 && (
                    <TouchableOpacity
                    onPress={this.onTabPressed}
                    style={style.options}
                  >
                      <Text style={{
                          fontFamily:"Medium",
                          alignSelf:"flex-start",
                          justifyContent:"center",
                          color:"#000000",
                          paddingHorizontal:10
                      }}>{option1}</Text>
                      
                  </TouchableOpacity>
              )}
              {option2 && (
                    <TouchableOpacity
                    onPress={this.onTabPressed}
                    style={style.options}
                  >
                      <Text style={{
                          fontFamily:"Medium",
                          alignSelf:"flex-start",
                          justifyContent:"center",
                          color:"#000000",
                          paddingHorizontal:10
                      }}>{option2}</Text>
                      
                  </TouchableOpacity>
              )}
              {option3 && (
                    <TouchableOpacity
                    onPress={this.onTabPressed}
                    style={style.options}
                  >
                      <Text style={{
                          fontFamily:"Medium",
                          alignSelf:"flex-start",
                          justifyContent:"center",
                          color:"#000000",
                          paddingHorizontal:10
                      }}>{option3}</Text>
                      
                  </TouchableOpacity>
              )}
              {option4 && (
                    <TouchableOpacity
                    onPress={this.onTabPressed}
                    style={style.options}
                  >
                      <Text style={{
                          fontFamily:"Medium",
                          alignSelf:"flex-start",
                          justifyContent:"center",
                          color:"#000000",
                          paddingHorizontal:10
                      }}>{option4}</Text>
                      
                  </TouchableOpacity>
              )}

              

                
                
 
 
                 </View>
               )}



                </View>


              

             



              
              
               


               <View style={{
                            flex:1,
                            flexDirection:"row",
                            alignItems:"flex-start",
                            paddingTop:10,
                            paddingHorizontal:15,
                            backgroundColor:"#fff",
                            justifyContent:"flex-start"
                        }}>


                          


                            <TouchableOpacity
                                onPress={this.onLike}
                                style={{
                                    borderRadius:5,
                                    padding:5,
                                    // backgroundColor:"#e8e8e8",
                                  
                                
                                }}
                            >
                                <Icon name= {this.state.liked === true ? "heart":"heart-outlined"} 
                                color= {this.state.liked===true? "red":"#044244"}
                                size={24}/>


                      
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={onPress}
                                style={{
                                
                                    borderRadius:5,
                                    flexDirection:"column",
                                    padding:5,
                                    // backgroundColor:"#e8e8e8",
                                  
                           
                                }}
                            >
                                <Icon name="share"
                                color="#044244"
                                size={24}/>

                                

                            

                                
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={onPress}
                                style={{
                                   
                                    borderRadius:5,
                                    flexDirection:"column",
                                    padding:5,
                                    // backgroundColor:"#e8e8e8",
                                  
                           
                                }}
                            >
                                <Icon name="forward"
                                color="#044244"
                                size={24}/>

                                

                            

                                
                            </TouchableOpacity>



                            <View style={{
                            flex:1,
                            flexDirection:"row",
                            alignItems:"flex-end",
                            // marginTop:10,
                            justifyContent:"flex-end"
                        }}>
                             <TouchableOpacity
                                onPress={onPress}
                                style={{
                                   
                                    borderRadius:5,
                                    flexDirection:"column",
                                    padding:5,
                                    // backgroundColor:"#e8e8e8",
                                  
                           
                                }}
                            >
                                <Icon name="bookmark"
                                color="#044244"
                                size={24}/>

                                

                            

                                
                            </TouchableOpacity>


                        </View>


                            


                        </View>


                <View style={{backgroundColor:"#fff", paddingHorizontal:15,marginBottom:7}}>

                <Text style={{
                            fontFamily:"Medium",
                            fontSize:14,
                            backgroundColor:"#fff",
                            marginLeft:5,
                            marginBottom:4,
                            
                            flex:1,
                            alignSelf:"flex-start",
                            color:"#000"
                               }}>
                            12,367 Likes
                        </Text>



                </View>



                      


                       

                       


               


               


            </View>
        )
     
    }
}