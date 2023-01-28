import cloudSun from '../../assets/cloudSun.png'
import { WiHumidity } from 'react-icons/wi'
import { ImLeaf} from 'react-icons/im'
import { TbWind} from 'react-icons/tb'
function Top() {
    return (
        <div className="top d-flex">

            <h2 className="day">28 EKİM CUMA</h2>
            
            <div className="current d-flex">
                <p className='degree'>24<span>°C</span></p>
                <div className="currentIcon d-flex">
                    <img src={cloudSun} alt="partly cloudly" />
                    <p>Parçalı Bulutlu</p>
                </div>
            </div>
            
            <div className="currentData d-flex">
                <div className='d-flex'><WiHumidity /> <span className='info'>80%</span></div>
                <div className='d-flex'><ImLeaf/> <span className='info'>AQI 20</span></div>
                <div className='d-flex'><TbWind/> <span className='info'>10km/s</span></div>
            </div>
        
        </div>
    )
}

export default Top