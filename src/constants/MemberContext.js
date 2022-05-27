import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut
} from 'firebase/auth';
import { authService } from '@/firebaseConfig';


// Email로 가입하는 함수
// 동작이 이루어지면 앞서 작성한 로그인 상태 감지 함수로 인해 user정보가 변수에 저장되고 setState가 발생
export async function createUserWithEamil(email, password) {

  console.log('## createUserWithEamil', authService);
  try {
    const res = await createUserWithEmailAndPassword(authService, email, password);
    console.log('## createUserWithEamil', res);
  } catch (error) {
    console.log(error);
  }
}

// Email로 로그인하는 함수
export async function loginWithEamil(email, password) {
  try {
    const res = await signInWithEmailAndPassword(authService, email, password);
    console.log('## loginWithEamil', res);
  } catch (error) {
    console.log(error);
  }
}


// Google, Github로 로그인하는 함수
export async function loginWithSocial(provider) {
  if (provider === 'google') {
    try {
      const provider = new GoogleAuthProvider();
      await new signInWithRedirect(authService, provider);
      const result = await getRedirectResult(authService);
      if (result) {
        // const user = result.user;
      }
      return;
    } catch (error) {
      console.log(error);
    }
  } else if (provider === 'github') {
    try {
      const provider = new GithubAuthProvider();

      await new signInWithRedirect(authService, provider);
      const result = await getRedirectResult(authService);
      if (result) {
        // const user = result.user;
      }
      return;
    } catch (error) {
      console.log(error);
    }
  }
}



// Logout 하는 함수
export async function logout() {
  await signOut(authService);
  return;
}