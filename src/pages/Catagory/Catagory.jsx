import { Container, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

import { NavBackHeader, Page } from "src/components";
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

const useStyles = makeStyles(() => ({
  loading: {
    marginLeft: "50%",
    marginTop: "20%",
  },
}));
const Catagory = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const params = useParams();

  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [catagories, setCatagories] = useState([]);

  const handleNav = () => {
    navigate(-1);
  };
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  const getManuList = async () => {
    setIsLoading(true);
    const result = await catagoryDetailsAPI(params?.id);

    if (result) {
      setIsLoading(false);

      setCatagories(result?.meals);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
    }
  };
  useEffect(() => {
    getManuList();
  }, []);
  if (isLoading === true) {
    return <CircularProgress className={classes.loading} color="primary" />;
  }
  return (
    <Page title="Manu ">
      <Container maxWidth="xl" className="mt-3">
        <div className="row">
          <div className="col-12">
            <h2>{state?.strCategory} </h2>
          </div>
          {catagories.map((value, index) => {
            return (
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card mt-4 manu-cards-shadow h-100 overflow-hidden ">
                  {/* <img
                    src={value?.strMealThumb}
                    className="card-img-left example-card-img-responsive"
                    alt="Programme"
                  /> */}
                  <div className="card-body d-flex">
                    <div className="row align-items-center">
                      <div className="row col-4">
                        <img
                          src={value?.strMealThumb}
                          className=""
                          alt="Programme"
                        />
                      </div>
                      <div className="row col-8">
                        <div className="col-12">
                          <h3 className="h2-heading">{value.strMeal}</h3>
                        </div>
                        <p className=" manu-card-desc mb-3 col-12">
                          {truncateString(value.strInstructions, 150)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Page>
  );
};

export default Catagory;
