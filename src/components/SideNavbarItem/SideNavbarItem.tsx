
import { Box, BoxProps, Typography } from "@mui/material";
import clsx from "clsx";
import { ReactNode } from "react";

export interface SideNavbarItemProps extends BoxProps {
    name: string;
    icon: ReactNode;
    link: string;
}

const SideNavbarItem = (props: SideNavbarItemProps) => {
    const { className, name, link, icon, ...other } = props;
    const classes = clsx("movie-SideNavbarItem", className);
    return (
        <Box className={classes} {...other}>
            <Box className="me-1">{icon}</Box>
            <Typography>{name}</Typography>
        </Box>
    );
};

export default SideNavbarItem;
