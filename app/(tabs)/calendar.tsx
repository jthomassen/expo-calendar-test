import {
  Calendar,
  toDateId,
  useDateRange,
} from "@marceloterreiro/flash-calendar";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const today = toDateId(new Date());
const tripName = "3-Day Trip";

import { CalendarTheme } from "@marceloterreiro/flash-calendar";

const linearAccent = "#3F852B";

const linearTheme: CalendarTheme = {
  rowMonth: {
    content: {
      textAlign: "left",
      color: "rgba(0, 0, 0, 1)",
      fontWeight: "700",
    },
  },
  rowWeek: {
    container: {
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0, 0, 0, 0.1)",
      borderStyle: "solid",
    },
  },
  itemWeekName: { content: { color: "rgba(0, 0, 0, 0.5)" } },
  itemDayContainer: {
    activeDayFiller: {
      backgroundColor: linearAccent,
    },
  },
  itemDay: {
    idle: ({ isPressed, isWeekend }) => ({
      container: {
        backgroundColor: isPressed ? linearAccent : "transparent",
        borderRadius: 20,
      },
      // content: {
      //   color: isWeekend && !isPressed ? "rgba(0, 0, 0, 1)" : "#000",
      // },
      content: {
        color: !isPressed ? "rgba(0, 0, 0, 1)" : "#fff",
      }
    }),
    today: ({ isPressed }) => ({
      container: {
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: isPressed ? 20 : 0,
        backgroundColor: isPressed ? linearAccent : "transparent",
      },
      content: {
        color: isPressed ? "#fff" : "#3F852B",
      },
    }),
    active: ({ isEndOfRange, isStartOfRange }) => ({
      container: {
        backgroundColor: linearAccent,
        borderTopLeftRadius: isStartOfRange ? 20 : 0,
        borderBottomLeftRadius: isStartOfRange ? 20 : 0,
        borderTopRightRadius: isEndOfRange ? 20 : 0,
        borderBottomRightRadius: isEndOfRange ? 20 : 0,
      },
      content: {
        color: "#fff",
      },
    }),
  },
};

export default function CalendarScreen() {
  const {
    calendarActiveDateRanges,
    onCalendarDayPress,
    // Also available for your convenience:
    // dateRange, // { startId?: string, endId?: string }
    // isDateRangeValid, // boolean
    // onClearDateRange, // () => void
  } = useDateRange();

  return (
    <View style={styles.container}>
      {/* <Text>{tripName}</Text> */}
      <Text></Text>
      <View style={{flex: 2}}>
        <Calendar.List
          calendarInitialMonthId={today}
          calendarActiveDateRanges={calendarActiveDateRanges}
          onCalendarDayPress={onCalendarDayPress}
          theme={linearTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: "#000",
  },
});
