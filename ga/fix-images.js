const sitePhotos = [
  "site-images/545974D8-3C29-4AC9-BB40-660DECC2C277.jpeg",
  "site-images/785704A8-5B59-4780-8D0E-D59AA9C83E83 (1).jpeg",
  "site-images/95947984-864B-4554-9078-F3564BB40C8C.jpeg",

  "site-images/PHOTO-2026-09-17-23-05-04.jpg",
  "site-images/PHOTO-2026-09-17-23-05-06.jpg",
  "site-images/PHOTO-2026-09-17-23-05-09.jpg",
  "site-images/photo.jpg",
  "site-images/PHOTO-2026-09-17-23-05-06-05.jpg",
  "site-images/PHOTO-2026-09-17-23-05-07.jpg",
  "site-images/photo3.jpg",
  "site-images/sante.jpg",
  "site-images/sante2.jpg"
];

document.querySelectorAll(".gallery img").forEach((image, index) => {
  if (sitePhotos[index]) {
    image.src = sitePhotos[index];
  }
});