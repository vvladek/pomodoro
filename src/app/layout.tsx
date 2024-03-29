import { ContextProvider } from "@/context/ContextProvider"
import { Head } from "@/components"
import "./globals.css"




export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <ContextProvider>
                <Head />
                <body>
                    {children}
                </body>
            </ContextProvider>
        </html>
    )
}
