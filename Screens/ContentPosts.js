import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/Entypo";
import { ScrollView } from 'react-native-gesture-handler';

export default class ContentPosts extends React.Component {
    state = {
        liked: false
    };

    onLike = () => {
        this.setState({ liked: !this.state.liked });
    };

    renderImages = () => {
        const { photos } = this.props;
        return photos.map((photo, index) => (
            <Image key={index} source={{ uri: photo }} style={styles.image} />
        ));
    };

    render() {
         const { name, question, profile, time, onPress, option1, option2, option3, option4 } = this.props;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={{ uri: profile }} style={styles.profileImage} />
                        <View style={styles.userInfo}>
                            <TouchableOpacity onPress={this.onLike}>
                                <Text style={styles.name}>{name}</Text>
                            </TouchableOpacity>
                            <Text style={styles.time}>{time}</Text>
                        </View>
                        <TouchableOpacity onPress={this.onLike} style={styles.followButton}>
                            <Text style={styles.followButtonText}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.questionContainer} onPress={onPress}>
                        <Text style={styles.question}>{question}</Text>
                    </TouchableOpacity>
                    <View style={styles.imageContainer}>
                        {this.renderImages()}
                    </View>
                    {/* Other content */}
                </View>
            </ScrollView>
        );
    }          


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 22.5
    },
    userInfo: {
        marginLeft: 15
    },
    name: {
        fontFamily: "Bold",
        fontSize: 14,
        color: "#044244"
    },
    time: {
        fontFamily: "Medium",
        fontSize: 12,
        color: "#9ca1a2"
    },
    followButton: {
        borderRadius: 8,
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: "#eaeaea"
    },
    followButtonText: {
        fontFamily: "Bold",
        fontSize: 12,
        color: "#044244"
    },
    questionContainer: {
        marginTop: 10
    },
    question: {
        fontFamily: "Bold",
        fontSize: 20,
        color: "#044244"
    },
    imageContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20
    },
    image: {
        width: "30%",
        height: 100,
        margin: "1%",
        borderRadius: 10
    }
});
