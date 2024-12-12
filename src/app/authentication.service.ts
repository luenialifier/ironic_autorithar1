import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {User} from "firebase/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registerUser(email:string,password:string){
      return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async loginUser(email:string, password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
}
async signOut(){
  return await this.ngFireAuth.signOut()
}
async getProfile(){
  return new Promise<User | null >((resolve, reject) =>{
    this.ngFireAuth.onAuthStateChanged( user => {
      if(user){
        resolve(user)
      }else{
        resolve(null)
      }
    },reject
  )
  })
}

}

//video youtube me quedé en 25:13 
// Part 2 - Build an IONIC 7 Angular App - Firebase Authentication - Sign Up, Login, Reset Password
