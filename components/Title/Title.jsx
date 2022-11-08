import styles from './index.module.scss';
import cl from 'classnames';

export const Title = ({className, children, type}) => {
    const Tag = type === 'small' ? "h3" : "h2"
    const titleStyles = type === 'small' ? styles.titleSmall: styles.titleMedium
    return (
            <div className={cl(className, styles.title, titleStyles)}>
                <Tag>{children}</Tag>
            </div>
    )
}