import {IToken} from "../types/Auth.ts";
import {jwtDecode} from "jwt-decode";

export const getRefreshToken = (token: string) => {
    try {
        const decoded: IToken = jwtDecode(token);
        return decoded.refresh_token;
    } catch (error) {
        return `Ошибка при декодировании токена: ${error}`;
    }
}

export const getDecodedToken = (token: string): IToken | null => {
    try {
        return jwtDecode<IToken>(token);
    } catch (error) {
        console.error('Ошибка при декодировании токена:', error);
        return null;
    }
}