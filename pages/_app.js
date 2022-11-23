import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./styles.css";
import "./cover.css";
import React, { useEffect } from "react";
import { Html, Main, NextScript } from "next/document";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body
                style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: 'url("/background.jpg")',
                }}
            >
                <Component {...pageProps} />
            </body>
        </React.Fragment>
    );

    // useEffect(() => {
    //     document.body.className = "bg-warning";
    // });
    // return <Component {...pageProps} />;
}

export default MyApp;
