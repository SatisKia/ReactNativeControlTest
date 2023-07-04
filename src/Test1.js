import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check1Flag: false,
      radio1Id: 0,
    };
    this.setCheck1Flag = this.setCheck1Flag.bind(this);
    this.setRadio1Id = this.setRadio1Id.bind(this);
  }

  setCheck1Flag( flag ){
    this.setState({ check1Flag: flag });
  }
  setRadio1Id( id ){
    this.setState({ radio1Id: id });
  }

  render() {
    const activeOpacity = 0.3;

    return (
      <View>
        <Text>Check Box</Text>
        <CheckBox
          title='チェックボックス'
          checked={this.state.check1Flag}
          onPress={() => { this.setCheck1Flag(!this.state.check1Flag); }}
          containerStyle={{
            borderWidth: 0,
          }}
          textStyle={{
            fontSize: 15,
          }}
          activeOpacity={ activeOpacity }
        />

        <Text>Radio Button</Text>
        <CheckBox
          title='ラジオボタン1'
          checked={this.state.radio1Id == 0}
          onPress={() => { this.setRadio1Id(0); }}
          containerStyle={{
            borderWidth: 0,
          }}
          textStyle={{
            fontSize: 15,
          }}
          activeOpacity={ activeOpacity }
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title='ラジオボタン2'
          checked={this.state.radio1Id == 1}
          onPress={() => { this.setRadio1Id(1); }}
          containerStyle={{
            borderWidth: 0,
          }}
          textStyle={{
            fontSize: 15,
          }}
          activeOpacity={ activeOpacity }
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title='ラジオボタン3'
          checked={this.state.radio1Id == 2}
          onPress={() => { this.setRadio1Id(2); }}
          containerStyle={{
            borderWidth: 0,
          }}
          textStyle={{
            fontSize: 15,
          }}
          activeOpacity={ activeOpacity }
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
      </View>
    );
  }
}

export default Test1;
