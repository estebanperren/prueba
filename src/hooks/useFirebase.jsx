// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  collection,
  addDoc,
  getFirestore,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "perrenesteban-ec14e.firebaseapp.com",
  projectId: "perrenesteban-ec14e",
  storageBucket: "perrenesteban-ec14e.appspot.com",
  messagingSenderId: "785126829605",
  appId: "1:785126829605:web:9a239bdbb0760f2b17d9cc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



function getDatabase() {
  return db;
}

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  // Initialize Firebase
function UseFirebase(){
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
      

const getAll = useCallback(async (collect = "products") => {
  console.log("llamo a getall")
  setIsLoading(true);
        const aux = [];
        const querySnapshot = await getDocs(collection(db, collect));
        querySnapshot.forEach((doc) => {
          let product = { id: doc.id, ...doc.data() };
          aux.push(product);
        });
       setItems([...aux]);
        setIsLoading(false);
},[])

const getById = useCallback(async(id)=>{
  console.log("llamo a getbyid")
setIsLoading(true);
const aux = items
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

if (docSnap.exists()){
  let product = { id: docSnap.id, ...docSnap.data() };
  aux.push(product)
  setItems([...aux])
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
setIsLoading(false);

},[])


const getByCategory = useCallback(async(category="")=>{
  console.log("llamo a getbycategory")
  setIsLoading(true);

const aux = []

const q = query(collection(db, "products"), where("category", "==", category));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let product = { id: doc.id, ...doc.data()} 
  aux.push(product)
});
  
  setItems([...aux])


setIsLoading(false);

},[])




return {isLoading,items, getAll, getById, getByCategory}
    }
export default UseFirebase

  /*async function cargarBaseDeDatos  () {
    const promise = await fetch('https://dummyjson.com/products')
    const products = await promise.json()
    const productos = products.products
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "products"), {
            title: producto.title,
            description: producto.description,
            price: producto.price,
            brand: producto.brand,
            stock: producto.stock,
            category: producto.category,
            thumbnail: producto.thumbnail,
            images: producto.images
          });
          })

}
*/