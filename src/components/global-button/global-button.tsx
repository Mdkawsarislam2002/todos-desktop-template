import classNames from 'classnames';
import styles from './global-button.module.scss';

export interface GlobalButtonProps {
    className?: string;
    children?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-global-buttons-and-templates
 */
export const GlobalButton = ({ className, children = 'Button' }: GlobalButtonProps) => {
    return (
        <div className={classNames(styles.GlobarButton, className)}>
            <span className={styles.buttonText}>{children}</span>
        </div>
    );
};
