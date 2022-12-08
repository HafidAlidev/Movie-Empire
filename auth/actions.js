import axios from 'axios'

export const signin = async (formData, login, navigation, setError) => {
    try {
        const { data } = await axios.post('https://movie-empire-server.vercel.app/user/signin', formData)
        login(data)
        navigation.navigate('Home')
    } catch (error) {
        console.log(error)
        setError(error.response.data.message)
    }
}

export const signup = async (formData, signup_, navigation, setError) => {
    try {
        const { data } = await axios.post('https://movie-empire-server.vercel.app/user/signup', formData)
        signup_(data)
        navigation.navigate('Home')
    } catch (error) {
        console.log(error)
        setError(error.response.data.message)
    }
}
