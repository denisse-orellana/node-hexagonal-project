-- Seeding the mysql database with dummy data

INSERT INTO patient_user_entity 
  VALUES 
  (
    '09da2bdd-8213-4b34-9f8d-e3ff6563a1ba', 
    'Don', 
    'Buyon', 
    '987654321', 
    'denisse@mail.com', 
    '$2a$08$0eGk6yqv8uxh96ZXBWedaeRDtd7qERzfokBTqmPqwj1EbsdRStGIS', 
    'd75efa6c-ad90-42ed-b3d6-615c2d45aaa9', 
    '1' 
  ),
  (
    '1a11fa67-89b2-4ad8-a904-0b90dc49bed5',
    'Rose',
    'Mary',
    '561234567',
    'rosemary@yopmail.com',
    '$2a$08$CD9B3kJorwDaxrUt/FbwEuqC56/PnewJxvL/jnJ/wNDPLLpIsj3E2',
    '3a74c3d3-985b-488e-88c7-8678b5105a47',
    '1'
  ),
  (
    '941597a3-bbc5-4eeb-8e0a-072d766727e7',
    'Bamboo',
    'Hopkins',
    '999888777',
    'blue@yopmail.com',
    '$2a$08$6s.UwnwkJFcLhodkcm6VUOjYPP7j1n8SOpiOnT/4c5cS4LAPC5dAm',
    '5d9a4c55-1e67-4c98-8f9c-2db3b62fefe9',
    '1'
  ),
  (
    'c85ac9f4-8cc2-494b-8d92-4e431678c38f',
    'Blue',
    'Hopkins',
    '956888111222',
    'blue@yopmail.com',
    '$2a$08$jtvyVbcRYwRqA8dmZQ2sFeBXJV/z5FSzdY6zal2c74moQ9YYxeGxC',
    'b1cc47ea-9055-4113-99f4-4dccf6c881a5',
    '1'
  ),
  (
    'b1f6c4bb-72f0-473f-88ae-686b44efb927',
    'John',
    'Dawson',
    '555888999',
    'johndawson@yopmail.com',
    '$2a$08$Hxe.YYnenfw6r1/cPFjX3.yQj6YG2JuUrGwhjo5UNnSrOEhrkGoq6',
    '1b880683-8aae-4cf4-a2ca-7f9e38e6ee65',
    '1'
  );

select '******** SEEDING THE DATABASE ********' AS '******** COMPLETED ********';
