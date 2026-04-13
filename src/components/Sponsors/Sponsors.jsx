import React from "react";
import ASOCLogo from '../../assets/Student-Legasdf.png';
import marchUpLogo from '../../assets/marchupLogo.png'
import codeforcauseLogo from '../../assets/codeforcause.png';
import AOPSLogo from '../../assets/AoPS_Main_Logo_1.png';
import "./Sponsors.css";

function Sponsors() {
    const sponsors = [
        { name: "ASOC", logo: ASOCLogo, link: "https://www.asocohlone.org/" },
        { name: "NordPass", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Nordpass.png", link: "https://nordpass.com" },
        { name: "NordProtect", logo: "https://res.cloudinary.com/nordsec/image/upload/q_auto,f_auto/v1/nord-security-web/homepage/2025/Products/nordprotect.png", link: "https://nordprotect.com/" },
        { name: "AoPS", logo: AOPSLogo, link: "https://artofproblemsolving.com/" },
        { name: "Balsamiq", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgswaEaC8rEvxwP14reSkjSMERq34aLAFtQ&s", link: "https://balsamiq.com/"},
        { name: "NordVPN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/NordVPN_logo.svg/3840px-NordVPN_logo.svg.png", link: "https://nordvpn.com/hackathons" },
        { name: "InterviewCake", logo: "https://www.assertnotmagic.com/img/interview-cake.jpg", link: "https://www.interviewcake.com" },
        { name: "1Password", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/1Password_wordmark_blue_2023.svg/3840px-1Password_wordmark_blue_2023.svg.png", link: "https://1password.com" },
        { name: "Saily", logo: "https://sb.nordcdn.com/m/4c608a2b46c0059c/original/saily-logo-yellow.svg", link: "https://saily.com"},
        { name: "Incogni", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Incogni.com_logo.png", link: "https://incogni.com" },
        { name: "nexos.ai", logo: "https://lever-client-logos.s3.us-west-2.amazonaws.com/85f55f08-16c4-45eb-8455-e8978a378db4-1743516114537.png", link: "https://nexos.ai/" },
        { name: "MarchUp", logo: marchUpLogo, link: "https://marchup.net" }
       /* { name: "CodeForCause", logo: codeforcauseLogo, link: "https://www.codeforcause.dev/"},
        ,
        { name: "CodeCrafters.io", logo: "https://media.licdn.com/dms/image/v2/D560BAQEqzh_Uhd_rbw/company-logo_200_200/company-logo_200_200/0/1684437783960/codecraftersio_logo?e=2147483647&v=beta&t=xehlblVMw6zGFt5W7qBeiK4MkSjRxbxndVn_SSA-4h0", link: "https://codecrafters.io" },*/
        
        
    ];

    return (
        <div className="sponsors-section">
            <h2 className="sponsors-title">Our Amazing Sponsors</h2>
            <p className="sponsors-subtitle">We are grateful for their support!</p>
            <div className="sponsors-grid">
                {sponsors.map((sponsor, index) => (
                    <a href={sponsor.link} key={index} target="_blank" rel="noopener noreferrer" className="sponsor-item">
                        <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} Logo`}
                            className="sponsor-logo"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;
