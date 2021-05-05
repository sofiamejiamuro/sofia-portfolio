'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 

    // context input 
  // context output : getNameContext
  function welcome(agent) {
    agent.add(`Hola, soy tu Gúru de viaje y te voy a ayudar a encontrar la mejor oferta para tu viaje. Antes de comenzar dime ¿Cómo te llamas?`);
  }
  
  function fallback(agent) {
    agent.add(`Lo siento, no entendí. ¿Podrías escribirlo una vez más?`);
  }

  // context input : getNameContext
  // context output: userNameContext
  // $userName
  function isDestinationKnownHandler(agent) {
    let userName = agent.parameters.userName;
    let startFlow = Date.now();
    db.collection("travelInfo").add({ 
      userTravelDate: startFlow,
      name: userName,
    userDeparture: "",
       userDestination: "",
    });
    agent.add(`$name, comencemos la búsqueda de ofertas ¿Ya tienes un destino en mente? 🤔`);
  }

   // context input : userNameContext
  // context output: fillDestination Context  userNameContext

  function fillDestinationLocationHandler(agent){
    agent.add(`No se diga más! ¿A dónde quieres ir?`);
  }


   // context input : userNameContext
  // context output: fillDestination Context  userNameContext
  function fillDepartureLocationHandler(agent){
    const destination = agent.parameters.destinationLocation;
    agent.add(`Entonces quieres ir a ${destination}. Suena Increíble! ¿De dónde sales?`);
  }
  
     // context input : userNameContext
  // context output: fillDestination Context  userNameContext
  function isDateKnownHandler(agent){
    const departure = agent.parameters.departureLocation;
    agent.add(`Perfecto, !, sales de ${departure}, ¿Ya tienes la fecha?`);
  }
  

  // 
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('isDestinationKnown', isDestinationKnownHandler);
  intentMap.set('fillDestinationLocation', fillDestinationLocationHandler);
  intentMap.set('fillDepartureLocation',fillDepartureLocationHandler);
  intentMap.set('isDateKnown',isDateKnownHandler);


  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);


  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

});
