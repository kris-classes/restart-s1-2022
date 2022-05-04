INSERT INTO artists (Name)
VALUES ('Cold Play');

SELECT *
FROM artists
WHERE Name LIKE 'Cold Play';

INSERT INTO albums (Title, ArtistId)
VALUES ('Coldplay: Music of the Spheres', 277);

SELECT *
FROM albums
WHERE Title LIKE 'Coldplay%';

INSERT INTO tracks (Name, AlbumId, MediaTypeId, GenreId, Composer, Milliseconds, Bytes, UnitPrice)
VALUES ('My Universe', 349, 2, 1, 'Cold Play', 3600000, 5510424, 9.99);

SELECT *
FROM tracks
WHERE Name LIKE 'My Universe';

DELETE
FROM tracks
WHERE Name LIKE 'My Universe';

DELETE
FROM albums
WHERE Title LIKE 'Coldplay%';

DELETE
FROM artists
WHERE Name LIKE 'Cold Play%';