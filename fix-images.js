const sitePhotos = [
  "site-images/545974D8-3C29-4AC9-BB40-660DECC2C277.jpeg",
  "site-images/785704A8-5B59-4780-8D0E-D59AA9C83E83 (1).jpeg",
  "site-images/95947984-864B-4554-9078-F3564BB40C8C.jpeg"
];
document.querySelectorAll(".gallery img").forEach((image, index) => { image.src = sitePhotos[index]; });
