<?php
include 'Classes/PHPExcel/IOFactory.php';
$inputFileName = 'ajax/file_example_XLS_5000.xls';

$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);

$sheet = $objPHPExcel->getSheet(0);
$datas = [];

foreach($sheet->getRowIterator() as $row) {
    $tempoData = [];
    foreach($row->getCellIterator() as $cell){
        $tempoData[] = (string) $cell->getValue();
    }
    array_shift($tempoData);
    $datas[] = $tempoData;
}
array_shift($datas);
header('Content-Type: application/json');
$response = new stdClass();
$response->data = $datas;
echo json_encode($response);