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
import Week from '../../Week'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import DayTable from '../../DayTable';
import Swiper from 'react-native-swiper-animated';

const weeks = [
  <Week firstDate={new Date('2019-06-17')} key={1} />,
<Week firstDate={new Date('2019-06-24')} key={2} />,
<Week firstDate={new Date('2019-07-01')} key={3} />,
<Week firstDate={new Date('2019-07-08')} key={4} />,
<Week firstDate={new Date('2019-07-15')} key={5} />,
<Week firstDate={new Date('2019-07-22')} key={6} />,
<Week firstDate={new Date('2019-07-29')} key={7} />,
<Week firstDate={new Date('2019-08-05')} key={8} />,
<Week firstDate={new Date('2019-08-12')} key={9} />,
<Week firstDate={new Date('2019-08-19')} key={10} />,
<Week firstDate={new Date('2019-08-26')} key={11} />,
<Week firstDate={new Date('2019-09-02')} key={12} />,
<Week firstDate={new Date('2019-09-09')} key={13} />,
<Week firstDate={new Date('2019-09-16')} key={14} />,
<Week firstDate={new Date('2019-09-23')} key={15} />,
<Week firstDate={new Date('2019-09-30')} key={16} />,
<Week firstDate={new Date('2019-10-07')} key={17} />,
<Week firstDate={new Date('2019-10-14')} key={18} />,
<Week firstDate={new Date('2019-10-21')} key={19} />,
<Week firstDate={new Date('2019-10-28')} key={20} />,
<Week firstDate={new Date('2019-11-04')} key={21} />,
<Week firstDate={new Date('2019-11-11')} key={22} />,
<Week firstDate={new Date('2019-11-18')} key={23} />,
<Week firstDate={new Date('2019-11-25')} key={24} />,
<Week firstDate={new Date('2019-12-02')} key={25} />,
<Week firstDate={new Date('2019-12-09')} key={26} />,
<Week firstDate={new Date('2019-12-16')} key={27} />,
<Week firstDate={new Date('2019-12-23')} key={28} />,
<Week firstDate={new Date('2019-12-30')} key={29} />,
<Week firstDate={new Date('2020-01-06')} key={30} />,
<Week firstDate={new Date('2020-01-13')} key={31} />,
<Week firstDate={new Date('2020-01-20')} key={32} />,
<Week firstDate={new Date('2020-01-27')} key={33} />,
<Week firstDate={new Date('2020-02-03')} key={34} />,
<Week firstDate={new Date('2020-02-10')} key={35} />,
<Week firstDate={new Date('2020-02-17')} key={36} />,
<Week firstDate={new Date('2020-02-24')} key={37} />,
<Week firstDate={new Date('2020-03-02')} key={38} />,
<Week firstDate={new Date('2020-03-09')} key={39} />,
<Week firstDate={new Date('2020-03-16')} key={40} />,
<Week firstDate={new Date('2020-03-23')} key={41} />,
<Week firstDate={new Date('2020-03-30')} key={42} />,
<Week firstDate={new Date('2020-04-06')} key={43} />,
<Week firstDate={new Date('2020-04-13')} key={44} />,
<Week firstDate={new Date('2020-04-20')} key={45} />,
<Week firstDate={new Date('2020-04-27')} key={46} />,
<Week firstDate={new Date('2020-05-04')} key={47} />,
<Week firstDate={new Date('2020-05-11')} key={48} />,
<Week firstDate={new Date('2020-05-18')} key={49} />,
<Week firstDate={new Date('2020-05-25')} key={50} />,
<Week firstDate={new Date('2020-06-01')} key={51} />,
<Week firstDate={new Date('2020-06-08')} key={52} />,
<Week firstDate={new Date('2020-06-15')} key={53} />,
<Week firstDate={new Date('2020-06-22')} key={54} />,
<Week firstDate={new Date('2020-06-29')} key={55} />,
<Week firstDate={new Date('2020-07-06')} key={56} />,
<Week firstDate={new Date('2020-07-13')} key={57} />,
<Week firstDate={new Date('2020-07-20')} key={58} />,
<Week firstDate={new Date('2020-07-27')} key={59} />,
<Week firstDate={new Date('2020-08-03')} key={60} />,
<Week firstDate={new Date('2020-08-10')} key={61} />,
<Week firstDate={new Date('2020-08-17')} key={62} />,
<Week firstDate={new Date('2020-08-24')} key={63} />,
<Week firstDate={new Date('2020-08-31')} key={64} />,
<Week firstDate={new Date('2020-09-07')} key={65} />,
<Week firstDate={new Date('2020-09-14')} key={66} />,
<Week firstDate={new Date('2020-09-21')} key={67} />,
<Week firstDate={new Date('2020-09-28')} key={68} />,
<Week firstDate={new Date('2020-10-05')} key={69} />,
<Week firstDate={new Date('2020-10-12')} key={70} />,
<Week firstDate={new Date('2020-10-19')} key={71} />,
<Week firstDate={new Date('2020-10-26')} key={72} />,
<Week firstDate={new Date('2020-11-02')} key={73} />,
<Week firstDate={new Date('2020-11-09')} key={74} />,
<Week firstDate={new Date('2020-11-16')} key={75} />,
<Week firstDate={new Date('2020-11-23')} key={76} />,
<Week firstDate={new Date('2020-11-30')} key={77} />,
<Week firstDate={new Date('2020-12-07')} key={78} />,
<Week firstDate={new Date('2020-12-14')} key={79} />,
<Week firstDate={new Date('2020-12-21')} key={80} />,
<Week firstDate={new Date('2020-12-28')} key={81} />,
<Week firstDate={new Date('2021-01-04')} key={82} />,
<Week firstDate={new Date('2021-01-11')} key={83} />,
<Week firstDate={new Date('2021-01-18')} key={84} />,
<Week firstDate={new Date('2021-01-25')} key={85} />,
<Week firstDate={new Date('2021-02-01')} key={86} />,
<Week firstDate={new Date('2021-02-08')} key={87} />,
<Week firstDate={new Date('2021-02-15')} key={88} />,
<Week firstDate={new Date('2021-02-22')} key={89} />,
<Week firstDate={new Date('2021-03-01')} key={90} />,
<Week firstDate={new Date('2021-03-08')} key={91} />,
<Week firstDate={new Date('2021-03-15')} key={92} />,
<Week firstDate={new Date('2021-03-22')} key={93} />,
<Week firstDate={new Date('2021-03-29')} key={94} />,
<Week firstDate={new Date('2021-04-05')} key={95} />,
<Week firstDate={new Date('2021-04-12')} key={96} />,
<Week firstDate={new Date('2021-04-19')} key={97} />,
<Week firstDate={new Date('2021-04-26')} key={98} />,
<Week firstDate={new Date('2021-05-03')} key={99} />,
<Week firstDate={new Date('2021-05-10')} key={100} />,
<Week firstDate={new Date('2021-05-17')} key={101} />,
<Week firstDate={new Date('2021-05-24')} key={102} />,
<Week firstDate={new Date('2021-05-31')} key={103} />,
<Week firstDate={new Date('2021-06-07')} key={104} />,
<Week firstDate={new Date('2021-06-14')} key={105} />,
<Week firstDate={new Date('2021-06-21')} key={106} />,
<Week firstDate={new Date('2021-06-28')} key={107} />,
<Week firstDate={new Date('2021-07-05')} key={108} />,
<Week firstDate={new Date('2021-07-12')} key={109} />,
<Week firstDate={new Date('2021-07-19')} key={110} />,
<Week firstDate={new Date('2021-07-26')} key={111} />,
<Week firstDate={new Date('2021-08-02')} key={112} />,
<Week firstDate={new Date('2021-08-09')} key={113} />,
<Week firstDate={new Date('2021-08-16')} key={114} />,
<Week firstDate={new Date('2021-08-23')} key={115} />,
<Week firstDate={new Date('2021-08-30')} key={116} />,
<Week firstDate={new Date('2021-09-06')} key={117} />,
<Week firstDate={new Date('2021-09-13')} key={118} />,
<Week firstDate={new Date('2021-09-20')} key={119} />,
<Week firstDate={new Date('2021-09-27')} key={120} />,
<Week firstDate={new Date('2021-10-04')} key={121} />,
<Week firstDate={new Date('2021-10-11')} key={122} />,
<Week firstDate={new Date('2021-10-18')} key={123} />,
<Week firstDate={new Date('2021-10-25')} key={124} />,
<Week firstDate={new Date('2021-11-01')} key={125} />,
<Week firstDate={new Date('2021-11-08')} key={126} />,
<Week firstDate={new Date('2021-11-15')} key={127} />,
<Week firstDate={new Date('2021-11-22')} key={128} />,
<Week firstDate={new Date('2021-11-29')} key={129} />,
<Week firstDate={new Date('2021-12-06')} key={130} />,
<Week firstDate={new Date('2021-12-13')} key={131} />,
<Week firstDate={new Date('2021-12-20')} key={132} />,
<Week firstDate={new Date('2021-12-27')} key={133} />,
<Week firstDate={new Date('2022-01-03')} key={134} />,
<Week firstDate={new Date('2022-01-10')} key={135} />,
<Week firstDate={new Date('2022-01-17')} key={136} />,
<Week firstDate={new Date('2022-01-24')} key={137} />,
<Week firstDate={new Date('2022-01-31')} key={138} />,
<Week firstDate={new Date('2022-02-07')} key={139} />,
<Week firstDate={new Date('2022-02-14')} key={140} />,
<Week firstDate={new Date('2022-02-21')} key={141} />,
<Week firstDate={new Date('2022-02-28')} key={142} />,
<Week firstDate={new Date('2022-03-07')} key={143} />,
<Week firstDate={new Date('2022-03-14')} key={144} />,
<Week firstDate={new Date('2022-03-21')} key={145} />,
<Week firstDate={new Date('2022-03-28')} key={146} />,
<Week firstDate={new Date('2022-04-04')} key={147} />,
<Week firstDate={new Date('2022-04-11')} key={148} />,
<Week firstDate={new Date('2022-04-18')} key={149} />,
<Week firstDate={new Date('2022-04-25')} key={150} />,
<Week firstDate={new Date('2022-05-02')} key={151} />,
<Week firstDate={new Date('2022-05-09')} key={152} />,
<Week firstDate={new Date('2022-05-16')} key={153} />,
<Week firstDate={new Date('2022-05-23')} key={154} />,
<Week firstDate={new Date('2022-05-30')} key={155} />,
<Week firstDate={new Date('2022-06-06')} key={156} />,
<Week firstDate={new Date('2022-06-13')} key={157} />,
<Week firstDate={new Date('2022-06-20')} key={158} />,
<Week firstDate={new Date('2022-06-27')} key={159} />,
<Week firstDate={new Date('2022-07-04')} key={160} />,
<Week firstDate={new Date('2022-07-11')} key={161} />,
<Week firstDate={new Date('2022-07-18')} key={162} />,
<Week firstDate={new Date('2022-07-25')} key={163} />,
<Week firstDate={new Date('2022-08-01')} key={164} />,
<Week firstDate={new Date('2022-08-08')} key={165} />,
<Week firstDate={new Date('2022-08-15')} key={166} />,
<Week firstDate={new Date('2022-08-22')} key={167} />,
<Week firstDate={new Date('2022-08-29')} key={168} />,
<Week firstDate={new Date('2022-09-05')} key={169} />,
<Week firstDate={new Date('2022-09-12')} key={170} />,
<Week firstDate={new Date('2022-09-19')} key={171} />,
<Week firstDate={new Date('2022-09-26')} key={172} />,
<Week firstDate={new Date('2022-10-03')} key={173} />,
<Week firstDate={new Date('2022-10-10')} key={174} />,
<Week firstDate={new Date('2022-10-17')} key={175} />,
<Week firstDate={new Date('2022-10-24')} key={176} />,
<Week firstDate={new Date('2022-10-31')} key={177} />,
<Week firstDate={new Date('2022-11-07')} key={178} />,
<Week firstDate={new Date('2022-11-14')} key={179} />,
<Week firstDate={new Date('2022-11-21')} key={180} />,
<Week firstDate={new Date('2022-11-28')} key={181} />,
<Week firstDate={new Date('2022-12-05')} key={182} />,
<Week firstDate={new Date('2022-12-12')} key={183} />,
<Week firstDate={new Date('2022-12-19')} key={184} />,
<Week firstDate={new Date('2022-12-26')} key={185} />,
<Week firstDate={new Date('2023-01-02')} key={186} />,
<Week firstDate={new Date('2023-01-09')} key={187} />,
<Week firstDate={new Date('2023-01-16')} key={188} />,
<Week firstDate={new Date('2023-01-23')} key={189} />,
<Week firstDate={new Date('2023-01-30')} key={190} />,
<Week firstDate={new Date('2023-02-06')} key={191} />,
<Week firstDate={new Date('2023-02-13')} key={192} />,
<Week firstDate={new Date('2023-02-20')} key={193} />,
<Week firstDate={new Date('2023-02-27')} key={194} />,
<Week firstDate={new Date('2023-03-06')} key={195} />,
<Week firstDate={new Date('2023-03-13')} key={196} />,
<Week firstDate={new Date('2023-03-20')} key={197} />,
<Week firstDate={new Date('2023-03-27')} key={198} />,
<Week firstDate={new Date('2023-04-03')} key={199} />,
<Week firstDate={new Date('2023-04-10')} key={200} />,
]

