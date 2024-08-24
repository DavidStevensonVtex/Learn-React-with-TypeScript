// Listing 5.8 Changes to Alert.tsx to import styles using CSS Modules and changing the styles in the JSX

import { useState } from "react";
import styles from "./Alert.module.css";

type Props = {
    type?: string;
    heading: string;
    children: React.ReactNode;
    closable?: boolean;
    onClose?: () => void
}

export function Alert({
    type = "information",
    heading,
    children,
    closable,
    onClose,
}: Props) {
    const [visible, setVisible] = useState<boolean>(true);
    if (!visible) {
        return null;
    }
    function handleCloseClick() {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    }
    return (
        <div className={`${styles.container} ${styles[type]}`}>
            <div className="header">
                <span role="img"
                    className={styles.headerIcon}
                    aria-label={type === 'warning' ? 'Warning' : 'Information'}>
                    {type === 'warning' ? '⚠' : 'ℹ️'}
                </span>
                <span className={styles.headerText}>{heading}</span>
                {closable && (
                    <button aria-label="Close"
                        onClick={handleCloseClick}
                        className="close-button">
                        <span role="img" aria-label="Close">
                            ❌
                        </span>
                    </button>
                )}
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
}