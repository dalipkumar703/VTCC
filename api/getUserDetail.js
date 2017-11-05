

export default async function checkAadharSubmit(email){
  try {
     let response = await fetch('https://0b380155.ngrok.io/api/aadhar-check/'+email,{
       method:'GET'

     });
     let responseJson = await response.json();
      console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
