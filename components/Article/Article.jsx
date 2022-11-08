import styles from './index.module.scss';
import cl from 'classnames';
import Link from "next/link";
import {AiOutlineArrowLeft} from 'react-icons/ai'

export const Article = ({children, className, backUrl}) => {
    return (
        <article className={cl(className, styles.article)}>
            <Link href={backUrl}>
                <a className={styles.articleBack}>
                    <AiOutlineArrowLeft/>
                </a>
            </Link>
            <div className={styles.articleContent}>
                {children}
            </div>
        </article>
    )
}