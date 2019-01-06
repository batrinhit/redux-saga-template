import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTestApi } from '../../redux/actions/testApiAction';

// styles
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20
  }
});

class Home extends Component {
  static propTypes = {
    onFetchTestApi: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    setTimeout(() => this.props.onFetchTestApi(), 3000);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.wrapper}>
        {console.log(isLoading)}
        <Text>HOME</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.testApi.data,
    isLoading: state.testApi.isLoading || false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTestApi: (url) => { dispatch(fetchTestApi(url)); },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
