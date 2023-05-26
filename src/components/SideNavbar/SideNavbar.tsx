import { Box, BoxProps, Typography } from "@mui/material";
import { SideNavbarItemProps } from "../SideNavbarItem/SideNavbarItem";
import clsx from "clsx";
import { ReactElement, ReactNode } from "react";
import styles from "./SideNavbar.module.scss"

export interface SideNavbarProps extends BoxProps {
    items: ReactNode[];
}

const SideNavbar = (props: SideNavbarProps) => {
    const { className, items, ...other } = props;
    const classes = clsx(styles.movieSideNavbar, className);

    return (
        <Box className={classes} {...other}>
            <Typography className="p-1 mb-3 mx-6">Movies</Typography>
            {items.map((item) => (
                <Box>{item}</Box>
            ))}
        </Box>
    );
};

export default SideNavbar;
