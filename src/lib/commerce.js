import Commerce from "@chec/commerce.js";

const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
console.log(checAPIKey);
export const commerce = new Commerce(checAPIKey);
