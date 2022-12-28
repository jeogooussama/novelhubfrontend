import React from "react";
import "./featurd.css";
import useFetch from "../../hooks/useFeachF";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Featurd() {
  const { data, loading } = useFetch(
    "https://novelhub.adaptable.app/novel?limit=5"
  );
  console.log(data);
  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 1rem;
    position: relative;
  `;
  return (
    <div className="fuatrud">
      <div className="FeatrudContainer">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="FeaturdItems">
              <div className="Tags">
                <span className="tag">{"اكشن"}</span>
              </div>
              {data
                .filter((data) => data.tags.includes("أكشن"))
                .map((data, index) => (
                  <div className="featrudBox" key={index}>
                    <StyledLink to={`/novel/${data._id}`}>
                      <img src={data.image} alt="" srcSet="" className="nImg" />
                    </StyledLink>

                    <div className="FeaturdBoxInfo" key={data.id}>
                      <h3 className="title">{data.title} </h3>
                    </div>
                  </div>
                ))}
              {/*  */}
            </div>
          </>
        )}
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="FeaturdItems">
              <div className="Tags">
                <span className="tag">{"دراما"}</span>
              </div>
              {data
                .filter((data) => data.tags.includes("دراما"))
                .map((data, index) => (
                  <div className="featrudBox" key={index}>
                    <StyledLink to={`/novel/${data._id}`}>
                      <img src={data.image} alt="" srcSet="" className="nImg" />
                    </StyledLink>
                    <div className="FeaturdBoxInfo">
                      <h3 className="title">{data.title} </h3>
                    </div>
                  </div>
                ))}
              {/*  */}
            </div>
          </>
        )}
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="FeaturdItems">
              <div className="Tags">
                <span className="tag">{"فانتازي"}</span>
              </div>
              {data &&
                data
                  .filter((data) => data.tags.includes("فانتازي"))
                  .map((data, index) => (
                    <div className="featrudBox" key={index}>
                      <StyledLink to={`/novel/${data._id}`}>
                        <img
                          src={data.image}
                          alt=""
                          srcSet=""
                          className="nImg"
                        />
                      </StyledLink>
                      <div className="FeaturdBoxInfo">
                        <h3 className="title">{data.title} </h3>
                        
                      </div>
                    </div>
                  ))}
              {/*  */}
            </div>
          </>
        )}

        {loading ? (
          "loading"
        ) : (
          <>
            <div className="FeaturdItems">
              <div className="Tags">
                <span className="tag">{"رومانسي"}</span>
              </div>
              {data
                .filter((data) => data.tags.includes("رومانسي"))
                .map((data, index) => (
                  <div className="featrudBox" key={index}>
                    <StyledLink to={`/novel/${data._id}`}>
                      <img src={data.image} alt="" srcSet="" className="nImg" />
                    </StyledLink>

                    <div className="FeaturdBoxInfo" key={data.id}>
                      <h3 className="title">{data.title} </h3>
                    </div>
                  </div>
                ))}
              {/*  */}
            </div>
          </>
        )}
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="FeaturdItems">
              <div className="Tags">
                <span className="tag">{"Action"}</span>
              </div>
              {data
                .filter((data) => data.tags.includes("action"))
                .map((data, index) => (
                  <div className="featrudBox" key={index}>
                    <StyledLink to={`/novel/${data._id}`}>
                      <img src={data.image} alt="" srcSet="" className="nImg" />
                    </StyledLink>

                    <div className="FeaturdBoxInfo" key={data.id}>
                      <h3 className="title">{data.title} </h3>
                    </div>
                  </div>
                ))}
              {/*  */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Featurd;
