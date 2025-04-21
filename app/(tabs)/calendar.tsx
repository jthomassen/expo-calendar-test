import { Calendar, toDateId, useDateRange } from "@marceloterreiro/flash-calendar";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const today = toDateId(new Date());

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(today);
  const {
    calendarActiveDateRanges,
    onCalendarDayPress,
    // Also available for your convenience:
    // dateRange, // { startId?: string, endId?: string }
    // isDateRangeValid, // boolean
    // onClearDateRange, // () => void
  } = useDateRange();

  return (
    <View style={{ flex: 1 }}>
    <Text style={styles.text}>Selected date: {selectedDate}</Text>
    <Calendar.List
      // calendarActiveDateRanges={[
      //   {
      //     startId: selectedDate,
      //     endId: selectedDate,
      //   },
      // ]}
      calendarInitialMonthId={today}
      // onCalendarDayPress={setSelectedDate}
      calendarActiveDateRanges={calendarActiveDateRanges}
      onCalendarDayPress={onCalendarDayPress}
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
    // paddingTop: 100,
    // paddingBottom: 160
  },
  text: {
    color: '#fff',
  },
})