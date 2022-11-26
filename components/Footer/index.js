import React from "react";
import Link from 'next/link';
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineOneToOne } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pt-0">
      <div className="mx-auto border-t mt-5 border-black">
        <div className="grid grid-cols-2 cw:grid-cols-1 px-20">
          <div className="pr-20 pt-7 cw:text-xl flex justify-between text-sm">
            <a className="">855-577-1375</a>
            <a className="">hello@squareshot.com</a>
          </div>
          <div className="flex justify-start cw:border-none border-l cw:pl-0 pl-10 border-black">
            <div className="pt-5 flex justify-start">
              <Link href="" passHref><div className="border border-black w-10 h-10 flex justify-center items-center hover:bg-slate-200 cursor-pointer"><AiFillYoutube size={24} /></div></Link>
              <Link href="" passHref><div className="border border-black w-10 h-10 flex justify-center items-center ml-8 hover:bg-slate-200 cursor-pointer"><AiOutlineInstagram size={24} /></div></Link>
              <Link href="" passHref><div className="border border-black w-10 h-10 flex justify-center items-center ml-8 hover:bg-slate-200 cursor-pointer"><AiOutlineLinkedin size={24} /></div></Link>
              <Link href="" passHref><div className="border border-black w-10 h-10 flex justify-center items-center ml-8 hover:bg-slate-200 cursor-pointer"><AiOutlineTwitter size={24} /></div></Link>
              <Link href="" passHref><div className="border border-black w-10 h-10 flex justify-center items-center ml-8 hover:bg-slate-200 cursor-pointer"><AiFillFacebook size={24} /></div></Link>
              <Link href="" passHref><div className="border border-black w-10 h-10 flex justify-center items-center ml-8 hover:bg-slate-200 cursor-pointer"><AiOutlineOneToOne size={24} /></div></Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 cw:grid-cols-1 px-20">
          <div className="justify-center">
            <div className="pt-10">
              <p className="font-bold text-xl">SUBSCRIBE TO OUR EMAILS</p>
              <p className="text-sm cw:text-lg pt-4">Each week we send out e-commerce and content production content: guides, industry news, and our podcast. Hundreds of founders and creatives subscribe to it.</p>
            </div>
            <div className="pt-8 flex cw:block justify-start pr-5">
              <input className="pl-4 text-xs cw:h-14 cw:text-lg border border-slate-400 w-full focus:outline-0" placeholder="Enter your email" />
              <Link href="" passHref><div className="bg-black font-bold cw:mt-4 cw:text-center cw:text-xl p-2.5 px-3 text-xs text-white cursor-default hover:bg-slate-300 hover:text-black">
                <p className="">SUBSCRIBE</p></div></Link>
            </div>
          </div>
          <div className="flex justify-start pl-10 cw:pl-0 cw:border-none border-l border-black">
            <div>
              <p className="text-sm text-slate-400 font-extrabold mt-12">SERVICES</p>
              <div className="pt-4  cw:text-lg text-xs hover:cursor-pointer">
                <a className="hover:underline">Standard</a><br />
                <a className="hover:underline">Paired</a><br />
                <a className="hover:underline">Jewelry & Watches</a><br />
                <a className="hover:underline">Ghost mannequin</a><br />
                <a className="hover:underline">Group</a><br />
                <a className="hover:underline">Hand model</a><br />
                <a className="hover:underline">Latest</a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 cw:grid-cols-1 px-20">
          <div className="justify-center pt-12">
            <div className="flex justify-start">
              <div>
                <div className="text-sm text-slate-400 font-extrabold">LEARN</div>
                <div className="pt-4  cw:text-lg text-xs hover:cursor-pointer">
                  <a className="hover:underline">About us</a><br />
                  <a className="hover:underline">Blog</a><br />
                  <a className="hover:underline">Squaretalk podcast</a><br />
                  <a className="hover:underline">Guides</a><br />
                  <a className="hover:underline">Glossary</a>
                </div>
              </div>
              <div className="pl-24">
                <div className="text-sm text-slate-400 font-extrabold">MENU</div>
                <div className="pt-4 cw:text-lg text-xs hover:cursor-pointer">
                  <a className="hover:underline">How it works</a><br />
                  <a className="hover:underline">Portfolio</a><br />
                  <a className="hover:underline">Pricing</a><br />
                  <a className="hover:underline">Product photography</a><br />
                  <a className="hover:underline">Category</a>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end border-l cw:border-none pt-12 border-black">
            <div className="text-end cw:text-start">
              <p className="text-sm text-slate-400 font-extrabold">CITIES</p>
              <div className="inline-flex cw:text-lg	text-xs text-end cw:text-start pt-6">
                <div className="hover:cursor-pointer mr-7">
                  <a className="hover:underline">Product Photo, Los Angeles</a><br />
                  <a className="hover:underline">Product Photo, Denver</a><br />
                  <a className="hover:underline">Product Photo, New York</a><br />
                  <a className="hover:underline">Product Photo, Chicago</a><br />
                  <a className="hover:underline">Product Photo, San Francisco</a><br />
                  <a className="hover:underline">Product Photo, San Diego</a>
                </div>
                <div className="cursor-pointer">
                  <a className="hover:underline">Product Photo, Seattle</a><br />
                  <a className="hover:underline">Product Photo, Dallas</a><br />
                  <a className="hover:underline">Product Photo, Indianapolis</a><br />
                  <a className="hover:underline">Product Photo, Miami</a><br />
                  <a className="hover:underline">Product Photo, Houston</a><br />
                  <a className="hover:underline">Product Photo, Austin</a>
                </div>
              </div>
            </div>
            <div className="cw:text-start text-end">
              <p className="text-sm text-slate-400 font-extrabold mt-8">OTHER</p>
              <div className="inline-flex	cw:text-lg text-xs cw:text-start text-end pt-6">
                <div className="hover:cursor-pointer mr-7">
                  <a className="hover:underline">Accessories</a><br />
                  <a className="hover:underline">Clothing New York</a><br />
                  <a className="hover:underline">Product Photograpy</a><br />
                  <a className="hover:underline">Bags product photo</a><br />
                  <a className="hover:underline">Flat Lay Product Photography</a><br />
                  <a className="hover:underline">Beauty Product Photography</a><br />
                  <a className="hover:underline">Product Photograpy Services</a><br />
                  <a className="hover:underline">Jewelry Product Photography</a><br />
                  <a className="hover:underline">Clothing Product Photography</a><br />
                  <a className="hover:underline">Footwear product photography</a><br />
                  <a className="hover:underline">Home goods product photography</a>
                </div>
                <div className="cursor-pointer">
                  <a className="hover:underline">Clothing Product Photography in Los Angeles</a><br />
                  <a className="hover:underline"> Ghost Mannequin Product Photography in Los Angeles</a><br />
                  <a className="hover:underline"> Flat Lay Product Photography in Los Angeles</a><br />
                  <a className="hover:underline"> Ghost Mannequin Product Photography in New York</a><br />
                  <a className="hover:underline"> Flat Lay Product Photography in New York</a><br />
                  <a className="hover:underline"> Beauty Product Photography in New York</a><br />
                  <a className="hover:underline">  E-commerce product photography</a><br />
                  <a className="hover:underline"> Shopify product photography</a><br />
                  <a className="hover:underline"> Product photography for creative director</a><br />
                  <a className="hover:underline">  Product photography for Operation Manager</a><br />
                  <a className="hover:underline"> Product photography for Business</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 cw:grid-cols-1 px-20">
          <div className="justify-center cw:text-lg py-7 text-sm text-slate-400 pt-8">© 2022 Sadvent Inc. All Rights Reserved.
          </div>
          <div className="justify-center cw:border-none text-center cw:text-start cw:text-lg p-7 text-sm text-slate-400 border-l border-black">
            <a href="">Policy</a>
            <a href="" className="ml-10">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;