<template>
    <div>  
        <div class="h-full w-full bg-white mx-auto max-w-fullHD">
            <div class="text-start px-3 xl:px-20 3xl:px-40 mb-2 xl:w-12/2">
                <div class="mx-auto grid gap-2 lg:max-w-none grid-cols-4 md:grid-cols-6 xl:grid-cols-auto">
                    <button class="rounded-full border bg-orange-600 text-white text-xs p-1" v-for="category in categories" v-on:click="searchProducts(category.ID)">
                        {{ category.name }}
                    </button>
                    <button class="rounded-full border bg-orange-600 text-white text-xs p-1" v-on:click="allProducts()">
                        Todos
                    </button>
                </div>
            </div>

            <div class="text-start px-3 xl:px-20 3xl:px-40">
                <h2 class="text-3xl text-black font-montserratBold">
                    Productos
                </h2>
            </div>
            <div class="px-3 xl:px-20 3xl:px-40">
                <div class="mx-auto w-full">
                    <div class="mx-auto mt-8 mb-8 grid gap-2 lg:max-w-none grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        <div class="mx-auto flex flex-col overflow-hidden rounded-lg shadow-lg border border-gray-300" 
                            v-for="product in products" >
                            <NuxtLink :to="'/products/'+product.ID">
                                <div class="flex-shrink-0">
                                    <img class="h-auto w-full object-cover" :src="product.ProductImages[0].image" alt="">
                                </div>
                                <div class="h-32">
                                    <div class="flex flex-1 flex-col justify-between bg-white p-6 h-4/5">
                                        <div class="flex-1">
                                            <a href="#" class="mt-2 block">
                                                <p class="text-md lg:text-lg font-monserratBold text-black">{{ product.name }}</p>
                                            </a>
                                            <a href="#" class="mt-2 block">
                                                <p class="text-xs lg:text-md font-bold font-monserratBold text-black">${{ product.price }}</p>
                                            </a>
                                            <p class="text-xs font-monserratRegular text-black">
                                                <a href="#" class="hover:underline" v-for="category in product.ProductCategories">{{ category.name }},</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Products from '~~/Api/products';
  import Categories from '~~/Api/categories';

  definePageMeta({
      //middleware: ["auth"],
      layout: "web",
  });
  
  export default {
      data(){
          return {
              products:[],
              categories:[],
              api_url_asset: null,
              
          }
      },
      async mounted(){
        const config = useRuntimeConfig();
        this.api_url_asset = config.public.API_URL_ASSETS

        this.products = await Products.get();
        console.log('products',this.products);

        this.categories = await Categories.get();
        console.log('categories',this.categories);
      },
      methods:{
        async searchProducts(category_id){
            var category = await Categories.products(category_id);
            this.products = category.CategoriesProducts;
            console.log('products',this.products);
        },
        async allProducts(){
            this.products = await Products.get();
            console.log('products',this.products);
        }
      }

  }
</script>
