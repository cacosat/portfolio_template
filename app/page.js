'use client'

import React from "react";
import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  const cardsConfig = {
    heroCard: {
      type: 'hero',
      primaryBg: '#121212',
      title: 'Placeholder title',
      fecha: '00/00/0000',
      descripcion: 'Placeholder description',
    },
    projectCard: {
      type: 'project',
      link: 'cacosat.com',
      primaryBg: '#121212', // Next Image component from assets
      title: 'Placeholder title',
      fecha: '00/00/0000',
      descripcion: 'Placeholder description',
    },
    aboutCard: {
      type: 'about',
      primaryBg: '#121212', // Next Image component with src from assets
      title: 'Placeholder title',
      fecha: '00/00/0000',
      descripcion: 'Placeholder description',

    },
    contactCard: {
      type: 'form',
      primaryBg: '#121212', // Next Image component with src from assets
      title: 'Title placeholder',
      fecha: '00/00/0000',

    }, 
    footerCard: {
      type: 'footer',
      primaryBg: '#121212',
      title: 'Placeholder title'
    },
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid grid-cols-4 grid-rows-9 gap-4 m-2 sm:m-8 max-w-[1280px]'>
        <Card config={cardsConfig.heroCard} className='col-span-4 xl:row-span-3 lg:row-span-2 sm:row-span-2 row-span-3 ' />
        <Card config={cardsConfig.projectCard} className='lg:col-span-2 lg:row-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCard} className='lg:col-span-2 lg:row-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCard} className='lg:row-span-3 lg:col-span-1 sm:col-span-1 sm:row-span-2 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCard} className=' lg:col-span-1 lg:row-span-2 sm:col-span-3 sm:row-span-1 col-span-2' />
        <Card config={cardsConfig.projectCard} className='lg:col-span-2 lg:row-span-2 sm:col-span-3 sm:row-span-1 col-span-2' />
        <Card config={cardsConfig.projectCard} className='lg:col-span-2 lg:row-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCard} className='lg:row-span-1 lg:col-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.aboutCard} className='lg:row-span-2 lg:col-span-2  sm:col-span-2 col-span-4 sm:row-span-2 row-span-3' />
        <Card config={cardsConfig.contactCard} className='lg:row-span-2 lg:col-span-2 sm:col-span-2 col-span-4 sm:row-span-2 row-span-3' />
        <Card config={cardsConfig.footerCard} className='col-span-4' />
      </div>
    </main>
  );
}
