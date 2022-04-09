import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Image, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Post = (props) => {
    const [postItem, setPostItem] = useState(props.postItem);
    const [paused, setPaused] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const onPlayPausePress = () => {
        setPaused(!paused)
    }
    const onLikPress = () => {
        setPostItem({
            ...postItem,
            numOfLikes: isLiked ? postItem.numOfLikes - 1 : postItem.numOfLikes + 1
        });
        setIsLiked(!isLiked);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                    <Video
                        source={{ uri: postItem.videoUri }}
                        style={styles.video}
                        resizeMode={'cover'}
                        onError={(e) => console.log(e)}
                        repeat={true}
                        paused={paused}
                    />

                    <View style={styles.content}>
                        <View style={styles.rightContainer}>
                            <Image
                                style={styles.profilePicture}
                                source={{ uri: postItem.user.imageUri }} />

                            <TouchableOpacity style={styles.iconContainer}
                                onPress={onLikPress}>
                                <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
                                <Text style={styles.statsLabel}>{postItem.numOfLikes}</Text>
                            </TouchableOpacity>


                            <View style={styles.iconContainer}>
                                <FontAwesome name={'commenting'} size={40} color="white" />
                                <Text style={styles.statsLabel}>{postItem.numOfComments}</Text>
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <Text style={styles.userName}>
                                @{postItem.user.username}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Post;