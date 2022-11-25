import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";

export default function BookPage() {

  const [imgType, setImageType] = useState([])
  const [turnList, setTurnList] = useState(0)
  const [imageSpecList, setImageSpecList] = useState(0)
  const [membershipList, setMembershipList] = useState(0)
  const [bookProgress, setBookProgress] = useState(0)
  const [nextValidation, setNextValidation] = useState(true)
  const [projectDesc, setProjectDesc] = useState("")
  const [imgNum, setImgNum] = useState(0)
  const [city, setCity] = useState('')
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const fistImageTypeData = [
    'Standard product photo',
    'Paired product photo',
    'Group product photo',
    'Ghost mannequin photo',
    'Jewelry / Watches photo',
    'Hand model photo',
  ];

  const firstTurnData = [
    {
      icon: 'A',
      desc: 'STANDARD (free) | 8 business days* since we receive the products and the payment)'
    },
    {
      icon: 'B',
      desc: 'RUSH (+50% fee) | 4 business days* since we receive the products and the payment)'
    }
  ]

  const secondImageData = [
    {
      icon: 'A',
      desc: 'OPTIMIZED FOR MARKETPLACE | Free (Size: 1,024x1,024 px; Shadow: None Format: JP; Background: White; Margins: 0%).',
    },
    {
      icon: 'B',
      desc: 'OPTIMIZED FOR MARKETPLACE | Free (Size: 1,024x1,024 px; Shadow: None Format: JP; Background: White; Margins: 0%).',
    },
    {
      icon: 'C',
      desc: 'OPTIMIZED FOR MARKETPLACE | Free (Size: 1,024x1,024 px; Shadow: None Format: JP; Background: White; Margins: 0%).',
    },
  ]

  const finalMembershipData = [
    {
      icon: 'A',
      desc: 'PAY AS YOU GO | Free (No discount on images. Minimum order is $300)',
    },
    {
      icon: 'B',
      desc: 'GROWTH | +$500 yearly (20% discount on all images. No minimums)',
    },
    {
      icon: 'C',
      desc: 'ENTERPRISE | +$2,000 yearly (30% discount on all images. No minimums)',
    },
  ]

  const secondTips = [
    '- Let us know what product you have. And how many?',
    '- Specify how you want it to be shot.',
    '- Add shooting directions or special instructions (if any).',
    '- Tell us a little bit about your brand and values.',
  ]

  const thirdTips = [
    '- There can be references for styling, layout, angles, and shadows.',
    '- You can provide the references of similar products you like.',
    '- Want to mimic the images you already use? Provide them.',
    '- Providing references will remove uncertainty. The more, the better.',
  ]

  const CheckboxList = ({ item, index }) => {
    return (
      <div className="px-0 py-2 flex items-center" key={index}>
        <input
          className="w-5 h-5 cursor-pointer rounded-3xl accent-gray-900"
          type="checkbox"
          onChange={() => handleImageType(index)}
          id={"checkbox-" + index}
          checked={imgType.indexOf(index) != -1 ? true : false}
        />
        <label className="cursor-pointer text-sm ml-2.5" htmlFor={"checkbox-" + index}> {item}</label>
      </div>
    )
  }

  const handleImageType = (param) => {
    const i = imgType.indexOf(param);
    let temp = imgType;
    if (i !== -1) {
      temp.splice(i, 1);
      setImageType([...temp]);
    } else {
      temp.push(param);
      setImageType([...temp]);
    }
  }

  const TurnAroundList = ({ handleSet, icon, desc, index, active }) => {
    return (
      <div key={index}>
        <div className="pb-2.5 relative">
          <div className={
            (active ? 'book-first-turnaround-active' : '') +
            " book-first-turnaround"
          } onClick={() => handleSet(index)}>
            <div className="w-full flex">
              <div className="icon">{icon}</div>
              <div className="pl-2.5 text-bold leading-5">{desc}</div>
            </div>
          </div>
        </div>
      </div >
    )
  }

  const BookNextBtn = ({ btnText }) => {
    return (
      <button className="flex justify-center items-center py-1.5 px-3 rounded bg-black text-white	hover:bg-gray-700 hover:opacity-75" onClick={() => handleNextBtn()}>
        <p className="pr-2">{btnText}</p>
        <AiOutlineArrowRight />
      </button>
    )
  }

  const BookBackBtn = () => {
    return (
      <div className="mb-5">
        <button className="inline-flex items-center justify-center text-sm"
          onClick={() => handlebackBtn()}>
          <AiOutlineArrowLeft />
          <p className="ml-3">Back</p>
        </button>
      </div>
    )
  }

  const ValidationNotific = () => {
    return (
      <>
        <p className="text-red-500 text-xs italic">Please enter a value</p>
      </>
    )
  }

  const handlebackBtn = () => {
    setBookProgress(--bookProgress);
  }

  const handleNextBtn = () => {
    if (imgType.length == 0) {
      setNextValidation(false)
      return;
    }
    if (bookProgress == 3)
      return;

    // console.log(document.getElementById("projectDesc").innertext);
    setNextValidation(true)
    setBookProgress(++bookProgress);
  }

  // useEffect(() => {
  //   console.log(document.getElementById("projectDesc"));
  //   document.getElementById("projectDesc").value = projectDesc
  // }, [projectDesc])


  const FirstStep = () => {
    return (
      <form className="w-full">
        <p className="text-4xl font-bold pb-10 m-0">BOOK A SHOOT</p>
        <div className="">
          <div className="flex">
            <p className="text-xl font-extrabold pb-2.5">SELECT IMAGE TYPES</p>
            <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-2.5 bg-slate-200 cursor-pointer">*</p>
          </div>
          {fistImageTypeData.map((item, index) => (
            <CheckboxList item={item} index={index} key={index} />
          ))}
          {(!nextValidation ? <ValidationNotific /> : '')}
          <p className="text-sm italic pt-5">*You can choose multiple.</p>
          <div><hr className="my-7"></hr></div>
          <div className="flex">
            <p className="text-2xl font-bold py-2.5">TURNAROUND TIME </p>
            <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-5 bg-slate-200 cursor-pointer">*</p>
          </div>
          {firstTurnData.map(({ icon, desc }, index) => (
            <TurnAroundList
              handleSet={setTurnList}
              icon={icon}
              desc={desc}
              index={index}
              key={index}
              active={turnList == index}
            />
          ))}
          <p className="text-sm italic pt-5">*Applies for orders up to 50 standard product images.</p>
          <div><hr className="my-7"></hr></div>
          <BookNextBtn btnText={'Next Step'} />
        </div>
      </form>
    );
  }

  const SecondStep = () => {
    return (
      <div className="w-full">
        <BookBackBtn></BookBackBtn>
        <p className="text-2xl font-extrabold py-3 m-0">ADD PROJECT DETAILS</p>
        <div className="flex">
          <p className="text-xl font-extrabold pt-2.5 pb-2.5">DESCRIBE THE PROJECT</p>
          <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-5 bg-slate-200 cursor-pointer">*</p>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 w-full">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal
                text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none auto-focus
              "
              id="projectDesc"
              rows="3"
              placeholder="Your message"
              value={projectDesc}
              onChange={e => setProjectDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-2">
          <div className="text-lg2 font-extrabold">Tips</div>
          {secondTips.map((item, index) => (
            <div className="text-md" key={index}>{item}</div>
          ))}
        </div>
        <div>
          <hr className="my-7"></hr>
        </div>
        <div className="flex">
          <p className="text-xl font-extrabold pb-2.5">NUMBER OF IMAGES NEEDED</p>
          <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-2.5 bg-slate-200 cursor-pointer">*</p>
        </div>
        <div className="mb-6">
          <input type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-80 px-2.5 m-0 h-9"
            value={imgNum}
            onChange={e => setImgNum(e.target.value)}
            placeholder="13 images (10 standard, 3 group)" />
        </div>
        {(!nextValidation ? <ValidationNotific /> : '')}
        <div>
          <hr className="my-3"></hr>
        </div>
        <div className="flex">
          <p className="text-xl font-extrabold py-5">IMAGE SPECS</p>
          <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-7 bg-slate-200 cursor-pointer">*</p>
        </div>
        {secondImageData.map(({ icon, desc }, index) => (
          <TurnAroundList
            handleSet={setImageSpecList}
            icon={icon}
            desc={desc}
            index={index}
            key={index}
            active={imageSpecList == index}
          />
        ))}
        <div>
          <hr className="my-7"></hr>
        </div>
        <BookNextBtn btnText={'Next Step'} />
      </div>
    )
  }

  const ThirdStep = () => {
    return (
      <form className="w-full">
        <BookBackBtn></BookBackBtn>
        <p className="text-2xl font-extrabold py-3 m-0">ADD PROJECT DETAILS</p>
        <p className="text-xl font-extrabold pt-2.5 pb-2.5">DESCRIBE THE PROJECT</p>
        <div className="">
          <label
            className="flex justify-center items-center	 w-full h-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:shadow-md focus:outline-none">
            <div className="hover:bg-gray-200 p-2.5 rounded" >
              <span className="flex items-center space-x-2">
                <AiOutlineUpload />
                <span className="font-medium">
                  Click to choose a file or drag here
                </span>
              </span>
            </div>
            <input type="file" name="file_upload" className="hidden" />
          </label>
        </div>
        <div className="mt-5">
          <div className="text-lg2 font-extrabold">Tips</div>
          {thirdTips.map((item, index) => (
            <div className="text-md" key={index}>{item}</div>
          ))}
        </div>
        <div>
          <hr className="my-7"></hr>
        </div>
        <BookNextBtn btnText={'Next Step'} />
      </form>
    )
  }

  const FianlStep = () => {
    return (
      <form className="w-full">
        <BookBackBtn></BookBackBtn>
        <p className="text-2xl font-extrabold py-3 m-0">WE'RE ALMOST DONE...</p>
        <div className="flex">
          <p className="text-xl font-extrabold pt-2.5 pb-2.5">WHICH CITY YOU'RE IN?</p>
          <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-5 bg-slate-200 cursor-pointer">*</p>
        </div>
        <div className="mb-4">
          <input className="md:w-2/5 shadow appearance-none border rounded sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="E.g. New York, NY" required />
        </div>
        <p className="text-5sm font-bold mt-8">Why do we ask your location?</p>
        <p className="text-sm">We have multiple studios in the U.S. We will ask you to ship or drop off the products to the closest one to optimize delivery speed and costs.</p>
        <div><hr className="my-5"></hr></div>
        <div className="flex">
          <p className="text-xl font-extrabold pt-2.5 pb-2.5">CONTACT DETAILS</p>
          <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-5 bg-slate-200 cursor-pointer">*</p>
        </div>
        <div className="mb-2">
          <input className="md:w-2/5	shadow appearance-none border rounded sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Full name" required />
        </div>
        <div className="mb-2">
          <input className="md:w-2/5	shadow appearance-none border rounded sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" required />
        </div>
        <div className="mb-2">
          <input className="md:w-2/5	shadow appearance-none border rounded sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone" required />
        </div>
        <div><hr className="my-5"></hr></div>
        <div className="flex">
          <p className="text-xl font-extrabold py-3">INTERESTED IN MEMBERSHIP?</p>
          <p className="w-4 h-4 rounded-full flex relative justify-center ml-1 mt-5 bg-slate-200 cursor-pointer">*</p>
        </div>
        {finalMembershipData.map(({ icon, desc }, index) => (
          <TurnAroundList
            handleSet={setMembershipList}
            icon={icon}
            desc={desc}
            index={index}
            key={index}
            active={membershipList == index}
          />
        ))}
        <div>
          <hr className="my-7"></hr>
        </div>
        <BookNextBtn btnText={'SEND REQUEST'} />
      </form>
    )
  }

  const renderBookPage = () => {
    switch (bookProgress) {
      case 0: return <FirstStep />;
      case 1: return <SecondStep />;
      case 2: return <ThirdStep />;
      case 3: return <FianlStep />;
      default: return <FirstStep />;
    }
  }

  return (
    <div>
      <div className="bookPage">
        <img className="mt-12 w-24" src='https://storage.googleapis.com/tally-block-assets/ed124aec-c16b-489e-8bb3-4ec9d7da2dd7/Logo.jpeg' alt="Form logo" />
      </div>
      <div className="bookPage my-12">
        {renderBookPage()}
      </div>
    </div>
  )
}