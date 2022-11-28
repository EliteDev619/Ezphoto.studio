import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gallery from 'react-grid-gallery';

//Styles
import styles from '../styles/Home.module.css';
import "react-responsive-modal/styles.css";

//Resources
import Logo from '../src/img/logo.png';
import Section1BG from '../src/img/peakpx.jpg';


export default function Home() {

  const [images, setImages] = useState(
    [
      {
        src: "https://images.squarespace-cdn.com/content/v1/61e85bacb041a27ebc0d25d3/8f32ab8b-37ab-495a-9fac-d2320c1ad29b/Hawx-s1.jpg?format=500w",
        thumbnail: "https://images.squarespace-cdn.com/content/v1/61e85bacb041a27ebc0d25d3/8f32ab8b-37ab-495a-9fac-d2320c1ad29b/Hawx-s1.jpg?format=500w",
        thumbnailWidth: 600,
        thumbnailHeight: 600,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
        thumbnailWidth: 600,
        thumbnailHeight: 600,
        caption: "37H (gratispgraphy.com)"
      },
      {
        src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        thumbnailWidth: 390,
        thumbnailHeight: 450,
        caption: "Orange Macro (Tom Eversley - isorepublic.com)",
      },
      {
        src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 472,
        thumbnailHeight: 472,
        caption: "201H (gratisography.com)"
      },
      {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 472,
        thumbnailHeight: 472,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
      },
      {
        src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
        thumbnailWidth: 472,
        thumbnailHeight: 472,
        caption: "Man on BMX (Tom Eversley - isorepublic.com)"
      },
      {
        src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
        thumbnailWidth: 472,
        thumbnailHeight: 472,
        caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
      },
      {
        src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
        thumbnailWidth: 472,
        thumbnailHeight: 472,
        caption: "A photo by 贝莉儿 NG. (unsplash.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 472,
        thumbnailHeight: 472,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 720,
        thumbnailHeight: 212
      }
    ]);
  const [toggle, setToggle] = useState(false);
  const [dataAmount, setDataAmount] = useState(0);

  const changeToggle = () => {
    setToggle(!toggle);
  }

  const notifyUnAvailable = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="mx-auto relative bg-white" >
      <Head>
        <title>BOTB.ONE</title>
      </Head>
      <div className="h-96 flex justify-center relative bg-gray-300">
        <Image src={Section1BG} className="block w-screen" objectFit='cover' objectPosition='center' alt="Meta Legends" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-medium">
          PRODUCT PHOTOGRAPHY PROFESSIONALS
        </div>
      </div>
      <div className="h-full px-16 grid x-full">
        <Gallery images={images} backdropClosesModal={true} enableLightbox={true} rowHeight={350} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div >
  )
}
