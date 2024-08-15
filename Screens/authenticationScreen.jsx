import { useState } from "react"
import { View, Image, Switch, StyleSheet, Text, TextInput as NativeTextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Icon, Button, Dialog } from "@rneui/base"
import { useFonts, Almarai_400Regular } from "@expo-google-fonts/almarai"
import AppLoading from 'expo-app-loading';
import { useDispatch } from "react-redux"
import { login, signup } from "../State/Slices/authenticationSlice"

function AuthenticationScreen() {
    const dispatch = useDispatch()
    const [logReg, setLogReg] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailWarning, setEmailWarning] = useState(false)
    const [passwordWarning, setPasswordWarning] = useState(false)
    const [usernameWarning, setUsernameWarning] = useState(false)

    const logRegToggle = () => {
        setLogReg(!logReg)
    }

    let [fontsLoaded] = useFonts({
        Almarai_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const tongleEmailWarning = () => {
        setEmailWarning(!emailWarning)
    }

    const tonglePasswordWarning = () => {
        setPasswordWarning(!passwordWarning)
    }

    const tongleUsernameWarning = () => {
        setUsernameWarning(!usernameWarning)
    }

    const loginButton = () => {
        if (email === ''){
            setEmailWarning(!emailWarning)
            return 
        }

        if (password === '') {
            setPasswordWarning(!passwordWarning)
            return 
        }

        dispatch(login(email, password))
    }

    const registerButton = () => {
        if (email === ''){
            setEmailWarning(!emailWarning)
            return 
        }

        if (password === '') {
            setPasswordWarning(!passwordWarning)
            return 
        }

        if (username === '') {
            setUsernameWarning(!usernameWarning)
            return 
        }

        dispatch(signup({email, password, username}))
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ececea', width: '100vw' }}>
            <View style={{ flex: 1, width: '100vw', alignItems: 'center', justifyContent: 'center', margin: 30 }}>
                <View>
                    <Image
                        source={require('../logo/png/logo-no-background.png')}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Switch
                        value={logReg}
                        onValueChange={logRegToggle}
                        trackColor={{ false: 'white', true: 'white'}}
                        thumbColor={logReg ? '#089b7d' : '#ffbf5d' }
                    />
                    <Text style={{ fontFamily: 'Almarai_400Regular', fontSize: 35, fontWeight: '900', color: '#089b7d' }}>{logReg ? "Register" : "Login"}</Text>
                </View>
                {
                    logReg ?
                    <View style={{ width: '90%', flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#089b7d', fontFamily: 'Almarai_400Regular', marginBottom: 20 }}>Sign Up to continue</Text>
                        <View style={{ width: '100%'}}>
                            <View style={ styles.inputContainer }>
                                <NativeTextInput style={styles.inputBar} placeholder="Username" placeholderTextColor='#7E7E7E' inputMode="text" value={username} onChange={(e) => setUsername(e.nativeEvent.value)} /> 
                            </View>
                            <View style={ styles.inputContainer }>
                                <NativeTextInput style={styles.inputBar} placeholder="Email" placeholderTextColor='#7E7E7E' inputMode="email" value={email} onChange={(e) => setEmail(e.nativeEvent.value)}/> 
                            </View>
                            <View style={styles.inputContainer}>
                                <NativeTextInput style={styles.inputBar} placeholder="Password" placeholderTextColor='#7E7E7E' inputMode="text" value={password} onChange={(e) => setPassword(e.nativeEvent.value)}/> 
                            </View>
                        </View>
                        <Button
                            title="Register"
                            buttonStyle={{ backgroundColor: '#089b7d', alignItems: 'center' }}
                            containerStyle={{ width: '80%', borderRadius: 20, marginTop: 20 }}
                            onPress={registerButton}
                        />
                        <Text style={{ color: '#089b7d', fontSize: 10, marginTop: 120 }}>new to Pushtrack? create Account by flipping switch</Text>
                    </View>
                    :
                    <View style={{ width: '90%', flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#089b7d', fontFamily: 'Almarai_400Regular', marginBottom: 20 }}>Sign in to continue</Text>
                        <View style={{ width: '100%'}}>
                            <View style={ styles.inputContainer }>
                                <NativeTextInput style={styles.inputBar} placeholder="Email" placeholderTextColor='#7E7E7E' inputMode="email" value={email} onChange={(e) => setEmail(e.nativeEvent.value)}/> 
                            </View>
                            <View style={styles.inputContainer}>
                                <NativeTextInput style={styles.inputBar} placeholder="Password" placeholderTextColor='#7E7E7E' value={password} onChange={(e) => setPassword(e.nativeEvent.value)} /> 
                                <Text style={{ textAlign: 'right', color: '#089b7d', fontFamily: 'Almarai_400Regular' }}>Forgot Password?</Text>
                            </View>
                        </View>
                        <Button
                            title="Log In"
                            buttonStyle={{ backgroundColor: '#089b7d', alignItems: 'center' }}
                            containerStyle={{ width: '80%', borderRadius: 20, marginTop: 10 }}
                            onPress={loginButton}
                        />
                        <Text style={{ margin: 20 }}>Or</Text>
                        <TouchableOpacity style={styles.googleLogin}>
                            <Icon name="google-plus" type="material-community" color='white' />
                            <Text style={{ color: 'white', fontSize: 13, marginLeft: 10 }}>Sign in with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.facebookLogin}>
                            <Icon name="facebook" type="material-community" color='white' />
                            <Text style={{ color: 'white', fontSize: 13, marginLeft: 10 }}>Sign in with Facebook</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#089b7d', fontSize: 10, marginTop: 50 }}>new to Pushtrack? create Account by flipping switch</Text>
                    </View>
                }
            </View>

            {/* EMAIL WARNING DIALOG */}
            <Dialog
                isVisible={emailWarning}
                onBackdropPress={tongleEmailWarning}
            >
                <Dialog.Title title="Alert" titleStyle={{ color: 'white' }}/>
                <Text style={{ color: 'white' }}>Enter Email</Text>
            </Dialog>

            {/* PASSWORD WARNING DIALOG */}
            <Dialog
                isVisible={passwordWarning}
                onBackdropPress={tonglePasswordWarning}
            >
                <Dialog.Title title="Alert" titleStyle={{ color: 'white' }}/>
                <Text style={{ color: 'white' }}>Enter Password</Text>
            </Dialog>

            {/* USERNAME WARNING DIALOG */}
            <Dialog
                isVisible={usernameWarning}
                onBackdropPress={tongleUsernameWarning}
            >
                <Dialog.Title title="Alert" titleStyle={{ color: 'white' }}/>
                <Text style={{ color: 'white' }}>Enter Username</Text>
            </Dialog>
            
        </SafeAreaView>
    )
} 

export default AuthenticationScreen

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'contain',
        width: 150,
        height: 120,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    inputContainer: {
        width: '100%',
        marginVertical: 10,
    },
    inputBar: {
        width: '100%', 
        backgroundColor: 'white', 
        borderRadius: 15, 
        paddingHorizontal: 10, 
        paddingVertical: 10
    },
    googleLogin: {
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8
    },
    facebookLogin: {
        backgroundColor: '#0e6ffc',
        width: '100%',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        marginTop: 15
    },
})