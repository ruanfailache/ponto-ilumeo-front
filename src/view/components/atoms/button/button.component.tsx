import { FC, PropsWithChildren } from "react";
import style from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
    loading?: boolean;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, loading, disabled }) => {
    return (
        <button className={style.button} disabled={loading ?? disabled}>
            {loading ? (
                <div className={style.linearCircularProgressBar} />
            ) : (
                children
            )}
        </button>
    );
};
