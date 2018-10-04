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
$extras='url_t,url_s,url_m,url_l,description'; //url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l
$albums_id = array('72157701654772894','72157700321139941','72157673968453278','72157701889611145', '72157700321213521');
$teams = array();

foreach( $albums_id as $photoset_id )
{
  $url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
  $url.= '&api_key='.$api_key;
  $url.= '&user_id='.$user_id;
  $url.= '&photoset_id='.$photoset_id;
  $url.= '&extras='.$extras;
  $url.= '&format=json';
  $url.= '&nojsoncallback=1';
  $response = json_decode(file_get_contents($url));

  $photos = $response->photoset->photo;
  $team = new Team();
  $team->name =$response->photoset->title;
  $team->players =  array();

  foreach($photos as $photo){
    $player = new Player();
    $player->name = $photo->title;
    $player->desc = $photo->description->content;
    $player->thumbnail = $photo->url_t;
    $player->image_small = $photo->url_s;
    $player->image_medium = $photo->url_m;
    $player->image_large = $photo->url_l;

    array_push($team->players, $player);
  }
  array_push($teams, $team);
}

file_put_contents('teams.json',json_encode($teams));
header('Content-type: application/json');
?>
