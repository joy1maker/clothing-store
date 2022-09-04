import React from "react";
import DirectoryMenu from "../components/directory-menu/directory-menu.component";
import './home-page.styles.scss'
const HomePage = () => (
    <div className="homepage">
        <DirectoryMenu className="directory-menu"></DirectoryMenu>
    </div>
)
export default HomePage;