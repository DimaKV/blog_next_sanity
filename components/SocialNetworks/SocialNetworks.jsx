import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';
import {AiFillYoutube, AiFillGithub, AiFillTwitterCircle, AiOutlineInstagram} from 'react-icons/ai';
import {ScreenEgg} from '../ScreenEgg';

const socialNetworks = [
    {
        id: 1,
        url: '',
        icon: AiFillYoutube
    },
    {
        id: 2,
        url: '',
        icon: AiFillGithub
    }, {
        id: 3,
        url: '',
        icon: AiFillTwitterCircle
    }, {
        id: 4,
        url: '',
        icon: AiOutlineInstagram
    }

]

//{React.createElement(net.icon,{color: 'black', size: 50})}

export const SocialNetworks = ({className}) => {
    return (
        <ScreenEgg type="left">
            <ul className={cl(className, styles.list)}>
                {socialNetworks.map(net => {
                    const Icon = net.icon
                    return (
                        <li key={net.id} className={styles.listItem}>
                            <a className={styles.listLink}
                               target="_blank"
                               href={`${net.url}`}>
                                <Icon color="black" size="50"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </ScreenEgg>
    )
}