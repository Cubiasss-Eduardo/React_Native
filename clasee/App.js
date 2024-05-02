import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Input from './src/componentes/Input'
import Button from './src/componentes/Button'

export default function App() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  //hacer que se sumen dos numeros

  const suma = () => {
    let sumatoria = (parseFloat(numero1) + parseFloat(numero2));
    setResultado(sumatoria);
  }

  const resta = () => {
    let sumatoria = (parseFloat(numero1) - parseFloat(numero2));
    setResultado(sumatoria);
  }

  const abrir_page = () => {
    
  }

  const multiplicacion = () => {
    let sumatoria = (parseFloat(numero1) * parseFloat(numero2));
    setResultado(sumatoria);
  }

  const division = () => {
    let sumatoria = (parseFloat(numero1) / parseFloat(numero2));
    setResultado(sumatoria);
  }

  const limpiar = () => {
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }
  return (
    <View style={styles.container}>
      <Text style={styleText.Text}>División y multiplicaciones de números</Text>
      <Text style={styleText.Text}> Digite el primer digito</Text>
      <Input
        title_placeholder={'Ingrese numero 1: '}
        style={styleInputs.TextInput}
        numero={numero1}
        setNumero={setNumero1}
      />
      <Text style={styleText.Text3}> Digite el segundo digito</Text>
      <Input
        title_placeholder={'Ingrese numero 1: '}
        style={styleInputs.TextInput}
        numero={numero2}
        setNumero={setNumero2}
      />
      <Button
        title_button={'Sumar'}
        styleText={styleText.Text}
        style={styleButtons.TouchableOpacity}
        action_button={suma} />

      <Text>Resuldato de la suma es: {resultado}</Text>
      <Button
        style={styleButtons.TouchableOpacity}
        styleText={styleText.Text}
        title_button={'Resta'}
        action_button={resta} />

      <Text>Resuldato de la suma es: {resultado}</Text>
      <Button
       style={styleButtons.TouchableOpacity}
       styleText={styleText.Text}
        title_button={'Multiplicación'}
        action_button={multiplicacion} />

      <Text>Resuldato de la suma es: {resultado}</Text>
      <Button
        style={styleButtons.TouchableOpacity}
        styleText={styleText.Text}
        title_button={'Dividir'}
        action_button={division} />

      <Text>Resuldato de la suma es: {resultado}</Text>
      <Text style={styleText.Text2}>Numero 1: {numero1}</Text>
      <Text style={styleText.Text2}>Numero 2: {numero2}</Text>
      <Text style={styleText.Text2}>Resultado: {resultado}</Text>

      <Text>Ir al todo list</Text>
      <Button
        style={styleButtons.TouchableOpacity}
        styleText={styleText.Text}
        title_button={'Todo-list'}
        action_button={abrir_page} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styleButtons = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: '#eab676',
    padding: 10,
    width: 100,
    marginTop: 20
  },
});

const styleText = StyleSheet.create({
  Text: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  Text2: {
    color: 'red',
    fontSize: 30
  },
  Text3: {
    marginTop: 10,
    textAlign: 'center',
    color: '#FFFFFF'
  },
});

const styleInputs = StyleSheet.create({
  TextInput: {
    marginTop: 20,
    color: '#FFFFFF',
    backgroundColor: '#abdbe3',
    width: 200,
    height: 35
  },
});
