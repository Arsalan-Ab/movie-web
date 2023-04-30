import { Box, BoxProps, Typography } from "@mui/material";
import { SideNavbarItemProps } from "../SideNavbarItem/SideNavbarItem";
import clsx from "clsx";
import { ReactNode } from "react";

export interface SideNavbarProps extends BoxProps {
    items: ReactNode[];
}

const SideNavbar = (props: SideNavbarProps) => {
    const { className, items, ...other } = props;
    const classes = clsx("movie-SideNavbar", className);

    return (
        <Box className={classes} {...other}>
            <Typography>Movies</Typography>
            {items.map((item) => (
                <Box>{item}</Box>
            ))}
        </Box>
    );
};

export default SideNavbar;
