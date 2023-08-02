import AppShell from "@/components/AppShell/AppShell";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import useBackgroundSlider from "@/hooks/data/useBackgroundSlider";
import useNavbarItem from "@/hooks/data/useNavbrItem";
import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

interface GlobalLayoutProps {
    children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
    const navigationItem = useNavbarItem();
    const background = useBackgroundSlider();
    return (
        <AppShell
            background={background}
            navigation={
                <SideNavbar className="ml-4 px-3" items={navigationItem} />
            }
            className="flex gap-2"
        >
            {children}
        </AppShell>
    );
};

export default GlobalLayout;
