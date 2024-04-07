import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const updateUserPreferences = async (userId, selectedTags) => {
    try {
      // Referentie naar het document van de gebruiker in de collectie "userPreferences"
      const userPrefRef = doc(db, "userPreferences", userId);
  
      // Verwijder de oude voorkeuren uit de database
      await deleteDoc(userPrefRef);
  
      // Voorkeuren van de gebruiker bijwerken in de database
      await setDoc(userPrefRef, {
        userId: userId,
        selectedTags: selectedTags
      });
  
      console.log("Gebruikersvoorkeuren succesvol bijgewerkt!");
    } catch (error) {
      console.error("Fout bij het bijwerken van gebruikersvoorkeuren:", error);
    }
  };
  
export default updateUserPreferences;
