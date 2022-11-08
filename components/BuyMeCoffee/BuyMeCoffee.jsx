import styles from './index.module.scss';
import cl from 'classnames';
import {ScreenEgg} from '../ScreenEgg';

export const BuyMeCoffee = ({className}) => {
    return (
        <ScreenEgg type="right">
            <div className={cl(styles.buyCoffee, className)}>
                <a href="" target='_blank' className={styles.buyCoffeeButton}>
                    Buy me a coffee
                </a>
            </div>
        </ScreenEgg>
    )
}