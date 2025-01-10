import { createUser, login } from "../api/users";

export const registerUser = async (userData) => {
    if(userData.password.trim() !== userData.confirmPassword.trim()) {
        alert("Confirmação de senha incorreta!");
        return;
    }

    delete userData.confirmPassword;
    const response = await createUser(userData);
    return response
}

export const loginUser = async (userEmail, userPassword) => {
    const response = await login(userEmail, userPassword);
    if(response.login) {
        sessionStorage.setItem("userId", response.userData.id);
        return { ok: true };
    } else {
        alert(response.message);
        return { ok: false };
    }
}