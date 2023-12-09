import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
  projectId: "q8rimqp9",
  dataset: "production",
  apiVersion: "2023-12-09",
  useCdn: false,
};

const client = createClient(config);

export default client;
