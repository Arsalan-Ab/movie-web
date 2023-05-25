import { Box, BoxProps } from "@mui/material";
import "./AppShell.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./AppShell.module.scss";

export interface AppShellProps extends BoxProps {
    footer?: ReactNode;
    header?: ReactNode;
    navigation?: ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { className, children, footer, header, navigation, ...other } = props;

    const classes: string = clsx(styles.movieAppShell, className);

    return (
        <Box className={classes} {...other}>
            <Box className="flex">
                <Box className="w-1/6 border-e-2">{navigation}</Box>
                <Box className="px-7 py-5">{children}</Box>
            </Box>
        </Box>
    );
};

export default AppShell;
