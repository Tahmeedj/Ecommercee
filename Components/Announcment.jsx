import styled from "styled-components";

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    display flex
    allign-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


const Announcment = () => {
  return (
    <Container>
        Super Deal! Free shipping on orders over 50$
    </Container>
  )
}

export default Announcment