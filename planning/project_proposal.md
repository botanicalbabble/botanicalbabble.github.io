# Botanical Babble

a place to look at and comment on plants!

# Division of Labor:

- Gabriel: Frontend
- Matt: Backend
- Marj: Frontend (Wireframes)
- Tasha: Backend
- JT: Backend and React Forms, Master of Scrums

## User Stories

- As a user, I want to see a welcome screen.
- As a user, I want the welcome screen to include a search bar, a new plant button, a random plant button, plant chat button and an all plants button.
- Once on the plant details screen, we should be able to comment(update), or remove(delete)

## MVP

- Mobile First design on front end.
- Homepage with welcome and all plants.
- NavBar New plant button(Modal)
- When you click new plant button, require certain details, but not all, and add to db.
- When you're looking at plant details, be able to update or detele them.
- Associating comments with plants

## Strech Goals

- Animated SVG image for the homepage.
- New Nav Bar Elements: Random Plant, Plant General Discussion, Favorite Plants, Search Bar, About Us as Coders.
- Success/Failure messages upon submission of new plant or updates of existing plant.
- When you search for a plant or click random plant, display plant details
- add a photo URL as a string(update).
- add a photo as a file upload
- Favorite your plants
- Share buttons
- Plant talk: mostly just a forum style page, contains a submission form, and displays the form submissions, as comments, newest to oldest.

## Gold

## Silver

## Bronze

## OG Component Heirachy

![image](https://user-images.githubusercontent.com/68978118/99417393-1a483c80-28b7-11eb-8083-abe17c91e554.png)

## Wireframes

> ![Botanical Babble(fav)](https://media.git.generalassemb.ly/user/30880/files/f246c500-2760-11eb-9f71-8d7a904823c9) >![Botanical Babble(form)](https://media.git.generalassemb.ly/user/30880/files/f2df5b80-2760-11eb-881c-a489226032c1) >![Botanical Babble (forum)](https://media.git.generalassemb.ly/user/30880/files/f377f200-2760-11eb-894d-9042971a1582) >![Botanical Babble (plant profile)](https://media.git.generalassemb.ly/user/30880/files/f4a91f00-2760-11eb-9789-26d5e4386429) >![Botanical Babble (home)](https://media.git.generalassemb.ly/user/30880/files/f541b580-2760-11eb-86ec-b0171e4d972f)

# Models

- Plant Talk(
  name: String
  comment: String
  )
- Plants {
  id: Number
  common_name: String
  slug: String
  sciName: String
  image_url: String
  image: String
  care_tips: String
  }

# Api for dummy data:

[Plants](https://trefle.io/)

# Standups

- Typically, 11:00 AM CST.
- what was worked on the day before
- what will be worked on that day
- any obstacles that could jeopardize project deadlines
- If token is needed, discuss during SUP.
