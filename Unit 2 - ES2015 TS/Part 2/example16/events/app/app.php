<?php
/**
 * Local variables
 * @var \Phalcon\Mvc\Micro $app
 */

/**
 * Add your routes here
 */
$app->get('/', function () {
    echo $this['view']->render('index');
});

/**
 * Not found handler
 */
$app->notFound(function () {
    echo json_encode(["error" => "Service not available"]);
});

$app->get('/events', function () {
    echo json_encode(Event::find()->toArray(), JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK);
});