const getCount = (curDate) => {
  for (var i = weeks.length - 1; i >= 0; i--) {
    if (curDate.getTime() >= weeks[i].props.firstDate.getTime()) {
      return i;
    }
  }
  return 0;
}

const MonthName = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

const GetDate = (date, shift) => {
  let curdate = date
  curdate.setDate(curdate.getDate() + shift)
  var date = curdate.getDate()
  var month = curdate.getMonth() + 1
  var year = curdate.getFullYear()
  curdate.setDate(curdate.getDate() - shift)

  return date + ' ' + MonthName[month - 1]
}



const GetWeekStatus = (weekDate) => {

  let now_week = getCount(new Date())

  let week_week = getCount(weekDate)

  if (week_week === now_week) {
    return 'Текущая неделя';
  }
  if (week_week === now_week - 1) {
    return 'Предыдущая неделя'
  }
  if (week_week == now_week + 1) {
    return 'Следующая неделя'
  }
  
  let begin_week = weeks[week_week].props.firstDate
  let end_week = new Date()
  end_week.setDate(begin_week.getDate() + 6)

  var date1 = begin_week.getDate()
  var month1 = begin_week.getMonth() + 1

  var date2 = end_week.getDate()
  var month2 = end_week.getMonth() + 1

  console.log(month1)
  console.log(month2)

  // return date1 + ' ' + MonthName[month1 - 1] + ' - ' + date2 + ' ' + MonthName[month2 - 1]
  return date1 + ' ' + MonthName[month1 - 1] + ' - ' + GetDate(begin_week, 6)
}



