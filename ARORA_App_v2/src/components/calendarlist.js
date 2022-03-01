import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider, Alert } from 'react-native';

export function CalendarList( {navigation} ) {


  const events = [{
                    date: '05/10/2022',
                    time: '12:30 PM',
                    desc: 'Meeting with John Smith'
                  },
                  {
                    date: '05/12/2022',
                    time: '6:00 PM',
                    desc: 'Jane Doe\'s birthday'
                  }
                  ]

  return (<View style={styles.homescreenmenteelist}>
    {events.map(event =>
                  (<View style={styles.moodreport}>
                      <Text>{event.date}</Text>
                      <Text>{event.time}</Text>
                      <Text>{event.desc}</Text>
                      <Pressable style={styles.menteebutton}>
                        <Text style={styles.menteeicontext}>Delete</Text>
                      </Pressable>
                    </View>))}
    </View>)
}
