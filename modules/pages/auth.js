import React, {Component} from 'react'
import {Text, TextInput, View, Button, StyleSheet} from 'react-native'

class Auth extends Component {
  constructor(props){
    super(props);

  }
  state = { name: '' }

  onChangeName = (name) => {
    this.setState(() => ({name}));
  }

  onSubmitName = () =>  {
    const name = this.state.name;
    this.props.onSubmitUser(name);
  }
    
  render() {
    return (
      <View>
        <Text>Your Name</Text>
        <TextInput 
            onChangeText={(name) => this.onChangeName(name)}
            placeHolder="Your name"
            style={styles.input}
            />
        <Button 
        title={"Create"} 
        onPress={this.onSubmitName} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'blue',
    borderWidth: .5,
    width: 100,
    borderRadius: 5,
    padding: 10
  }
})

export default Auth