import { defineStore } from "pinia"
import { ref } from "vue"
import { getCurrentUser } from "../api/user";


export const useLoginUserStore = defineStore('loginUser', () => {
    const loginUser = ref<any>({
        name: '未登录'
    });
  

    async function fetchLoginUser() {
        const res = await getCurrentUser();
        if (res.data.success && res.data.data != null) {
            loginUser.value = res.data.data;
        }
    }

    function setLoginUser(newLoginUser: any) {
        loginUser.value = newLoginUser;
    }
    return { loginUser, fetchLoginUser, setLoginUser }
  })