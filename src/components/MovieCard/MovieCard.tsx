import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const MovieCard = () => {
    return (
        <Card
            elevation={6}
            className="h-52 rounded-lg"
            sx={{ maxWidth: "170px", position: "relative", cursor: "pointer" }}
        >
            <CardMedia
                className="h-full"
                component="img"
                image="/avatar_background.jpg"
            />
            <Box className="absolute bottom-4 text-center w-full">
                <Typography className="text-white">sdads</Typography>
            </Box>
        </Card>
    );
};

export default MovieCard;
