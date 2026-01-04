import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import YouTube from "../assets/images/youtube.png";
import PhoneIcon from "../assets/images/calculator.png";
import CalculatorIcon from "../assets/images/enquire.png";
import TataLogo from "../assets/images/tata-motors-logo_0.png"; // Replace with your actual logo PNG path

export default function Footer() {
    return (
        <footer className="bg-[#1D73E7] text-white w-full">
            <div className="px-8 md:px-20 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">

                {/* Logo Section */}
                <div>
                    <img
                        src={TataLogo}
                        alt="TATA Motors"
                        width={250}
                        height={40}
                    />
                </div>

                {/* Contact & Social Section */}
                <div className="mt-6 md:mt-0 flex flex-col items-start">
                    <span className="text-sm font-semibold mb-4">Get In Touch</span>

                    {/* Icons Row */}
                    <div className="flex justify-center gap-4">
                        <a href="#" aria-label="Facebook" className="bg-white rounded-full p-2 flex justify-center items-center">
                            <img src={Facebook} alt="Facebook" className="h-8 w-8 object-contain" />
                        </a>
                        <a href="#" aria-label="Instagram" className="bg-white rounded-full p-2 flex justify-center items-center">
                            <img src={Instagram} alt="Instagram" className="h-8 w-8" />
                        </a>
                        <a href="#" aria-label="Twitter" className="bg-white rounded-full p-2 flex justify-center items-center">
                            <img src={Twitter} alt="Twitter" className="h-8 w-8" />
                        </a>
                        <a href="#" aria-label="YouTube" className="bg-white rounded-full p-2 flex justify-center items-center">
                            <img src={YouTube} alt="YouTube" className="h-8 w-8 object-contain" />
                        </a>
                    </div>


                    {/* <div className="flex flex-col items-end ">
                        <div className="rounded-full p-2 ">
                            <img src={PhoneIcon} alt="Phone" width={30} height={30} />
                        </div>
                        <div className="rounded-full p-2 ">
                            <img src={CalculatorIcon} alt="Calculator" width={30} height={30} />
                        </div>
                    </div> */}

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-8 md:px-20 py-4  border-white flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="mb-2 md:mb-0">© 2025 Tata Motors Limited. All rights reserved.</p>
                <a href="#" className="">Privacy Policy</a>
            </div>
        </footer>

    );
}
