// utils/api.js
// Importeer de benodigde functies om toegang te krijgen tot de database
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

// Functie om een willekeurige post op te halen uit de database
export const getRandomPost = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const randomIndex = Math.floor(Math.random() * posts.length);
        return posts[randomIndex];
    } catch (error) {
        console.error('Error fetching random post:', error);
        return null;
    }
};
