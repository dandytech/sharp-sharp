import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
   
    /* Grey */
    &, &.light-mode{ //&, makes this default
      --color-grey-0: #fff;
      --color-grey-50: #f9fafb;
      --color-grey-100: #f3f4f6;
      --color-grey-200: #e5e7eb;
      --color-grey-300: #d1d5db;
      --color-grey-400: #9ca3af;
      --color-grey-500: #6b7280;
      --color-grey-600: #4b5563;
      --color-grey-700: #374151;
      --color-grey-800: #1f2937;
      --color-grey-900: #111827;
      
      --color-blue-100: #f2f4f6;
      --color-blue-700: #0369a1;
      --color-green-100: #dcfce7;
      --color-green-700: #15803d;
      --color-yellow-100: #fef9c3;
      --color-yellow-700: #a16207;
      --color-silver-100: #e5e7eb;
      --color-silver-700: #374151;
      --color-indigo-100: #e0e7ff;
      --color-indigo-700: #4338ca;
      
      --color-red-100: #fee2e2;
      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;
      
      --backdrop-color: rgba(255, 255, 255, 0.1);
      
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
    --image-opacity: 100%;
    --text-color: black;
    --navborderleft: none;
   --service-bg: white;
      
    }
      
    /* Dark Mode */
    &.dark-mode{
--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #050318;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
--text-color: white;

--navborderleft: 1px solid #eeebf487;
--service-bg: black;
    }

 /* Indigo */
 --color-brand-50: #eef2ff;
    --color-brand-100: #e4e8f4;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;
  
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  
    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }
  
  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
  
  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-00);
    outline-offset: -1px;
  }
  

  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: 100%;
  

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }  
  .text-style{
    color: var(--color-green-100);
  }

  .bg-style{
    background-color: var(--color-grey-50);
    color: var(--text-color); 
    
  }
  

  .bg-style-table{
   background-color: var(--color-grey-50);
    color:  var(--text-color);
   }

  
  //MUI table 
    .css-bye78u-MuiTableRow-root:hover td{
      background-color: none !important;
      color: black!important;
    }

  .bgsummary{
    background-color: var(--color-blue-100);
    color: var(--text-color);
    border-bottom-color: var(--text-color);
    z-index: 0 !important;
  }

  .navDashboard{
    border-color: white;
   background-color: var(--color-grey-100);
   
  }
  .dashHeader{
   // border-bottom: var(--navborderleft);
    background-color: var(--color-grey-100);
   
  }
  .servicebg{
    background-color: var(--service-bg);
    z-index: 0 !important;
  }

  input:hover,select:hover,textarea:hover{
    background-color:white;
    color: black;
   // border-top-left-radius: 0px;border-bottom-left-radius:0px;
  }

.modalOverlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 100000 !important;
  transition: all 0.5s;
  overflow-y: auto;
}
.modalDiv{
  position: fixed;
  top: 50%;
  left: 50%;
  z-index:1000 !important;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  //padding: 30px 25px 25px 25px;

  transition: all 0.5s;
  color: var(--text-color);
}



@media screen and (max-width: 1280px) {
  .who {
    display: block;
  }
}

`;

export default GlobalStyles;
