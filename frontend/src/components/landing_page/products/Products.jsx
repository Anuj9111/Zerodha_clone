import {Hero} from './Hero.jsx'
import { LeftImage } from './LeftImage.jsx'
import {RightImage}  from './RightImage.jsx'
import { Universe } from './Universe.jsx'
import {Footer} from "../Footer.jsx"
import { Navbar } from "../Navbar.jsx"


export function Products(){
    return(
        <div>
            
            <Hero></Hero>
            <LeftImage></LeftImage>
            <RightImage></RightImage>
            <Universe></Universe>
            
        </div>
    )
}