import React from 'react';

const SectionTitle = ({ t1, t2, t3 }) => {
    return (
        <div className='mt-10 mb-10'>
            <h3 className="text-2xl  text-center text-[#888]">{t1}</h3>
            <h2 className="text-4xl font-semibold text-center">{t2}</h2>
            <h3 className="text-xl text-[#555] text-center">{t3}</h3>
        </div >
    );
};

export default SectionTitle;