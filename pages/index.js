import Clock from "react-live-clock";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Index = () => {
    const renderLeftInformation = () => {
        return (
            <div
                className="d-flex flex-row rounded p-2 gap-3"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
            >
                <div>
                    <div
                        style={{
                            backgroundImage: 'url("/calendar.png")',
                            paddingTop: 20,
                            paddingLeft: 15,
                            paddingRight: 15,
                            backgroundRepeat: "no-repeat",
                            height: 110,
                            width: 85,
                            backgroundSize: "100%",
                        }}
                    >
                        <div
                            style={{ fontSize: 12, marginTop: 5 }}
                            className="text-center"
                        >
                            AHAD
                        </div>
                        <div
                            style={{ fontSize: 25, marginTop: -10 }}
                            className="text-center"
                        >
                            <div
                                className="text-center text-white"
                                style={{ fontSize: 40 }}
                            >
                                20
                            </div>
                            <div
                                className="text-center text-white"
                                style={{ fontSize: 8, marginTop: -10 }}
                            >
                                RABIUL AKHIR
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-center text-white"
                        style={{ fontSize: 20, marginTop: -5 }}
                    >
                        1445 H
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage: 'url("/calendar.png")',
                            paddingTop: 20,
                            paddingLeft: 15,
                            paddingRight: 15,
                            backgroundRepeat: "no-repeat",
                            height: 110,
                            width: 85,
                            backgroundSize: "100%",
                        }}
                    >
                        <div
                            style={{ fontSize: 12, marginTop: 5 }}
                            className="text-center"
                        >
                            AHAD
                        </div>
                        <div
                            style={{ fontSize: 25, marginTop: -10 }}
                            className="text-center"
                        >
                            <div
                                className="text-center text-white"
                                style={{ fontSize: 40 }}
                            >
                                20
                            </div>
                            <div
                                className="text-center text-white"
                                style={{ fontSize: 8, marginTop: -10 }}
                            >
                                RABIUL AKHIR
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-center text-white"
                        style={{ fontSize: 20, marginTop: -5 }}
                    >
                        1445 H
                    </div>
                </div>
            </div>
        );
    };

    const renderCenterInformation = () => {
        return (
            <div className="flex-grow-1 align-content-stretch">
                <div
                    className="d-flex flex-row rounded p-3 align-items-center justify-content-center"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                >
                    <Image
                        src={require("../public/kubah.png")}
                        alt="Kubah"
                        width={90}
                    />
                    <div style={{ marginLeft: 25 }} className="text-center">
                        <div
                            style={{
                                fontSize: 70,
                                fontFamily: "Bismillah Script",
                            }}
                        >
                            Mesjid Al-Ikhlas
                        </div>
                        <div style={{ marginTop: -15 }}>
                            <div
                                className="text-white"
                                style={{ fontSize: 13 }}
                            >
                                PESONA TELAGA CIBINONG RT 004 RW 02, KEL HARAPAN
                                JAYA
                            </div>
                            <div
                                className="text-white"
                                style={{ fontSize: 13 }}
                            >
                                CIBINONG - KABUPATEN BOGOR
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderClockInformation = () => {
        return (
            <div
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
                className="d-flex align-items-center justify-content-between p-3 rounded"
            >
                <Image
                    src={require("../public/timecloud.png")}
                    alt="Kubah"
                    width={80}
                />
                <Clock
                    className="text-white ms-2"
                    format={"HH:mm:ss"}
                    style={{ fontSize: 70 }}
                    ticking={true}
                    timezone={"Asia/Jakarta"}
                />
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
                    height: 440,
                    width: 180,
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
                        <div className="text-white m-auto">
                            <Image
                                src={require("../public/bulan-isya.png")}
                                alt="Kubah"
                                width={30}
                            />
                        </div>
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
                        <div className="d-flex justify-content-start">
                            <Image
                                src={require("../public/kubah2.png")}
                                alt="Kubah"
                                width={60}
                            />
                        </div>
                        <div
                            className="d-flex flex-row p-2 align-items-center"
                            style={{
                                backgroundColor: "#EAD3DB",
                                borderStartEndRadius: 400,
                            }}
                        >
                            <Image
                                src={require("../public/calendar-agenda.png")}
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
                            className="d-flex flex-row p-2 align-items-center"
                            style={{
                                backgroundColor: "#EAD3DB",
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
                                src={require("../public/calendar-agenda.png")}
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
                        paddingTop: 80,
                        paddingLeft: 15,
                        paddingRight: 15,
                        backgroundRepeat: "no-repeat",
                        height: 440,
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
                            borderEndEndRadius: 1000,
                            borderEndStartRadius: 1000,
                        }}
                        className="text-center rounded-top"
                    >
                        <div className="fs-7 text-white">
                            Rp 2.000.000.000,-
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderSchedules = (name, time, iconMonth, isActive = false) => {
        return (
            <div className="flex-fill">
                <div
                    className="card-header d-flex justify-content-between p-2 rounded-top fs-4"
                    style={{
                        fontFamily: "Roboto",
                        backgroundColor: isActive
                            ? "rgba(50,205,50,0.4)"
                            : "rgba(255, 255, 255, 0.3)",
                        color: "white",
                    }}
                >
                    {name}
                    <Image src={iconMonth} alt="Kubah" width={30} />
                </div>
                <div
                    className="card-body text-center rounded-bottom p-2"
                    style={{
                        backgroundColor: isActive
                            ? "rgba(50,205,50,0.5)"
                            : "rgba(255, 255, 255, 0.2)",
                    }}
                >
                    <h5 className="card-title fs-1 text-white">{time}</h5>
                    <div
                        className="text-end text-white"
                        style={{ fontSize: 10 }}
                    >
                        Iqomah 00:10
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
            <div className="p-3">
                <div className="d-flex gap-2">
                    {renderLeftInformation()}
                    {renderCenterInformation()}
                    {renderClockInformation()}
                </div>
                <div className="d-flex flex-row gap-2 align-items-center">
                    <div className="flex-fill">{renderLeftMosque()}</div>
                    <div className="flex-fill text-center">
                        {renderCenterBismillah()}
                    </div>
                    <div className="flex-fill">{renderRightMosque()}</div>
                </div>
            </div>
            <div
                className="d-flex flex-column fixed-bottom"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
                <div className="d-flex flex-row gap-2 p-3">
                    {renderSchedules(
                        "IMSYAK",
                        "04:09",
                        require("../public/bulan-imsyak.png"),
                        false
                    )}
                    {renderSchedules(
                        "SHUBUH",
                        "04:09",
                        require("../public/bulan-shubuh.png"),
                        false
                    )}
                    {renderSchedules(
                        "SYURUQ",
                        "04:09",
                        require("../public/bulan-isya.png"),
                        false
                    )}
                    {renderSchedules(
                        "DZUHUR",
                        "04:09",
                        require("../public/bulan-dzuhur.png"),
                        false
                    )}
                    {renderSchedules(
                        "ASHAR",
                        "04:09",
                        require("../public/bulan-ashar.png"),
                        false
                    )}
                    {renderSchedules(
                        "MAGHRIB",
                        "04:09",
                        require("../public/bulan-magrib.png"),
                        false
                    )}
                    {renderSchedules(
                        "ISYA",
                        "04:09",
                        require("../public/bulan-isya.png"),
                        true
                    )}
                </div>
                <Marquee
                    className="fs-4 text-white p-2"
                    speed={50}
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        fontWeight: "bolder",
                    }}
                    gradient={false}
                >
                    RUNNING TEKS "RAMADHAN TIBA RAMADHAN TIBA"
                </Marquee>
            </div>
        </>
    );
};

export default Index;
