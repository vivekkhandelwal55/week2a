import { useState } from "react"
import Tab from './Tab';
import TabItem from "./TabItem";
export default function Tabs({ changeSelectedTab }) {
    const [selectedTab, setSelectedTab] = useState(Tab.All);

    function changeTab(tab) {
        setSelectedTab(tab);
        changeSelectedTab(tab);
    }

    const unselctedClassName = "tab";
    const selectedClassName = "tab selected";

    return <div className="tabs">
        <TabItem value="All" selectedClass={selectedTab === Tab.All ? selectedClassName : unselctedClassName} onPress={() => {changeTab(Tab.All)}} />
        <TabItem value="Active" selectedClass={selectedTab === Tab.Active ? selectedClassName : unselctedClassName} onPress={() => changeTab(Tab.Active)} />
        <TabItem value="Completed" selectedClass={selectedTab === Tab.Completed ? selectedClassName : unselctedClassName} onPress={() => changeTab(Tab.Completed)} />
    </div>
}