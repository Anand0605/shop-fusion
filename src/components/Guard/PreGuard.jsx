
// import { useEffect } from "react"
// import firebaseAppConfig from "../../util/firebase-config"
// import { getAuth, onAuthStateChanged } from "firebase/auth"

// const auth = getAuth(firebaseAppConfig)

// const PreGuard = () => {
//     useEffect(()=>{
//         onAuthStateChanged(auth, (user)=>{
//             if(user)
//             {
//                 console.log("already logged")
//             }
//             else
//             {
//                 console.log("Invalid creadential information")
//             }
//         })
//     })
//   return (
//     <div>PreGuard</div>
//   )
// }

// export default PreGuard