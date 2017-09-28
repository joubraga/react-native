import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import PropsExample from './PropsExample'
import Counter from './Counter'
import { StackNavigator } from 'react-navigation'

class App extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props)
        this.state = { msg: 'Hello World' }
    }

    componentDidMount() {
        this.setState({
            msg: 'Testando set State agora'
        })
    }

    render() {
        // let { msg } = this.state
        let { navigate } =  this.props.navigation
        return (
            <View style={styles.container}>
                <Button title="Go to Counter App" onPress={ () => navigate('Counter') } ></Button>
                {/*<Counter></Counter>*/}
            </View>
        );
    }
}

const StackApp =  StackNavigator ({
    Home: { screen: App },
    Counter: { screen: Counter }
})

export default StackApp
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
