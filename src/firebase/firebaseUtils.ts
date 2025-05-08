import { db } from './firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  CollectionReference,
  DocumentReference,
} from 'firebase/firestore';

export async function fetchCollection<T>(
  collectionName: string
): Promise<(T & { id: string })[]> {
  const collectionRef = collection(
    db,
    collectionName
  ) as CollectionReference<T>;
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function fetchDocument<T>(
  collectionName: string,
  documentId: string
): Promise<(T & { id: string }) | null> {
  const docRef = doc(db, collectionName, documentId) as DocumentReference<T>;
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  }

  return null;
}
