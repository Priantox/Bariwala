import './Background.css'
import image1 from '../../assets/House1.jpg';


const Background = () => {
 
    return(
        <div>
            <img src= {image1} className='background' alt='' />
        </div>   
    );
}

export default Background;