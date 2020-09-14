import React from 'react'
import './Home.scss';
import Product from '../product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__poster"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg" alt="" />
            </div>
            <div className="home__row">
                <Product
                    id={1234}
                    title="Apple iPhone 11 (128GB) - Black"
                    image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg"
                    price={63999}
                    rating={3} />
                <Product
                    id={5678}
                    title="Marshall Amplification MS-2R Red Micro Guitar Amp"
                    image="https://m.media-amazon.com/images/I/51holWs6RML.__AC_SY200_.jpg"
                    price={1611}
                    rating={4} />
            </div>
            <div className="home__row">
                <Product
                    id={91011}
                    title="Marshall Amplification MS-2R Red Micro Guitar Amp"
                    image="https://m.media-amazon.com/images/I/51holWs6RML.__AC_SY200_.jpg"
                    price={1611}
                    rating={4} />
                <Product
                    id={1213}
                    title="Nx120s Stereo Headset With Foldable Microphone"
                    image=" https://images-na.ssl-images-amazon.com/images/I/61H0aiyxy3L._SL1200_.jpg"
                    price={1365}
                    rating={4}
                />
                <Product
                    id={1415}
                    title="Deus Ex: Mankind Divided (PS4) [Special Day One Steel-Book Edition] [Bonus Disc]"
                    image="https://images-na.ssl-images-amazon.com/images/I/51czHkXsrBL.jpg"
                    price={799}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id={4352}
                    title="Samsung 163 cm (65 Inches) Q Series 4K Ultra HD QLED Smart TV QA65Q8CNAK (Black) (2018 model)"
                    image="https://images-na.ssl-images-amazon.com/images/I/91i6SX47ClL._SL1500_.jpg"
                    price={258999}
                    rating={4} />
            </div>
        </div>
    )
}

export default Home
