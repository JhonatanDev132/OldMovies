import { StyleSheet, StatusBar,} from "react-native";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";

export default function() {

  return (
    <>
      <StatusBar barStyle="default" />
      {/* {<Home />} */}
      {/* {<Sobre />} */}
      <Privacidade />
    </>
  )
}