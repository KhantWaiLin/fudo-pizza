import sanityClient from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
    projectId : "95yjfnjx",
    dataset : "production",
    apiVersion : "2022-08-22",
    useCdn : true,
    ignoreBrowserTokenWarning: true,
    token: "skqJMYO1bRAv3Ry73yGcdcARmhGLVO2X2oSLOoibwShtmRGoyJSUHN4mNet3ajQJTfgwxPlNcjm3SKAdJr9SMEX9AQvUwgaF5QOfxAgUF0Uq0A1NyTqOvqZbzMGpukTwjudKb4lckOMNnRodqXtZ8XNCsg11vdxG0lNb7Yh2VUmwZ7DCR2H3",
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);
