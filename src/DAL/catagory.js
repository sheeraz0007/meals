import { invokeApi } from "src/utils";

export const catagoryDetailsAPI = async (data) => {
  const requestObj = {
    path: `api/json/v1/1/search.php?s=`,
    method: "GET",
    headers: {
      // 'x-sh-auth': 1234
    },
    // postData: data,
  };
  return invokeApi(requestObj);
};
