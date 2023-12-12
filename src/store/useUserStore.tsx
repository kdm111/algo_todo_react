import {create} from 'zustand'
import { axiosInstance } from '../common/axiosInstance'

interface useUserStore {
  username : string,
  setUserInfo : () => void,
  signout : () => void
}

const useUserStore = create<useUserStore>((set) => ({
  username : '',
  setUserInfo : async () => {
    const response = await axiosInstance.get('user/myinfo')
    const { username } = response.data
    set(({
      username
    }))
  },
  signout : () => {
    set(() => ({
      username : '',
    }))
  }
}))

export default useUserStore