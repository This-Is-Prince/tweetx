import create, { GetState, SetState } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  token: string;
  addToken: (token: string) => void;
  removeToken: () => void;
  verify: () => boolean;
}

const authStore = (set: SetState<AuthStore>, get: GetState<AuthStore>) =>
  ({
    token: "",
    addToken: (token) => {
      set((state) => ({ ...state, token }));
    },
    removeToken: () => {
      set((state) => ({ ...state, token: "" }));
    },
    verify: () => {
      console.log(get().token);
      return get().token !== "";
    },
  } as AuthStore);

const useAuthStore = create(persist(authStore, { name: "token" }));

export default useAuthStore;
