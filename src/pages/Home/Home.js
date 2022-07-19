import Chart from "../../components/Chart/Chart";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <div className="home">
        <Chart title="User Analytics" grid dataKey="Active User" />
        <div className="homeWidgets"></div>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .home {
    flex: 4;
  }
`;
export default Home;
