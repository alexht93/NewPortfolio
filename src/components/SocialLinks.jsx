import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsPhone } from "react-icons/bs"
import { BsPaperclip } from "react-icons/bs"

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/alex-hernandez-t/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/alexht93",
        },
        {
            id: 3,
            child: (
                <>
                   +503 7942-0790 <BsPhone size={30} />
                </>
            ),
                
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsPaperclip size={30} />
                </>
            ),
            href: "/Resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;