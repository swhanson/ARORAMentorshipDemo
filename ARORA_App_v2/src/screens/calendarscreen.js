import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, Alert, TextInput } from 'react-native';
import { CalendarList } from '../components/calendarlist.js';

export function CalendarScreen( {route, navigation} )
{

  const [eventDate, dateText] = React.useState('');
  const [eventTime, timeText] = React.useState('');
  const [eventDesc, descText] = React.useState('');

  return (

    <View style={styles.screen}>

      <CalendarList navigation={navigation}/>

      {/* Form for adding to calendar array */}
      <View>
        <TextInput style={styles.logininput}
                 placeholder="Date"
                 onChangeText = {eventDate => dateText(eventDate)}
                 defaultValue = {eventDate}/>

        <TextInput style={styles.logininput}
                 placeholder="Time"
                 onChangeText = {eventTime => timeText(eventTime)}
                 defaultValue = {eventTime}/>

        <TextInput style={styles.logininput}
                 placeholder="Description"
                 onChangeText = {eventDesc => descText(eventDesc)}
                 defaultValue = {eventDesc}/>

        <Pressable style={styles.menteebutton}
           onPress= {() => {
                            navigation.navigate('Calendar Screen')
                           }
                    }>
          <Text style={styles.menteeicontext}>Submit</Text>
        </Pressable>

      </View>

    </View>
  );
}
