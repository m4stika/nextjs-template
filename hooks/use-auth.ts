import { useEffect } from "react";
import { User } from "@/lib/common";
import { atom, useAtom } from "jotai";

type Auth = {
  authorized: boolean;
  user: User | undefined;
};

// Membaca nilai awal authorized dari localStorage
const getInitialAuthState = (): Auth => {
  const authorized = localStorage.getItem("authorized") === "true";
  const userData = localStorage.getItem("user");
  const user = userData ? (JSON.parse(userData) as User) : undefined;

  return {
    authorized,
    user,
  };
};

// Atom auth
const authAtom = atom<Auth>({
  authorized: false,
  user: undefined,
});

export function useAuth() {
  const [auth, setAuth] = useAtom(authAtom);

  // Menyinkronkan nilai awal authorized dengan localStorage
  useEffect(() => {
    const initialAuthState = getInitialAuthState();
    setAuth(initialAuthState);
  }, [setAuth]);

  // Fungsi untuk memperbarui authorized dan menyimpan ke localStorage
  const setAuthorized = (authorized: boolean) => {
    setAuth((prev) => {
      const updatedAuth = { ...prev, authorized };
      localStorage.setItem("authorized", String(authorized));
      return updatedAuth;
    });
  };

  // Fungsi untuk menambahkan user dan menyimpan ke localStorage
  const addUser = (user: User) => {
    setAuth((prev) => {
      const updatedAuth = { ...prev, user };
      localStorage.setItem("user", JSON.stringify(user));
      setAuthorized(true)
      return updatedAuth;
    });
  };

  // Fungsi untuk menghapus user dan memperbarui localStorage
  const removeUser = () => {
    setAuth((prev) => {
      const updatedAuth = { ...prev, user: undefined };
      localStorage.removeItem("user");
      setAuthorized(false)
      return updatedAuth;
    });
  };

  return {
    authorized: auth.authorized,
    setAuthorized,
    user: auth.user,
    addUser,
    removeUser,
  };
}
