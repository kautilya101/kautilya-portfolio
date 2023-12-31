import React from 'react';
import { BsLinkedin, BsGithub, BsEnvelopeFill } from 'react-icons/bs'


const SocialMedia = ({styleClass}) => {
    return (
        <div className = {`${styleClass}`} >
            <a style={{textDecoration: 'none'}} href='https://mail.google.com/mail/?view=cm&fs=1&to=kautilya101001@gmail.com'><div>
                <BsEnvelopeFill />
            </div></a>
            <a href='https://www.linkedin.com/in/kautilya-bhardwaj-63285a1a9/'><div>
                <BsLinkedin />
            </div></a>
            <a href='https://github.com/kautilya101'><div>
                <BsGithub />
            </div></a>
        </div>
    );
}

export default SocialMedia;
