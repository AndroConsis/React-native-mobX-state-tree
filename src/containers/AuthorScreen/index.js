import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { ListItem, Divider } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
    },
    {
        name: 'Chris Jackson',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
    },
    {
        name: 'Amanda Martin',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        subtitle: 'CEO',
    },
    {
        name: 'Christy Thomas',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        subtitle: 'Lead Developer',
    },
    {
        name: 'Melissa Jones',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
        subtitle: 'CTO',
    },
]

class AuthorsContainer extends Component {
    static navigationOptions = () => {
        return {
            headerTitle: "Authors"
        };
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return <View style={styles.container}>
            <View>
                {list.map((l, i) => (
                    <View key={i}>
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                        />
                        <Divider />
                    </View>
                ))}
            </View>
            <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
            <Button onPress={() => navigation.navigate('Books')} title="Go to Books" />
        </View>
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    }
}

export default AuthorsContainer;