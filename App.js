import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

const currencyPerRuppee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter Some Value");
    } else {
      let result =
        parseFloat(this.state.inputValue) * currencyPerRuppee[currency];
      this.setState({ resultValue: result.toFixed(2) + " " + currency });
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenView}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                selectionColor="#fff"
                keyboardType="numeric"
                placeholder="Enter Value In Rs."
                placeholderTextColor="#fff"
                value={this.state.inputValue}
                onChangeText={inputValue => {
                  this.setState({ inputValue });
                }}
              />
            </View>

            <View style={styles.coverterButtonCOntainer}>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("DOLLAR");
                }}
              >
                <Text style={styles.converterButtonText}>$</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("EURO");
                }}
              >
                <Text style={styles.converterButtonText}>Euro</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("POUND");
                }}
              >
                <Text style={styles.converterButtonText}>POUND</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("RUBEL");
                }}
              >
                <Text style={styles.converterButtonText}>RUBEL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("AUSDOLLAR");
                }}
              >
                <Text style={styles.converterButtonText}>AUS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("CANDOLLAR");
                }}
              >
                <Text style={styles.converterButtonText}>Canda</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("YEN");
                }}
              >
                <Text style={styles.converterButtonText}>YEN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("DINAR");
                }}
              >
                <Text style={styles.converterButtonText}>DINAR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => {
                  this.buttonPressed("BITCOIN");
                }}
              >
                <Text style={styles.converterButtonText}>BITCOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff"
    // justifyContent: "center"
  },
  screenView: {
    flex: 1
  },
  resultContainer: {
    height: 70,
    marginTop: 70,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DF",
    color: "#fff",
    alignItems: "center",
    borderWidth: 2
  },
  resultValue: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputContainer: {
    marginTop: 30,
    height: 70,
    borderWidth: 1,
    color: "#fff",
    backgroundColor: "#1289A7",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  input: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  coverterButtonCOntainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#c1c1c1"
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0179DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.33%",
    borderRadius: 10
  },
  converterButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
