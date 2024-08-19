import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { avatar } from "../assets/Avatars/avatarImagesDetails"
import { useFonts, Almarai_400Regular } from "@expo-google-fonts/almarai"
import AppLoading from "expo-app-loading"
import { useState } from "react"

function AvatarSelection() {
    const [selectedAvatar, setSelectedAvatar] = useState('')

    let [fontsLoaded] = useFonts({
        Almarai_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const selectingAvatar = (link) => () => {
        setSelectedAvatar(link)
        console.log(link)
    }

    return (
        <>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ECECEA' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', margin: 30 }}>
                <Text style={{ fontSize: 25, textAlign: 'center', color: '#009B7D', fontWeight: 700, fontFamily: 'Almarai' }}>Select Your Avatar</Text>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity onPress={selectingAvatar(avatar[0].link)}>
                        <Image
                            source={{ uri: avatar[0].link }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={selectingAvatar(avatar[1].link)}>
                        <Image
                            source={{ uri: avatar[1].link }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        </>
    )
}

export default AvatarSelection

const styles = StyleSheet.create({
    avatar: {
        width: 250,
        height: 250,
        borderRadius: 150,
        margin: 10
    },
    avatarContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 40
    }
})