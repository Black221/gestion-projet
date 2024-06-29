

import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const SocialMedia = () => {

    const  rsx = [
        {
            name: "whatsapp",
            img: <FaWhatsapp className="size-8 text-cyan-600" />,
            url: "https://wa.me/221780126976"
        }, {
            name: "facebook",
            img: <FaFacebook className="size-8 text-cyan-600" />,
            url: "https://www.facebook.com/profile.php?id=100089723587591"
        }, {
            name: "expat",
            img: <FaTwitter className="size-8 text-cyan-600" />,
            url: "https://twitter.com/?lang=fr"
        }, {
            name: "insta",
            img: <FaInstagram className="size-8 text-cyan-600" />,
            url: "https://www.instagram.com/firdawsi_technologies/"
        }
    ];



    return (
        <div className={`h-screen flex items-center top-0 z-50`}>
            {/* <Fade triggerOnce={true} direction={"left"}> */}
                <div className={`bg-white rounded-r-xl shadow drop-shadow-xl bg-opacity-80 md:p-4 md:space-y-10 p-2 space-y-6`}>
                    {rsx.map((r, index) => (
                       <a key={index} aria-label={r.name} className={" block"} href={r.url}>
                            {r.img}
                       </a>
                    ))}
                </div>
            {/* </Fade> */}
        </div>
    )
}