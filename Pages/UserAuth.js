import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { signin, signup } from '../auth/actions'
import { connect } from 'react-redux'
import { login, logout, signup_ } from '../redux/actions/users'
import Button from '../custom componet/Button'
import MovieCardstyles from '../custom componet/moviecard'

const UserAuth = ({ navigation, userState, login, logout, signup_ }) => {
    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState('')

    const switchMode = () => {
        setIsSignup((prev) => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            signup({name, email, password, confirmPassword: confirmPassword}, login, navigation, setErrors)
        } else {
            signin({name, email, password, confirmPassword: confirmPassword}, signup_, navigation, setErrors)
        }
    }

    return (
        <View >
            <View>
                <Text>{isSignup ? 'Sign up' : 'Sign In'}</Text>
                    <View>
                        {
                            isSignup && (
                                <View>
                                    <TextInput placeholder='Name' onChangeText={setName}/>
                                </View>
                            )
                        }
                        <TextInput style={styles.textInput} placeholder='Email' onChangeText={setEmail} type='email' />
                        <TextInput style={styles.textInput} placeholder='Password' onChangeText={setPassword} type='password' />
                        {isSignup && <TextInput style={styles.textInput} placeholder='Confirm Password' onChangeText={setConfirmPassword} type='password' />}
                        <Text>{errors}</Text>
                        <Button onPress={handleSubmit} title={isSignup ? 'Sign Up' : 'Sign In'} />
                        <Button onPress={switchMode} title={isSignup ? 'Already have an account? Sign in' : 'Dont have an account? Sign up'} />
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