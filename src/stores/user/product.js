import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "test",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test1",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test2",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test3",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "name",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 10,
        about: "tname",
        status: "open",
        price: 100,
      },
    ],
  }),
  actions: {
    filterProducts(searchText){
     return this.list.filter(product => product.name.includes(searchText))
    }
  }
});
