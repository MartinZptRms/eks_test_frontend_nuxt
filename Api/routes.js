export default class Routes {          
  //static host = "http://localhost:8202/api/v2/";
  static getHost(){    
    const config = useRuntimeConfig();
    if(config.public.API_URL){
      return config.public.API_URL      
    }
  }
}
