const linkContainer = $("#links");
const addLink = (dataBase, link) => {
  dataBase.collection("links").add({
    ...link,
  });
};

const getLinks = (dataBase) => {
  linksRaw = dataBase
    .collection("links")
    .get()
    .then(function (linksRaw) {
      linksRaw.forEach(function (link) {
        data = link.data();
        console.log(buildCard(data));
      });
    });

  return links;
};

const buildCard = (link) => {
  const card = `<div class="col-md-6 col-sm-12">
                <div class="link-card">${link.title}</div>
                </div>`;
  const cardElement = $(`<div class="col-md-6 col-sm-12">
    <div class="link-card">${link.title}</div>
    </div>`);
  cardElement.click(() => {
    window.open(link.link);
  });
  cardElement.appendTo(linkContainer);
};

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

getLinks(db);
