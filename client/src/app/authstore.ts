import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  token: string;
  addToken: (token: string) => void;
  removeToken: () => void;
  verify: () => boolean;
}

const authStore = (set: SetState<AuthStore>) =>
  ({
    token: "",
    addToken: (token) => {
      set((state) => ({ ...state, token }));
    },
    removeToken: () => {
      set((state) => ({ ...state, token: "" }));
    },
    verify: () => {
      return false;
    },
  } as AuthStore);

const useAuthStore = create(persist(authStore));

export default useAuthStore;
