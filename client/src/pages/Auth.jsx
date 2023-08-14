import { useState } from "react"
import { initialState } from "../types/types"

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <div>Auth</div>
    )
}

export default Auth