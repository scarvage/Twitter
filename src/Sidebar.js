import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOption active text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Search" Icon={SearchIcon}/>
        <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
        <SidebarOption text="Notifications" Icon={NotificationsIcon}/>
        <SidebarOption text="Bookmark" Icon={BookmarkIcon}/>
        <SidebarOption text="Profile" Icon={PersonIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>
        

        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>

  )
}

export default Sidebar