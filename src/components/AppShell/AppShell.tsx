import { Box, BoxProps } from "@mui/material";
import clsx from "clsx";
import { ReactNode } from "react";

export interface AppShellProps extends BoxProps {
    footer?: ReactNode;
    header?: ReactNode;
    navigation?: ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { className, children, footer, header, navigation, ...other } = props;

    const classes: string = clsx("movie-app-shell", className);

    return (
        <Box className={classes}>
            <Box className="h-full w-1/5">{navigation}</Box>
            {children}
        </Box>
    );
};

export default AppShell;
