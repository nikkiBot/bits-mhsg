import "./single.css"
import Sidebar from "../../sidebar/Sidebar" //no {} because I used "export default function" in sidebar component
import {SinglePost} from "../../singlePost/SinglePost" //{} present since I exported singlePost as a const object

/**
 * @brief  The page to redirect to when a user clicks on a post.
 * @param {object} props
 * @returns {JSX.Element} - SinglePost page not component
 */
export const Single = () => {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
