import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fff;
    --lightgrey: #eee;
    --medgrey: #353535;
    --darkgrey: #1c1c1c;
    --orangered: orangered;
    --fontXL: 2.5rem;
    --fontL: 1.5rem;
    --fontM: 1.2rem;
    --fontS: 1rem;
    --fontXS: 0.8rem;
    --clr-primary-1: #4d1500;
    --clr-primary-2: #802300;
    --clr-primary-3: #b33000;
    --clr-primary-4: #e63e00;
    --clr-primary-5: orangered;
    --clr-primary-6: #ff5819;
    --clr-primary-7: #ff7d4d;
    --clr-primary-8: #ffa280;
    --clr-primary-9: #ffc7b3;
    --clr-primary-10: #ffece6;
    --transition: all 0.3s linear;
    --transition-slow: all 0.5s linear;

    --spacing: 0.1rem;
    --radius: 5px;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    --dark-shadow-2: 0 5px 15px rgba(255, 255, 255, 0.5);

    --max-width: 1280px;
    --margin-form-ele: 20px;
    
  }
  *{
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
  }
  a{
  text-decoration: none;

  }
  ul {
    list-style-type: none;
  }
  body{
    
    h1{
      font-size: 2rem;
      font-weight: 600;
      color: var(--darkgrey);
    }
    h3{
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--darkgrey);

    }
    h4{
      font-size: 1rem;
      font-weight: 600;
      color: var(--medgrey);

    }
    p{
      font-size: 1rem;
      color: var(--darkgrey);

    }

  }
`;
