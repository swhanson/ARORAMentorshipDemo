import * as React from 'react';
import {styles} from './stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function JohnSmithScreen( {navigation} )
{
  return (
    <View style={styles.menteescreen}>

      <View style={styles.menteescreenbuttons}>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Chat')}>
            <Image style={styles.menteeicons} source={require('./assets/chaticon.png')}/>
            <Text style={styles.menteeicontext}>Chat</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                  onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/calendaricon.png')}/>
            <Text style={styles.menteeicontext}>Calendar</Text>
          </Pressable>
        </View>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                              onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/greenbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>Low</Text>
            </Pressable>

          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/yellowbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>Medium</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/redbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>High</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.menteecurrentrisk}>
        <Text>Current Risk:</Text>
        <Image style={styles.menteeicons} source={require('./assets/greenbutterflybuttonicon.png')}/>
      </View>

      <View style={styles.moodreportlist}>

        <View style={styles.moodreport}>
          <Text>Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text >Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text >Mood Report</Text>
        </View>

      </View>

    </View>
  );
}
