const API_KEY = "7c903328e12b3eeae22ce639a390f525";
// 4729f8046d161c403075a83612cd6838
const BASE_URL = "https://api.themoviedb.org/3";


export const getMedias = async (url) => {
 
  try {
    const res = await fetch(
      url,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;

  } catch (e) {
    console.log(e);
  }
};

export const getTrendingMedias = async (type) => {
  
  try {
    const res = await fetch(
      `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTopratedMedias = async (type) => {
  try {

    const res = await fetch(
      `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {

    console.log(e);
  }
};

export const getPopularMedias = async (type,pageno) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US&page=${pageno}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMoviesByGenre = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieVideosByID = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );


    const data = await res.json();

    console.log('video',data )

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieSearchResults = async (type, query,page) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&include_adult=false&language=en-US&query=${query}&page=${page}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieDetailsByID = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data ;
  } catch (e) {
    console.log(e);
  }
};

export const getSimilarTVorMovies = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getAllfavorites = async (uid, accountID) => {
  try {
    const res = await fetch(
      `/api/favorites/get-all-favorites?id=${uid}&accountID=${accountID}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNowPlayingMedias = async (type) => {
  
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/now_playing?api_key=${API_KEY}&include_video=true&page=2`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};