import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '6f67b325b5d03b39a928232282af228bfce2f09f', queries,  });
export default client;
  