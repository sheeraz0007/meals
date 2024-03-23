import { Container, CircularProgress, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Iconify, NavBackHeader, Page } from "src/components";
import { makeStyles } from "@mui/styles";
import { manuListingAPI } from "src/DAL/manu";
import { useSnackbar } from "notistack";
import { catagoryDetailsAPI } from "src/DAL/catagory";
import {
  useNavigate,
  useParams,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify";
import { randomMealAPI } from "src/DAL/random";

const useStyles = makeStyles(() => ({
  loading: {
    marginLeft: "50%",
    marginTop: "20%",
  },
}));
const Random = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const params = useParams();

  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [random, setRandom] = useState([]);

  const handleNav = () => {
    navigate(-1);
  };
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  const getRandomMeal = async () => {
    setIsLoading(true);
    const result = await randomMealAPI();

    if (result) {
      setIsLoading(false);
      console.log(result, "kssssssssssss");
      setRandom(result?.meals);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
    }
  };
  useEffect(() => {
    getRandomMeal();
  }, []);
  if (isLoading === true) {
    return <CircularProgress className={classes.loading} color="primary" />;
  }
  return (
    <Page title="MyFavorites ">
      <Container maxWidth="xl" className="mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <h2>My Favorites </h2>
          </div>
          {random.map((value, index) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-12 mb-4" key={index}>
                <div className="card mt-4 manu-cards-shadow h-100 overflow-hidden ">
                  <img
                    src={value?.strMealThumb}
                    className="card-img-top manu-image"
                    alt="Programme"
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <h3 className="h2-heading">{value.strMeal}</h3>
                      </div>
                    </div>
                    <p className="manu-card-desc mb-3">
                      {truncateString(value.strInstructions, 150)}
                    </p>

                    <div className=" ">
                      <div className="favorites">
                        <Icon
                          icon="mdi:heart"
                          height={25}
                          width={25}
                          style={{ color: "#c01111" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-12 text-center my-2">
          <Button
            variant="outlined"
            onClick={() => {
              getRandomMeal();
            }}
          >
            Generate
          </Button>
        </div>
      </Container>
    </Page>
  );
};

export default Random;
