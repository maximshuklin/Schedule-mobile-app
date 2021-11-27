// App.js
import { VerifyContact } from 'aws-amplify-react-native/dist/Auth';
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ViewComponent,
} from 'react-native';

import { AsyncStorage } from 'react-native';

import CallsRow from '../../CallsRow'


function Header() {
  return (
      <View style={{
          ...styles.container,
          flexDirection: 'row',
      }}>
          <View style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 0,
          }}>
              <Text style={{fontSize: 18,}}> Урок </Text>
          </View>

          <View style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 0,
          }}>
              <Text style={{fontSize: 18,}}> Начало </Text>
          </View>

          <View style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <Text style={{fontSize: 18,}}> Конец </Text>
          </View>
              
      </View>
  )
}


class CallsSchedule extends React.Component {

  state = {
    listRows: [
      <CallsRow lesson={1} key={1}/>,
      <CallsRow lesson={2} key={2}/>,
      <CallsRow lesson={3} key={3}/>,
      <CallsRow lesson={4} key={4}/>,
      <CallsRow lesson={5} key={5}/>,
      <CallsRow lesson={6} key={6}/>,
      <CallsRow lesson={7} key={7}/>,
      <CallsRow lesson={8} key={8}/>,
      <CallsRow lesson={9} key={9}/>,
      <CallsRow lesson={10} key={10}/>,
      <CallsRow lesson={11} key={11}/>,
      <CallsRow lesson={12} key={12}/>,
    ],
    
    count: 7,
  }

  async componentDidMount() {
    AsyncStorage.getItem(this.KEY_FOR_COUNT).then((value) => {
        if (value !== null){
            // saved input is available
            this.setState({ count: JSON.parse(value) }); // Note: update state with last entered value
        }
    }).done();
  }

  KEY_FOR_COUNT = "KEY_FOR_COUNT"

  render() {
    return (
      <SafeAreaView style={{
        backgroundColor: '#fdf5e6',
        borderWidth: 1,
      }}>

        <View style={{
          alignItems: 'center',
          height: 60,
        }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}> Расписание звонков </Text>
        </View>

        <Header />

        {/* View for 2 buttons  */}
        <View style={{
                alignItems: 'center',
                justifyContent: "center",
            }}>

            {this.state.listRows.slice(0, this.state.count)}

              </View>

              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}>
                {/* Add Button */}
                <Button title="Добавить урок" onPress={() => {
                  if (this.state.count < 12) {
                    AsyncStorage.setItem(this.KEY_FOR_COUNT, JSON.stringify(this.state.count + 1));
                    this.setState({
                      count: this.state.count + 1,
                    })
                  }
                }} />

                {/* Delete Button */}
                <Button title="Удалить урок" color={'#ff1f29'} onPress={() => {
                  if (this.state.count) {
                    AsyncStorage.setItem(this.KEY_FOR_COUNT, JSON.stringify(this.state.count - 1));
                    this.setState({
                      count: this.state.count - 1,
                    })
                  }
                }}
                />
              </View>

              <View style={{
                height: '100%',
              }}>

              </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      width: '85%',
      height: 45,
      alignSelf: 'center',
      backgroundColor: '#fdf5e6',
  }
})

export default CallsSchedule;

