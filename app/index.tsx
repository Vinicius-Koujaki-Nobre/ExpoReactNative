import { Header } from "@/components/header";
import { router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {

    const onPress = () => {
        router.push("/(tabs)")
    }

    return(
        <SafeAreaView>
            <Header image={require("../assets/images/Rick-e-Morty.jpg")}/>

            <View style={styles.background}>
                <Text style={styles.title}>Rick and Morty</Text>
                <Text style={styles.p}>Conjunto de dados sobre o desenho Rick and Morty</Text>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'D3D3D3'
    },
    title: {
        paddingVertical: 100,
        textAlign: 'center',
        fontSize: 24
    },
    p: {
        paddingVertical: 100,
        textAlign: 'center',
        fontSize: 16
    },
    btn: {
        backgroundColor: "#778899",
        borderRadius: 999,
        padding: 20
        
    },

    btnText: {
        color: "#FFFFFF",
        textAlign: 'center'
    }
})