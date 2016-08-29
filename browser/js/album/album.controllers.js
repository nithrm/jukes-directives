/* global juke */
'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, theAlbum) {

  $scope.album = theAlbum;

  // $scope.toggle = function (song) {
  //   if (song !== PlayerFactory.getCurrentSong()) {
  //     PlayerFactory.start(song, $scope.album.songs);
  //   } else if ( PlayerFactory.isPlaying() ) {
  //     PlayerFactory.pause();
  //   } else {
  //     PlayerFactory.resume();
  //   }
  // };

  // $scope.getCurrentSong = function () {
  //   return PlayerFactory.getCurrentSong();
  // };

  // $scope.isPlaying = function (song) {
  //   return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  // };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, allAlbums) {

  $scope.albums = allAlbums;

});

juke.directive('albumList', function(PlayerFactory){

return {
  restrict: 'E',
  scope: {
      albums: '='
  },
  templateUrl: '/js/album/templates/albumList.html'

}

})

juke.directive('songList', function(PlayerFactory){

  return {

    restrict: 'E',

    scope: 

      {
        songs: "="
      },


    templateUrl: "/js/album/templates/albumSongs.html" ,
    link: function (scope, element, attributes){


      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };

      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };


    } //end of link




  }//end of return 

})


juke.directive('doubleClick', function(){


  return {

    restrict: 'A',

    scope: 

      {
        doubleClick: "&"
      },

    link: function (scope, element){

        console.log("TEST");

        element.on('dblclick', function(){

               console.log("TEST2");

              scope.doubleClick();

        });

    } //end of link




  }//end of return 

})