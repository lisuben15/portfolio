import Link from "next/link";
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/lisuben15?tab=repositories" },
    { icon: <FaLinkedinIn />, path: "" }, 
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) =>{
                return (
                    <Link Key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}

export default Social