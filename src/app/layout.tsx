"use client"
import AppShell from "@/components/AppShell/AppShell";
import "./globals.css";
import useNavbarItem from "@/hooks/data/useNavbrItem";
import SideNavbar from "@/components/SideNavbar/SideNavbar";

// export const metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const items = useNavbarItem();
    console.log(items);

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
export default RootLayout