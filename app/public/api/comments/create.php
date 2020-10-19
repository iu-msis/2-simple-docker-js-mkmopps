<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO Comments (commentText)
  VALUES (?)'
);

$stmt->execute([
  $_POST['commentText'],
]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../comments/');
