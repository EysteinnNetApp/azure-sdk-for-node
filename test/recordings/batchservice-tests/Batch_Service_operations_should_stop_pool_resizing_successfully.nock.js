// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .post('/pools/nodesdktestpool2/stopresize?api-version=2018-12-01.8.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:44:47 GMT',
  etag: '0x8D65F98B9A168BC',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '98e2c7e5-c98c-48bc-9b4f-44fc5374b46a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool2/stopresize',
  date: 'Tue, 11 Dec 2018 18:44:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .post('/pools/nodesdktestpool2/stopresize?api-version=2018-12-01.8.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:44:47 GMT',
  etag: '0x8D65F98B9A168BC',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '98e2c7e5-c98c-48bc-9b4f-44fc5374b46a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool2/stopresize',
  date: 'Tue, 11 Dec 2018 18:44:47 GMT',
  connection: 'close' });
 return result; }]];