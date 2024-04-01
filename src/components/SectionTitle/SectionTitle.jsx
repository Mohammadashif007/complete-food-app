const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center py-9 w-2/6 mx-auto">
            <h3 className="text-[20px] text-orange-300 py-3">
                ---{subHeading}---
            </h3>
            <h2 className=" text-3xl border-y-4 py-5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;
