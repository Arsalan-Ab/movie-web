import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SideNavbarItem, {
    SideNavbarItemProps,
} from "@/components/SideNavbarItem/SideNavbarItem";
import SideNavbar from "@/components/SideNavbar/SideNavbar";

const useNavbarItem = () => {
    const items = [
        {
            name: "Home",
            icon: <HomeIcon />,
            link: "",
        },
        {
            name: "Movies",
            icon: <MovieIcon />,
            link: "",
        },
        {
            name: "Series",
            icon: <LiveTvIcon />,
            link: "",
        },
    ];

    const navItem = items.map((item, index) => {
        return (
            <SideNavbarItem
                name={item.name}
                icon={item.icon}
                link={item.link}
            />
        );
    });

    

    return navItem;
};

export default useNavbarItem;
