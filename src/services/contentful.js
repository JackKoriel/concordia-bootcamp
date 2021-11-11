import request, { GET } from "./request";

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry`;

// TODO: Update the method below to utilize contentful's pagination functionality to return only 6 entries
//       NOTE: remember on "load more" it's 6 *additional* entries

//this function is only needed if I wanted to return all articles at ones, but who wants that?
export const getAllArticles = async () => {
  try {
    const response = await request(GET, CONTENTFUL_URL);

    return response.items;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

//I am not using skip here because for some reason it's returning undefined, for today's workshop it doesn't matter but I will work on later to figure it out
export const getPaginatedArticles = async (limit) => {
  try {
    const response = await request(
      GET,
      `${CONTENTFUL_URL}&limit=${limit}&skip=0`
    );

    //I am keeping the splice function commented here for my own reference, you need to modify the GET link to CONTENTFUL_URL and add a skip parameter after async
    // console.log(response.items.slice(0, 6));
    // console.log(limit);
    // console.log("S", skip);
    // return response.items.slice(skip, limit);

    return response.items;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

// TODO: Using the category argument, update the method below by making a GET
//       request and returning entries from contentful filtered by the category.
//       NOTE: this method will need to be connected to ../contexts/Store!
export const getArticlesByCategory = async (category) => {
  return [];
};

// Possibly useful documentation:
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
// - https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/collection-resources-and-pagination
