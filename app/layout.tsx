import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePick from "./components/MyProfilePick";

export const metadata = {
  title: "Charanvir's Blog",
  description: "Created by Charanvir Singh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar></Navbar>
        <MyProfilePick></MyProfilePick>
        {children}
      </body>
    </html>
  );
}
