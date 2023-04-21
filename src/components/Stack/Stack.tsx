import {StackProps} from './Stack.props.ts';
import styles from './Stack.module.css'

export function Stack({ children ,...props} :StackProps) : JSX.Element {
    return (
        <div className={styles.stack} {...props}>
            <span>
                {children}
            </span>
        </div>
    );
};