class LessonsSchedule extends React.Component {

  state = {
    listWeeks: [
      ...weeks
    ],
    count: getCount(new Date()),

    gestureName: 'none',
  }

  onSwipeLeft(gestureState) {
    if (this.state.count + 1 < this.state.listWeeks.length) {
      this.setState({
        count: this.state.count + 1,
      })
    }
  }

  onSwipeRight(gestureState) {
    if (this.state.count - 1 >= 0) {
      this.setState({
        count: this.state.count - 1,
      })
    }
  }

  o1nSwipe(gestureName, gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        break;
      case SWIPE_RIGHT:
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.5,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
          {/* <SafeAreaView>
            <Text>count:{this.state.count}</Text>
          </SafeAreaView> */}

          <SafeAreaView style={{
            backgroundColor: '#fdf5e6',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>

            <Button title="<<<" color={'steelblue'} onPress={() => {
              this.setState({
                count: this.state.count - 1,
              })
            }} />

            <Text style={{
              fontSize: 18,
              alignSelf: 'center',
              }}>
              {GetWeekStatus(this.state.listWeeks[this.state.count].props.firstDate)}
            </Text>

            <Button title=">>>" color={'steelblue'} onPress={() => {
              this.setState({
                count: this.state.count + 1,
              })
            }} />

          </SafeAreaView>


          {this.state.listWeeks[this.state.count]}

      </GestureRecognizer>
    );
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

export default LessonsSchedule;
