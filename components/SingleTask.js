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
    return (
      <TouchableWithoutFeedback onPressIn={this.handleCheck}>
        <View style={styles.TaskWrapper}>
          <View style={styles.TitleWrapper}>
            <Text style={{...styles.Title, textDecorationLine: done ? 'line-through' : 'none' }}>My task title</Text>
            <Text style={{...styles.SubTitle, textDecorationLine: done ? 'line-through' : 'none' }}>My task title</Text>
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

const styles = StyleSheet.create({
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
  },
  SubTitle: {
    fontFamily: Platform.select({
      ios: 'AmericanTypewriter',
      android: 'notoserif'
    }),
    color: '#BABBCA',
    fontSize: 12
  }
})

export default SingleTask;