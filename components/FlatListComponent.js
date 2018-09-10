import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

class FlatListComponent extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={[
                        { key: 'Yoyo' },
                        { key: 'Robert' },
                        { key: 'Jermie' },
                        { key: 'Alex' }
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


export default FlatListComponent