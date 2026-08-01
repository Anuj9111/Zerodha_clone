
import { Hero } from "./Hero.jsx"
import { Education } from "./Education.jsx"
import  {Pricing} from "./Pricing.jsx"
import  {Stats} from "./Stats.jsx"
import {Awards} from "./Awards.jsx"

import { OpenAccounts } from "../OpenAccount.jsx"




export function HomePage(){
    return (
        <div >
            
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccounts></OpenAccounts>
           
            
            
        </div>
    )
}