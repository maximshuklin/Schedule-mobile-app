// App.js
import { VerifyContact } from 'aws-amplify-react-native/dist/Auth';
import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import { AsyncStorage } from 'react-native';
import LessonRow from '../LessonRow'

const getCurrentDay=() => {

  var den_nedeli = new Date().getDay();

  return (den_nedeli + 6) % 7;
}

const getDDMMYYY = (curdate) => {
  var date = curdate.getDate();
  var month = curdate.getMonth() + 1;
  var year = curdate.getFullYear();

  let ans = ''
  if (date < 10) {
      ans += '0'
  }
  ans += date

  ans += '.'

  if (month < 10) {
      ans += '0'
  }
  ans += month

  ans += '.'

  ans += year

  return ans;
}

const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

class DayTable extends React.Component {

  state = {
    listLessons: [
      <LessonRow uniq={this.props.day + "1"} curDate={this.props.curDate} key={1} />,
      <LessonRow uniq={this.props.day + "2"} curDate={this.props.curDate} key={2}/>,
      <LessonRow uniq={this.props.day + "3"} curDate={this.props.curDate} key={3}/>,
      <LessonRow uniq={this.props.day + "4"} curDate={this.props.curDate} key={4}/>,
      <LessonRow uniq={this.props.day + "5"} curDate={this.props.curDate} key={5} />,
      <LessonRow uniq={this.props.day + "6"} curDate={this.props.curDate} key={6}/>,
      <LessonRow uniq={this.props.day + "7"} curDate={this.props.curDate} key={7}/>,
      <LessonRow uniq={this.props.day + "8"} curDate={this.props.curDate} key={8}/>,
      <LessonRow uniq={this.props.day + "9"} curDate={this.props.curDate} key={9}/>,
      <LessonRow uniq={this.props.day + "10"} curDate={this.props.curDate} key={10}/>,
      <LessonRow uniq={this.props.day + "11"} curDate={this.props.curDate} key={11}/>,
      <LessonRow uniq={this.props.day + "12"} curDate={this.props.curDate} key={12}/>,
    ],
    
    count: 7,
  }

  async componentDidMount() {
    AsyncStorage.getItem(this.props.day + '.count').then((value) => {
        if (value !== null){
            // saved input is available
            this.setState({ count: JSON.parse(value) }); // Note: update state with last entered value
        }
    }).done();
}

  render() {

    

    return (
    <View style={{
      ...styles.container,
      // backgroundColor: (this.props.day === weekdays[getCurrentDay()] ? "#62e843" : "#add8e6")
      backgroundColor: (this.props.curDate === getDDMMYYY(new Date()) ? "#62e843" : "#fdf5e6"),
    }}>
      <ScrollView>
        <View style={{
          // backgroundColor: "dodgerblue",
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>

        <Text style={{
          alignSelf: 'center',
          fontSize: 18,
          marginBottom: 5,
          color: (this.props.day === weekdays[getCurrentDay()] ? "black" : "black"),
          }}>
            {this.props.day}
            </Text>
  
        <Text style={{
          alignSelf: 'center',
          fontSize: 18,
          marginBottom: 5,
          color: (this.props.day === weekdays[getCurrentDay()] ? "black" : "black"),
          }}>
            {/* {getDateByWeekday(weekdays.indexOf(this.props.day))} */}
            {this.props.curDate}
            </Text>
        </View>



            <View style={{
                alignItems: 'center',
                justifyContent: "center",
            }}>

              {this.state.listLessons.slice(0, this.state.count)}

              </View>

              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}>
                {/* Add Button */}
                <Button title="Добавить урок" onPress={() => {
                  if (this.state.count < 12) {
                    AsyncStorage.setItem(this.props.day + ".count", JSON.stringify(this.state.count + 1));
                    this.setState({
                      count: this.state.count + 1,
                    })
                    console.log(getCurrentDay())
                    console.log(this.state.count)
                  }
                }} />

                {/* Delete Button */}
                <Button title="Удалить урок" color={'#ff1f29'} onPress={() => {
                  if (this.state.count) {
                    AsyncStorage.setItem(this.props.day + ".count", JSON.stringify(this.state.count - 1));
                    this.setState({
                      count: this.state.count - 1,
                    })


                    console.log(this.state.count)
                  }
                }}
                />
              </View>
        </ScrollView>
      </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 50,
    },
    item: { padding: 10 },
    name: { fontSize: 20 },
    description: { fontWeight: '600', marginTop: 4, color: 'rgba(0, 0, 0, .5)' },
    city: { marginTop: 4 }
  })

export default DayTable;

