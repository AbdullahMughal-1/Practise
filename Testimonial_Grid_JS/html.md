
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding: 40px 20px;
}

.testimonials {
  width: 100%;
  max-width: 1100px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
}

.card {
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.12);
}

.purple {
  background: #7541c8;
  color: white;
  grid-column: span 2;
}

.gray {
  background: #48556a;
  color: white;
}

.tall {
  grid-column: 4;
  grid-row: 1 / 3;
}

.white {
  background: white;
  color: #48505e;
}

.navy {
  background: #19212e;
  color: white;
  grid-column: span 2;
}

/* Arrange the profile image and text */
.profile {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.profile img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.profile h4 {
  font-size: 13px;
}

.profile p {
  font-size: 11px;
  opacity: 0.7;
}

.card h3 {
  font-size: 19px;
  line-height: 1.35;
  margin-bottom: 16px;
}

.review {
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.8;
}
