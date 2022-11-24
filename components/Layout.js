function Layout(props) {
    return (
        <div className="page-layout">
            {props.children}
            <style jsx global>{`
                body {
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: red
                }
            `}</style>
        </div>
    );
}

export default Layout;
