import zerodha from "../../assets/logo.svg"

export function Footer(){
    return(
        <div className="w-full bg-gray-100 ">
            <div className="grid grid-cols-12 p-10 gap-4">
                <div className="  col-span-3" >
                    <img className="w-[150px] h-6" src={zerodha} alt="logo" />
                    <br />
                    <p className="text-gray-500">© 2010 - 2021, Zerodha Broking Ltd.</p>
                    <p className="text-gray-500">All rights reserved.</p>
                    <div className="logo">

                    </div>
                </div>
                <div className="col-span-3" >
                    <ul>
                        <li>Company</li>
                        <li><a className="text-gray-500" href="">About</a></li>
                        <li><a  className="text-gray-500" href="">About</a></li>
                        <li><a  className="text-gray-500" href="">Products</a></li>
                        <li><a className="text-gray-500" href="">Referral programme</a></li>
                        <li><a className="text-gray-500"  href="">Carrers</a></li>
                        <li><a className="text-gray-500"  href="">Zerodha.tech</a></li>
                        <li><a className="text-gray-500"  href="">Press & media</a></li>
                        <li><a  className="text-gray-500" href="">Zerodha cares(CSR)</a></li>
                    </ul>
                </div>
                <div className="col-span-3" >
                    <ul>
                        <li>Support</li>
                        <li><a className="text-gray-500" href="">Contact</a></li>
                        <li><a  className="text-gray-500" href="">Support portal</a></li>
                        <li><a  className="text-gray-500" href="">Z-Connect blog</a></li>
                        <li><a className="text-gray-500" href="">List of charges</a></li>
                        <li><a className="text-gray-500"  href="">Downloads & resources</a></li>
                        
                    </ul>
                </div>
                <div className="col-span-3" >
                    <ul>
                        <li>Account</li>
                        <li><a className="text-gray-500" href="">Open an account</a></li>
                        <li><a  className="text-gray-500" href="">Fund transfer</a></li>
                        <li><a  className="text-gray-500" href="">60 day challenges</a></li>
                        
                       
                    </ul>
                </div>
                
            </div>
            <div className=" p-10 text-gray-500">
                 <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                 <br />
                 <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                 <br />
                 <p>nvestments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                 <br />
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <br />
                <p> "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

            </div>
            <div></div>
            
            
        </div>
    )
}