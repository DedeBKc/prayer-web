import Clock from "react-live-clock";
import Image from "next/image";

const Index = () => {
    const renderSchedules = (name, time) => {
        return (
            <div className="col">
                <div className="card">
                    <div
                        className="card-header d-flex justify-content-between"
                        style={{
                            fontFamily: "Roboto",
                        }}
                    >
                        {name}
                        <Image
                            src={require("../public/bulan-sabit.png")}
                            alt="Kubah"
                            width={20}
                        />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{time}</h5>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container-fluid">
            <div className="row p-3 align-items-center">
                <div className="col-2 bg-info"></div>
                <div className="col-8">
                    <div
                        class="d-flex flex-row p-4"
                        style={{
                            backgroundImage: "linear-gradient(#EEE,#555)",
                        }}
                    >
                        <Image
                            src={require("../public/kubah.png")}
                            alt="Kubah"
                        />
                        <div>
                            <p>Mesjid Al-Ikhlas</p>
                            <p>
                                PESONA TELAGA CIBINONG RT 004 RW 02, KEL HARAPAN
                                JAYA
                            </p>
                            <p>CIBINONG - KABUPATEN BOGOR</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 bg-danger">
                    <Clock
                        format={"HH:mm:ss"}
                        ticking={true}
                        timezone={"US/Pacific"}
                        className="text-white fs-3"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <Image
                        src={require("../public/bismillah.png")}
                        alt="Kubah"
                        width={600}
                    />
                    <div className="row">
                        <div className="col">
                            {/* <Image
                                src={require("../public/kubah2.png")}
                                alt="Kubah"
                                width={60}
                            /> */}
                            {/* <div
                                class="d-flex flex-row p-4 align-items-center"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(#EEE,#555)",
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
                            </div> */}
                        </div>
                        {/* <div className="col">
                            <div className="d-flex justify-content-end">
                                <Image
                                    src={require("../public/kubah2.png")}
                                    alt="Kubah"
                                    width={60}
                                />
                            </div>
                            <div
                                class="d-flex flex-row p-4 justify-content-end"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(#EEE,#555)",
                                    borderStartStartRadius: 80,
                                }}
                            >
                                <p
                                    style={{
                                        marginRight: 10,
                                        margin: "auto",
                                    }}
                                >
                                    Kajian Subuh Minggu
                                </p>
                                <Image
                                    src={require("../public/kubah.png")}
                                    alt="Kubah"
                                    width={20}
                                    className="mr-4"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col"></div>
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
                className="row fixed-bottom"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
                <div className="col">
                    <marquee
                        direction="left"
                        className="text-white fw-bolder fs-5"
                        style={{ fontFamily: "Roboto" }}
                    >
                        RUNNING TEKS "RAMADHAN TIBA RAMADHAN TIBA"
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default Index;
