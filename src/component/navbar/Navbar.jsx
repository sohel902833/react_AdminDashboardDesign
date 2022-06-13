import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDarkMode } from "../../context/darkModeContext";
import "./navbar.scss";
const Navbar = () => {
  const { dispatch } = useDarkMode();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="item"
            onClick={() => dispatch({ type: "TOGGLE" })}
          >
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              className="avatar"
              src="https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-6/278967494_1282048875537057_6978528568985766894_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGsmuu6c1KaWPgGqTSjVKyrN9YqeNxDdJo31ip43EN0mjGmsNtllgIYhJdLodWizHduIkpMyi8kXcf_tNU6o4rT&_nc_ohc=0eZ7KeOVso8AX8wnt16&_nc_oc=AQkna8-rAYYeEHC9eOS_o70O3xsfGzQAFvX3WK2YkIobXja3ogEURzeAwnpPpG7p4Ng&_nc_zt=23&_nc_ht=scontent.fdac1-1.fna&oh=00_AT8i2DxbI49cLf02bwrhFHkhz7K0fA2WzZKRuusEeMj-_A&oe=62AC202D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
