import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class RestComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            movieList: []
        }

        const movieList = getMoviesFromApi()
        console.log("Attempting rest call")
        movieList.then((movie) => {
            this.setState({
            movieList: movie.map(movieData => movieData.title)
        })})
    }

    render(){
        
        // this.setState(movies => {
        //     return {
        //         movieList: movieList.add(movies)
        //     }
        // })
        // console.log(movieList)
        // for(movie in movieList){
        //     console.log(movie)
        // }

        return (
            <View >
                <FlatList
                    data={this.state.movieList}
                    renderItem={({item}) => {
                        console.log("Item pls: " + item)
                    return <Text>{item} WTF</Text>
                }}
                />
            </View>
            // <Text>{this.state.movieList}</Text>
        )

    }
}
async function getMoviesFromApi() {
    try {
        let response = await fetch(
            'https://facebook.github.io/react-native/movies.json'
        );
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
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
        backgroundColor: 'black'
    },
})

export default RestComponent