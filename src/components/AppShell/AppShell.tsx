import { Box, BoxProps } from "@mui/material";
import "./AppShell.module.scss";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import styles from "./AppShell.module.scss";
import Image from "next/image";

export interface AppShellProps extends BoxProps {
    footer?: ReactNode;
    header?: ReactNode;
    navigation?: ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { className, children, footer, header, navigation, ...other } = props;

    const classes: string = clsx(styles.movieAppShell, className);

    return (
        <Box className="flex gap-2">
            {/* <Image
                style={{ zIndex: -1, objectFit: "cover" }}
                fill
                quality={90}
                sizes="100vw"
                alt="..."
                src={"/avatar_background.jpg"}
            /> */}

            <Box className=" w-1/5 min-w-[150px] border-e-2">{navigation}</Box>
            <Box className="w-5/6">
                <Box className="flex flex-col">
                    {/* <Box bgcolor="red">daasd</Box>
                    <Box bgcolor="blue" className="px-7 py-5">
                        sdasad
                    </Box> */}
                    <Box className="px-10">{children}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AppShell;
