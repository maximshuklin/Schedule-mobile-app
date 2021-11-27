// App.js
import React from 'react';
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
import DayTable from '../DayTable';

const GetDate = (date, shift) => {
    let curdate = date
    curdate.setDate(curdate.getDate() + shift)
    var date = curdate.getDate()
    var month = curdate.getMonth() + 1
    var year = curdate.getFullYear()
    curdate.setDate(curdate.getDate() - shift)

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

    return ans
}

class Week extends React.Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <DayTable day={"Понедельник"} curDate={GetDate(this.props.firstDate, 0)} />
            <DayTable day={"Вторник"} curDate={GetDate(this.props.firstDate, 1)} />
            <DayTable day={"Среда"} curDate={GetDate(this.props.firstDate, 2)}/>
            <DayTable day={"Четверг"} curDate={GetDate(this.props.firstDate, 3)}/>
            <DayTable day={"Пятница"} curDate={GetDate(this.props.firstDate, 4)}/>
            <DayTable day={"Суббота"} curDate={GetDate(this.props.firstDate, 5)}/>
            <DayTable day={"Воскресенье"} curDate={GetDate(this.props.firstDate, 6)}/>
          </ScrollView>
        </SafeAreaView>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fdf5e6'
    },
    item: { padding: 10 },
    name: { fontSize: 20 },
    description: { fontWeight: '600', marginTop: 4, color: 'rgba(0, 0, 0, .5)' },
    city: { marginTop: 4 }
  })

export default Week;