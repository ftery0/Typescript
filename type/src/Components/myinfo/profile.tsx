import Header from "../head/header"
import black from "src/Assets/img/black2112.jpeg"
import "./profile.scss"
const MyProfile =()=>{
    return(
        <>
         <Header/>
        <div className="Profile">
           <img src={black} alt="" />

        </div>
        </>
    )
}
export default MyProfile