import React from 'react'
import XIcon from '@mui/icons-material/X';
import SidebarOption from './sidebarOption';
import HomeOutlineIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';






const Sidebar = ( { handleLogout }) => {
  return (
    <div className='sidebar'>
        {/* XIcon */}
      <XIcon className='sidebar__Xicon'/>
     
      {/* sidebar option */}
      <Link className="links" to="/Home">
      <SidebarOption variant="outlined" text="HOME" Icon={HomeOutlineIcon}/>
      </Link>
      <SidebarOption text="SEARCH" Icon={SearchIcon}/>
      <SidebarOption text="NOTIFICATION" Icon={NotificationsNoneOutlinedIcon}/>
      <SidebarOption text="MAIL" Icon={MailOutlineIcon}/>
      <SidebarOption text="BOOK" Icon={BookmarkBorderIcon}/>
      <SidebarOption text="LIST" Icon={ListAltIcon}/>
      <Link className="links" to="/Profile">
      <SidebarOption text="PROFILE" Icon={PermIdentityIcon}/>
      </Link>
      <SidebarOption text="MORE"  Icon={MoreHorizIcon}/>

      <Button onClick={handleLogout} className='sidebar__logout' fullWidth>
        Logout
      </Button>

    </div>
  )
}

export default Sidebar
