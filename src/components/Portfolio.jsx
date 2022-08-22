import React from 'react';
import crud from "../assets/portfolio/crud.png"
import phrases from "../assets/portfolio/phrases.png"
import pokedex from "../assets/portfolio/pokedex.png"
import ricknmorty from "../assets/portfolio/ricknmorty.png"
import store from "../assets/portfolio/store.png"
import weather from "../assets/portfolio/weather.png"

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: crud,
            href: "https://users-alex-forms.netlify.app",
            hrefCode: "https://github.com/alexht93/UsersForm"
        },
        {
            id: 2,
            src: phrases,
            href: "https://phrases-alexh-torres.netlify.app",
            hrefCode: "https://github.com/alexht93/ColorsPage"
        },
        {
            id: 3,
            src: pokedex,
            href: "https://pokedex-alexh-torres.netlify.app",
            hrefCode: "https://github.com/alexht93/Pokedex"
        },
        {
            id: 4,
            src: ricknmorty,
            href: "https://ricknmorty-alexh-torres.netlify.app",
            hrefCode: "https://github.com/alexht93/Rick-Morty"
        },
        {
            id: 5,
            src: store,
            href: "https://react-ecommerce-aht.netlify.app",
            hrefCode: "https://github.com/alexht93/Store-project"
        },
        {
            id: 6,
            src: weather,
            href: "https://weather-app-alexhernandez.netlify.app",
            hrefCode: "https://github.com/alexht93/WeatherApp"
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8 mt-16">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href, hrefCode }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                    href={href}
                                    target="_blank"
                                >
                                    Demo
                                </a>
                                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                    href={hrefCode}
                                    target="_blank">
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;