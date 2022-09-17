import React from 'react';
import {
    Container,
    AboutImagesContent,
    TextContent
} from './style';

import AboutImg from '../../assets/about.svg';

let idade = new Date().getFullYear() - 2002;

const AboutSection = () => {
    return (
        <Container id="about">
            <TextContent>
                <h2>Sobre mim</h2>
                <p>
                    Tenho {idade} anos e estou concluíndo a formação de Tecnologia em Sistemas para Internet. Atualmente trabalhando como Desenvolvedora Junior na Proesc, com experiência em atendimento ao cliente(chat/ticket), metódologias ágeis, manutenção em código, resolução de problemas e criação de novas funcionalidades :) </p>
                <p>
                    No mercado de trabalho tenho prática com HTML, CSS, PHP, Laravel, Postgresql e Javascript. Procuro estudar frameworks como ReactJs, React Native, Nextjs e amo participar de eventos e comunidades voltados para open-source como o Hacktoberfest.
                    No meu tempo livre gosto de assistir séries, esportes, jogar videogames e ler!
                </p>
            </TextContent>
            <AboutImagesContent>
                <img src={AboutImg} alt='Image of welcome page' loading="lazy"/>
                <p>Créditos: <a href='https://www.instagram.com/luana.g.m/' target="_blank">@luana.gm</a></p>
            </AboutImagesContent>
        </Container>
    )
};

export default AboutSection;
