import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./styles.css";
import "./cover.css";
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

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
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    );
}

export default MyApp;
