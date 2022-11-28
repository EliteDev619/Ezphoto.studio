import React from "react";
import Image from 'next/image';
import Section1BG from '../../src/img/peakpx.jpg';

export default function AboutPage() {
  return (
    <div className="grid grid-cols-2 cw:grid-cols-1 px-20 pt-10 cw:px-5">
      <div className="flex cw:pb-10">
        <div className="text-3xl py-32">
          Ezphoto.studio is a team of professional product photographers specializing in ecommerce products.
        </div>
      </div>
      <div className="flex">
        <Image src={Section1BG} className="block w-screen" objectFit='cover' width={600} height={600} objectPosition='center' alt="Meta Legends" />
      </div>
    </div>
  )
}