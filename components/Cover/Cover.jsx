import styles from './index.module.scss';
import cl from 'classnames';
import {Section} from '../Section'

export const Cover = ({className, title}) => {
    return (
        <div className={cl(className, styles.cover)}>
            <h1 className={styles.coverTitle} dangerouslySetInnerHTML={{__html: title}}/>
        </div>
    )
}