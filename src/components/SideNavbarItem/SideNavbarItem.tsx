import { Box, BoxProps, Typography } from "@mui/material";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./SideNavbarItem.module.scss";

export interface SideNavbarItemProps extends BoxProps {
    name: string;
    icon: ReactNode;
    link: string;
}

const SideNavbarItem = (props: SideNavbarItemProps) => {
    const { className, name, link, icon, ...other } = props;
    const classes = clsx(styles.movieSideNavbarItem, className);
    return (
        <Box className={classes} {...other}>
            <Box className="me-1 p-1 mx-5">{icon}</Box>
            <Typography className="">{name}</Typography>
        </Box>
    );
};

export default SideNavbarItem;
