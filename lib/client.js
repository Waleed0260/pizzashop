import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const  client = createClient({
    projectId: '478uf0az',
    dataset: 'production',
    apiVersion: "2023-03-03",
    useCdn: true,
    token: "skTAFMKlwVlnh904ENcH40prjwnBs2oKhMewsrj7t1LchTsXJkVs5gyuZ2oTU2v2pI4u7u9dx1NQjoHD1Wz0PHTowgCocCoK1m8zwaBV4Y3ohIgvfM9qivK0LelAgQh16xlnuJR3L9MW7GONYEnokbFQ8ZOIbRl2HJBhoiESlwza2zXg7jxI"
})

const builder = imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);