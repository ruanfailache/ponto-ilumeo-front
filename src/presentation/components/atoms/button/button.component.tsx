import { FC, PropsWithChildren } from "react";
import style from "./button.module.css";

export const Button: FC<PropsWithChildren> = ({ children }) => {
    return <button className={style.button}>{children}</button>;
};
