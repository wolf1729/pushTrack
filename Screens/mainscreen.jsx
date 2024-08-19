import { Avatar, Tab, Button, TabView } from "@rneui/base";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { avatar } from "../assets/Avatars/avatarImagesDetails";
import { useEffect, useState } from "react";
import { quoteCall } from "../State/Services/apiCalls";

function MainScreen() {
    const [index, setIndex] = useState(0); 
    const [quote, setQuote] = useState(null);
    const [pushUps, setPushUps] = useState(6)
    const [username, setUsername] = useState('Stranger')

    useEffect(() => {
        const gettingQuote = async () => {
            try {
                const response = await quoteCall();
                setQuote(response);
                console.log(response);
            } catch (error) {
                console.error("Error fetching quote:", error);
            }
        };

        gettingQuote();
    }, []);

    return (
        <>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 30 }}>

                {/* USER DETAILS CONTAINER */}
                <View style={styles.userDetails}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>hello,</Text>
                        <Text style={{ fontSize: 25, fontWeight: '600' }}>{username}</Text>
                    </View>
                    <Avatar 
                        size={64}
                        rounded
                        source={{ uri: avatar[0].link }}
                        containerStyle={{ backgroundColor: '#00a7f7' }}
                    />
                </View>

                {/* QUOTE API CONTAINER */}
                <View style={styles.contentContainer}>
                    {quote ? (
                        <>
                            <Text style={styles.placeholderText}>{quote[0]?.quote || "No quote available"}</Text>
                            <Text style={{ textAlign: 'right', color: '#888', fontStyle: 'italic' }}>{quote[0]?.author || "Unknown author"}</Text>
                        </>
                    ) : (
                        <Text style={styles.placeholderText}>Loading...</Text>
                    )}
                </View>

                {/* PUSHUP COUNTER CONTAINER */}
                <View style={styles.pushContainer}>
                    <Text style={{ fontSize: 21, color: '#009B7D', fontWeight: 600 }}>Push-Ups Done Today</Text>
                    <Text style={{ fontSize: 50, color: '#FFBF5D', fontWeight: 600, marginTop: 10, marginBottom: 20 }}>{pushUps}</Text>
                    <Button 
                        title="ADD"
                        containerStyle={{ width: '100%', borderRadius: 15 }}
                        buttonStyle={{ backgroundColor: '#009B7D', padding: 10 }}
                        titleStyle={{ fontSize: 30 }}
                    />
                </View>
            </View>           
        </SafeAreaView>
        </>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentContainer: {
        marginTop: 60,
        marginBottom: 40
    },
    placeholderText: {
        fontSize: 16,
        color: '#888',
        fontWeight: '600',
        marginBottom: 5,
        fontStyle: 'italic'
    },
    tabContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ECECEA',
    },
    pushContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 40
    },
});
