import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import style from "./typography.module.css";
import { FontSize, FontWeight } from "./typography.config";

const fontSize: Record<FontSize, string> = {
    [FontSize.LG]: style.fontSizeLarge,
    [FontSize.MD]: style.fontSizeMedium,
    [FontSize.SM]: style.fontSizeSmall,
    [FontSize.XS]: style.fontSizeSmaller,
};

const fontWeight: Record<FontWeight, string> = {
    [FontWeight.EXTRA_BOLD]: style.extraBold,
    [FontWeight.BOLD]: style.bold,
    [FontWeight.SEMI_BOLD]: style.semiBold,
    [FontWeight.MEDIUM]: style.medium,
    [FontWeight.REGULAR]: style.regular,
    [FontWeight.LIGHT]: style.light,
};

interface TypographyProps extends PropsWithChildren {
    as?: keyof JSX.IntrinsicElements;
    size?: FontSize;
    weight?: FontWeight;
    className?: string;
}

export const Typography: FC<TypographyProps> = ({
    children,
    as,
    size,
    weight,
    className,
}) => {
    const Tag = as ?? "p";

    const classNames = clsx([
        style.typography,
        fontSize[size ?? FontSize.SM],
        fontWeight[weight ?? FontWeight.REGULAR],
        className,
    ]);

    return <Tag className={classNames}>{children}</Tag>;
};
