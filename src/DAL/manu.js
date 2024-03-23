import { invokeApi } from "src/utils";

export const manuListingAPI = async (data) => {
  const requestObj = {
    path: `api/json/v1/1/categories.php`,
    method: "GET",
    headers: {
      // 'x-sh-auth': 1234
    },
    postData: data,
  };
  return invokeApi(requestObj);
};
