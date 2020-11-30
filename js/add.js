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
const btn = $("#btn");
btn.click((event) => {
  $("#myToast").toast("show");

  btn.prop("disable", true);
  btn.html(`<div class="spinner-border spinner-border-sm" role="status">
  <span class="sr-only">Loading...</span>
  </div>`);
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
  $(".toast").toast("show");
  btn.prop("disable", false);
  btn.html("Submit");
});
