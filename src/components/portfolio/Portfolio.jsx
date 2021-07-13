import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { 
    featuredPortfolio,
    webPortfolio,
    desktopPortfolio,
    ph1Portfolio,
    ph2Portfolio,
 } from "../../data"

export default function Portfolio() {

    const [ selected, setSelected ] = useState("featured");
    const [ data, setData ] = useState([]);

    const menuList = [
        { id: "featured", title: "Featured" },
        { id: "web", title: "Web Apps" },
        { id: "desktop", title: "Desktop Apps" },
        { id: "ph1", title: "Placeholder #1" },
        { id: "ph2", title: "Placeholder #2" },
    ];

    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "desktop":
                setData(desktopPortfolio);
                break;
            case "ph1":
                setData(ph1Portfolio);
                break;
            case "ph2":
                setData(ph2Portfolio);
                break;
            default:
                setData(featuredPortfolio)
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {menuList.map(item=>(
                <PortfolioList 
                title={item.title} 
                active={selected === item.id} 
                setSelected={setSelected}
                id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                    <div className="item">
                        <img src={d.img} alt=""/>
                        <h3>{d.title}</h3>
                    </div>
                ))}


            </div>
        </div>
    )
}
