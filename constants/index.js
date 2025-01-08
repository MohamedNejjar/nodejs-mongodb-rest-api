module.exports = {
  defaultServerResponse: {
    status: 400,
    massage: "",
    body: {},
  },
  productMessage: {
    ProductCreated: "product created successfully ! ",
    ProductFetched: "product fetched successfully !",
    ProductDeleted :"product deleted successfully !",
    NOT_FOUND: "PRODUCT NOT FOUND",
    NOT_UPDATED: "Product update does not exist",
    NOT_DELETE: "Product deletion does not exist",
  },
  usersMessage:{
     createUser:" account created successfully !",
     DUPLICATE_EMAIL:"EMAIL IS ALREADY EXIST"
     
  } ,  
  

  requestValidationMessage: {
    Bad_Request: "Invalid field",
  },
  DataBaseMessage: {
    InvalidID: "invalid id ",
  },
};
