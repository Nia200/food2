import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPS5JefWXy7Ij0gm-zcDEouBUyN66geT0",
  authDomain: "food-order-dfcd8.firebaseapp.com",
  projectId: "food-order-dfcd8",
  storageBucket: "food-order-dfcd8.appspot.com",
  messagingSenderId: "171553363799",
  appId: "1:171553363799:web:f8bf6137ebd95753d11012",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
