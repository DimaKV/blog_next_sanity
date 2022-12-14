import styles from './index.module.scss';
import cl from 'classnames';

export const ScreenEgg = ({className, children, type}) => {
    return (
        <div
            className={cl(className, styles.screenEgg, type === 'right' ? styles.screenEggRight : styles.screenEggLeft)}>
            {children}
        </div>
    )
}