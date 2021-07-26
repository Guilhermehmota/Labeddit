import axios from "axios"
import {BASE_URL} from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, history, setButtonText) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token )
            goToFeedPage(history)
            setButtonText("Logout")
        })
        .catch((err)=>alert(err.response.data.message))
}

export const signUp = (body, history, setButtonText) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token )
            goToFeedPage(history)
            setButtonText("Logout")
        })
        .catch((err)=>alert(err.response.data.message))
}

