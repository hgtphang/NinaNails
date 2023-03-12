import { useState } from "react";
import ServicesDB from "../assets/Services.json";
import Tab from "../components/Tab";
import ServiceItem from "../components/Service";



const tabs = {
    "Manicure" : <ServiceItem data={ServicesDB.services[0]}/>,
    "Pedicure" : <ServiceItem data={ServicesDB.services[1]}/>,
    "Dip Powder" : <ServiceItem data={ServicesDB.services[2]}/>,
    "Artificid Nails" : <ServiceItem data={ServicesDB.services[3]}/>
}

export default function Service() {
    const [selectedTab, setSelectedTab] = useState("Manicure");
    return (
        <div className="services" id="services">
            <div className="service-heading">
                <h2>Our services</h2>
                <hr/>
            </div>
            <Tab setSelectedTab={setSelectedTab}/>
            {tabs[selectedTab]}
        </div>
    )
}