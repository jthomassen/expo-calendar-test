import { Text, View, StyleSheet } from 'react-native';
import { useState } from "react";
import { Calendar, toDateId } from "@marceloterreiro/flash-calendar";

const today = toDateId(new Date());

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(today);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected date: {selectedDate}</Text>
      <Calendar
        calendarActiveDateRanges={[
          {
            startId: selectedDate,
            endId: selectedDate,
          },
        ]}
        calendarMonthId={today}
        onCalendarDayPress={setSelectedDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40%',
    paddingBottom: '40%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  text: {
    color: '#fff',
  },
});
