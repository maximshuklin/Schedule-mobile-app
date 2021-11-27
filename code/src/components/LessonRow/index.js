// App.js
// import { Predicates } from '@aws-amplify/datastore';
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
 
class LessonInput extends React.Component {
    state = {

    }

    async componentDidMount() {
        AsyncStorage.getItem(this.props.lessonKey).then((value) => {
            if (value !== null){
                // saved input is available
                this.setState({ text: value }); // Note: update state with last entered value
            }
        }).done();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'gray',
            }}>
                <TextInput
                style={styles.lessonInput}
                editable = {true}
                multiline = {true}
                onChangeText={(text) => { 
                    this.setState({text});
                    AsyncStorage.setItem(this.props.lessonKey, text); // Note: persist input
                  }}
                value={this.state.text}
                placeholder={"Предмет"}
                />
            </View>
        )
    }
}

class HomeworkInput extends React.Component {
    state = {
        done: false,
    }

    async componentDidMount() {
        AsyncStorage.getItem(this.props.homeworkKey).then((value) => {
            if (value !== null){
                // saved input is available
                this.setState({ text: value }); // Note: update state with last entered value
            }
        }).done();

        AsyncStorage.getItem(this.props.homeworkKey + '.done').then((value) => {
            if (value !== null){
                // saved input is available
                this.setState({ done: JSON.parse(value) }); // Note: update state with last entered value
            }
        }).done();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 7,
                    backgroundColor: '#90ee90',
                }}>
                    <TextInput
                    style={{
                        ...styles.homeworkInput,
                        backgroundColor: (this.state.done === true ? '#90ee90' : '#eee')
                    }}
                    editable = {true}
                    multiline = {true}
                    onChangeText={(text) => { 
                        this.setState({text});
                        AsyncStorage.setItem(this.props.homeworkKey, text); // Note: persist input
                    }}
                    value={this.state.text}
                    placeholder={"Домашнее задание"}
                    />
                </View>

                <Pressable style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderRadius: 5,
                    backgroundColor: (this.state.done ? "#90ee90" : "white"),
                }} onPress={() => {
                    AsyncStorage.setItem(this.props.homeworkKey + '.done', JSON.stringify(!this.state.done));
                    this.setState({
                        done: !this.state.done,
                    })
                }}>
                </Pressable>
            </View>
        )
    }
}

// Write a story about Trump
// См. В Гугл. Классе
// Сделать проект
// 10 причин, почему медицина - зло
// ЛАЛАЛАЛАЛАЛАЛАЛАЛАЛАЛА

class LessonRow extends React.Component {
    // create state
    state = {

    }

    lessonKey = this.props.uniq + ".lesson"
    homeworkKey = this.props.uniq + this.props.curDate + ".homework"
   
    render() {
      return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            width: '100%',
            height: 45,
            flexDirection: 'row', 
        }}>
            {/* Lesson */}
            <View style={{
                flex: 1,
            }}>
                <LessonInput lessonKey={this.lessonKey}/>
            </View>

            {/* Homework */}
            <View style={{
                flex: 2,
            }}>
                <HomeworkInput homeworkKey={this.homeworkKey}/>
            </View>


        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "red",
      width: '100%',
      height: 45,
    },
    lessonInput: {
        flex: 1,
        backgroundColor: "#ddd",
        borderWidth: 1,
        fontSize: 15,
        borderRadius: 5,
    },
    homeworkInput: {
        flex: 1,
        backgroundColor: "#eee",
        borderWidth: 1,
        fontSize: 12,
        borderRadius: 5,
    },
    item: { padding: 10 },
    name: { fontSize: 20 },
    description: { fontWeight: '600', marginTop: 4, color: 'rgba(0, 0, 0, .5)' },
    city: { marginTop: 4 }
  })

export default LessonRow;

