import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwindcss.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png';
import firebase from '../assets/firebase.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import npm from '../assets/npm.png';
import vscode from '../assets/vscode.png';
import astro from '../assets/astro.png';
import typescript from '../assets/typescript.png';

const Technologies = () => {
    return (
        <section className="technologies">
            <h2>Tecnologías</h2>
            <div className='technologies-container'>
            <div className="frontend">
                <h2>Frontend</h2>
                <div className='frontend-container'>
                    <img src={html} alt="Logo de HTML"/>
                    <img src={css} alt="Logo de CSS"/>
                    <img src={js} alt="Logo de Javascript"/>
                    <img src={react} alt="Logo de React.js"/>
                    <img src={tailwind} alt="Logo de Tailwind"/>
                </div>
            </div>
            <div className="backend">
                <h2>Backend</h2>
                <div className='backend-container'>
                    <img src={php} alt="Logo de PHP"/>
                    <img src={mysql} alt="Logo de Mysql"/>
                    <img src={firebase} alt="Logo de Firebase"/>
                </div>
            </div>
            <div className="tools">
                <h2>Herramientas</h2>
                <div className='tools-container'>
                    <img src={git} alt="Logo de Git"/>
                    <img src={github} alt="Logo de Github"/>
                    <img src={npm} alt="Logo de NPM"/>
                    <img src={vscode} alt="Logo de Visual Studio Code"/>
                </div>
            </div>
            <div className="learning">
                <h2>Aprendiendo</h2>
                <div className='learning-container'>
                    <img src={astro} alt="Logo de Astro"/>
                    <img src={typescript} alt="Logo de Typescript"/>
                </div>
            </div>
            </div>
        </section>
    );
}
 
export default Technologies;