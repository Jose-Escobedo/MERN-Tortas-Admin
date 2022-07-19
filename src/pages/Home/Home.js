import Chart from "../../components/Chart/Chart";
import styled from "styled-components";
import { userData } from "../../seedData";
import SmallWidget from "../../components/SmallWidget/SmallWidget";
import LargeWidget from "../../components/LargeWidget/LargeWidget";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <HomeContainer>
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userStats}
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
