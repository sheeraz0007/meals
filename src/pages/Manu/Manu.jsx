import { Container, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBackHeader, Page } from "src/components";
import { makeStyles } from "@mui/styles";
import { manuListingAPI } from "src/DAL/manu";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(() => ({
  loading: {
    marginLeft: "50%",
    marginTop: "20%",
  },
}));
const Manu = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [catagories, setCatagories] = useState([]);

  const handleNavigateIngredients = (value) => {
    navigate(`/manu/catagory/${value?.idCategory}`, {
      state: value,
    });
  };
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  const getManuList = async () => {
    setIsLoading(true);
    const result = await manuListingAPI();

    if (result) {
      setIsLoading(false);

      setCatagories(result?.categories);
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
            <h2>Manu </h2>
          </div>
          {catagories.map((value, index) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-12 mb-4" key={index}>
                <div className="card mt-4 manu-cards-shadow cursor h-100 overflow-hidden ">
                  <img
                    src={value?.strCategoryThumb}
                    className="card-img-top manu-image"
                    alt="Programme"
                    onClick={() => handleNavigateIngredients(value)}
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <h3
                          className="h2-heading"
                          onClick={() => handleNavigateIngredients(value)}
                        >
                          {value.strCategory}
                        </h3>
                      </div>
                    </div>
                    <p
                      className="manu-card-desc mb-3"
                      onClick={() => handleNavigateIngredients(value)}
                    >
                      {truncateString(value.strCategoryDescription, 150)}
                    </p>
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

export default Manu;
