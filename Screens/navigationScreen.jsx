import { SafeAreaView } from "react-native-safe-area-context"
import { Icon } from "@rneui/base"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { useState } from "react"

function NavigationScreen() {
    const [index, setIndex] = useState(0)
    return (
        <>
        <SafeAreaView>
            {/* BOTTOM NAVIGATION BAR */}
            <View style={styles.tabContainer}>
                <TouchableOpacity>
                    <Text>Hello</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>New Hello</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    )
}

export default NavigationScreen

const styles = StyleSheet.create({
    tabContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ECECEA',
    },
})