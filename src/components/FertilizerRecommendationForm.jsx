import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { addToSavedData } from '../utils/action';
const imageUrl ="https://img.freepik.com/free-vector/watercolor-nature-background-with-leaves_52683-59449.jpg";
//const image2Url ="https://i.pinimg.com/originals/65/98/d6/6598d69f8d1ed76c768c2828f2239f0d.jpg";


// Sample data for soil types, crops, and recommended fertilizers
const soilTypes = {
    loamy: { nitrogen: 20, phosphorus: 10, potassium: 15 },
    sandy: { nitrogen: 15, phosphorus: 8, potassium: 12 },
    clayey: { nitrogen: 25, phosphorus: 12, potassium: 18 },
    black: { nitrogen: 30, phosphorus: 15, potassium: 20 },
    red: { nitrogen: 22, phosphorus: 11, potassium: 16 },
    arid: { nitrogen: 18, phosphorus: 9, potassium: 14 },
    forest: { nitrogen: 28, phosphorus: 14, potassium: 22 },
    // Add more soil types and their nutrient recommendations
  };

  const crops = {
    tomatoes: { nitrogen: 50, phosphorus: 25, potassium: 30 },
    wheat: { nitrogen: 40, phosphorus: 20, potassium: 25 },
    corn: { nitrogen: 60, phosphorus: 30, potassium: 35 },
    potatoes: { nitrogen: 80, phosphorus: 40, potassium: 50 },
    rice: { nitrogen: 80, phosphorus: 40, potassium: 60 },
    soybeans: { nitrogen: 50, phosphorus: 25, potassium: 35 },
    cotton: { nitrogen: 70, phosphorus: 30, potassium: 40 },
    barley: { nitrogen: 40, phosphorus: 20, potassium: 30 },
    oats: { nitrogen: 50, phosphorus: 25, potassium: 35 },
    peas: { nitrogen: 40, phosphorus: 20, potassium: 30 },
    sunflower: { nitrogen: 40, phosphorus: 20, potassium: 30 },
    carrots: { nitrogen: 50, phosphorus: 25, potassium: 40 },
    onions: { nitrogen: 60, phosphorus: 30, potassium: 40 },
    lettuce: { nitrogen: 70, phosphorus: 35, potassium: 50 },
    cabbage: { nitrogen: 80, phosphorus: 40, potassium: 60 },
    strawberries: { nitrogen: 60, phosphorus: 30, potassium: 40 },
    grapes: { nitrogen: 50, phosphorus: 25, potassium: 30 },
    oranges: { nitrogen: 80, phosphorus: 40, potassium: 50 },
    apples: { nitrogen: 70, phosphorus: 35, potassium: 45 },
    // Add more crops and their nutrient requirements
  };
  

