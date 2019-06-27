import * as firebase from "firebase"; /*takes all named exports from firebase and puts them in a variable firebase */


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,database as default};

// database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses =[];

//     snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description:'Expense One',
//   note: 'Gas bill',
//   amount:100,
//   createdAt: 0
// });

// database.ref('notes').push({
//   title:'Course Topics',
//   body:'React Native, Angular, Python'
// });

// const firebaseNotes ={
//   notes:{
//     dafaiojlka: {
//       title: "First Note",
//       body: "This is my note"

//     },
//     iffijaojlka: {
//       title: "Another Note",
//       body: "this is my other note"
//     }
//   }
// };

// const notes = [
//   {
//     id: "12",
//     title: "First Note",
//       body: "This is my note"
//   },
//   {
//     id: "13",
//     body: "This is my other note",
//     title: "Second Note"
//   }
// ];

// database.ref('notes').set(notes);

// database.ref().on('value',(snapshot)=>{
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// const onValueChange = database.ref()
// .on('value',(snapshot)=>{
//   console.log(snapshot.val());
// },(e)=>{
//   console.log('Error with data fetching',e)
// });

// setTimeout(()=>{
//   database.ref('age').set(38);
// },3000);

// setTimeout(()=>{
//   database.ref().off('value',onValueChange);
// },6000);

// setTimeout(()=>{
//   database.ref('age').set(40);
// },9000);

// database.ref('location/city')
// .once('value')
// .then((snapshot)=>{
//  const val = snapshot.val();
//  console.log(val);
// })
// .catch((e)=>{
//   console.log('Error fetching data:',e)
// });

// database.ref().set({
//   name:'Alden',
//   num: 26,
//   stressLevel:6,
//   job:{
//     title:'Software Developer',
//     company:'Google'
//   },
//   location:{
//     city:'Phily',
//     country:'US'
//   }
// }).then(()=>{
//   console.log('data is saved!');
// }).catch((e)=>{
//   console.log('This failed.',e);
// });

// database.ref().update({
//   stressLevel:4,
//   'location/city':'Seattle',
//   'job/company':'Amazon'
// });

// database.ref('isSingle').remove().then(()=>{
//   console.log("removed successfully")
// }).catch((e)=>{
//   console.log('remove failed',e)
// });
