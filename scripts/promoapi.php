<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://localhost:1337/api/promociones-imars?populate=%2A',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    ': ',
    'Authorization: Bearer d3573db0ae309c7cae67b5bf8a4577cdee23fe49d7cc7bb865bb463ed04e4ed610fefb0ab5d920c88a4b5c0074a4ad8eeac912786b1109440a1d7d3a5806222dc2a19e5930018d638418d033475cc7e5381d0a26c53f81a04745a0e5c00bf6327afcaadd652ce0ab3250b0f083fe7510b7b209365be7c5793f3e2c958e3ca5e4'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
