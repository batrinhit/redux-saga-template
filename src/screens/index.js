import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  BackHandler,
  View,
  StyleSheet
} from 'react-native';

// Libs
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// router
import { RootNavigation } from '../navigators/AppNavigation';

// interface
export interface Props {}

export interface State {}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {},
  activeTitle: {}
});
const mapStateToProps = state => ({
  nav: state.nav
});

class Screens extends React.PureComponent<Props, State> {
  componentDidMount() {
    // handler back device android
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this._handleHardwareBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this._handleHardwareBackPress);
    }
  }

  _handleHardwareBackPress = () => {
    // const { nav } = this.props;
    return true;
  };

  render() {
    if (Platform.OS === 'ios') {
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <RootNavigation />
        </KeyboardAvoidingView>
      );
    }
    return (
      <View style={styles.container}>
        {/* <StatusBar  barStyle="light-content" /> */}
        <RootNavigation />
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  null
)(Screens);

// const mapDispatchToProps = dispatch => ({});
