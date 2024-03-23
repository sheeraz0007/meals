import { invokeApi } from "src/utils";

export const randomMealAPI = async (data) => {
  const requestObj = {
    path: `api/json/v1/1/random.php`,
    method: "GET",
    headers: {
      // 'x-sh-auth': 1234
    },
    // postData: data,
  };
  return invokeApi(requestObj);
};
