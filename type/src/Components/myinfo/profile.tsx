import Header from "../head/header"
import black from "src/Assets/img/black2112.jpeg"
import sopo from "src/Assets/img/sopo.png"
import alimo from "src/Assets/img/alimo.png"
import qvick from "src/Assets/img/qvick.png"
import "./profile.scss"
const MyProfile =()=>{
    return(
        <>
         <Header/>
        <div className="Profile">
           <img src={black} alt="" />
            <div className="ranking">
                <div className="ranking3"><img src={sopo} alt="" /></div>
                <div className="ranking1"><img src={alimo} alt="" /></div>
                <div className="ranking2"><img src={qvick} alt="" /></div>
                
            </div>
        </div>
        </>
    )
}
export default MyProfile