import Card from './components/Card';
import React from 'react'


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-300">
      <div className="flex flex-wrap justify-center">
    <Card name='Ali Akbar' rollno={3947} day='Monday' imageSrc="/public/image/p_p.jpeg"/><br />
    <Card name='Iftikhar Ahmed' rollno={3950} day='Wednesday' imageSrc="/public/image/p_p.jpeg"/><br />
    <Card name='Ahmed Raza' rollno={3960} day='Monday' imageSrc="/public/image/p_p.jpeg"/><br />
    <Card name='Imran Khan' rollno={3972} day='Friday' imageSrc="/public/image/p_p.jpeg"/><br />
    </div>
    </div>
  );
}
