import React from 'react';
import "./card2.css";

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Rand from './Modal/ModalCard';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

function Card2 (props) 
{
  const { story } = props;
  const {lasturl } = props;
  let url ="https://spur-b1135.web.app/";
  url += lasturl;
 
  return (
           <div className="card-body">
               <div className="card2-top">
                   <img  alt ="person-pic" src ={story.source} />
                   
               </div>

               <div className="card-bottom">
                  <h3> {story.name} </h3>
                  <h5> {story.position} </h5>
                  <p> {story.description} </p>
                  
                 </div>
                 <div className ="see-more-icon">
                    <FavoriteIcon className ="heart-icon" />
        <Rand name={story.name} position={story.position} story={story.story}/>
        
        <WhatsappShareButton    url ={url} title ="SPUR">
        <WhatsappIcon  size={30} logoFillColor ="white" round={true} className="share-icon">

        </WhatsappIcon>

        </WhatsappShareButton>
                    </div>
                
             </div>
  );
}
export default Card2;