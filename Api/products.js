import Api from "./api";

export default class products {

    static async get() 
    {
        const res = await Api.request("GET", "products");
        return res;
    }
    static async show(_id)
    {
        const res = await Api.request("GET", "products/"+_id);
        return res;
    }   

}