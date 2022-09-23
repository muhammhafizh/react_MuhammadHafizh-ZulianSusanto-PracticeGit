import { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiHome, FiBookmark, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCool } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";

function SidebarMenu() {
    const path = window.location.pathname

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
    <>
        <div id="header">
            {/* collapsed props to change menu size using menucollapse state */}
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                <div className="logotext">
                    {/* small and big change using menucollapse state */}
                    <p>{menuCollapse ? "Todo" : "Todo List"}</p>
                </div>
                <div className="closemenu" onClick={menuIconClick}>
                    {/* changing menu collapse icon on click */}
                    {menuCollapse ? (
                    <FiArrowRightCircle/>
                    ) : (
                    <FiArrowLeftCircle/>
                    )}
                </div>
                </SidebarHeader>
                <SidebarContent>
                <Menu iconShape="square">
                    
                    <MenuItem active={path === "/" ? true : false} icon={<FiHome />}>
                        <a href="/" style={{color: "black"}}>Home</a>
                    </MenuItem>
                    <MenuItem active={path === "/about-app" ? true : false} icon={<FiBookmark />}>
                        <a href="/about-app" style={{color: "black"}}>About App</a>
                    </MenuItem>
                    <MenuItem active={path === "/about-author" ? true : false} icon={<BiCool />}>
                        <a href="/about-author" style={{color: "black"}}>About Author</a>
                    </MenuItem>
                </Menu>
                </SidebarContent>
                <SidebarFooter></SidebarFooter>
            </ProSidebar>
        </div>
    </>
    );
}

export default SidebarMenu