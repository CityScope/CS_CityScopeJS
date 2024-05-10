import CityIOlist from "./CityIOlist";
import SearchTablesList from "./SearchTablesList";
import { useState } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import CityIOdeckGLmap from "./CityIOdeckGLmap/index";
import { TypeAnimation } from 'react-type-animation';

const text_animation_sequence = [
  'Here we improve cities',
  1000,
  'Here we improve Andorra',
  1000,
  'Here we improve Concepcion',
  1000,
  'Here we improve Guadalajara',
  1000,
  'Here we improve Saigon',
  1000,
  'Here we improve Shanghai',
  1000,
]

//TODO: send MediaLab and CityScience logos to files
export default function CityIOviewer() {
  // get the list of tables from CityIOlist component and pass it to SearchTablesList component
  const [tablesList, getTablesList] = useState([]);

  return (
    <>

      <Box sx={{ width: "100%", padding: 5, height: "100%", pointerEvents:"none" }}>
        <CityIOlist getTablesList={getTablesList} />

        <Grid container spacing={1}>
          <Grid item xs={12} lg={11} zIndex={10} sx={{ width: "100%", margin: 'auto' }}>
            <Grid container spacing={2} >
              <Grid item xs={'auto'} sx={{pointerEvents: 'none'}}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150" height="82" viewBox="0 0 150 82"  >
                  <path fill="#FFFFFF " d="M69.283,80.663V46.521H35.141V12.381H1V1h45.522v34.141h34.141v45.521H69.283z M1.005,35.141v45.521h45.516V69.282H12.38 V35.141H1.005z M92.05,45.888h3.418v-6.02c0-0.642,0.152-1.167,0.452-1.573c0.3-0.405,0.717-0.61,1.249-0.61 c0.516,0,0.898,0.159,1.142,0.473c0.244,0.314,0.366,0.766,0.366,1.353v6.377h3.42v-6.02c0-0.642,0.147-1.167,0.441-1.573 c0.294-0.405,0.714-0.61,1.259-0.61c0.519,0,0.897,0.159,1.142,0.473c0.247,0.314,0.368,0.766,0.368,1.353v6.377h3.421v-6.984 c0-0.604-0.078-1.155-0.231-1.658c-0.156-0.504-0.381-0.933-0.683-1.291c-0.3-0.355-0.682-0.631-1.142-0.828 c-0.462-0.196-0.993-0.293-1.594-0.293c-0.7,0-1.332,0.151-1.898,0.452c-0.568,0.301-1.061,0.778-1.478,1.436h-0.044 c-0.279-0.586-0.674-1.048-1.183-1.384c-0.512-0.336-1.124-0.504-1.836-0.504c-0.784,0-1.439,0.168-1.962,0.504 c-0.524,0.336-0.954,0.783-1.291,1.343h-0.062v-1.532H92.05V45.888z M110.236,33.66h3.419V30.89h-3.419V33.66z M110.236,45.888 h3.419V35.147h-3.419V45.888z M120.755,45.962c0.313-0.034,0.548-0.074,0.702-0.117V43.35c-0.068,0-0.174,0.005-0.314,0.011 c-0.137,0.007-0.285,0.011-0.44,0.011c-0.365,0-0.656-0.072-0.871-0.211c-0.218-0.14-0.325-0.422-0.325-0.839v-5.034h1.95v-2.14 h-1.95v-3.398h-3.335v3.398h-1.425v2.14h1.425v5.769c0,0.572,0.084,1.052,0.253,1.436c0.167,0.385,0.403,0.688,0.713,0.912 c0.307,0.223,0.667,0.382,1.08,0.472c0.413,0.092,0.871,0.135,1.374,0.135C120.052,46.012,120.442,45.997,120.755,45.962z  M92.05,62.17h3.418v-6.02c0-0.644,0.152-1.168,0.452-1.574c0.3-0.407,0.717-0.61,1.249-0.61c0.516,0,0.898,0.159,1.142,0.473 c0.244,0.314,0.366,0.766,0.366,1.352v6.379h3.42v-6.02c0-0.644,0.147-1.168,0.441-1.574c0.294-0.407,0.714-0.61,1.259-0.61 c0.519,0,0.897,0.159,1.142,0.473c0.247,0.314,0.368,0.766,0.368,1.352v6.379h3.421v-6.987c0-0.601-0.078-1.154-0.231-1.657 c-0.156-0.503-0.381-0.931-0.683-1.289c-0.3-0.355-0.682-0.634-1.142-0.828c-0.462-0.194-0.993-0.296-1.594-0.296 c-0.7,0-1.332,0.154-1.898,0.454c-0.568,0.299-1.061,0.78-1.478,1.437h-0.044c-0.279-0.588-0.674-1.048-1.183-1.386 c-0.512-0.334-1.124-0.505-1.836-0.505c-0.784,0-1.439,0.171-1.962,0.505c-0.524,0.338-0.954,0.784-1.291,1.345h-0.062V51.43H92.05 V62.17z M117.265,62.231c0.551-0.167,1.052-0.409,1.5-0.733c0.475-0.321,0.867-0.702,1.173-1.143c0.308-0.441,0.52-0.905,0.63-1.392 h-3.336c-0.153,0.334-0.377,0.597-0.671,0.786c-0.295,0.185-0.663,0.281-1.111,0.281c-0.715,0-1.265-0.208-1.659-0.626 c-0.391-0.42-0.643-0.995-0.754-1.723h7.719c0.015-1.089-0.135-2.084-0.451-2.988c-0.314-0.902-0.795-1.646-1.437-2.233 c-0.462-0.421-0.997-0.749-1.604-0.986c-0.609-0.239-1.297-0.36-2.067-0.36c-0.824,0-1.571,0.146-2.243,0.434 c-0.672,0.285-1.254,0.685-1.742,1.195c-0.488,0.51-0.866,1.113-1.133,1.803c-0.266,0.694-0.398,1.438-0.398,2.234 c0,0.811,0.132,1.568,0.398,2.265c0.267,0.703,0.645,1.304,1.133,1.818c0.488,0.507,1.091,0.907,1.803,1.192 c0.713,0.287,1.511,0.43,2.392,0.43C116.092,62.482,116.712,62.401,117.265,62.231z M113.058,55.645 c0.112-0.644,0.342-1.154,0.693-1.532c0.351-0.377,0.853-0.566,1.51-0.566c0.559,0,1.02,0.189,1.384,0.566 c0.365,0.377,0.58,0.888,0.649,1.532H113.058z M128.19,62.033c0.538-0.314,0.967-0.75,1.289-1.313h0.043v1.45h3.272v-15h-3.418 v5.474h-0.063c-0.323-0.447-0.716-0.814-1.176-1.099c-0.463-0.287-1.073-0.434-1.824-0.434c-0.702,0-1.338,0.142-1.911,0.422 c-0.575,0.28-1.065,0.669-1.477,1.166c-0.415,0.496-0.736,1.094-0.967,1.792c-0.229,0.701-0.346,1.47-0.346,2.306 c0,0.897,0.117,1.698,0.346,2.405c0.231,0.705,0.558,1.302,0.978,1.792c0.418,0.491,0.913,0.864,1.488,1.123 c0.574,0.258,1.2,0.388,1.889,0.388C127.025,62.504,127.653,62.346,128.19,62.033z M125.63,58.982 c-0.368-0.546-0.553-1.288-0.553-2.226c0-0.906,0.187-1.646,0.566-2.212c0.377-0.567,0.908-0.849,1.593-0.849 c0.378,0,0.703,0.077,0.977,0.23c0.273,0.155,0.503,0.37,0.692,0.64c0.188,0.272,0.327,0.602,0.42,0.985 c0.089,0.386,0.135,0.801,0.135,1.247c0,0.882-0.202,1.604-0.597,2.165c-0.4,0.557-0.954,0.838-1.668,0.838 C126.523,59.799,126.002,59.526,125.63,58.982z M134.171,49.939h3.419v-2.768h-3.419V49.939z M134.171,62.17h3.419V51.43h-3.419 V62.17z M144.375,62.045c0.497-0.268,0.906-0.624,1.227-1.073h0.044c0.042,0.282,0.09,0.523,0.146,0.726 c0.054,0.201,0.128,0.359,0.208,0.472h3.315v-0.147c-0.154-0.098-0.255-0.271-0.303-0.516c-0.05-0.244-0.074-0.583-0.074-1.017 V55.08c0-0.671-0.112-1.265-0.337-1.784c-0.224-0.516-0.563-0.944-1.027-1.279c-0.389-0.295-0.87-0.513-1.427-0.662 c-0.561-0.146-1.245-0.22-2.054-0.22c-0.811,0-1.518,0.098-2.118,0.295c-0.604,0.194-1.103,0.459-1.501,0.796 c-0.398,0.334-0.701,0.73-0.912,1.176c-0.21,0.447-0.321,0.922-0.336,1.426h3.146c0.056-0.45,0.224-0.79,0.504-1.029 c0.279-0.237,0.692-0.357,1.237-0.357c0.518,0,0.891,0.105,1.123,0.316c0.229,0.208,0.345,0.49,0.345,0.84 c0,0.362-0.201,0.622-0.608,0.774c-0.405,0.154-1.114,0.296-2.118,0.419c-0.56,0.072-1.089,0.176-1.586,0.317 c-0.497,0.139-0.934,0.338-1.311,0.598c-0.378,0.258-0.673,0.587-0.892,0.984c-0.216,0.4-0.323,0.893-0.323,1.479 c0,0.533,0.09,1.001,0.271,1.406c0.183,0.405,0.434,0.75,0.757,1.026c0.321,0.28,0.708,0.491,1.164,0.629 c0.452,0.142,0.945,0.212,1.479,0.212C143.223,62.442,143.879,62.309,144.375,62.045z M142.457,59.986 c-0.283-0.181-0.419-0.49-0.419-0.924c0-0.403,0.145-0.707,0.442-0.911c0.292-0.202,0.765-0.379,1.424-0.537 c0.349-0.081,0.675-0.169,0.974-0.259c0.301-0.092,0.561-0.193,0.788-0.305v1.279c0,0.588-0.201,1.057-0.6,1.406 c-0.396,0.348-0.92,0.525-1.56,0.525C143.084,60.261,142.736,60.17,142.457,59.986z M92.05,80.664h3.46V65.665h-3.46V80.664z  M102.318,80.537c0.497-0.264,0.904-0.62,1.226-1.069h0.043c0.041,0.28,0.091,0.52,0.146,0.725c0.056,0.202,0.127,0.36,0.211,0.471 h3.314v-0.146c-0.154-0.099-0.257-0.269-0.304-0.514c-0.049-0.245-0.074-0.583-0.074-1.018v-5.41c0-0.671-0.112-1.266-0.337-1.784 c-0.222-0.518-0.566-0.945-1.027-1.282c-0.391-0.292-0.867-0.511-1.425-0.659c-0.56-0.145-1.244-0.221-2.056-0.221 c-0.811,0-1.518,0.097-2.119,0.295c-0.601,0.193-1.102,0.459-1.5,0.796c-0.398,0.334-0.702,0.726-0.914,1.174 c-0.209,0.45-0.32,0.924-0.333,1.427h3.147c0.056-0.449,0.222-0.792,0.502-1.028c0.28-0.238,0.692-0.357,1.238-0.357 c0.516,0,0.891,0.105,1.121,0.314c0.231,0.21,0.349,0.488,0.349,0.839c0,0.364-0.205,0.623-0.61,0.776 c-0.405,0.154-1.112,0.293-2.119,0.42c-0.559,0.068-1.086,0.174-1.583,0.314c-0.496,0.14-0.932,0.339-1.311,0.597 c-0.377,0.258-0.676,0.587-0.892,0.987c-0.216,0.398-0.326,0.892-0.326,1.478c0,0.531,0.091,1.001,0.274,1.405 c0.183,0.405,0.432,0.75,0.755,1.028c0.322,0.28,0.709,0.49,1.163,0.631c0.456,0.138,0.949,0.209,1.479,0.209 C101.169,80.937,101.821,80.804,102.318,80.537z M100.4,78.483c-0.281-0.182-0.421-0.489-0.421-0.924 c0-0.406,0.147-0.708,0.441-0.912c0.293-0.201,0.769-0.381,1.426-0.533c0.348-0.084,0.675-0.171,0.976-0.263 c0.301-0.091,0.563-0.192,0.787-0.303v1.278c0,0.588-0.201,1.056-0.598,1.406c-0.4,0.35-0.921,0.525-1.563,0.525 C101.028,78.756,100.678,78.665,100.4,78.483z M116.866,80.612c0.567-0.258,1.049-0.634,1.447-1.123 c0.398-0.488,0.706-1.087,0.924-1.795c0.217-0.705,0.324-1.505,0.324-2.402c0-0.809-0.107-1.56-0.324-2.255 c-0.218-0.69-0.525-1.292-0.924-1.801c-0.398-0.509-0.88-0.909-1.447-1.196c-0.567-0.287-1.199-0.432-1.899-0.432 c-0.74,0-1.351,0.14-1.833,0.42c-0.485,0.281-0.893,0.649-1.23,1.113h-0.063v-5.476h-3.419v14.998h3.272V79.3h0.042 c0.336,0.558,0.782,0.982,1.343,1.27c0.559,0.287,1.196,0.43,1.909,0.43C115.674,81,116.298,80.869,116.866,80.612z M112.345,77.464 c-0.406-0.553-0.608-1.275-0.608-2.172c0-0.879,0.185-1.614,0.556-2.201c0.369-0.588,0.933-0.882,1.689-0.882 c0.7,0,1.226,0.282,1.583,0.841c0.357,0.559,0.536,1.299,0.536,2.223c0,0.936-0.179,1.675-0.536,2.214 c-0.358,0.538-0.87,0.807-1.542,0.807C113.31,78.294,112.75,78.019,112.345,77.464z"></path>
                </svg>
                <svg style= {{marginLeft:30 }} width="150" height="82" xmlns="http://www.w3.org/2000/svg" version="1.1" >
                <g>
                  <title>Layer 1</title>
                    <path fill="#FFFFFF " stroke="null" id="svg_1" d="m88.07085,62.9198c-0.73149,0 -1.46297,-0.16385 -2.19446,-0.49156c-0.58519,-0.32771 -1.17038,-0.65541 -1.60927,-1.14698c-0.43889,-0.49156 -0.87778,-1.14698 -1.02408,-1.80239c-0.29259,-0.65541 -0.43889,-1.47468 -0.43889,-2.29395c0,-0.81927 0.1463,-1.63854 0.29259,-2.29395c0.29259,-0.65541 0.58519,-1.31083 1.02408,-1.80239c0.43889,-0.49156 1.02408,-0.98312 1.60927,-1.14698c0.58519,-0.32771 1.31667,-0.49156 2.04816,-0.49156c0.73149,0 1.31667,0.16385 1.75557,0.32771c0.58519,0.16385 1.02408,0.49156 1.46297,0.81927c0.43889,0.32771 0.73149,0.81927 1.02408,1.31083c0.29259,0.49156 0.43889,1.14698 0.43889,1.63854l-3.07224,0c-0.1463,-0.49156 -0.29259,-0.81927 -0.58519,-1.14698c-0.29259,-0.32771 -0.58519,-0.49156 -1.02408,-0.49156c-0.73149,0 -1.17038,0.32771 -1.46297,0.81927c-0.29259,0.65541 -0.43889,1.31083 -0.43889,2.29395c0,0.98312 0.1463,1.80239 0.43889,2.29395c0.29259,0.49156 0.87778,0.81927 1.46297,0.81927c1.02408,0 1.60927,-0.65541 1.75557,-1.96624l2.92594,0c0,0.65541 -0.1463,1.14698 -0.43889,1.80239c-0.29259,0.49156 -0.58519,0.98312 -0.87778,1.47468c-0.43889,0.32771 -0.87778,0.65541 -1.46297,0.98312c-0.29259,0.49156 -1.02408,0.49156 -1.60927,0.49156zm5.55929,-15.72995l3.07224,0l0,2.78551l-3.07224,0l0,-2.78551zm0,4.42405l3.07224,0l0,10.97819l-3.07224,0l0,-10.97819zm8.63153,11.14205c-0.43889,0 -0.87778,0 -1.31667,-0.16385c-0.43889,-0.16385 -0.73149,-0.32771 -1.02408,-0.49156c-0.29259,-0.16385 -0.43889,-0.49156 -0.58519,-0.98312c-0.1463,-0.32771 -0.29259,-0.81927 -0.29259,-1.47468l0,-5.89873l-1.31667,0l0,-2.1301l1.31667,0l0,-3.44093l3.07224,0l0,3.44093l1.75557,0l0,2.1301l-1.75557,0l0,5.24332c0,0.49156 0.1463,0.65541 0.29259,0.81927c0.1463,0.16385 0.43889,0.16385 0.73149,0.16385c0.1463,0 0.29259,0 0.43889,0c0.1463,0 0.29259,0 0.29259,0l0,2.62166c-0.1463,0 -0.29259,0.16385 -0.58519,0.16385c-0.29259,0 -0.58519,0 -1.02408,0zm3.36483,0.81927l1.17038,0c0.43889,0 0.73149,-0.16385 1.02408,-0.32771c0.1463,-0.16385 0.29259,-0.49156 0.29259,-0.81927c0,-0.16385 0,-0.49156 -0.1463,-0.81927c-0.1463,-0.32771 -0.29259,-0.81927 -0.43889,-1.47468l-2.92594,-8.52039l3.36483,0l1.31667,4.75176c0.1463,0.32771 0.1463,0.49156 0.29259,0.81927c0,0.32771 0.1463,0.49156 0.1463,0.81927c0,0.32771 0.1463,0.49156 0.1463,0.81927l0,0c0,-0.32771 0.1463,-0.49156 0.1463,-0.81927c0,-0.16385 0.1463,-0.49156 0.1463,-0.81927c0,-0.32771 0.1463,-0.65541 0.29259,-0.81927l1.31667,-4.75176l3.07224,0l-3.36483,11.14205c-0.1463,0.65541 -0.43889,1.14698 -0.58519,1.63854c-0.29259,0.49156 -0.43889,0.81927 -0.73149,1.14698c-0.29259,0.32771 -0.58519,0.49156 -1.02408,0.65541c-0.43889,0.16385 -0.87778,0.16385 -1.31667,0.16385l-2.04816,0l0,-2.78551l-0.1463,0zm-18.14084,18.35161c-1.46297,0 -2.63335,-0.32771 -3.36483,-0.98312c-0.87778,-0.65541 -1.31667,-1.63854 -1.31667,-2.94937l2.92594,0c0,0.49156 0.29259,0.98312 0.58519,1.14698c0.29259,0.32771 0.73149,0.32771 1.31667,0.32771c0.43889,0 0.87778,-0.16385 1.17038,-0.32771c0.29259,-0.16385 0.43889,-0.49156 0.43889,-0.81927c0,-0.16385 0,-0.49156 -0.1463,-0.65541c-0.1463,-0.16385 -0.29259,-0.32771 -0.58519,-0.32771c-0.29259,-0.16385 -0.43889,-0.16385 -0.73149,-0.16385c-0.29259,0 -0.58519,-0.16385 -0.87778,-0.16385c-0.43889,-0.16385 -0.87778,-0.16385 -1.31667,-0.32771c-0.43889,-0.16385 -0.73149,-0.32771 -1.17038,-0.49156c-0.29259,-0.16385 -0.58519,-0.49156 -0.87778,-0.98312c-0.1463,-0.32771 -0.29259,-0.98312 -0.29259,-1.63854c0,-0.49156 0.1463,-1.14698 0.29259,-1.47468c0.29259,-0.49156 0.58519,-0.81927 0.87778,-1.14698c0.43889,-0.32771 0.87778,-0.49156 1.31667,-0.65541c0.58519,-0.16385 1.02408,-0.16385 1.60927,-0.16385c1.46297,0 2.48705,0.32771 3.21854,0.98312c0.73149,0.65541 1.17038,1.47468 1.17038,2.62166l-2.92594,0c0,-0.49156 -0.29259,-0.81927 -0.43889,-0.98312c-0.29259,-0.16385 -0.58519,-0.32771 -1.02408,-0.32771c-0.43889,0 -0.73149,0 -1.02408,0.32771c-0.29259,0.16385 -0.43889,0.49156 -0.43889,0.81927c0,0.16385 0,0.32771 0.1463,0.49156c0.1463,0.16385 0.29259,0.16385 0.58519,0.32771c0.1463,0 0.43889,0.16385 0.73149,0.16385c0.29259,0 0.58519,0.16385 0.87778,0.16385c0.43889,0.16385 0.87778,0.16385 1.31667,0.32771c0.43889,0.16385 0.87778,0.32771 1.17038,0.49156c0.29259,0.32771 0.73149,0.65541 0.87778,0.98312c0.29259,0.49156 0.29259,0.98312 0.29259,1.63854c0,0.65541 -0.1463,1.14698 -0.29259,1.63854c-0.29259,0.49156 -0.58519,0.81927 -0.87778,1.14698c-0.43889,0.32771 -0.87778,0.49156 -1.46297,0.65541c-0.58519,0.32771 -1.17038,0.32771 -1.75557,0.32771zm10.2408,0c-0.73149,0 -1.46297,-0.16385 -2.19446,-0.49156c-0.58519,-0.32771 -1.17038,-0.65541 -1.60927,-1.14698c-0.43889,-0.49156 -0.87778,-1.14698 -1.02408,-1.80239c-0.29259,-0.65541 -0.43889,-1.47468 -0.43889,-2.29395c0,-0.81927 0.1463,-1.63854 0.29259,-2.29395c0.29259,-0.65541 0.58519,-1.31083 1.02408,-1.80239c0.43889,-0.49156 1.02408,-0.98312 1.60927,-1.14698c0.58519,-0.32771 1.31667,-0.49156 2.04816,-0.49156c0.73149,0 1.31667,0.16385 1.75557,0.32771c0.58519,0.16385 1.02408,0.49156 1.46297,0.81927c0.43889,0.32771 0.73149,0.81927 1.02408,1.31083c0.29259,0.49156 0.43889,1.14698 0.43889,1.63854l-3.07224,0c-0.1463,-0.49156 -0.29259,-0.81927 -0.58519,-1.14698c-0.29259,-0.32771 -0.58519,-0.49156 -1.02408,-0.49156c-0.73149,0 -1.17038,0.32771 -1.46297,0.81927c-0.29259,0.65541 -0.43889,1.31083 -0.43889,2.29395c0,0.98312 0.1463,1.80239 0.43889,2.29395c0.29259,0.49156 0.87778,0.81927 1.46297,0.81927c1.02408,0 1.60927,-0.65541 1.75557,-1.96624l2.92594,0c0,0.65541 -0.1463,1.14698 -0.43889,1.80239c-0.29259,0.49156 -0.58519,0.98312 -0.87778,1.47468c-0.43889,0.32771 -0.87778,0.65541 -1.46297,0.98312c-0.1463,0.32771 -0.87778,0.49156 -1.60927,0.49156zm5.70559,-15.72995l3.07224,0l0,2.78551l-3.07224,0l0,-2.78551zm0,4.42405l3.07224,0l0,10.97819l-3.07224,0l0,-10.97819zm9.50931,11.3059c-0.87778,0 -1.46297,-0.16385 -2.19446,-0.49156c-0.58519,-0.32771 -1.17038,-0.65541 -1.60927,-1.14698c-0.43889,-0.49156 -0.73149,-1.14698 -1.02408,-1.80239c-0.29259,-0.65541 -0.29259,-1.47468 -0.29259,-2.29395c0,-0.81927 0.1463,-1.63854 0.29259,-2.29395s0.58519,-1.31083 1.02408,-1.80239c0.43889,-0.49156 1.02408,-0.98312 1.60927,-1.14698c0.58519,-0.32771 1.31667,-0.49156 2.04816,-0.49156c0.73149,0 1.31667,0.16385 1.90186,0.32771c0.58519,0.16385 1.02408,0.65541 1.46297,0.98312c0.58519,0.65541 1.02408,1.31083 1.31667,2.29395c0.29259,0.98312 0.43889,1.96624 0.43889,3.11322l-7.02226,0c0.1463,0.81927 0.29259,1.31083 0.73149,1.80239c0.29259,0.49156 0.87778,0.65541 1.46297,0.65541c0.43889,0 0.73149,-0.16385 1.02408,-0.32771c0.29259,-0.16385 0.43889,-0.49156 0.58519,-0.81927l3.07224,0c-0.1463,0.49156 -0.29259,0.98312 -0.58519,1.47468c-0.29259,0.49156 -0.58519,0.81927 -1.02408,1.14698c-0.43889,0.32771 -0.87778,0.65541 -1.31667,0.81927c-0.73149,-0.16385 -1.31667,0 -1.90186,0zm1.60927,-7.04571c0,-0.65541 -0.29259,-1.14698 -0.58519,-1.63854c-0.29259,-0.32771 -0.73149,-0.65541 -1.31667,-0.65541c-0.58519,0 -1.02408,0.16385 -1.31667,0.65541c-0.29259,0.32771 -0.58519,0.98312 -0.58519,1.63854l3.80372,0zm4.24262,-4.2602l3.07224,0l0,1.47468l0,0c0.43889,-0.65541 0.73149,-0.98312 1.31667,-1.31083c0.43889,-0.32771 1.02408,-0.49156 1.75557,-0.49156c0.58519,0 1.02408,0.16385 1.46297,0.32771c0.43889,0.16385 0.73149,0.49156 1.02408,0.81927c0.29259,0.32771 0.58519,0.81927 0.73149,1.31083c0.1463,0.49156 0.29259,1.14698 0.29259,1.63854l0,7.20956l-3.07224,0l0,-6.39029c0,-0.65541 -0.1463,-0.98312 -0.43889,-1.47468c-0.29259,-0.32771 -0.58519,-0.49156 -1.17038,-0.49156c-0.58519,0 -0.87778,0.16385 -1.31667,0.65541c-0.29259,0.49156 -0.43889,0.98312 -0.43889,1.63854l0,6.06259l-3.07224,0l0,-10.97819l-0.1463,0zm15.80009,11.3059c-0.73149,0 -1.46297,-0.16385 -2.19446,-0.49156c-0.58519,-0.32771 -1.17038,-0.65541 -1.60927,-1.14698c-0.43889,-0.49156 -0.87778,-1.14698 -1.02408,-1.80239c-0.29259,-0.65541 -0.43889,-1.47468 -0.43889,-2.29395c0,-0.81927 0.1463,-1.63854 0.29259,-2.29395c0.29259,-0.65541 0.58519,-1.31083 1.02408,-1.80239c0.43889,-0.49156 1.02408,-0.98312 1.60927,-1.14698c0.58519,-0.32771 1.31667,-0.49156 2.04816,-0.49156c0.73149,0 1.31667,0.16385 1.75557,0.32771c0.58519,0.16385 1.02408,0.49156 1.46297,0.81927c0.43889,0.32771 0.73149,0.81927 1.02408,1.31083c0.29259,0.49156 0.43889,1.14698 0.43889,1.63854l-3.07224,0c-0.1463,-0.49156 -0.29259,-0.81927 -0.58519,-1.14698c-0.29259,-0.32771 -0.58519,-0.49156 -1.02408,-0.49156c-0.73149,0 -1.17038,0.32771 -1.46297,0.81927c-0.29259,0.65541 -0.43889,1.31083 -0.43889,2.29395c0,0.98312 0.1463,1.80239 0.43889,2.29395c0.29259,0.49156 0.87778,0.81927 1.46297,0.81927c1.02408,0 1.60927,-0.65541 1.75557,-1.96624l2.92594,0c0,0.65541 -0.1463,1.14698 -0.43889,1.80239c-0.29259,0.49156 -0.58519,0.98312 -0.87778,1.47468c-0.43889,0.32771 -0.87778,0.65541 -1.46297,0.98312c-0.29259,0.32771 -1.02408,0.49156 -1.60927,0.49156zm10.38709,0c-0.87778,0 -1.46297,-0.16385 -2.19446,-0.49156c-0.58519,-0.32771 -1.17038,-0.65541 -1.60927,-1.14698c-0.43889,-0.49156 -0.73149,-1.14698 -1.02408,-1.80239c-0.29259,-0.65541 -0.29259,-1.47468 -0.29259,-2.29395c0,-0.81927 0.1463,-1.63854 0.29259,-2.29395s0.58519,-1.31083 1.02408,-1.80239c0.43889,-0.49156 1.02408,-0.98312 1.60927,-1.14698c0.58519,-0.32771 1.31667,-0.49156 2.04816,-0.49156c0.73149,0 1.31667,0.16385 1.90186,0.32771c0.58519,0.16385 1.02408,0.65541 1.46297,0.98312c0.58519,0.65541 1.02408,1.31083 1.31667,2.29395c0.29259,0.98312 0.43889,1.96624 0.43889,3.11322l-7.02226,0c0.1463,0.81927 0.29259,1.31083 0.73149,1.80239c0.29259,0.49156 0.87778,0.65541 1.46297,0.65541c0.43889,0 0.73149,-0.16385 1.02408,-0.32771c0.29259,-0.16385 0.43889,-0.49156 0.58519,-0.81927l3.07224,0c-0.1463,0.49156 -0.29259,0.98312 -0.58519,1.47468c-0.29259,0.49156 -0.58519,0.81927 -1.02408,1.14698c-0.43889,0.32771 -0.87778,0.65541 -1.31667,0.81927c-0.73149,-0.16385 -1.17038,0 -1.90186,0zm1.75557,-7.04571c0,-0.65541 -0.29259,-1.14698 -0.58519,-1.63854c-0.29259,-0.32771 -0.73149,-0.65541 -1.31667,-0.65541c-0.58519,0 -1.02408,0.16385 -1.31667,0.65541c-0.29259,0.32771 -0.58519,0.98312 -0.58519,1.63854l3.80372,0zm-146.73599,6.88185l0,-81.76297m0,0l0,81.59912l31.16128,0l0,-11.63361l-20.77419,0l0,-58.3319l62.46886,0l0,-11.63361l-72.85595,0zm20.77419,23.26722l0,34.90083l41.69467,0l0,11.63361l-20.77419,0l0,11.63361l31.16128,0l0,-34.73698l-41.69467,0l0,-11.63361l41.69467,0l0,-11.63361l-52.08177,0l0,-0.16385z" />
                </g>
                </svg>
              </Grid>
              <Grid item xs={'auto'} >
              <Typography variant="h1" sx={{ marginLeft: 'auto' }}>MIT CityScope</Typography>
              <TypeAnimation
              sequence={text_animation_sequence}
              speed={50}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />

              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12} zIndex={11}  lg={11} sx={{ width: "100%", margin: 'auto' }}>
            <Grid container>
              <Grid item xs={'auto'} sx={{pointerEvents:"all"}}>
                  <SearchTablesList  tablesList={tablesList} /> 
              </Grid>
              <Grid item xs={'auto'}>
                <Typography variant="h3" sx={{ marginTop: 2.5, marginLeft: 2 }}>or</Typography>
              </Grid>
              <Grid item xs={'auto'} sx={{pointerEvents:"all"}}>
                  <Button variant="contained" href="https://cityscope.media.mit.edu/CS_cityscopeJS_grid_maker/" sx={{padding: 2, marginTop: 1, marginLeft: 2}}>Create new project</Button>
              </Grid>
          </Grid>
          </Grid>

        </Grid>
      </Box>

      <CityIOdeckGLmap sx={{marginTop: 20}} cityIOdata={tablesList} />

    </>
  );
}
