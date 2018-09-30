<?php

class Player{
  public $name;
  public $desc;
  public $thumbnail;
  public $image_small;
  public $image_medium;
  public $image_large;
}

class Team{
  public $players;
  public $name;
}

$api_key = '3204bc8768cfd802ecec92c993a53649';
$user_id='156850972@N06';
$photoset_id= $_GET['photoset_id']; // TODO GET ARRAY
$extras='url_t,url_s,url_m,url_l,description'; //url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l

$url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
$url.= '&api_key='.$api_key;
$url.= '&user_id='.$user_id;
$url.= '&photoset_id='.$photoset_id;
$url.= '&extras='.$extras;
$url.= '&format=json';
$url.= '&nojsoncallback=1';

$response = json_decode(file_get_contents($url));
$team = $response->photoset->photo;
$photos =   array();

echo json_encode($response);

$team = new Team();
$team->name =$response->photoset->name;
$team->players =  array();

foreach($team as $player){
  $player = new Player();
  $player->name = $player->title;
  $player->desc = $player->description;
  $player->thumbnail = $player->url_t;
  $player->image_small = $player->url_s;
  $player->image_medium = $player->url_m;
  $player->image_large = $player->url_l;
  array_push($team->players, $player);
}

file_put_contents('team_'.$photoset_id.'.json',json_encode($team));

header('Content-type: application/json');

?>
