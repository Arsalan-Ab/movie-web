import { Box, BoxProps, Typography } from "@mui/material";
import { SideNavbarItemProps } from "../SideNavbarItem/SideNavbarItem";
import clsx from "clsx";

export interface SideNavbarProps extends BoxProps {
    items: SideNavbarItemProps[];
}

const SideNavbar = (props: SideNavbarProps) => {
    const { className, items, ...other } = props;
    const classes = clsx("movie-SideNavbar", className);

    return (
        <Box className={classes} {...other}>
            <Typography>Movies</Typography>
            {items.map((item: SideNavbarItemProps) => (
                <Box className={"flex"}>
                    <div>{item.icon}</div>
                    <div>{item.name}</div>
                </Box>
            ))}
        </Box>
    );
};

export default SideNavbar;
