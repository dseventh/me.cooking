'use strict';


function userGet(event, context, callback)  {
  // The get hook simply puts the header in the payload and returns it
  let response = { id : 100 , message : "Get invoked"} ;
  let body = JSON.stringify(response);
  callback(null, { statusCode : 200 , body   });
}

function userPatch(event, context, callback)  {
  // The get hook simply puts the header in the payload and returns it
  let response = { id : 100 , message : "Patch invoked"} ;
  let body = JSON.stringify(response);
  callback(null, { statusCode : 200 , body   });
}

function userDelete(event, context, callback)  {
  // The get hook simply puts the header in the payload and returns it
  let response = { id : 100 , message : "Delete invoked"} ;
  let body = JSON.stringify(response);
  callback(null, { statusCode : 200 , body   });
}

// We are interested in only those cases where the user is activated or deactiveted
function userPost(event, context, callback)  {
  let response = { id : 100 , message : "Post invoked"} ;
  let body = JSON.stringify(response);
  callback(null, { statusCode : 200 , body   });
}



exports.handler = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  // We should handle both the  get and post requests from here for the hook
  var verb = event.httpMethod.toUpperCase();
  var f = null;
  switch (verb){
    case 'GET':
      f = userGet;
      break;
    case 'POST':
      f = userPost;
      break;
    case 'PATCH':
      f = userPatch;
      break;
    case 'DELETE':
      f = userDelete;
      break;
    default:
      console.log('Unsupported method');    
  }
  if (!f) {
    callback( null, { statusCode : 500, body : JSON.stringify({ message : 'Method not supported'})});
  }
  else 
    f(event, context,callback);
};
