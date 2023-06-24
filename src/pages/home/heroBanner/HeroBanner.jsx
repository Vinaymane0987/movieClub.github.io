import React, { useEffect, useState } from "react";
import "./herobanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
  const url = useSelector((state) => state.home.url);
  console.log(url);
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    console.log(bg);
    setBackground(bg);
  }, [data]);

  const handleQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            {" "}
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
