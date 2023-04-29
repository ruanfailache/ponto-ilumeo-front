import { FC, useState } from "react";
import style from "./text-field.module.css";
import clsx from "clsx";

interface TextFieldProps {
    id?: string;
    value: string;
    labelText: string;
    onChanged: (value: string) => void;
}

export const TextField: FC<TextFieldProps> = ({
    id,
    value,
    labelText,
    onChanged,
}) => {
    const [isPure, setIsPure] = useState(true);

    return (
        <label htmlFor={id} className={style.inputWrapper}>
            <span
                hidden={isPure}
                className={clsx({
                    [style.labelText]: true,
                    [style.hiddenLabelText]: value.length === 0,
                })}
            >
                {labelText}
            </span>

            <input
                id={id}
                value={value}
                className={style.input}
                placeholder={labelText}
                onChange={(ev) => {
                    setIsPure(false);
                    onChanged(ev.target.value);
                }}
            />
        </label>
    );
};
