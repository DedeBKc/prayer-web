import Clock from "react-live-clock";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Index = () => {
    const renderLeftInformation = () => {
        return (
            <div
                style={{
                    backgroundImage: "linear-gradient(#EEE,#555)",
                }}
                className="col-4 bg-info"
            >
                <Image
                    src={require("../public/calender.png")}
                    alt="calender"
                    width={200}
                />
            </div>
        );
    };

    const renderCenterInformation = () => {
        return (
            <div className="col-8">
                <div
                    className="d-flex flex-row p-4 rounded align-items-center"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                >
                    <Image
                        src={require("../public/kubah.png")}
                        alt="Kubah"
                        width={50}
                    />
                    <div style={{ marginLeft: 25 }} className="text-center">
                        <div style={{ fontSize: 25, fontWeight: "bold" }}>
                            Mesjid Al-Ikhlas
                        </div>
                        <div className="text-white">
                            PESONA TELAGA CIBINONG RT 004 RW 02, KEL HARAPAN
                            JAYA
                        </div>
                        <div className="text-white">
                            CIBINONG - KABUPATEN BOGOR
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderLeftMosque = () => {
        return (
            <div
                style={{
                    backgroundImage: 'url("/mosque-date.png")',
                    paddingBottom: 140,
                    paddingLeft: 14,
                    paddingRight: 14,
                    backgroundRepeat: "no-repeat",
                    // height: 500,
                    width: 200,
                    backgroundSize: "100%",
                }}
                className="d-flex align-items-end"
            >
                <div
                    style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        marginBottom: 5,
                        paddingLeft: 3,
                        paddingRight: 3,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        flex: 1,
                    }}
                    className="text-center rounded"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-white">ISYA</div>
                        <div className="text-white" style={{ fontSize: 12 }}>
                            18:14
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-white">ISYA</div>
                        <div className="text-white" style={{ fontSize: 12 }}>
                            <div className="fs-1">00:14</div>
                            <div style={{ fontSize: 10 }}>
                                SEGERA MASUK WAKTU
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderCenterBismillah = () => {
        return (
            <div>
                <Image
                    src={require("../public/bismillah.png")}
                    alt="Kubah"
                    width={700}
                />
                <div className="row w-100">
                    <div className="col-6">
                        <Image
                            src={require("../public/kubah2.png")}
                            alt="Kubah"
                            width={60}
                        />
                        <div
                            className="d-flex flex-row p-4 align-items-center"
                            style={{
                                backgroundImage: "linear-gradient(#EEE,#555)",
                                borderStartEndRadius: 80,
                            }}
                        >
                            <Image
                                src={require("../public/kubah.png")}
                                alt="Kubah"
                                width={35}
                            />
                            <p
                                style={{
                                    marginLeft: 10,
                                    margin: "auto",
                                }}
                            >
                                Isra Mi'raj 21 hari lagi
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end">
                            <Image
                                src={require("../public/kubah2.png")}
                                alt="Kubah"
                                width={60}
                            />
                        </div>
                        <div
                            className="d-flex flex-row p-4 align-items-center"
                            style={{
                                backgroundImage: "linear-gradient(#EEE,#555)",
                                borderStartStartRadius: 80,
                            }}
                        >
                            <p
                                style={{
                                    marginLeft: 10,
                                    margin: "auto",
                                }}
                            >
                                Isra Mi'raj 21 hari lagi
                            </p>
                            <Image
                                src={require("../public/kubah.png")}
                                alt="Kubah"
                                width={35}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderRightMosque = () => {
        return (
            <div className="d-flex justify-content-end">
                <div
                    style={{
                        backgroundImage: 'url("/kas.png")',
                        paddingTop: 85,
                        paddingLeft: 15,
                        paddingRight: 15,
                        backgroundRepeat: "no-repeat",
                        // height: 400,
                        width: 180,
                        backgroundSize: "100%",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#48AB99",
                            paddingTop: 5,
                            paddingBottom: 5,
                            marginBottom: 5,
                        }}
                        className="text-center rounded"
                    >
                        <div style={{ fontSize: 12 }}>SALDO</div>
                        <div className="text-white" style={{ fontSize: 10 }}>
                            MINGGU/AHAD
                        </div>
                        <div style={{ fontSize: 6 }}>
                            15 NOVEMBER 21/22 RABIUL AKHIR 1444H
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "rgba(72, 166, 149, 0.5)",
                            paddingTop: 5,
                            paddingBottom: 5,
                            marginBottom: 5,
                        }}
                        className="text-center rounded"
                    >
                        <div className="text-white" style={{ fontSize: 12 }}>
                            Rp 2.000.000.000,-
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#48AB99",
                            paddingTop: 5,
                            paddingBottom: 5,
                            marginBottom: 5,
                            marginTop: 5,
                        }}
                        className="text-center rounded"
                    >
                        <div style={{ fontSize: 12 }}>PEMASUKAN</div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "rgba(72, 166, 149, 0.5)",
                            paddingTop: 5,
                            paddingBottom: 5,
                            marginBottom: 5,
                        }}
                        className="text-center rounded"
                    >
                        <div className="fs-7 text-white">
                            Rp 2.000.000.000,-
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#48AB99",
                            paddingTop: 5,
                            paddingBottom: 5,
                            marginBottom: 5,
                            marginTop: 5,
                        }}
                        className="text-center rounded"
                    >
                        <div style={{ fontSize: 12 }}>PENGELUARAN</div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "rgba(72, 166, 149, 0.5)",
                            paddingTop: 5,
                            paddingBottom: 5,
                            marginBottom: 5,
                        }}
                        className="text-center rounded"
                    >
                        <div className="fs-7 text-white">
                            Rp 2.000.000.000,-
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderClockInformation = () => {
        return (
            <div
                className="col-2 rounded"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
            >
                <Clock
                    format={"HH:mm:ss"}
                    ticking={true}
                    timezone={"Asia/Jakarta"}
                    className="text-white fs-3"
                />
            </div>
        );
    };

    const renderSchedules = (name, time) => {
        return (
            <div className="col-2">
                <div>
                    <div
                        className="card-header d-flex justify-content-between"
                        style={{
                            fontFamily: "Roboto",
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            color: "white",
                        }}
                    >
                        {name}
                        <Image
                            src={require("../public/bulan-sabit.png")}
                            alt="Kubah"
                            width={20}
                        />
                    </div>
                    <div
                        className="card-body text-center"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    >
                        <h5 className="card-title">{time}</h5>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div
                style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Image
                    src="/background.jpg"
                    alt="Mountains with snow"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="container-fluid">
                <div className="row p-3 align-items-center">
                    {renderLeftInformation()}
                    {renderCenterInformation()}
                    {renderClockInformation()}
                </div>
                <div className="row bg-warning">
                    <div className="col-3">{renderLeftMosque()}</div>
                    <div className="col-6">{renderCenterBismillah()}</div>
                    <div className="col-3">{renderRightMosque()}</div>
                </div>
                <div className="row">
                    {renderSchedules("IMSYAK", "04:09")}
                    {renderSchedules("SHUBUH", "04:09")}
                    {renderSchedules("SYURUQ", "04:09")}
                    {renderSchedules("DZUHUR", "04:09")}
                    {renderSchedules("ASHAR", "04:09")}
                    {renderSchedules("MAGHRIB", "04:09")}
                    {renderSchedules("ISYA", "04:09")}
                </div>
                <div
                    className="row fixed-bottom w-100"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                    <Marquee>
                        RUNNING TEKS "RAMADHAN TIBA RAMADHAN TIBA"
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Index;
