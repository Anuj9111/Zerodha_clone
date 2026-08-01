import { Hero } from "./Hero.jsx"
import {CreateTicket} from './CreateTicket.jsx'
import {Footer} from "../Footer.jsx"
import { Navbar } from "../Navbar.jsx"


export function Support(){
    return(
        <div>
            <Hero></Hero>
            <CreateTicket></CreateTicket>
            
        </div>
    )
}