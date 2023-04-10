import classNames from 'classnames';
import styles from './new-compo.module.scss';

export interface NewCompoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-new-compos-and-templates
 */
export const NewCompo = ({ className }: NewCompoProps) => {
    return <div className={classNames(styles.root, className)}>NewCompo</div>;
};
