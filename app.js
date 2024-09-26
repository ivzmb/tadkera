// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkH8Ru5eKdn-VZ1zXZHJBEihSD4ePg6yU",
  authDomain: "tadkera-c9a49.firebaseapp.com",
  projectId: "tadkera-c9a49",
  storageBucket: "tadkera-c9a49.appspot.com",
  messagingSenderId: "867614083091",
  appId: "1:867614083091:web:bb9df1775642c1ea5f57e6",
  measurementId: "G-0G8YJEHCSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// التعامل مع إرسال الذكر
document.getElementById('submitBtn').addEventListener('click', async () => {
    const zekr = document.getElementById('zekrInput').value;

    if (zekr) {
        try {
            await addDoc(collection(db, "azkar"), {
                text: zekr,
                timestamp: serverTimestamp()
            });
            document.getElementById('status').textContent = 'تم إرسال الذكر بنجاح!';
            document.getElementById('zekrInput').value = ''; // تفريغ الحقل بعد الإرسال
        } catch (error) {
            document.getElementById('status').textContent = 'حدث خطأ في الإرسال!';
        }
    } else {
        document.getElementById('status').textContent = 'الرجاء كتابة الذكر';
    }
});