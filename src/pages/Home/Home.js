import Chart from "../../components/Chart/Chart";
import styled from "styled-components";
import { userData } from "../../seedData";
import SmallWidget from "../../components/SmallWidget/SmallWidget";
import LargeWidget from "../../components/LargeWidget/LargeWidget";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";

const Home = () => {
  return (
    <HomeContainer>
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <SmallWidget />
          <LargeWidget />
        </div>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .home {
    flex: 4;
  }
  .homeWidgets {
    display: flex;
    margin: 20px;
  }
`;
export default Home;
