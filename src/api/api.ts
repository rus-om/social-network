import axios from "axios";
import { ProfileDataType } from "../components/Profile/ProfileInfo/ProfileData";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d096e1b3-7210-421a-89a1-6c7c3bcd5cac"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(
            `/users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`
        )
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`
        )
    },
}

export const securityAPI  = {
    getCaptcha() {
        return instance.get(
            `/security/get-captcha-url`
        ).then(response => response.data)
    },
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(
            `profile/status/${userId}`
        )
    },
    updateStatus(status: string) {
        return instance.put(
            `profile/status`, {status: status}
        ).then(response => response.data)
    },
    updatePhoro(photo: File) {
        const formData = new FormData()
        formData.append("image", photo)

        return instance.put(
            `profile/photo`, formData
        ).then(response => response.data)
    },
    updateProfile(profile: ProfileDataType) {
        return instance.put(`profile`,  profile  )
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha} )
    },
    logout() {
        return instance.delete(`auth/login` )
    },
}