function FertilizerRecommendationForm() {
  const [soilType, setSoilType] = useState('');
  const [cropType, setCropType] = useState('');
  const [area, setArea] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
 const userId = localStorage.getItem("_id");
//   const handleRecommendation = (e) => {
    
//     e.preventDefault();
//     if (!soilTypes[soilType] || !crops[cropType] || isNaN(Number(area))) {
//       setRecommendation("Invalid input. Please provide valid  soil type, crop type, and area.");
//       return;
//     }

//     // Calculate fertilizer recommendations based on user input
//     const soilRecommendation = soilTypes[soilType];
//     const cropRequirement = crops[cropType];

//     // Adjust recommendations based on area (hypothetical example)
//     const areaFactor = 1 + Number(area) / 100;   // Adjust based on your actual calculations

//     const recommendedFertilizer = {
//       nitrogen: soilRecommendation.nitrogen + cropRequirement.nitrogen * areaFactor,
//       phosphorus: soilRecommendation.phosphorus + cropRequirement.phosphorus * areaFactor,
//       potassium: soilRecommendation.potassium + cropRequirement.potassium * areaFactor,
//       // Add other nutrients as needed
//     };
    
//     setRecommendation(recommendedFertilizer);
//   };
    
//   //new logic for recomm

//   const [formData,setFormData]=useState({soilType:"",cropType:"",area:""});
// const [isSubmitted,setIsSubmitted]=useState(false);

// const handleChange=(e)=>{
//   setFormData({...formData,[e.target.name]:e.target.value});
// }

// const handleSubmit=async(e)=>{
  

//   e.preventDefault();
//   try {
//     let data = {...formData,...recommendation,userId}
//     console.log("came here ",data);
//      const result= await addToSavedData(token,data);
//      setFormData({soilType:"",cropType:"",area:""});
//      setIsSubmitted(true);
//      setTimeout(()=>{
//       setIsSubmitted(false);
//      },1500);
//      console.log(result.message);
//   } catch (error) {
//       console.log(error);
//   }
  
// }


const handleRecommendation = () => {
  // Validate user input
  if (!soilTypes[soilType] || !crops[cropType] || isNaN(Number(area))) {
    setError("Invalid input. Please provide valid soil type, crop type, and area.");
    setRecommendation(null);
    return;
  }

  // Calculate fertilizer recommendations based on user input
  const soilRecommendation = soilTypes[soilType];
  const cropRequirement = crops[cropType];

  // Adjust recommendations based on area (hypothetical example)
  const areaFactor = 1 + Number(area) / 100;

  const recommendedFertilizer = {
    nitrogen: soilRecommendation.nitrogen + cropRequirement.nitrogen * areaFactor,
    phosphorus: soilRecommendation.phosphorus + cropRequirement.phosphorus * areaFactor,
    potassium: soilRecommendation.potassium + cropRequirement.potassium * areaFactor,
  };

  setRecommendation(recommendedFertilizer);
  setError(null);
};

const [formData, setFormData] = useState({ soilType: "", cropType: "", area: "" });
const [isSubmitted, setIsSubmitted] = useState(false);

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.soilType.trim() || !formData.cropType.trim() || !formData.area.trim()) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  try {
    const data = { ...formData, ...recommendation, userId };
    const result = await addToSavedData(token, data);
    setFormData({ soilType: "", cropType: "", area: "" });
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1500);

    console.log(result.message);
  } catch (error) {
    console.log(error);
    }
  };

  // new logic end

  return (
    <div className='d-flex align-items-center justify-content-center mt-5'>
    <div  className='recomm' style={{backgroundImage: `url(${imageUrl})`,  backgroundSize: '120% 100%',backgroundRepeat: 'no-repeat' ,height:"auto", width:"850px", borderRadius:"15px" }}>
      <h2 style={{marginLeft:"25%"}}>Fertilizer Recommendation Form</h2>
      <Form onSubmit={handleSubmit}>
      <div  >
        <label style={{marginLeft:"25%",marginTop:"11%"}}><b>Soil Type:</b> </label>
        <input name="soilType" onKeyUp={handleChange} type="text" value={isSubmitted?formData.soilType:null} onChange={(e) => setSoilType(e.target.value)} style={{marginLeft:"25%",marginTop:"3%"}} />
      </div>
      <div>
        <label style={{marginLeft:"25%"}}><b>Crop Type:</b> </label>
        <input name="cropType" onKeyUp={handleChange} type="text" value={isSubmitted?formData.cropType:null} onChange={(e) => setCropType(e.target.value)} style={{marginLeft:"24%",marginTop:"3%"}} />
      </div>
      <div>
        <label style={{marginLeft:"25%"}}><b>Area (in acres): </b></label>
        <input name="area" onKeyUp={handleChange} type="text" value={isSubmitted?formData.area:null} onChange={(e) => setArea(e.target.value)} style={{marginLeft:"21%",marginTop:"3%"}} />
      </div>
      <button onClick={handleRecommendation} style={{marginLeft:"38%",marginTop:"8%",backgroundColor:"rgb(139, 222, 129)"}}>Get Recommendation</button><br></br>

    {/*new button and name field for each input*/}
    <input type='text' name='saveAs' style={{marginLeft:"30%"}} onChange={handleChange} placeholder='Enter text save as'></input>
     <button type="submit" style={{marginLeft:"5%",marginTop:"2%",backgroundColor:"rgb(139, 222, 129)"}}>SAVE</button>


    
      </Form>

      {isSubmitted?<Alert variant='success'>Info Saved</Alert>:null}
      {recommendation &&  !error &&(
        <div className='mt-5'>
        <div style={{ borderRadius:"15px", marginTop:"10%", height:'auto',backgroundImage:`url(${imageUrl})`,backgroundSize: '120% 100%',backgroundRepeat: 'no-repeat'}}>
          <h3 style={{ marginLeft: "25%" }}>Fertilizer Recommendation:</h3>
          <table style={{ marginLeft: "25%", marginTop: "5%", border:'3px solid green', width: "50%" }}>
            <thead>
              <tr >
                <th style={{ padding: "18px", textAlign: "center" }}>Nutrient</th>
                <th style={{ padding: "18px", textAlign: "center" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(recommendation).map(([nutrient, amount]) => (
                <tr key={nutrient}>
                  <td style={{ padding: "8px", textAlign: "center" }}><b>{nutrient}</b></td>
                  <td style={{ padding: "8px", textAlign: "center" }}>{amount?.toFixed(2)}</td>
                </tr>
              ))}
              {console.log(recommendation)}
            </tbody>
          </table>
        
         {/* <button onClick={} style={{marginLeft:"38%",marginTop:"8%",backgroundColor:"rgb(139, 222, 129)"}}>Save As</button> */}
        </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default FertilizerRecommendationForm;
