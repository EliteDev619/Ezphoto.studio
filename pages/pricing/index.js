import React, { useEffect, useState } from "react";
import ImageType from '../../components/ImageType';
import Switch from "react-switch";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link'

export default function PricePage() {

  const [bPayHandle, setBPayHandle] = useState(false);
  const [membership, setMemebership] = useState("")
  const [imageCount, setImageCount] = useState(0)
  const [imagePrice, setImagePrice] = useState("")
  const [imageTotal, setImageTotal] = useState(0)
  const [selected, setSelected] = useState(0)
  const [imageVal, setImageVal] = useState(new Array(6).fill(0))
  const [isActive, setIsActive] = useState(new Array(6).fill(false))
  const [priceList, setPriceList] = useState([])
  const [isSavingHovering, setIsSavingHovering] = useState(false);

  
  const planData = [
    {
      title: "PAY AS YOU GO",
      desc: "Free of charge"
    },
    {
      title: "GROWTH",
      desc: !bPayHandle ? "$350 every 6 mo." : "$500 per year"
    },
    {
      title: "ENTERPRISE",
      desc: !bPayHandle ? "$1400 every 6 mo." : "$2000 per year"
    }
  ]

  const accordionData = [
    {
      title: 'Standard',
      content: `Desired Number of images`,
      desc: `Single product in an image (apparel, accessories, etc).`,
      url: `https://www.gstatic.com/webp/gallery3/1.png`
    },
    {
      title: 'Paired',
      content: `Desired Number of images`,
      desc: `Product consisting of 2 pieces (bottle + box, shoes, etc).`,
      url: `https://www.gstatic.com/webp/gallery3/2.png`
    },
    {
      title: 'Group',
      content: `Desired Number of images`,
      desc: `The image features 3 or more objects.`,
      url: `https://www.gstatic.com/webp/gallery3/2.png`
    },
    {
      title: 'Ghost mannequin',
      content: `Desired Number of images`,
      desc: `The image with a ghost mannequin effect.`,
      url: `https://www.gstatic.com/webp/gallery3/4.png`
    },
    {
      title: 'Jewelry / Watches',
      content: `Desired Number of images`,
      desc: `Highly detailed images featuring reflective object.`,
      url: `https://www.gstatic.com/webp/gallery3/5.png`
    },
    {
      title: 'Hand model',
      content: `Desired Number of images`,
      desc: `Hand model photos give your images a hand touch.`,
      url: `https://www.gstatic.com/webp/gallery3/4.png`
    }
  ];

  const SelezionaTab = (tabId = null) => {
    setSelected(tabId)
  }

  const payHandler = () => {
    setBPayHandle(!bPayHandle)
  }

  const handleSaveMouseOver = () => {
    setIsSavingHovering(true);
  };

  const handleSaveMouseOut = () => {
    setIsSavingHovering(false);
  };

  useEffect(() => {
    if (selected == 0) setMemebership("Free of charge")
    else if (selected == 1 && !bPayHandle) setMemebership("$350 every 6 months")
    else if (selected == 1 && bPayHandle) setMemebership("$500 per year")
    else if (selected == 2 && !bPayHandle) setMemebership("$1400 every 6 months")
    else if (selected == 2 && bPayHandle) setMemebership("$2000 per year")

    if (selected == 0) {
      var tmpPrice = [50, 75, 150, 75, 100, 150];
      setPriceList(tmpPrice)
    }
    else if (selected == 1) {
      var tmpPrice = [40, 60, 120, 60, 80, 120];
      setPriceList(tmpPrice)
    }
    else if (selected == 2) {
      var tmpPrice = [35, 53, 105, 53, 70, 105];
      setPriceList(tmpPrice)
    }
  }, [selected, bPayHandle])

  useEffect(() => {
    var tmpCount = 0;
    var tmpTotal = 0;
    var tmpPrice = [];
    for (var i = 0; i < 6; i++) {
      tmpCount += imageVal[i]
      tmpTotal += imageVal[i] * priceList[i]
      if (isActive[i]) {
        tmpPrice.push(priceList[i])
      }
    }

    var max = Math.max(...tmpPrice)
    var min = Math.min(...tmpPrice)

    if (tmpPrice.length == 0) setImagePrice("$0")
    else if (tmpPrice.length == 1) setImagePrice("$" + max)
    else setImagePrice("$" + min + " - $" + max)

    setImageCount(tmpCount)
    setImageTotal(tmpTotal)

  }, [imageVal, priceList])


  const Accordion = ({ title, content, desc, url, index }) => {

    const plusVal = (index) => {
      let copy = [...imageVal];
      copy[index]++;
      setImageVal(copy);
    }

    const minusVal = () => {
      if (imageVal[index] == 0) return;
      let copy = [...imageVal];
      copy[index]--;
      setImageVal(copy);
    }

    const setActive = (index) => {
      if (isActive[index]) {
        let copy = [...imageVal];
        copy[index] = 0;
        setImageVal(copy);
      }
      else {
        let copy = [...imageVal];
        copy[index] = 1;
        setImageVal(copy);
      }
      setIsActive({ ...isActive, [index]: !isActive[index] })
    }

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const ImageDetail = () => {
      return (
        <div className="image-detail">
          <p className="image-detail-title">{title}</p>
          <p className="image-detail-desc">{desc}</p>
          <img className="image-detail-img" src={url} alt="" />
        </div>
      );
    };

    return (
      <div className="accordion-item" key={index} id={"accor-" + index}>
        <div className={"accordion-title " + (isActive[index] ? "activeAccor" : "noactiveAccor")} onClick={() => setActive(index)}>
          <div className="accordion-header">
            <div>
              <label className="container">
                <input type="checkbox" checked={isActive[index]} onChange={() => setActive(index)} />
                <span className="checkmark"></span>
              </label></div>

            <p className="plan-desc">{title}</p>
          </div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><AiOutlineInfoCircle size={25} className="saving-info" />{isHovering && <ImageDetail />}</div>

        </div>
        {isActive[index] &&
          <div className="accordion-content">
            <p className="plan-desc">{content}</p>
            <div className="btnGroup">
              <button className="btnMinus" onClick={() => minusVal(index)}>-</button>
              <button className="btnValue">{imageVal[index]}</button>
              <button className="btnPlus" onClick={() => plusVal(index)}>+</button>
            </div>
          </div>
        }
      </div>
    );
  };

  const Plan = ({ title, desc, index }) => {
    return (
      <div className={selected == index ? "plan-element paddingRight plan-selected" : "plan-element paddingRight"} key={index} id={"plan-" + index} onClick={() => SelezionaTab(index)}>
        <p className="text-1xl font-bold">{title}</p>
        <p className="text-1xl font-bold plan-desc">{desc}</p>
      </div>
    );
  };

  const SavingDetail = () => {
    return (
      <div className="save-detail">
        <p className="save-detail-title">Membership plan gives you a lower price per image. It's beneficial if you plan to order 50+ standard images throughout the year. “You save” is a difference between a full price per image and members only pricing including the cost of the membership itself.</p>
      </div>
    );
  };

  return (
    <div className="calculator">
      <div className="text-6xl font-bold">CALCULATOR</div>
      <div className="gridCalc">
        <div>
          <div className="plan">
            <div className="flex-space">
              <p className="text-2xl font-bold">SELECT A PLAN</p>
              <div className="flex-space">
                <p className="pay" style={{ paddingRight: 10 }}>Pay yearly (Save 20%)</p>
                <Switch onChange={payHandler} checked={bPayHandle} checkedIcon={false} uncheckedIcon={false} onColor="#000" activeBoxShadow="#fff" />
              </div>
            </div>
            <div className="plan-group">
              {planData.map(({ title, desc }, index) => (
                <Plan title={title} desc={desc} index={index} key={index} />
              ))}
            </div>
          </div>
          <div className="imagetypes">
            <p className="text-2xl font-bold">SELECT IMAGE TYPES</p>
            <div className="imagetypes-group">
              {accordionData.map(({ title, content, desc, url }, index) => (
                <Accordion title={title} content={content} desc={desc} url={url} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="text-2xl font-bold">SUMMARY</div>
          <div className="summary-content">
            <div className="summary-detail">
              <div>
                <p>Number of images:</p>
                <p>Price per images:</p>
                <p>Images subtotal:</p>
                <p className="membership">Membership plan:</p>
              </div>
              <div className="summary-detail-val">
                <p>{imageCount}</p>
                <p>{imagePrice}</p>
                <p>${imageTotal}</p>
                <p className="membership">{membership}</p>
              </div>
            </div>
            <div className="summary-saving">
              <div className="summary-saving-info" onMouseOver={handleSaveMouseOver} onMouseOut={handleSaveMouseOut}> Savings: <AiOutlineInfoCircle size={25} className="saving-info" />{isSavingHovering && <SavingDetail />}</div>
              <div>$0</div>
            </div>
            <div className="summary-total">
              <div>TOTAL</div>
              <div>${imageTotal}</div>
            </div>
          </div>
          <div className="summary-btn">
            <button className="btnBook"><Link href="/book"><p className="book-desc">BOOK A SHOOT</p></Link> <AiOutlineArrowRight /></button> 
          </div>
        </div>
      </div>
    </div>
  )
}
