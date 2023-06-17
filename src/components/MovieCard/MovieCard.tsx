import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export interface MovieCardProps {
    title: string;
    src: string;
}

const MovieCard = ({ title, src }: MovieCardProps) => {
    return (
        <Box>
            <Card
                className=" rounded-lg"
                sx={{
                    position: "relative",
                    cursor: "pointer",
                    width: "200px",
                }}
            >
                <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/w300/${src}`}
                />
                <Box className="absolute bottom-4 text-center w-full">
                    <Typography className="text-white">{title}</Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default MovieCard;
