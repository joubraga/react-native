import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
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
        let { msg } = this.state
        return (
            <View style={styles.container}>
                <Text> Jonathan Braga </Text>
                <Text>
                    { msg }
                </Text>
            </View>
        );
    }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
