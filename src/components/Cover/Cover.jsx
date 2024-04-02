const Cover = ({ coverImg, coverTitle, coverDescription }) => {
    return (
        <div
            className="hero h-[400px]"
            style={{
                backgroundImage: `url(${coverImg})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-[#151515] bg-opacity-50 px-40 py-20">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{coverTitle}</h1>
                    <p className="mb-5">{coverDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;
