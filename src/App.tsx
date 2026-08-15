import { useRef, useState } from 'react'
import Whitelist from './Whitelist';
import BuildIDs from './BuildIDs';

function SidebarItem({ text, callback, isActive }: { text: string, callback: () => void, isActive: boolean }) {
    return (
        <div className={`sidebar-item ${isActive ? "active" : ""}`} onClick={callback}>
            {text}
        </div>
    )
}

function App() {
    const [activeTab, setActiveTab] = useState("whitelist");

    return <main>
        <div className="sidebar">
            <SidebarItem
                text='Whitelist'
                callback={() => {
                    setActiveTab("whitelist")
                }}
                isActive={activeTab == "whitelist"}
            />
            <SidebarItem
                text='Build IDs'
                callback={() => {
                    setActiveTab("build-ids")
                }}
                isActive={activeTab == "build-ids"}
            />
        </div>
        <div className="content">
            {(() => {
                switch (activeTab) {
                    case "whitelist": 
                        return <Whitelist />
                    case "build-ids":
                        return <BuildIDs />
                    default:
                        return <p>Unable to find page</p>
                }
            })()}
        </div>
    </main>
}

export default App
