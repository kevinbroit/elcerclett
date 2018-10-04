<?php

class ImageSize {
  public $path;
  public $width;
  public $height;

  public function __construct($p,$w,$h) {
      $this->path=$p;
      $this->width=$w;
      $this->height=$h;
   }
}

class GalleryImage{
  public $dominantColor;
  public $preview_xxs;
  public $preview_xs;
  public $preview_s;
  public $preview_m;
  public $preview_l;
  public $preview_xl;
  public $raw;
}

$api_key = '3204bc8768cfd802ecec92c993a53649';
$user_id='156850972@N06';
$photoset_id='72157701854533365';
$extras='url_t,url_s,url_m,url_l';

$url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
$url.= '&api_key='.$api_key;
$url.= '&user_id='.$user_id;
$url.= '&photoset_id='.$photoset_id;
$url.= '&extras='.$extras;
$url.= '&format=json';
$url.= '&nojsoncallback=1';

$response = json_decode(file_get_contents($url));
$photo_array = $response->photoset->photo;
$photos = array();

foreach($photo_array as $single_photo){
  $photo = new GalleryImage();
  $photo->dominantColor = '#000000';
  $photo->preview_xxs = new ImageSize($single_photo->url_s,$single_photo->width_s,$single_photo->height_s);
  $photo->preview_xs = new ImageSize($single_photo->url_s,$single_photo->width_s,$single_photo->height_s);
  $photo->preview_s = new ImageSize($single_photo->url_m,$single_photo->width_m,$single_photo->height_m);
  $photo->preview_m = new ImageSize($single_photo->url_l,$single_photo->width_l,$single_photo->height_l);
  $photo->preview_l = new ImageSize($single_photo->url_l,$single_photo->width_l,$single_photo->height_l);
  $photo->preview_xl = new ImageSize($single_photo->url_l,$single_photo->width_l,$single_photo->height_l);
  $photo->raw = new ImageSize($single_photo->url_l,$single_photo->width_l,$single_photo->height_l);
  array_push($photos, $photo);
}

file_put_contents('gallery.json',json_encode($photos));

header('Content-type: application/json');

?>
