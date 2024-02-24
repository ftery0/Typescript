import Header from "../head/header"
import black from "src/Assets/img/black2112.jpeg"
import sopo from "src/Assets/img/sopo.png"
import alimo from "src/Assets/img/alimo.png"
import qvick from "src/Assets/img/qvick.png"
import "./work.scss"
const MyWork =()=>{
    
    return(
        <>
         <Header/>
        <div className="Profile">
           <img src={black} alt="" />
            <div className="ranking">
                <div className="ranking3"><img src={sopo} alt="" onClick={()=>window.open('https://sparkling-sting-af7.notion.site/SOPO-600a1747126840339ac79278dd44a657?pvs=4')}/></div>
                <div className="ranking1"><img src={alimo} alt="" onClick={()=>window.open('https://fast-philosophy-82b.notion.site/ALIMO-6120a6a6cdd64c4eaa936b76dd7e126f?pvs=4')}/></div>
                <div className="ranking2"><img src={qvick} alt="" onClick={()=>window.open('https://github.com/Team-C0nnect')} /></div>
                
            </div>
        </div>
        </>
    )
}
export default MyWork