// src/components/TechStackList.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const TechStackList = () => {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    const fetchStacks = async () => {
      const stackRef = collection(db, 'techStack');
      const snapshot = await getDocs(stackRef);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStacks(data);
    };

    fetchStacks();
  }, []);

  return (
    <div>
      <h2>Our Tech Stack</h2>
      <ul>
        {stacks.map(stack =>
          stack.stack?.map((item, index) => (
            <li key={`${stack.id}-${index}`}>{item}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TechStackList;
