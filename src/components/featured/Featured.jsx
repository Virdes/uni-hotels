import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img 
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249049951.jpg?k=d28d55130ec95a821b20b8b4349c2d240531ab0d7a5534a718959aaf243f3339&o=&hp=1" 
                    alt="" 
                    className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Bariloche - Argentina</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/338420609.jpg?k=4b2f7dbf7faa9be68c8029551747edba2ff0a9fb5e8880a7895128a106c300fc&o=&hp=1" 
                    alt="" 
                    className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Orlando - USA</h1>
                    <h2>456 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/321867241.jpg?k=0c745bfdc9f973f5af798a568c5c7557724f475399b9a5bb99fbd83034f0cdbc&o=&hp=1" 
                    alt="" 
                    className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Madrid - Espanha</h1>
                    <h2>563 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured