import axios from "axios";
import { cityIOSettings } from "../settings/settings";

/**
 * Get API call using axios
 */

export const getAPICall = async (URL) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

/**
 * convert rgb to hex
 */
export function rgbToHex(r, g, b) {
  function valToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  return "#" + valToHex(r) + valToHex(g) + valToHex(b);
}

/**
 * convert hex to rgb array
 */
export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

/**
 *
 * @param {string} hexString test if vaild 3->6 HEX color
 */
export const testHex = (hexString) => {
  let isHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(hexString);
  return isHex;
};

/**
 * checks if edits are done (toggled off)
 * than returns a redux state
 * with grid edits payload
 */
export const postToCityIO = (data, tableName, endPoint) => {
  let postURL = cityIOSettings.cityIO.baseURL + "table/" + tableName + endPoint;

  const options = {
    method: "post",
    url: postURL,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  axios(options)
    .then((res) => {
      if (res.data.status === "ok") {
        console.log(`--> cityIO endpoint ${postURL} was updated <--`);
      }
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
};

const cityIObaseURL = cityIOSettings.cityIO.baseURL;

export const fetchJSON = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const getTablePrevCommitHash = async (id) =>
  await fetchJSON(`${cityIObaseURL}commit/${id}/`).then((c) => {
    return { parent: c.parent, meta: c };
  });

export const getTableID = async (tableName) =>
  await fetchJSON(
    `${cityIObaseURL}table/${tableName}/meta/hashes/GEOGRIDDATA/`
  );

export const getCommit = async (id) =>
  await fetchJSON(`${cityIObaseURL}commit/${id}/`);

export const getModule = async (id) =>
  await fetchJSON(`${cityIObaseURL}module/${id}/`);

/**
 * Compute the middle of the grid and return the coordinates
 */

export const computeMidGridCell = (cityIOdata) => {
  const lastCell =
    cityIOdata?.GEOGRID?.features[cityIOdata?.GEOGRID?.features?.length - 1]
      ?.geometry?.coordinates[0][0];
  const firstCell =
    cityIOdata?.GEOGRID?.features[0]?.geometry?.coordinates[0][0];
  const midGrid = [
    (firstCell[0] + lastCell[0]) / 2,
    (firstCell[1] + lastCell[1]) / 2,
  ];
  return midGrid;
};
