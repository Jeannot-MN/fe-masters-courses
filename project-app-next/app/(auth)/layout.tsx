import GlassPane from "../../components/GlassPane";
import "../../styles/global.css";

export default function AuthRootLayout({children}){
    return (
        <html lang="eng">
            <head/>
            <body className="h-screen w-screen">
                <GlassPane className={"w-full h-full flex items-center justify-center"}>
                    {children}
                </GlassPane>
            </body>
        </html>
    )
}