import Api from "./api";

export default class categories {

    static async get() 
    {
        const res = await Api.request("GET", "categories");
        return res;
    }
    static async products(category_id)
    {
        const res = await Api.request("GET", "categories/"+category_id+"/products");
        return res;
    }   

}