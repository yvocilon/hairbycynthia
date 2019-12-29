import styled from "styled-components";

interface Props {
    color?: string
}

export default styled.div<Props>`
    height: 100vh;
    width: 100%;
    background-color: ${ ({ color = "white" }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`