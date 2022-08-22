import React from 'react';

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-fit bg-gradient-to-b from-gray-800
             to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
                <div className="pb-8 mt-10">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                        About
                    </p>
                </div>

                <p className="text-xl mt-10">
                    I am passionate about all kinds of technologies, programing languages and software development. Currently, I'm taking a Full Stack Web Developer course at Academlo, thanks to this course I have gained knowledge in React, Javascript, CSS, HTML, Redux, React Router, GitHub, Bootstrap, and Tailwind. This knowledge has granted me the title of Front-End Developer.
                </p>

                <br />

                <p className="text-xl">
                    I have spent the last couple of years as a bilingual customer service representative, therefore, I can confidently speak two languages, English and Spanish. Even though this job may not be related to the IT world it has taught me tremendous skills such Active Listening, Complex Problem Solver, Multitasking and many other skills that allows to fulfill my goals.
                </p>
            </div>
        </div>
    );
};
export default About;