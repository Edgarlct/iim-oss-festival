import {ISearchParams} from "./interfaces/ISearchParams";
import {sendRequest} from "./Tools/Api";

class Festival {

  months = [
    "01 (janvier)", "02 (février)", "03 (mars)", "04 (avril)", "05 (mai)", "06 (juin)", "07 (juillet)", "08 (août)",
    "09 (septembre)", "10 (octobre)", "11 (novembre)", "12 (décembre)"
  ];

  getMonthParam(month:number):string
  {
    if (month < 1 || month > 12) throw new Error("Invalid month");

    return encodeURI(`refine.mois_habituel_de_debut=${this.months[month - 1]}`);
  }

  getDepartmentParam(department:number):string
  {
    if (department < 1 || (department > 95 && ![971, 972, 973, 974, 976].includes(department))) throw new Error("Invalid department");

    return encodeURI(`refine.departement=${department}`);
  }

  getPostalCodeParam(postalCode:string):string
  {
    if (postalCode.length !== 5) throw new Error("Invalid postal code");

    return encodeURI(`refine.code_postal=${postalCode}`);
  }

  async getFestivals(params:ISearchParams) {
    const searchParams:string[] = [];

    if (params.month) {
      searchParams.push(this.getMonthParam(params.month));
    }

    if (params.department) {
      searchParams.push(this.getDepartmentParam(params.department));
    }

    if (params.rows && params.rows > 0) {
      searchParams.push(`rows=${params.rows}`);
    }

    if (params.start && params.start > 0) {
      searchParams.push(`start=${params.start}`);
    }

    if (params.postalCode) {
      searchParams.push(this.getPostalCodeParam(params.postalCode));
    }

    return await sendRequest(searchParams.join("&"));
  }

}


module.exports = Festival;
