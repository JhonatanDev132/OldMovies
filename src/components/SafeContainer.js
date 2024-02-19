import { SafeAreaView, StyleSheet} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({children}){
    const [fontsLoaded, fontError] = useFonts({
        'Monoton-Regular': require('../../assets/fonts/Monoton-Regular.ttf'),
        NotoSans: require('../../assets/fonts/NotoSans-VariableFont.ttf')
      });

      const aoAtualizarLayout = useCallback(async () => {
        /* Se estiver tudo ok com o carregamento */
        if (fontsLoaded || fontError) {
          /* Escondemos a splashscreen */
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);

      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
            {children}
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        flex: 1,
        backgroundColor: "#ffffff"
      },
   
});