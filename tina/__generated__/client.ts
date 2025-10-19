import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '68a40d5627450415a2118d3f5fb34e4dd42e5fd1', queries,  });
export default client;
  