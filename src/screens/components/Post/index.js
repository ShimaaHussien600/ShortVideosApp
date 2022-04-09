import React, {useState} from 'react';
import { View, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

const Post = () => {

    const [paused, setPaused] = useState(false)

    const onPlayPausePress = () => {
        setPaused(!paused)
        console.warn('pooost')
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
            <Video
                source={{ uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4' }}
                style={styles.video}
                resizeMode={'cover'}
                onError={(e) => console.log(e)}
                repeat={true}
                paused={paused}
            />
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Post;