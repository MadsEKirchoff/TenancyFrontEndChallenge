import type {MetaFunction} from "remix"
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "remix"
import {Container, createTheme, NextUIProvider} from "@nextui-org/react"

export const meta: MetaFunction = () => {
    return {title: "New Remix App"}
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
            <title>Proper challenge</title>
        </head>
        <body>
        <NextUIProvider theme={darkTheme}>
            <Container justify="center" sm>
                <Outlet/>
            </Container>
        </NextUIProvider>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    )
}

// This is a tenant system for developers, dark mode is default
const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: '$blue900',
            primary: '$blue400',
        }
    }
})