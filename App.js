import React , {useState} from 'react';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charSet = 'abcdefghijklmnopqrstuwvxzABCDEFGHIJKLMNOPQRSTUWVXZ0123456789';

export default function App() {

  const [password , setPassword] = useState('');
  const [size , setSize] = useState(5);

  function gerarSenha(){
      let pass = '';

      for (let i=0, n = charSet.length; i < size; i++){
        pass += charSet.charAt(Math.floor(Math.random() * n))
      }

      setPassword(pass);
  }

  function copyPass(){
      Clipboard.setString(password);

      alert('Senha copiada com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.texto}>{size} Caractéres</Text>

      <View style={styles.area}>
        <Slider
          style={{height:50}}
          minimumValue = {5}
          maximumValue = {20}
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0)) }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
      <View style={styles.area}>
        <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
      </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
    width:150,
    height:150,
  },
  texto: {
    fontSize:20,
    fontWeight: 'bold',
    padding:20
  },
  area: {
    marginTop:15,
    marginBottom:15,
    backgroundColor: '#FFF',
    width:'80%',
    borderRadius:7
  },
  button: {
    width:'80%',
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF333',
    marginBottom: 25
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
  },
  password : {
    padding:10,
    textAlign:'center',
    fontSize: 20,
  }

});
