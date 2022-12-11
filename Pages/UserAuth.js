import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signin, signup } from '../auth/actions'
import { connect } from 'react-redux'
import { login, logout, signup_ } from '../redux/actions/users'
import Button from '../custom componet/Button'

const UserAuth = ({ navigation, userState, login, logout, signup_ }) => {
    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (errors) {
            setLoading(false)
        }
    }, [errors])

    const switchMode = () => {
        setIsSignup((prev) => !prev)
        setLoading(false)
        setErrors('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (isSignup) {
            signup({ name, email, password, confirmPassword: confirmPassword }, login, navigation, setErrors)
        } else {
            signin({ name, email, password, confirmPassword: confirmPassword }, signup_, navigation, setErrors)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 25, margin: 10, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>{isSignup ? 'Sign up' : 'Sign In'}</Text>
                <View>
                    {
                        isSignup && (
                            <View>
                                <TextInput style={styles.textInput} placeholder='Name' onChangeText={setName} />
                            </View>
                        )
                    }
                    <TextInput style={styles.textInput} placeholder='Email' onChangeText={setEmail} type='email' />
                    <TextInput style={styles.textInput} placeholder='Password' onChangeText={setPassword} type='password' secureTextEntry={true} />
                    {isSignup && <TextInput style={styles.textInput} placeholder='Confirm Password' onChangeText={setConfirmPassword} type='password' secureTextEntry={true} />}
                    {loading ?
                        <ActivityIndicator size={50} color='orange' />
                        : <Text>{errors}</Text>
                    }
                    <Button onPress={handleSubmit} title={isSignup ? 'Sign Up' : 'Sign In'} />
                    <Text onPress={switchMode} style={{color: 'orange', fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: 'orange'}}>{isSignup ? 'Already have an account? Sign in' : 'Dont have an account? Sign up'}</Text>
                    <Button title="Back" onPress={() => navigation.navigate("Home")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40,
        padding: 8,
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20
    }
});

const mapStateToProps = (userState) => (userState)
const mapDispatchToProps = { login, logout, signup_ }

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth)