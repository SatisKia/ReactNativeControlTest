import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';

function Test2() {
  const [ check1Flag, setCheck1Flag ] = useState(false);
  const [ radio1Id, setRadio1Id ] = useState(0);

  const activeOpacity = 0.3;

  return (
    <View>
      <Text>Check Box</Text>
      <CheckBox
        title='チェックボックス'
        checked={check1Flag}
        onPress={() => { setCheck1Flag(!check1Flag); }}
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
        checked={radio1Id == 0}
        onPress={() => { setRadio1Id(0); }}
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
        checked={radio1Id == 1}
        onPress={() => { setRadio1Id(1); }}
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
        checked={radio1Id == 2}
        onPress={() => { setRadio1Id(2); }}
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

export default Test2;
