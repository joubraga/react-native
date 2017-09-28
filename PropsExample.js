import React, { Component }  from 'react';
import { Text, View } from 'react-native';


class PropsExample extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        let  { name } = this.props
        return (
            <View>
                <Text> E ai { name }  </Text>
            </View>
        )
    }
}
export default PropsExample
