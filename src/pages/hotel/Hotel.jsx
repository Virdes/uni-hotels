import "./hotel.css";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleXmark, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/329781966.jpg?k=6333a3b687e607728cd3f5fd1676bd25ba4dcd3fd81c70588b6c5c757d6cb545&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249050106.jpg?k=6a294fdf3216626c38d9f5b1f7d08a3168eb9b36455df104623b9097419f1586&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249050147.jpg?k=8b30f84167a15be76b2360adcbb354783bbb467d2d05a1157dbda759c387d364&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249049967.jpg?k=2731c4f3edc3efb8daaa91ea5ab8812868cd7fafbff5db375a872376e2bd6490&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249049938.jpg?k=46dae4bcdfd9a8038ff5e5355945a7769dc1774b189e12cc982ff983921c84e9&o=&hp=1"
        },
        {
            src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/220014824.jpg?k=ebc1780af159cd6f2984050e6100b4007da984018c4d260a97181915ec7ead3c&o=&hp=1"
        },
    ];


    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
        }

        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
                <div className="sliderWrapper">
                    <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"onClick={()=>handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">
                        Reserve or Book Now!
                    </button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                            This accommodation is a 3-minute walk from the beach. Situated 350 meters from Melipal Beach in San Carlos de Bariloche, 
                            Valhalla features a bar, free private parking, a shared lounge and a garden. This property features family rooms and a playground. 
                            A shared kitchen and concierge and currency exchange services are available at the accommodation.

                            Some rooms have a kitchen with an oven, fridge and toaster. All rooms include bed linen.

                            A continental breakfast is served daily at the hostel.

                            In addition, Valhalla has a barbecue. The accommodation is located in an ideal area for skiing and cycling, and offers bicycle and ski equipment rental.

                            Civic Center is 4.3 km from Valhalla, while Serena Bay is 8 km from the property. 
                            The hostel is 18 km from San Carlos de Bariloche Airport and transfers can be arranged at an extra cost.

                            Solo travelers particularly like the location — they rated it a 9.0 for solo accommodation.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an 
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel