// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt?api-version=2018-12-01.8.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9f032891-2c6b-4dbf-b917-1882ad92f135',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt?api-version=2018-12-01.8.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9f032891-2c6b-4dbf-b917-1882ad92f135',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:46:49 GMT',
  connection: 'close' });
 return result; }]];