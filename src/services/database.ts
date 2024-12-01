import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  DocumentData
} from 'firebase/firestore';

export const dbService = {
  // Create a new document
  create: async (collectionName: string, id: string, data: DocumentData) => {
    return setDoc(doc(db, collectionName, id), data);
  },

  // Read a document
  get: async (collectionName: string, id: string) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  },

  // Update a document
  update: async (collectionName: string, id: string, data: Partial<DocumentData>) => {
    return updateDoc(doc(db, collectionName, id), data);
  },

  // Delete a document
  delete: async (collectionName: string, id: string) => {
    return deleteDoc(doc(db, collectionName, id));
  },

  // Query documents
  query: async (collectionName: string, field: string, operator: any, value: any) => {
    const q = query(collection(db, collectionName), where(field, operator, value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
};
