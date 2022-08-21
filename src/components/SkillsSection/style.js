import styled from 'styled-components';

export const Container = styled.section`
    width: 95vw;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
    gap: 5rem;
    justify-content: space-around;
    h2 {
        font-size: 3rem;
        color: #0029FF;
        align-self: center;
    }
`

export const SkillsCardContainer = styled.article`
    display: flex;
    gap: 4.25rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    figcaption {
        text-align: center;
    }
`
export const LanguageLevelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`
export const Wrapper = styled.div`
    p {
        font-weight: bold;
        font-size: 1.1rem;
        padding-bottom: 0.75rem;
    }
    div {
        display: flex;
        gap: 1.25rem;
        align-items: center;
        justify-content: space-between;
        div {
            height: 0.65rem;
            background-color: ${props => props.lg_level_bg || '#FF4E79'};
            width: ${props => props.lg_level_wd || '100%'};
        }
    }

`