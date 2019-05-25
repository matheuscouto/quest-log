import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { Haptic } from 'expo';

class SingleTask extends React.PureComponent {
  state = {}
  render() {
    const { done } = this.state;
    const _styles = styles({done});
    return (
      <TouchableWithoutFeedback onPressIn={this.handleCheck}>
        <View style={_styles.TaskWrapper}>
          <View style={_styles.TitleWrapper}>
            <Text style={_styles.Title}>My task title</Text>
            <Text style={_styles.SubTitle}>My task title</Text>
          </View>
          <View style={_styles.HoldingDays}>
            <Text style={_styles.HoldingDaysText}>2</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  handleCheck = () => {
    this.setState(state => ({
      done: !state.done
    }));
    Haptic.selection()
  }
}

const styles = ({done}) => StyleSheet.create({
  TaskWrapper: {
    backgroundColor: 'white',
    borderRadius: 13,
    ...Platform.select({
      ios: {
        shadowColor: 'gray',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
      },
      android: {
        elevation: 20,
      },
    }),
    marginHorizontal: 10,
    marginVertical: 20,
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  TitleWrapper: {

  },
  Title: {
    fontFamily: Platform.select({
      ios: 'AmericanTypewriter',
      android: 'notoserif'
    }),
    fontSize: 15,
    textDecorationLine: done ? 'line-through' : 'none'
  },
  SubTitle: {
    fontFamily: Platform.select({
      ios: 'AmericanTypewriter',
      android: 'notoserif'
    }),
    color: '#BABBCA',
    fontSize: 12,
    textDecorationLine: done ? 'line-through' : 'none'
  },
  HoldingDays: {
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: done ? 'white' : 'black',
    backgroundColor: done ? '#DDD' : 'white',
    borderWidth: 0.5,
    ...Platform.select({
      ios: {
        shadowColor: 'gray',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  HoldingDaysText: {
    fontFamily: Platform.select({
      ios: 'AmericanTypewriter',
      android: 'notoserif'
    }),
    color: done ? 'white' : 'black'
  },
})

export default SingleTask;