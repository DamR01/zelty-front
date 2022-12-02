import { atom } from "recoil";

const authTokenState = atom<null | string>({
    key: "auth-token",
    default: null,
});

export { authTokenState };
