import uuid from "uuid";
import { call as dynamoDbLib } from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "notes",
    Item: {
        id: uuid.v1(),
        requestid: data.requestid,
        profid: data.profid,
        proffirstname: data.proffirstname,
        proflastname: data.proflastname,
        clientfirstname: data.clientfirstname,
        clientlastname: data.clientlastname,
        clientid: data.clientid,
        ranking: data.ranking,
        comment: data.comment,
        createdat:Date.now(),
        createdby: event.requestContext.identity.cognitoIdentityId,
        isactive : true
    }
  };

  try {
    await dynamoDbLib("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}