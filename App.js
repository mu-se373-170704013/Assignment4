import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [setted, setSetted] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(80,100,300)',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text style={{fontSize: 30, color: 'yellow'}}>CALCULATE YOUR</Text>
      <Pressable style={{padding: 10, backgroundColor: 'cyan'}}>
        <Text style={{color: 'gray'}}>AGE</Text>
      </Pressable>
      <Text style={{fontSize: 20, color: 'orange', textAlign: 'center'}}>
        IN YEARS, MONTHS, DAYS, MINUTES
      </Text>
      <Pressable
        style={{padding: 10, backgroundColor: 'green'}}
        onPress={() => setIsOpen(true)}>
        <Text>DATE PICKER</Text>
      </Pressable>
      <View>
        <DatePicker
          mode="date"
          modal={true}
          open={isOpen}
          date={date}
          onConfirm={date => {
            setIsOpen(false);
            setDate(date);
            setSetted(true);
          }}
          onCancel={() => {
            setIsOpen(false);
          }}
        />
        {setted && (
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>
            {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
          </Text>
        )}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
