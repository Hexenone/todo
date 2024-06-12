import { ReactElement } from "react";
import { ButtonStyle } from "./styles";

export default function Button({
    children
}: {
    children: ReactElement | string;
}) {
    return (
        <ButtonStyle>{children}</ButtonStyle>
    );
}