SELECT *
FROM genres
LIMIT 5;

SELECT Name, Composer
FROM tracks
LIMIT 5;
--
SELECT *
FROM albums
WHERE Title LIKE 'Led Zeppelin%';
--
SELECT tracks.Name, tracks.Composer, genres.Name
FROM tracks
         JOIN genres ON tracks.GenreId = genres.GenreId
LIMIT 5;

SELECT tracks.Name, tracks.Composer, media_types.Name
FROM tracks
         JOIN media_types ON tracks.MediaTypeId = media_types.MediaTypeId
LIMIT 5;

SELECT t.Name, t.Composer, g.Name
FROM tracks t
         JOIN genres g
              ON t.GenreId = g.GenreId
LIMIT 5;

SELECT t.Name as Name, t.Composer as Composer, g.Name as Genre
FROM tracks t
         JOIN genres g
              ON t.GenreId = g.GenreId
LIMIT 5;

SELECT t.Name, t.Composer, g.Name, mt.Name
FROM tracks t
         JOIN genres g ON t.GenreId = g.GenreId
         JOIN media_types mt on t.MediaTypeId = mt.MediaTypeId
LIMIT 5;

SELECT t.Name as Name, t.Composer as Composer, g.Name as Genre, mt.Name as MediaType
from tracks t
         JOIN genres g ON t.GenreId = g.GenreId
         JOIN media_types mt on t.MediaTypeId = mt.MediaTypeId
LIMIT 5;

SELECT t.Name as Name, t.Composer as Composer, g.Name as Genre, mt.Name as MediaType, a.Title as Album
from tracks t
         JOIN genres g ON t.GenreId = g.GenreId
         JOIN media_types mt ON t.MediaTypeId = mt.MediaTypeId
         JOIN albums a ON t.AlbumId = a.AlbumId
LIMIT 5;

SELECT t.Name as Name, t.Composer as Composer, g.Name as Genre, mt.Name as MediaType, a.Title as Album
from tracks t
         JOIN genres g ON t.GenreId = g.GenreId
         JOIN media_types mt ON t.MediaTypeId = mt.MediaTypeId
         JOIN albums a ON t.AlbumId = a.AlbumId
WHERE t.Composer = 'Queen'
LIMIT 20;