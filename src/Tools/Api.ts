import {IFestivalData} from "../interfaces/IFestivalData";

export function sendRequest(url: string): Promise<IFestivalData[]>
{
  return new Promise((resolve, reject) => {
    fetch(`https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&${url}`,
      {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.json());
        } else {
          reject(response.statusText);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
