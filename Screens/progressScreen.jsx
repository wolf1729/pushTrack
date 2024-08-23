import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/base"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

function ProgressScreen() {
    const [week, setWeek] = useState(true)
    const [month, setMonth] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* CHARTS AND PROGRESS */}
            <View style={{ flex: 1, margin: 30 }}>

                {/* TOP NAVIGATION BAR */}
                <View style={styles.topNavigationContainer}>
                    <TouchableOpacity>
                        <Text style={{ color: '#009b7d', fontSize: 14, fontWeight: 600, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: { week && '#009b7d'} }}>Weekly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#009b7d', fontSize: 14, fontWeight: 600, paddingVertical: 5, paddingHorizontal: 10 }}>Monthly</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* BOTTOM NAVIGATION BAR */}
            <View style={styles.bottomNavigation}>
                <TouchableOpacity style={{ width: '50%' }}>
                    <View style={styles.navigationElement}>
                        <Icon name="clock" type="evilicon" size={30} color='white' />
                        <Text style={{ color: 'white', fontSize: 12, }}>Count</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '50%'}} onPress={() => navigation.navigate('ProgressScreen')}>
                    <View style={styles.navigationElement}>
                        <Icon name="trophy" type="evilicon" size={30} color='white' />
                        <Text style={{ color: 'white', fontSize: 12, }}>Progress</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProgressScreen

const styles = StyleSheet.create({
    topNavigationContainer: {
        borderWidth: 1,
        borderColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: '#009b7d',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
    },
    navigationElement: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})