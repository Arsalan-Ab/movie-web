import AppShell from "@/components/AppShell/AppShell";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import useNavbarItem from "@/hooks/data/useNavbrItem";
import { ReactNode } from "react";

interface GlobalLayoutProps {
    children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
    const navigationItem = useNavbarItem();
    return (
        <AppShell navigation={<SideNavbar className="ml-4 px-3" items={navigationItem} />}>
            {children}
        </AppShell>
    );
};

export default GlobalLayout;
