// App.js
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
  Pressable,
} from 'react-native';
import { AsyncStorage } from 'react-native';

class CallsRow extends React.Component {

    state = {
        begin: "",
        end: "",
    }
    
    async componentDidMount() {
        AsyncStorage.getItem(this.props.lesson + ".begin").then((value) => {
            if (value !== null){
                // saved input is available
                this.setState({ begin : value }); // Note: update state with last entered value
            }
        }).done();

        AsyncStorage.getItem(this.props.lesson + ".end").then((value) => {
            if (value !== null){
                // saved input is available
                this.setState({ end: value }); // Note: update state with last entered value
            }
        }).done();
    }

    render() {
        return (   
            <View style={{
                ...styles.container,
                flexDirection: 'row',
                }}>
                <View style={{
                    flex: 1,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 16,
                    }}> {this.props.lesson} Урок </Text>
                </View>

                <View style={{
                    flex: 1,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TextInput
                        style={{
                        }}
                        editable = {true}
                        onChangeText={(text) => { 
                            this.setState({begin : text});
                            AsyncStorage.setItem(this.props.lesson + '.begin', text)
                        }}
                        value={this.state.begin}
                        placeholder={"Начало урока"}
                    />
                </View>

                <View style={{
                    flex: 1,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TextInput
                        style={{

                        }}
                        editable = {true}
                        onChangeText={(text) => { 
                            this.setState({end: text});
                            AsyncStorage.setItem(this.props.lesson + '.end', text)
                        }}
                        value={this.state.end}
                        placeholder={"Конец урока"}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 45,
        alignSelf: 'center',
        backgroundColor: '#ddd',
    }
})

export default CallsRow;