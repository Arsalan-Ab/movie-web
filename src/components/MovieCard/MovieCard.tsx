import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";

export interface MovieCardProps {
    title: string;
    src: string;
    large: boolean;
}

const MovieCard = ({ title, src, large }: MovieCardProps) => {
    return (
        <Box>
            <Card
                className=" rounded-lg mx-auto"
                sx={{
                    position: "relative",
                    cursor: "pointer",
                    width: large ? "90%" : "inherit",
                }}
            >
                <CardMedia
                    className="max-h-full"
                    component="img"
                    image={`https://image.tmdb.org/t/p/w300/${src}`}
                    sx={{
                        objectFit: "cover",
                        height: large ? "320px" : "300px",
                    }}
                />

                {/* <Box className="absolute bottom-4 text-center w-full">
                    <Typography className="text-white">{title}</Typography>
                </Box> */}
            </Card>
        </Box>
    );
};

export default MovieCard;
