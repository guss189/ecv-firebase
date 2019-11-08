import { db } from "../firebase";

export function addUserInfo(uid,info){
  return db.collection("users").doc(uid).set(info);
}

export async function getUserInfo(uid){
  const userRef = await db.collection("users").doc(uid).get();
  return userRef.data();
}
