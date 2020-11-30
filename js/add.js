const firebaseConfig = {
  apiKey: "AIzaSyDUKa_g2zTwGZYmGTGzWrEphZQ0vobnuf0",
  authDomain: "enstiens-enst.firebaseapp.com",
  databaseURL: "https://enstiens-enst.firebaseio.com",
  projectId: "enstiens-enst",
  storageBucket: "enstiens-enst.appspot.com",
  messagingSenderId: "992713475925",
  appId: "1:992713475925:web:cc4c9e44b9cb3d987d11dc",
  measurementId: "G-ZDPGC53TV0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Cloud Firestore through Firebase

let db = firebase.firestore();

$("#btn").click((event) => {
  $("#btn").prop("disable", true);
  event.preventDefault();
  const link = $("#link").val();
  const title = $("#title").val();
  const data = {
    title,
    link,
  };
  console.log(data);
  db.collection("links")
    .add(data)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    });
  $("#btn").prop("disable", false);
});
